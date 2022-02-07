const mongoose = require('mongoose')

const Menu = new  mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, reqired: true},
    image: {type: Object, required: true}
})

const Restaurant = new mongoose.Schema(
    {
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    pricelevel: {type: String, required: true},
    openingHours: {type: String, required: true},
    email: {type: String, required: false, unique: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    zipcode: {type: String, required: true},
    menu: [Menu]
    },
    { collection: 'restaurants'}
)

const model = mongoose.model('RestaurantData', Restaurant)

module.exports = model