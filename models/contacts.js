const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    birth: {
        type: Date
    },
    email: {
        type: String,
        unique: true
    },
    prefix: {
        type: String,
        default: '+57'
    },
    cel: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        unique: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('contacts', ContactSchema)