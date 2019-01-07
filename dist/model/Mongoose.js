'use strict';

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecommerce");

mongoose.connection.on('open', function () {
  console.log("connected");
});

exports.mongoose = mongoose;