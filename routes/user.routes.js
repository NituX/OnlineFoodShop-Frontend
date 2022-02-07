var express = require ('express');
var router = express.Router();

var User = require('../controllers/user.controller')

router.post('/login', User.login)
router.post('/register', User.create)

module.exports = router;

/*module.exports = (user) => {
    const User = require('../controllers/user.controller.js')

    user.post("/api/register"), User.create;
    user.post("/api/login"), User.login;
}*/
