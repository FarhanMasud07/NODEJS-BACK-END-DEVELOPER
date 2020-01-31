const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://FarhanMasud:Sherlock1234@@cluster0-jrq6p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    console.log("Connection establish successfully")
);