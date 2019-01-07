'use strict';

var _StoreBucket = require('./../model/StoreBucket');

var StoreAction = {};

StoreAction.createStore = async function (user, action) {
   var store = await _StoreBucket.Store.createStore(user);
   if (store) {
      action(true, store);
   }
};

StoreAction.updateStore = async function () {};

StoreAction.deleteStore = async function () {};

exports.StoreAction = StoreAction;