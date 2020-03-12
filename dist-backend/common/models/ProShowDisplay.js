"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var userSelectionChange = _interopRequireWildcard(require("../queries/ProShowDisplay/userSelectionChange"));

module.exports = function (ProShowDisplay) {
  ProShowDisplay.userSelectionChange =
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", userSelectionChange.userSelectionChange());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  ProShowDisplay.remoteMethod("userSelectionChange", {
    accepts: {
      arg: "",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Returns values of breaks for each selected agent"]
  });
};