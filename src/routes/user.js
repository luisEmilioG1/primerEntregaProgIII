const express = require ('express')
const userSchema = require('../models/user')
const router = express.Router()
/* crear la ruta paa creacion de usuarios */
router.post('/users', (req, res)=>{
    const user = userSchema(req.body)
    user.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

/* listar usuarios existentes */

router.get('/users', (req, res)=>{
    userSchema.find()
            .then((data)=>res.json(data))
            .catch((error)=>res.json({menssage:error}))

})

/* consulta de determinado registro
   Mostrar info de usuario específico */

router.get('/users/:id',(req, res)=>{
    const {id}= req.params
    userSchema.findById(id)
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})

/* eliminar usuarion especpifico */
router.delete('/users/:id',(req, res)=>{
    const {id}= req.params
    userSchema
                .remove({_id:id})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})


/* editar un recurso específico */
router.put('/users/:id',(req, res)=>{
    const {id}= req.params
    const {name, age, email} = req.body
    userSchema
                .updataOme({_id:id},{$set:{name, age, email}})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
    })

module.exports = router