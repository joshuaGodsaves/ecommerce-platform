'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceBucket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = require('./Model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServiceBucket = exports.ServiceBucket = function (_ServiceBucketService) {
  _inherits(ServiceBucket, _ServiceBucketService);

  function ServiceBucket() {
    _classCallCheck(this, ServiceBucket);

    return _possibleConstructorReturn(this, (ServiceBucket.__proto__ || Object.getPrototypeOf(ServiceBucket)).apply(this, arguments));
  }

  _createClass(ServiceBucket, null, [{
    key: 'createBucket',
    value: function createBucket(storeId) {
      var bucket = new _Model.ServiceBucketModel({ storeId: storeId });
      return bucket.save(function () {});
    }
  }, {
    key: 'addItem',
    value: function addItem(id, item) {

      return new Promise(function (res, rej) {
        _Model.ServiceBucketModel.findById({ parentStore: id }, function (err, doc) {
          res(doc.items.create(item, function () {}));
        });
      });
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(id, itemId) {
      _Model.ServiceBucketModel.findOne({ storeId: storeId }, function (err, doc) {
        doc.items.id(itemId).pull();
        doc.save();
      });
    }
  }, {
    key: 'deleteBucket',
    value: function deleteBucket(id) {
      _Model.ServiceBucketModel.findByIdAndDelete(id, function (err, res) {
        return console.l0g(res);
      });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(storeId, itemId, newDoc) {
      var _this2 = this;

      _Model.ServiceBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        for (var counter = 0; counter < doc.products.lenght; _this2.counter++) {
          if (doc.items[counter]._id == itemId) {
            newDoc._id = itemId;
            doc.items[counter] = newDoc;
          }
        }
        doc.save(function (err, doc) {
          console.log(doc);
        });
      });
    }
  }, {
    key: 'getBucket',
    value: function getBucket(storeId) {
      return _Model.ServiceBucketModel.findOne({ _id: storeId });
    }
  }, {
    key: 'getBuckets',
    value: function getBuckets(filter) {
      return _Model.ServiceBucketModel.find(filter);
    }
  }]);

  return ServiceBucket;
}(ServiceBucketServiceBucketModel);