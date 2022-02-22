const express = require ('express')
const productSchema = require('../models/product_model')
const router = express.Router()
/* crear la ruta paa creacion de usuarios */
router.post('/products', (req, res)=>{
    const product = productSchema(req.body)
    product.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

/* listar usuarios existentes */

router.get('/products', (req, res)=>{
    productSchema.find()
            .then((data)=>res.json(data))
            .catch((error)=>res.json({menssage:error}))

})

/* consulta de determinado registro
   Mostrar info de usuario específico */

router.get('/products/:id',(req, res)=>{
    const {id}= req.params
    productSchema.findById(id)
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})

/* eliminar usuarion especpifico */
router.delete('/products/:id',(req, res)=>{
    const {id}= req.params
    productSchema
                .remove({_id:id})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message:error}))
})

/* editar un recurso específico */
    router.put('/products/:id', (req, res) => {
        const { id } = req.params
        const {name_product, img, price, cant, state} = req.body
        productSchema
            .updateOne({ _id: id }, {$set: {name_product, img, price, cant, state}})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    })
    
module.exports = router

