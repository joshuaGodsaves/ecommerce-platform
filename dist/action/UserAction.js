'use strict';

var _User = require('./../model/User');

var UserAction = {};
UserAction.createUser = async function (userName, email, password, action) {
    var user = await _User.User.createUser(userName, email, password);
    console.log(user);
    console.log('user has been created');
    if (user) {
        action(true, user);
    }
    return user;
};

UserAction.updateUser = async function (userName, doc, action) {
    var check = await _User.User.updateUser(userName, doc);
    if (check) {
        action(true);
    } else {
        action(false);
    }
};
UserAction.deleteUser = async function (user) {
    //delete Every thing associated with this use on delete operatio
    var check = false;
    var filter = { userName: user };
    check = await _User.User.deleteUser(filter);
    if (check) {
        console.log('user deleted');
        action(true);
    }
};

UserAction.getUsers = async function (filter, projection, action) {
    action = action || new Function();
    var users = await _User.User.getUsers(filter, projection);
    if (users) {
        action(true, users);
    }

    return users;
};

UserAction.getUser = async function (userId, action) {
    action = action || new Function();
    var filter = { userName: userId };
    var user = await _User.User.getUser(filter);
    if (user) {
        action(true, user);
    }
    return user;
};
exports.UserAction = UserAction;