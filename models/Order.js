const mongoose = require('mongoose') //для создания моделей
const Schema = mongoose.Schema //схема которая будет описывать модель

const  orderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('orders', orderSchema)