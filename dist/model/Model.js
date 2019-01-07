'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('./Mongoose');
var schema = require('./Schema');

var model = mongoose.mongoose.model;

var StoreBucketModel = exports.StoreBucketModel = mongoose.mongoose.model("store", schema.StoreSchema);
var BlogBucketModel = exports.BlogBucketModel = mongoose.mongoose.model("blogbucket", schema.BlogBucketSchema);
var EventBucketModel = exports.EventBucketModel = mongoose.mongoose.model("eventbucket", schema.EventBucketSchema);
var ServiceBucketModel = exports.ServiceBucketModel = mongoose.mongoose.model("servicebucket", schema.ServicesBucketSchema);
var ProductBucketModel = exports.ProductBucketModel = mongoose.mongoose.model("productbucket", schema.ProductBucketSchema);

var UserModel = exports.UserModel = mongoose.mongoose.model("user", schema.UserSchema);