const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, reuqired: true},
    email: {type: String, required: true, unique: true},
    phone: { type: String, reuqired: true},
    password: { type: String, reuqired: true},
    manager: {type: Boolean, required: true}
},
    { collection: 'users'}
)

const model = mongoose.model('UserData', User)

module.exports = model