const mongoose = require('mongoose');


//employees

let waresSchema = mongoose.Schema({
  warename:{
    type: String,
    require: true
  },
  price:{
    type: Number,
    require: true
  },
  location:{
    type: String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Ware = module.exports = mongoose.model('Ware', waresSchema);

//get employees

module.exports.getWares = function getWares(callback, limit) {
  Ware.find(callback).limit(limit);
}

module.exports.getWareById = function getWareById(id, callback) {
  Ware.findById(id, callback);
}
