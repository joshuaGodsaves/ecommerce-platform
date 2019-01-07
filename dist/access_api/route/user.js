"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _UserAction = require("../../action/UserAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRouter = _express2.default.Router();

UserRouter.get('', async function (req, res) {
    var users = await _UserAction.UserAction.getUsers();
    res.json(users);
});

UserRouter.post('/new', async function (req, res) {
    var createUserAction = function createUserAction(check, user) {
        if (check) {
            console.log("seen");
            res.send(user);
        }
    };
    var user = _UserAction.UserAction.createUser("user" + new Date().getSeconds(), "email@gmail.com." + new Date().getSeconds(), "pass", createUserAction);
});

UserRouter.post("", function (req, res) {
    res.redirect('/new');
});
UserRouter.get('/:user', async function (req, res) {
    var getUserAction = function getUserAction(check, user) {
        if (check) {
            console.log("user found");
            res.json(user);
        }
    };
    var userId = req.params.user;
    _UserAction.UserAction.getUser(userId, getUserAction);
});

UserRouter.put('/:user', async function (req, res) {
    //Update User details
    var body = req.body;
    _UserAction.UserAction.updateUser(req.params.user, body, function (check) {
        if (check) {
            console.log("user data updated");
            res.json(true);
        } else {
            console.log("could not update");
        }
    });
});

UserRouter.delete('/:user', async function () {
    _UserAction.UserAction.delete(req.params.user, function (check) {
        if (check) {
            console.log('user deleted');
        }
    });
});

exports.UserRouter = UserRouter;