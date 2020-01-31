const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    Name: String,
    Year: Number,
    Image: String,

    //// Here A car can have only one manufacturer ////
    Manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manufractures",
        required: "Manufacturer is Required",

    },
});

module.exports = mongoose.model('Car', carsSchema);