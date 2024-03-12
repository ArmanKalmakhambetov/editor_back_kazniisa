const express=require('express');
const { getAllUserProjects, createProject, updateProject, deleteProject, getProjectById } = require('../controllers/projectController');
const { getAllProjectDocuments, createDocument, getDocumentById, updateDocument, deleteDocument } = require('../controllers/documentController');
const { getAllUsers, getAuthenticatedUserInfo, updateUserInfo, deleteUser } = require('../controllers/userController');
// const { getAllRoles, createRole } = require('../controllers/roleController');
const passport = require('passport');

const router=express.Router()



// router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee,validateResume, createResume)
// router.post('/api/auth/addfullprofile',passport.authenticate('jwt', {session: false}), addFullProfile)

//USER
router.get('/api/user/allusers', passport.authenticate('jwt', {session: false}), getAllUsers);
router.get('/api/user', passport.authenticate('jwt', {session: false}), getAuthenticatedUserInfo);
router.patch('/api/user', passport.authenticate('jwt', {session: false}), updateUserInfo);
router.delete('/api/user', passport.authenticate('jwt', {session: false}), deleteUser);
// router.post('/api/user', createUser);

//PROJECT 
router.get('/api/user/project/allprojects', passport.authenticate('jwt', {session: false}), getAllUserProjects);
router.get('/api/user/project/:id', passport.authenticate('jwt', {session: false}), getProjectById);
router.post('/api/user/project', passport.authenticate('jwt', {session: false}), createProject);
router.patch('/api/user/project/:id', passport.authenticate('jwt', {session: false}), updateProject);
router.delete('/api/user/project/:id', passport.authenticate('jwt', {session: false}), deleteProject);


//DOCUMENT
router.get('/api/user/project/:id/alldocuments', passport.authenticate('jwt', {session: false}), getAllProjectDocuments);
router.get('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), getDocumentById);
router.post('/api/user/project/:id/createdocument', passport.authenticate('jwt', {session: false}), createDocument);
router.patch('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), updateDocument);
router.delete('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), deleteDocument);


//ROLE
// router.get('/api/user/role/allroles', getAllRoles);
// router.post('/api/user/role', createRole);

// router.get('/api/store/product/:id', getProductById);

// router.get('/api/store/order/:id', getOrderById);
// router.get('/api/store/allorders', getAllOrders);
// router.post('/api/store/createproduct', upload.array('image',5), createProduct);
// router.delete('/api/store/product/:id', deleteProductById);
// router.post('/api/store/product/:id', upload.array('image',5), editProduct);
// router.post('/api/store/createorder', createOrder);
// router.post('/api/store/order/:id/editorder', editOrder);

module.exports = router;