"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var scheduledayCrud = _interopRequireWildcard(require("../queries/InvScheduleDay/scheduledayCrud"));

// Copyright Maprotel. 2015,2019. All Rights Reserved.
// Node module: loopback-proser
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
module.exports = function (InvScheduleDay) {
  InvScheduleDay.invScheduleDayCrudInsert =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(item) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", scheduledayCrud.invScheduleDayCrudInsert(item));

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

  InvScheduleDay.remoteMethod("invScheduleDayCrudInsert", {
    accepts: {
      arg: "item",
      type: "object",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Create 7 schedules into days for a week"]
  });
}; // scheduledayCrud.invScheduleDayCrudInsert