const Restaurant = require('../models/restaurant.model')


require('dotenv').config();

exports.create = (async (req, res) => {
    console.log(req.body)

    try {
        await Restaurant.create({
            name: req.body.name,
            description: req.body.description,
            pricelevel: req.body.pricelevel,
            openingHours: req.body.openingHours,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            zipcode: req.body.zipcode,
            menu: req.res.menu
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: err })
    }
})

exports.getAll = (async (req, res) => {
    console.log("getAll" + req.body)

    try {
        let restaurants = await Restaurant.find();
        res.json({ restaurants })

    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.getOne = (async (req, res) => {
    console.log(req.query)

    let filters = {}

    if (req.query.name) {
        filters = { name: req.query.name }
    } else if (req.query.email) {
        filters = { type: req.query.email }
    }

    try {
        let foundRestaurant = await Restaurant.findOne(filters)
        res.json({ foundRestaurant })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.getOneById = (async (req, res) => {
    console.log(req.body, req.params.restaurantId)

    try {
        let foundRestaurant = await Restaurant.findById(req.params.restaurantId)
        res.json({ foundRestaurant })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.update = (async (req, res) => {
    console.log(req.body, req.params.restaurantId)

    try {
        let modifiedRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
                name: req.body.name,
                description: req.body.description,
                pricelevel: req.body.pricelevel,
                openingHours: req.body.openingHours,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                zipcode: req.body.zipcode
                },
            { new: true}
        )
        res.json({ status: 'ok', modifiedRestaurant })

    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.delete = (async (req, res) => {
    try {
        await Restaurant.findByIdAndRemove(req.params.restaurantId)
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.updateMenu = (async (req, res) => {
    console.log(req.body, req.params.restaurantId)

    try {

        //console.log(req.body)

        let foundRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
                $push: {
                    menu: {
                        name: req.body.name,
                        category: req.body.category,
                        description: req.body.description,
                        price: req.body.price,
                        rating: req.body.rating
                    }
                }
            },
            { new: true }
        )

        res.json({ status: 'ok', foundRestaurant })

    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

exports.deleteMenu = (async (req, res) => {
    console.log(req.body, req.params.restaurantId)

    try {

        //console.log(req.body)

        let foundRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
                $pull: {
                    menu: {_id: req.params.menuId}
                }
            },
            { new: true }
        )

        res.json({ status: 'ok', foundRestaurant })

    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})