const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
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
    email:{
        type:String,
        require: true
    }
})

//exportar el modelo
module.exports = mongoose.model('user', user_schema)