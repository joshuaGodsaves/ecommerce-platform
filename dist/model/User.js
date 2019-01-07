'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = require('./Model');

var UserModel = Model.UserModel;

var User = exports.User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: 'checkIfUserExist',

    // Check if user exists 
    value: function checkIfUserExist(email, cb) {
      console.log("checking if @ " + email + ' exists');
      UserModel.findOne({ email: email }, function (err, doc) {
        console.log("user is " + doc);
        if (doc) {
          cb(true);
        } else {
          cb(false);
        }
        return;
      });
    }
  }, {
    key: 'createUser',
    value: function createUser(userName, email, password) {
      console.log("received creat user request");
      var promise = new Promise(function (res, rej) {
        User.checkIfUserExist(email, function (check) {
          console.log("checkin if user exisst");
          console.log(check);
          if (!check) {
            var document = {
              userName: userName, email: email,
              password: password
            };
            var user = new UserModel(document);
            user.save(function (err, doc) {
              console.log(doc);
              res(doc);
              rej(err);
            });
          } else {
            console.log("user exists");
          }
        });
      });
      return promise;
    }
  }, {
    key: 'checkIfUserMatchesReq',
    value: function checkIfUserMatchesReq(user, reqCb) {
      UserModel.findOne({ user: user }, function (err, doc) {
        var test = reqCb(doc);
        console.log(test);
      });
    }
  }, {
    key: 'getUsers',
    value: function getUsers(filter) {
      return UserModel.find(filter, function (err, docs) {});
    }
  }, {
    key: 'getUser',
    value: function getUser(filter) {
      return UserModel.findOne(filter);
    }
  }, {
    key: 'updateUserManually',
    value: function updateUserManually(user, updateCb) {
      UserModel.findOne({ userId: user }, function (err, doc) {
        doc = updateCb(doc);
        doc.save();
      });
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user, doc) {
      console.log(user);
      console.log(doc);
      return new Promise(function (res, rej) {
        UserModel.updateOne({ userName: user }, doc, function (err, raw) {
          res(true);
          rej(false);
        });
      });
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser(filter) {
      var promise = new Promise(function (res, rej) {
        UserModel.deleteOne(filter, function (err) {
          rej(err);
          res(true);
        });
      });
      return promise;
    }
  }]);

  return User;
}();