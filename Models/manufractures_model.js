const mongoose = require('mongoose');

const manufracturesSchema = new mongoose.Schema({
    Name: String,
    Country: String,
    Logo: String,

    //// Here a manufacturer has many cars ///
    Cars: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
            required: "Cars is Required Field"
        }
    ]
});

module.exports = mongoose.model('Manufractures', manufracturesSchema);