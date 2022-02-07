const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
//const User = require('./models/user.model')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcryptjs')
//const passport = require('passport');
//const BasicStrategy = require ('passport-http').BasicStrategy
//const JwtStrategy = require('passport-jwt').Strategy,
//ExtractJwt = require('passport-jwt').ExtractJwt;
require ('dotenv').config()

var userRouter = require('./routes/user.routes')
var restaurantRouter = require('./routes/restaurant.routes')


const uri = process.env.DB_URI
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/restaurant', restaurantRouter)

//serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose.connect(uri)

app.listen(port, () => {
    console.log(`Server started on port port`)
})