const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const client_schema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    },
    last_name:{
        type:String,
        require: true
    },
    address:{
        city : {
            type:String,
            require: false
        },
        code_zip:{
            type: Number,
            require: true
        },
        lat:{
            type:Number,
            require: true
        },
        length:{
            type: Number,
            require: true
        }
    },
    accont_bank:{
        type: String,
        require: false
    }
})

//exportar el modelo
module.exports = mongoose.model('client', client_schema)