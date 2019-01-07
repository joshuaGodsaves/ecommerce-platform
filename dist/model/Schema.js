'use strict';

var mg = require('./Mongoose').mongoose;
var Schema = mg.Schema;

var Assets = new Schema({
    category: String,
    subcategory: String,
    tag: [],
    link: String,
    type: String
});

// Products Schema


var ProductSchema = new Schema({
    title: String,
    description: String,
    category: String
});

var ProductBucketSchema = new Schema({
    parentStore: String,
    items: [ProductSchema]
});

var ServicesBucketSchema = new Schema({
    parentStore: Schema.Types.ObjectId,
    items: []
});
var BlogBucketSchema = new Schema({
    parentStore: Schema.Types.ObjectId,
    items: []
});
var EventBucketSchema = new Schema({
    parentStore: Schema.Types.ObjectId,
    items: []
});

var UserStoresChatSchema = new Schema({
    store: String,
    chat: []
});
var UserSchema = new Schema({
    userName: String,
    email: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    password: String,
    social: [{ media: String, address: String }],
    subscriptions: [UserStoresChatSchema]
});
var StoreSchema = new Schema({
    title: String,
    owner: String,
    description: String,
    category: String,
    subcategory: String,
    social: [Schema.Types.Mixed],
    subscribers: [{
        user: String,
        chat: []
    }],
    feeds: [],
    assets: [{
        category: String,
        subcategory: String,
        tag: [],
        link: String
    }]
});
StoreSchema.methods.sendMessage = function (message) {
    //this.subscribers.push({...message})
    //this.save()
};

exports.StoreSchema = StoreSchema;
exports.UserSchema = UserSchema;
exports.EventBucketSchema = EventBucketSchema;
exports.BlogBucketSchema = BlogBucketSchema;
exports.ServicesBucketSchema = ServicesBucketSchema;
exports.ProductBucketSchema = ProductBucketSchema;