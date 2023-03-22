const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: 'String'
    },
    description: {
        type: 'String'
    },
    framework: {
        type: 'String'
    }, 
    github: {
        type: 'String'
    },
    applink: {
        type: 'String'
    }
}, {
    collation: "Services"
})

module.exports = mongoose.Model(collection, serviceSchema)
