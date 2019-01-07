'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = require('./Model');

var _ProductBucket = require('./ProductBucket');

var _EventBucket = require('./EventBucket');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = exports.Store = function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: 'createStore',
    value: function createStore(storeDoc) {
      // add default data to store  on createing store
      var store = _Model.StoreBucketModel.create(storeDoc);
      console.log(store + "created");
      return store;
    }
  }, {
    key: 'updateStore',
    value: async function updateStore(storeId, doc) {
      return _Model.StoreBucketModel.updateOne({ _id: storeId }, doc).exec();
    }
  }, {
    key: 'getStore',
    value: async function getStore(filter) {
      var store = await _Model.StoreBucketModel.findOne(filter).lean().exec();
      return store;
    }
  }, {
    key: 'getStores',
    value: async function getStores(filter) {
      filter = filter || {};
      var store = await _Model.StoreBucketModel.find(filter);
      console.log("logging stores");
      console.log(store);
      return store;
    }
  }, {
    key: 'getStoreComponents',
    value: async function getStoreComponents(storeId) {
      //get services, blog, products.
      //get services
      var serviceBucket = await ServiceBucket.getServiceBucket(storeId);
      var producktBucket = await _ProductBucket.ProductBucket.getBucket(storeId);
    }
  }, {
    key: 'deleteStore',
    value: function deleteStore(filter) {
      _Model.StoreBucketModel.deleteOne(filter, function (err) {});
    }
  }, {
    key: 'getRouter',
    value: function getRouter() {
      var router = require('express').Router();

      //get store handler
      router.get(["", "/:title"], async function (req, res) {
        var filter = {};
        if (req.params.title) {
          filter = { storeTitle: req.params.title };
        }

        var stores = await Store.getStores(filter);
        res.json(stores);
      });
      //update Store handler
      router.put("/:id", function (req, res) {
        var doc = req.body;
        Store.updateStore(req.params.id, doc).then(function (v) {
          return res.json(v);
        }).catch(function (e) {
          return console.log(e);
        });
      });
      //delete store handler
      router.delete("", function (req, res) {
        _Model.StoreBucketModel.deleteOne(filter, function (err) {
          if (err) {}
          res.send("deleted");
        });
      });
      //create store handler
      router.post("", async function (req, res) {
        var createdStore = await Store.createStore(req.body);
        var productBucket = await _ProductBucket.ProductBucket.createBucket(require('mongoose').Types.ObjectId(createdStore._id));
        var store = {};
        store.storeData = createdStore;
        store.productBucket = productBucket;

        res.json(store);
      });
      //Mount store components
      router.use("/:sid/product", function (req, res, next) {
        req.storeId = req.params.sid;
        next();
      }, _ProductBucket.ProductBucket.getRouter());

      return router;
    }
  }]);

  return Store;
}();