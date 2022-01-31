const User = require('../models/user.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport');
const BasicStrategy = require ('passport-http').BasicStrategy
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

require ('dotenv').config()

let jwtSecret = process.env.JWT_SECRET
let options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = jwtSecret;

passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    console.log('processing JWT payload, token content:');
    console.log(jwt_payload)

}))

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


exports.create = (async (req,res) => {
    console.log(req.body)

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)

    try{
        await User.create({
            name: req.body.cname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPassword,
            manager: false
        })
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email'})
    }
})


exports.login = (
        passport.authenticate('basic', {session: false}),
        (req,res) => {

            console.log("login attempt")
            const body = {
                email: req.body.email,
                admin: req.body.manager
            }

            const payload = {
                user : body
            }

            const jwtOptions = {
                expiresIn: '1h'
            }


            const token = jwt.sign(payload, jwtSecret, jwtOptions);

            return res.json({token});
        })