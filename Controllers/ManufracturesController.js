const Manufractures = require('../Models/manufractures_model');
const mongoose = require('mongoose');


///// Getting All Manufacturer /////
exports.getAllManufractures = async (req, res) => {
    const allmanufacturer = await Manufractures.find().populate('Cars');
    console.log(allmanufacturer);
    res.status(200).json(allmanufacturer);
}




///// Add A Manyfacturer /////
exports.addManufractures = (req, res) => {
    const manufractures = new Manufractures({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Country: req.body.Country,
        Logo: req.body.Logo,
    });

    manufractures.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling Post request of Manufractures",
            createdCar: manufractures
        });
    }).catch(err => {
        console.log(err);
    });


}

exports.deleteManufacuturer = async (req, res) => {
    const manufacuturerdelete = await Manufractures.findByIdAndDelete(req.params.manufacuturerId);
    console.log(manufacuturerdelete);
    res.status(200).json(manufacuturerdelete);
}