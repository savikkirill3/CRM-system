const mongoose = require('mongoose') //для создания моделей
const Schema = mongoose.Schema //схема которая будет описывать модель

const  categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('categories', categorySchema)