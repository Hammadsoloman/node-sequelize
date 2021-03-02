const express = require("express");
let app=express();
const db = require("./models")
var bodyParser = require('body-parser');
var validator = require('express-validator');

const PORT = 3000;

app.use(validator());


//app.use(express.urlencoded({extended:true}));
//app.use(express.json());
app.use(bodyParser.json());


const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

db.sequelize.sync().then(()=>{
app.listen(PORT,err =>{
    if (err) return console.log(`cannot Listen on PORT:${PORT}`);
    console.log(`Server is Listining on: http://localhost:${PORT}/`)
    });
}).catch(function () {
    console.log("Promise Rejected");
});