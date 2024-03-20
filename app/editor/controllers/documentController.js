const ProjectDocuments = require("../../auth/models/Project_documents");
const Document = require("../../auth/models/Document");
const { Op } = require("sequelize");

async function getAllProjectDocuments(req, res) {
    try {
        const projectId = req.params.id;
        
        const projectDocuments = await ProjectDocuments.findAll({
            where: Number(projectId), //обернут в Number так как требуется число а приходит из req.params.id строка
            include: [Document]
        })
        console.log(projectDocuments)
        const documents = projectDocuments.map(document => document.Document);
        
        return res.status(200).json(documents );
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createDocument(req, res) {
    try {
    
        const projectId = req.params.id; 

        
        const newDocument = await Document.create({
            document_name: req.body.document_name,
            document_content: req.body.document_content
        })

        
        await ProjectDocuments.create({
            project_id: projectId,
            document_id: newDocument.id
        });

        return res.status(201).json(newDocument);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getDocumentById(req, res) {
    try {
        const documentId = req.params.id;
        console.log(documentId)
        const document = await Document.findOne({
            where: {
                id: documentId
                
            },
        })
        return res.status(200).json(document);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteDocument(req, res) {
    try {
        const documentId = req.params.id;

        // Удаляем документ по идентификатору
        const deletedDocumentCount = await Document.destroy({
            where: {
                id: documentId
            }
        });

        // Проверяем, был ли удален документ
        if (deletedDocumentCount === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        // Удаляем связи с проектами, в которых использовался этот документ
        await ProjectDocuments.destroy({
            where: {
                document_id: documentId
            }
        });

        return res.status(204).send(); // Успешный ответ без содержимого
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateDocument(req, res) {
    try {
        const documentId = req.params.id;

        // Обновляем документ по идентификатору
        const [updatedRowCount] = await Document.update({
            
            document_content: req.body.document_content
        }, {
            where: {
                id: documentId
            }
        });

        // Проверяем, был ли обновлен документ
        if (updatedRowCount === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        // Получаем обновленный документ
        const updatedDocument = await Document.findByPk(documentId);

        return res.status(200).json(updatedDocument);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllProjectDocuments,
    createDocument,
    getDocumentById,
    updateDocument,
    deleteDocument

}