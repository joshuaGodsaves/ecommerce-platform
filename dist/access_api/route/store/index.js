'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('./product');

var _blog = require('./blog');

var _service = require('./service');

var _event = require('./event');

var _StoreAction = require('../../../action/StoreAction');

var _StoreBucket = require('./../../../model/StoreBucket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use("/jsonApi", _StoreBucket.Store.getRouter());

// Serve  static stuff
router.get("", function (req, res, next) {
  //if admin is logged in  grant access  

  res.send('is working');
});
router.get('/:storeId', function (req, res) {
  //get the store with the speci

});

router.post(["", "/create"], function (req, res) {});
// handle for permissions
router.use(async function (req, res, next) {
  // check for permission here
});
router.use('/product', _product.ProductRouter);
router.use('/service', _service.ServiceRouter);
router.use('/blog', _blog.BlogRouter);
router.use('/event', _event.EventRouter);

var StoreRouter = exports.StoreRouter = router;