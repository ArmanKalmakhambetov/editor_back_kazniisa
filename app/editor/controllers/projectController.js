const Project = require('../../auth/models/Project');
const UserProject = require('../../auth/models/User_projects');
const { Op } = require("sequelize");

async function getAllUserProjects(req, res) {
    try {
        
        const userId = req.user.id;
        const userProjects = await UserProject.findAll({
            where: userId,
            include: [Project]
        })
        console.log(userProjects)
        const projects = userProjects.map(project => project.Project);
        console.log(projects)
        return res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createProject(req, res) {
    try {
        const { project_name } = req.body;
        
        const userId = req.user.id; 

        // Создаем новый проект
        const newProject = await Project.create({
            project_name
        });

        // Создаем запись в таблице user_projects для установки связи между пользователем и проектом
        await UserProject.create({
            user_id: userId,
            project_id: newProject.id
        });

        return res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteProject(req, res) {
    try {
        const projectId = req.params.id;

        // Удаляем проект по идентификатору
        const deletedProjectCount = await Project.destroy({
            where: {
                id: projectId
            }
        });

        // Проверяем, был ли удален проект
        if (deletedProjectCount === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        // Удаляем связи с пользователями, которые имели доступ к этому проекту
        await UserProject.destroy({
            where: {
                project_id: projectId
            }
        });

        return res.status(204).send(); // Успешный ответ без содержимого
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateProject(req, res) {
    try {
        const projectId = req.params.id;

        // Обновляем проект по идентификатору
        const [updatedRowCount] = await Project.update({
            project_name: req.body.project_name
        }, {
            where: {
                id: projectId
            }
        });

        // Проверяем, был ли обновлен проект
        if (updatedRowCount === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        // Получаем обновленный проект
        const updatedProject = await Project.findByPk(projectId);

        return res.status(200).json(updatedProject);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getProjectById(req, res) {
    try {
        const projectId = req.params.id;
        console.log(projectId)
        const project = await Project.findAll({
            where: {
                id: projectId
            },
        })
        return res.status(200).json(project);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createProject,
    getAllUserProjects,
    deleteProject,
    updateProject,
    getProjectById
};
