
const path = require("path");
const fs = require('fs');
const express=require('express')
const logger=require('morgan') // для логирования кто к нам по какому запросу стучался
const swaggerFile = JSON.parse(fs.readFileSync('./app/swagger-output.json'))
const swaggerUi = require("swagger-ui-express")
const multer=require('multer') // для formdata

const passport =require('passport')
const app=express();
//middleware 1----
cors = require('cors')

app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true })); //сериализация   на уровне экспресса для того чтобы бэк понял пост запрос 
app.use(express.json())

// app.use(express.static(__dirname+'/public'))

app.use(express.static(path.join(__dirname)));


//app.use(upload.any())  парсинг формдаты


// app.get('/',(req,res)=>{
//     res.send('OK!')
// })

// app.post('/api',(req,res)=>{
//     console.log(req.body)
//     res.status(200).send('POST /api works | Success!')
// })
app.use(passport.initialize());
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(require('./app/auth/routes'))
app.use(require('./app/editor/routes/routes'))
// app.use(require('./app/banner/routes'))
// app.use(require('./app/revise/routes'))
// app.use(require('./app/region/routes'))
// app.use(require('./app/skills/routes'))
// app.use(require('./app/employment-type/routes'))
// app.use(require('./app/languages/routes'))
// app.use(require('./app/resume/routes'))
// app.use(require('./app/vacancy/routes'))
// app.use(require('./app/applies/routes'))


app.listen (8000,()=>{
    console.log('Server is listening on port 8000')
})
