const User=require('../app/auth/models/User')
const sequelize = require('../config/db')

module.exports={
    up:async(queryInterface,Sequelize)=>{
        await User.bulkCreate([
            {email:'admin@mail.ru', roleId: 1},
        ])
    },
}

down:async(queryInterface,Sequelize)=>{
    await queryInterface.bulkDelete('Users',null,{})
}