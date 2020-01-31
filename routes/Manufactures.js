const express = require('express');
const route = express.Router();
const ManufracturesController = require('../Controllers/ManufracturesController');

route.get('/allmanufractures', ManufracturesController.getAllManufractures); //// Here we can get all the manufacturer /////
route.post('/addmanufractures', ManufracturesController.addManufractures); //// Here we can add  manufacturer /////
route.delete('/deleteManufacturer/:manufacuturerId', ManufracturesController.deleteManufacuturer); //// Here we Delete Manufacuturer //// 
module.exports = route;

