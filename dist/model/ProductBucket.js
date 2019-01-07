'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductBucket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = require('./Model');

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductBucket = exports.ProductBucket = function () {
  function ProductBucket() {
    _classCallCheck(this, ProductBucket);
  }

  _createClass(ProductBucket, null, [{
    key: 'createBucket',
    value: async function createBucket(storeId, doc, checked) {
      var check = await ProductBucket.checkIfProductBucketExist(storeId);
      console.log("just checked");
      console.log(check);
      if (!check) {

        var bucket = _Model.ProductBucketModel.create({ parentStore: storeId });
        return bucket;
      }
    }
  }, {
    key: 'checkIfProductBucketExist',
    value: function checkIfProductBucketExist(storeId) {
      return new Promise(function (res, rej) {
        _Model.ProductBucketModel.findOne({ parentStore: storeId }).then(function (val) {
          return res(val);
        }, function (val) {
          return rej(val);
        });
      });
    }
  }, {
    key: 'addItem',
    value: function addItem(storeId, item, cb) {
      //let storeIdO= require('mongoose').Types.ObjectId(storeId)

      console.log(storeId);
      _Model.ProductBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        if (err) {
          console.log("something went wrong while adding products");
        }

        if (doc) {
          console.dir(doc);
          doc.items.push(item);
          doc.save(function (e) {
            return console.log("saved");
          });
          cb(true);
        } else {
          console.log("did not find document");
        }
      });
    }
  }, {
    key: 'getProducts',
    value: function getProducts(storeId, filter) {
      return ProducktBucketModel.findOne({ parentStore: storeId }, "items", function (err, docs) {
        // check if products in  bucket pass filter
      }).lean().exec();
    }
  }, {
    key: 'getBucket',
    value: function getBucket(storeId, filter) {
      if (filter) {
        return;
      }
      return _Model.ProductBucketModel.findOne({ parentStore: storeId }).exec();
    }
  }, {
    key: 'getBuckets',
    value: function getBuckets(filter) {
      return _Model.ProductBucketModel.findOne({ parentStore: storeId });
    }
  }, {
    key: 'updateBucket',
    value: function updateBucket(filter, doc) {
      _Model.ProductBucketModel.updateOne(filter, doc);
    }
  }, {
    key: 'updateItem',
    value: function updateItem(storeId, itemId, newDoc) {
      var _this = this;

      ProducktBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        for (var counter = 0; counter < doc.products.lenght; _this.counter++) {
          if (doc.products[counter]._id == productId) {
            newDoc._id = productId;
            doc.products[counter] = newDoc;
          }
        }
        doc.save(function (err, doc) {
          console.log(doc);
        });
      });
    }
  }, {
    key: 'deleteBucket',
    value: function deleteBucket(id) {
      _Model.ProductBucketModel.deleteOne({ parentStore: id });
    }
  }, {
    key: 'deleteProduct',
    value: function deleteProduct(storeId, productId) {
      ProducktBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        doc.products.id(productId).pull();
      });
    }
  }, {
    key: 'getRouter',
    value: function getRouter() {
      var router = require('express').Router();

      // get store bucket and filter if need be
      router.get("", async function (req, res) {
        //check for query strings
        var storeId = req.storeId;
        var productBucket = await ProductBucket.getBucket(storeId);
        res.json(productBucket);
      });
      // setup paticular product route
      router.get("/:pid", async function () {
        var storeId = req.storeId;
      });
      router.put("/:pid", async function () {});
      router.delete("/:pid", async function () {});

      router.post("", async function (req, res) {
        var item = req.body;
        var storeId = req.storeId;
        ProductBucket.addItem(storeId, item, function (check) {
          res.send("product was added successfully");
        });
      });

      return router;
    }
  }]);

  return ProductBucket;
}();