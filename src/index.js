//Instalaremos el framework express para manejar los reques HTTP y establecer el puerto a usar
const express = require('express')
//la librería mongoose nos permite la conección con la BD MongoDB
const mongoose = require('mongoose')
//process.env es una variable global para representar el estado de las variables de ambiente
const port = process.env.PORT || 3000
const execute_app = express()
require('dotenv').config()
const userclient = require("./routes/client_routes")
const products = require("./routes/product_routes")

//conección al puerto 3000
execute_app.listen(port, ()=>console.log('Listening then port', port))

//primera request para acceder desde el navegador http://localhost:3000
execute_app.get('/', (req, res)=> res.send('Programación III'))

//conecccion con la base de datos mongoDB
mongoose
        .connect(process.env.MONGOODB_CONNECTION_STRING)
        .then(()=>console.log('Connect whit mongodb'))
        .catch((error)=>console.error(error))

const userSchemaRoutes = require('./routes/client_routes')
/* Middleware */
execute_app.use(express.json())
/* Crear usuarios: http://localhost:3000/dashboard/user 
   consultar usuario: http://localhost:3000/dashboard/users */
execute_app.use('/api', userclient)
execute_app.use('/api', products)
