const express = require ('express')
const clientSchema = require('../models/client_model')
const router = express.Router()
/* crear la ruta paa creacion de usuarios */
router.post('/clients', (req, res)=>{
    const client = clientSchema(req.body)
    client.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

/* listar usuarios existentes */

router.get('/clients', (req, res)=>{
    clientSchema.find()
            .then((data)=>res.json(data))
            .catch((error)=>res.json({menssage:error}))

})

/* consulta de determinado registro
   Mostrar info de usuario específico */

router.get('/clients/:id',(req, res)=>{
    const {id}= req.params
    clientSchema.findById(id)
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})

/* eliminar usuarion especpifico */
router.delete('/clients/:id',(req, res)=>{
    const {id}= req.params
    clientSchema
                .remove({_id:id})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})

/* editar un recurso específico */
    router.put('/clients/:id', (req, res) => {
        const { id } = req.params
        
        const {name, last_name, address:{city, code_zip, lat, length}, accont_bank} = req.body
        clientSchema
            .updateOne({ _id: id }, {$set: {name, last_name, address: {city, code_zip, lat, length}, accont_bank}})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    })
    
module.exports = route