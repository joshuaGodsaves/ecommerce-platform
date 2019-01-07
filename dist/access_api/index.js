'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./route/store/index');

var _user = require('./route/user');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use('/api/v1/store', function (req, res, next) {
    next();
}, _index.StoreRouter);

app.use("/api/v1/user", function (req, res, next) {
    next();
}, _user.UserRouter);

app.listen("3000", function () {
    console.log("listening on port 3000");
});