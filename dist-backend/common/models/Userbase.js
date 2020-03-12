"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var checkIfExists = _interopRequireWildcard(require("../queries/Userbase/checkIfExists"));

// Copyright Maprotel. 2015,2019. All Rights Reserved.
// Node module: loopback-proser
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
// var config = require('../../server/config.json');
// var path = require('path');
module.exports = function (Userbase) {
  Userbase.checkIfExists =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(user) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", checkIfExists.checkIfExists(user));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Userbase.remoteMethod("checkIfExists", {
    accepts: {
      arg: "user",
      type: "object",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Check for email or username registered"]
  }); //send verification email after registration
  //   Userbase.afterRemote('create', function(context, userInstance, next) {
  //     console.warn('> user.afterRemote triggered');
  //     var verifyOptions = {
  //       type: 'email',
  //       to: userInstance.email,
  //       from: 'noreply@loopback.com',
  //       subject: 'Thanks for registering.',
  //       template: path.resolve(__dirname, '../../server/views/verify.ejs'),
  //       redirect: '/verified',
  //       user: userInstance
  //     };
  //     userInstance.verify(verifyOptions, function(err, response) {
  //       if (err) {
  //         Userbase.deleteById(userInstance.id);
  //         return next(err);
  //       }
  //       console.warn('> verification email sent:', response);
  //       context.res.render('response', {
  //         title: 'Signed up successfully',
  //         content: 'Please check your email and click on the verification link ' -
  //             'before logging in.',
  //         redirectTo: '/',
  //         redirectToLinkText: 'Log in'
  //       });
  //     });
  //   });
};