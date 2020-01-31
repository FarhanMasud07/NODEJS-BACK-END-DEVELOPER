//// Imports //////
const express = require('express');
const app = express();
const CarsRouter = require('./routes/Cars');
const ManufacturRoute = require('./routes/Manufactures');
const port = process.PORT || 5000;
require('./Database/Connection');
///// End of Imports //////

/// This is for parsing the json body ///
app.use(express.json());
/// End of This is for parsing the json body ///


///// Cars and Manufactures Routers ////
app.use('/Cars', CarsRouter);
app.use('/Manufactures', ManufacturRoute);
///// End of  Cars and Manufactures Routers ////



//// Listening to the port ///
app.listen(port, () => {
    console.log("server is running on port :", port);
});
/// End of Listening to the port ///