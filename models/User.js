const mongoose = require('mongoose') //для создания моделей
const Schema = mongoose.Schema //схема которая будет описывать модель

const  userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)