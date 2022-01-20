const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const uri = 'mongodb+srv://Nitux:Nitu123@awaprojectgroup12.ejqpb.mongodb.net/awapfood?retryWrites=true&w=majority'; //move to more secure place? .env?

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
            password: hashPassword,
            admin: false,
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
        })

        if (user) {

            if(bcrypt.compareSync(req.body.password, user.password) == true ) {
                const token = jwt.sign({
                    name: req.body.cname,
                    email: req.body.email,
            }, 'secret123') //move secret to more secure place. .env?

            return res.json({status: 'ok', token: token})
            } else {
                //console.log('wrong password')
                res.json({status: 'error', user: false})
            }
            
        } else {
            //console.log('user not found')
            res.json({ status: 'error', user: false})
        }
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
})