const express = require('express');
const route = express.Router();
const CarsController = require('../Controllers/CarsController');



route.get('/allCars', CarsController.getAllCars); //// Here we can get all the Cars ////
route.get('/allcars/:country', CarsController.getAllCarByCountry); //// Here we can get all the cars for given country ////
route.post('/addCars/:manufactureId', CarsController.addCarsWithManufacturedId); //// Here we can add the cars with the given Manufacturer //// 
route.delete('/deleteCars/:carId', CarsController.deleteCar); //// Here we Delete car //// 

module.exports = route;