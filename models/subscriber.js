const mongoose = require('mongoose');

const subscriberberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userChannel: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('Subscriber', subscriberberSchema)