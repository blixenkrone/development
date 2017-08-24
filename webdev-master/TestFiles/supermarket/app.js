var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
//connect to mongodb
mongoose.connect('localhost/supermarket');
mongoose.connection
 .once('open', () => console.log('Good to go!'))
 .on('error', (error) => {
 console.warn('Warning', error);
 });

 app.listen(3000);

 Employee = require('./models/employees');
 Ware = require('./models/wares');

 //https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

 // 1. start server (mongodb/data/db path)
 // 2. run app.js
 // 3. run mongo shell (mongo)

app.get('/', function(req, res){
  res.send("Use /api/wares or /api/employees ok?");
});


//getEmployees

app.get('/api/employees', function(req, res){
  Employee.getEmployees(function (err, employees) {
    if(err){
      throw err;
    }
    res.json(employees);
  });
});

//getEmployeesById

app.get('/api/employees/:_id', function(req, res){
  Employee.getEmployeeById(req.params._id, function (err, employee) {
    if(err){
      throw err;
    }
    res.json(employee);
  });
});

//getWares

app.get('/api/wares', function(req, res){
  Ware.getWares(function (err, wares) {
    if(err){
      throw err;
    }
    res.json(wares);
  });
});

//getWareById

app.get('/api/wares/:_id', function(req, res){
  Ware.getWaresById(req.params._id, function (err, ware) {
    if(err){
      throw err;
    }
    res.json(ware);
  });
});
