'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBucket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = require('./Model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventBucket = exports.EventBucket = function () {
  function EventBucket() {
    _classCallCheck(this, EventBucket);
  }

  _createClass(EventBucket, null, [{
    key: 'createBucktBucket',
    value: function createBucktBucket(doc) {
      var bucket = new _Model.EventBucketModel(doc);
      bucket.save(function (err, doc) {});
    }
  }, {
    key: 'addItem',
    value: function addItem(storeId, item) {
      _Model.EventBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        doc.items.push(item);
      });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(storeId, itemId, newDoc) {
      var _this = this;

      _Model.EventBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        for (var counter = 0; counter < doc.items.lenght; _this.counter++) {
          if (doc.items[counter]._id == itemId) {
            newDoc._id = productId;
            doc.items[counter] = newDoc;
          }
        }
        doc.save(function (err, doc) {
          console.log(doc);
        });
      });
    }
  }, {
    key: 'updateBucket',
    value: function updateBucket(filter, doc) {
      _Model.EventBucketModel.updateOne(filter, doc);
    }
  }, {
    key: 'deleteBucket',
    value: function deleteBucket(id) {
      _Model.EventBucketModel.deleteOne({ parentStore: id });
    }
  }, {
    key: 'deletePost',
    value: function deletePost(storeId, id) {
      _Model.EventBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        doc.posts.id(id).pull();
      });
    }
  }]);

  return EventBucket;
}();