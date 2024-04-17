const Project=require('../app/auth/models/Project')
const sequelize = require('../config/db')

module.exports={
    up:async(queryInterface,Sequelize)=>{
        await Project.bulkCreate([
            {project_name:'admin templates'},
        ])
    },
}

down:async(queryInterface,Sequelize)=>{
    await queryInterface.bulkDelete('projects',null,{})
}