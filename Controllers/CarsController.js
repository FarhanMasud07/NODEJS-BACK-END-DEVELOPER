//// Importing the Model of Cars and Manufacturer ///
const mongoose = require('mongoose');
const Manufracturer = require('../Models/manufractures_model');
const cars = require('../Models/car_model');
//// End of  Importing the Model of Cars and Manufacturer ///




///// Get All The Cars /////
exports.getAllCars = async (req, res) => {
    const car = await cars.find().populate('Manufacturer');
    res.status(200).json(car);
    console.log(car);
}
///// End of Get All The Cars /////




///// Get All The Cars With Given Country /////
exports.getAllCarByCountry = async (req, res) => {


    const manufacture = await Manufracturer.find({
        Country: req.params.country
    });

    const car = await cars.find({
        Manufacturer: manufacture
    }).populate('Manufacturer');

    console.log(car);
    res.status(200).json(car);
}
///// End of Get All The Cars With Given Country /////




//// Add  The Cars With Given ManufacturerId  ////
exports.addCarsWithManufacturedId = async (req, res) => {

    const newCar = new cars(req.body); /// Create a new Car 

    const manufacture = await Manufracturer.findById(req.params.manufactureId); //// Getting the Manufacturer  

    newCar.Manufacturer = manufacture; //// Assign manufacture as a cars Manufacturer

    await newCar.save(); /// Save the car

    manufacture.Cars.push(newCar); /// Add car to the  manufacture Manufacture array

    await manufacture.save(); /// Save the manufacture

    res.status(201).json(newCar);

    console.log(newCar);

}
//// End of Add  The Cars With Given ManufacturerId  ////




///// For delete Car /////

exports.deleteCar = async (req, res) => {

    const carIdformanufacturer = await cars.findByIdAndDelete(req.params.carId);
    console.log(carIdformanufacturer);
    res.status(200).json(carIdformanufacturer);
}