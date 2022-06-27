const { Router } = require("express");
const mainController = require('../controllers/mainController')
const mainRoute = Router();

mainRoute.get('/', mainController.index);
mainRoute.get('/login', mainController.login);
mainRoute.get('/register', mainController.register);
mainRoute.get('/create', mainController.create);
mainRoute.get('/products', mainController.products);
mainRoute.get('/shoppingCart', mainController.shoppingCart);
mainRoute.get('/users', mainController.users);

module.exports = mainRoute;
