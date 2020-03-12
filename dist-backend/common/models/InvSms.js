// Copyright Maprotel. 2015,2019. All Rights Reserved.
// Node module: loopback-proser
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var smsInformation = _interopRequireWildcard(require("../queries/InvSms/smsInformation"));

module.exports = function (InvSms) {
  //**********************REMOTE METHOD SEND SMS**********************/
  InvSms.smsInformation =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", smsInformation.smsInformation(userSelection));

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

  InvSms.remoteMethod("smsInformation", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Returns values of auxiliar report"]
  });
};