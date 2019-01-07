"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenericModelAction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require("mongoose");

var mongoose = _interopRequireWildcard(_mongoose);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericModelAction = exports.GenericModelAction = function () {
    function GenericModelAction() {
        _classCallCheck(this, GenericModelAction);
    }

    _createClass(GenericModelAction, null, [{
        key: "get",
        value: function get(model, filter, action) {}
    }, {
        key: "getAll",
        value: function getAll(model, filter, action) {}
    }, {
        key: "update",
        value: function update(model, filter, document) {}
    }, {
        key: "updateAll",
        value: function updateAll(model, filter, document) {}
    }]);

    return GenericModelAction;
}();