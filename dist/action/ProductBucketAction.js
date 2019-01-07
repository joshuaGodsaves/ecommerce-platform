'use strict';

var _ProductBucket = require('./../model/ProductBucket');

var ActionObj = {};

ActionObj.getProducts = async function (storeId, filter, action) {
    //always returns an array
    var products = _ProductBucket.ProductBucket.getProducts(storeId, filter);
    if (products) {
        action(true, products);
    }
    return products;
};

ActionObj.getProduct = async function (storeId, productId, action) {
    //always returns an array
    var product = _ProductBucket.ProductBucket.getProduct(storeId, filter);
    if (product) {
        action(true, products);
    }
    return product;
};

ActionObj.updateProduct = async function (storeId, productId, doc) {
    _ProductBucket.ProductBucket.updateItem(storeId, productId, doc);
};

ActionObj.addProduct = async function (storeId, product, aciton) {
    _ProductBucket.ProductBucket.addItem(storeId, product);
};
ActionObj.createBucket = async function (storeId, doc, action) {
    _ProductBucket.ProductBucket.createBucktBucket(storeId, doc);
};

ActionObj.deleteBucket = async function deleteBucket(storeId, acton) {
    _ProductBucket.ProductBucket.deleteBucket(storeId);
};

exports.ProductAction = ActionObj;