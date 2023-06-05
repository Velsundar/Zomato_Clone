const express = require('express');
const routes = express.Router();

//import controlling functions
const locationsController = require('../Controllers/locationsControllers')
const RestaurantController = require('../Controllers/RestaurantControllers')
const MealTypeController = require('../Controllers/MealtypeControllers')
const LoginController =require('../Controllers/LoginControllers')

//API end points for this project
routes.get('/locations',locationsController.getLocations);
routes.get('/restaurants',RestaurantController.getRestaurants);
routes.post('/filter',RestaurantController.filter);
routes.get('/locations/:id',RestaurantController.getrestaurantsByLocation);
routes.get('/restaurants/:id',RestaurantController.getRestaurantsById);
routes.get('/mealtypes',MealTypeController.getMealtypes);
routes.post('/signup',LoginController.createUsers);
routes.post('login',LoginController.Login);



//export Router
module.exports = routes;