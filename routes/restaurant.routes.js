var express = require ('express');
var router = express.Router();

var Restaurant = require('../controllers/restaurant.controller')

router.get('/', Restaurant.getAll)
router.get('/:restaurantId', Restaurant.getOneById)
router.post('/', Restaurant.create)
router.put('/:restaurantId', Restaurant.update)
router.delete('/:restaurantId', Restaurant.delete)

//Menu Routes
router.put('/menus/:restaurantId', Restaurant.updateMenu)
router.delete('/menus/:restaurantId/:menuId', Restaurant.deleteMenu)

module.exports = router;