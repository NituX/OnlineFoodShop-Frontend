const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport');
const BasicStrategy = require ('passport-http').BasicStrategy
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
require ('dotenv').config()

const uri = process.env.DB_URI
const port = process.env.PORT

app.use(cors())
app.use(express.json())

mongoose.connect(uri)

let jwtSecret = process.env.JWT_SECRET
let options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = jwtSecret;

passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    console.log('processing JWT payload, token content:');
    console.log(jwt_payload)

}))

//register
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

//Login with passport + http-basic
passport.use(new BasicStrategy(
    async function (username, password, done) {

        console.log(username, password)
        const user = await User.findOne({email: username})
        

        console.log(user)
        
        if(user != null) {
            if(bcrypt.compareSync(password, user.password) == true) {
                return done(null, user);
            } else {
                console.log("Password incorrect")
                return done(null, false, {message: "Password incorrect"})
            }

        } else{
            console.log("Username/Email not found");
            return done(null, false, { message: "Username/email not found"})
        }

        
        
    }
))

//login
app.post('/api/login',
        passport.authenticate('basic', {session: false}),
        (req,res) => {
            const body = {
                email: req.body.email
            }

            const payload = {
                user : body
            }

            const jwtOptions = {
                expiresIn: '1h'
            }


            const token = jwt.sign(payload, jwtSecret, jwtOptions);

            return res.json({token});


            /*
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
        }*/
})

app.listen(port, () => {
    console.log(`Server started on port port`)
})