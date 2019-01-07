"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("", async function (req, res) {
    // uses the store id stored in the user session to  all products
});
router.post("", async function (req, res) {
    var dummyDate = {
        title: "dummy title " + Date.now(),
        description: " dummy description" + Date.now(),
        category: "Dummy category"

        // gets a single products with the provided id
    };
});
router.put("/:id", async function (req, res) {
    //
});
router.delete("/:id", async function (req, res) {});

var ProductRouter = exports.ProductRouter = router;