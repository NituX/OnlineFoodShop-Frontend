const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const uri = 'mongodb+srv://Nitux:Nitu123@awaprojectgroup12.ejqpb.mongodb.net/awapfood?retryWrites=true&w=majority';

app.use(cors())
app.use(express.json())

mongoose.connect(uri)

app.post('/api/register', async (req,res) => {
    console.log(req.body)

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)

    try{
        await User.create({
            name: req.body.cname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPassword
        })
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login', async (req,res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if (user) {

            const token = jwt.sign({
                    name: req.body.cname,
                    email: req.body.email,
            }, 'secret123') //move secret to more secure place

            return res.json({status: 'ok', user: token})
        } else {
            res.json({ status: 'error', user: false})
        }
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
})