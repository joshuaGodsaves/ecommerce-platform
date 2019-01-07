"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogBucket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = require("./Model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlogBucket = exports.BlogBucket = function () {
  function BlogBucket() {
    _classCallCheck(this, BlogBucket);
  }

  _createClass(BlogBucket, null, [{
    key: "createBucktBucket",
    value: function createBucktBucket(doc) {
      var bucket = new _Model.BlogBucketModel(doc);
      bucket.save(function (err, doc) {});
    }
  }, {
    key: "addItem",
    value: function addItem(storeId, item) {
      _Model.BlogBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        doc.items.push(item);
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(storeId, itemId, newDoc) {
      var _this = this;

      _Model.BlogBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
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
    key: "deleteBucket",
    value: function deleteBucket(id) {
      _Model.BlogBucketModel.deleteOne({ parentStore: id });
    }
  }, {
    key: "deletePost",
    value: function deletePost(storeId, id) {
      _Model.BlogBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        doc.items.id(id).pull();
      });
    }
  }, {
    key: "getBlogBucket",
    value: function getBlogBucket(storeId) {
      return _Model.BlogBucketModel.findOne({ parentStore: storeId }, function (err, doc) {
        console.log(doc);
      });
    }
  }, {
    key: "getBlogPosts",
    value: function getBlogPosts(storeId) {
      return _Model.BlogBucketModel.findOne({ parentStore: storeId }, "items").lean().exec();
    }
  }]);

  return BlogBucket;
}();