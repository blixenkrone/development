const mongoose = require('mongoose');


//employees

let employeesSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Employee = module.exports = mongoose.model('Employee', employeesSchema);

//get employees

module.exports.getEmployees = function getEmployees(callback, limit) {
  Employee.find(callback).limit(limit);
}

module.exports.getEmployeeById = function(id, callback) {
  Employee.findById(id, callback);
}
