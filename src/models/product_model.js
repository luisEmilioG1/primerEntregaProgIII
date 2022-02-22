const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const product_schema = mongoose.Schema({
    name_product:{
        type:String,
        require: true
    },
    img:{
        type:String,
        require: true
    },
    price:{
        type:Number,
        require: true
    },
    cant:{
        type: Number,
        require: true
    },
    state:{
        type:Boolean,
        require: true
    }
})

//exportar el modelo
module.exports = mongoose.model('product', product_schema)