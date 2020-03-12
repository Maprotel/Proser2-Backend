"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var multipleSqlMenu = _interopRequireWildcard(require("../queries/InvMenu/multipleSqlMenu"));

var userSelectionMenu = _interopRequireWildcard(require("../queries/InvMenu/userSelection/userSelectionMenu"));

module.exports = function (InvMenu) {
  InvMenu.multipleSqlMenu =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", multipleSqlMenu.multipleSqlMenu(userSelection));

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

  InvMenu.remoteMethod("multipleSqlMenu", {
    accepts: {
      arg: "userSelection",
      type: "Filter",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Invoke menu options from hca"]
  });

  InvMenu.testModel =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(userSelection) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", userSelectionMenu.testModel(userSelection));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  InvMenu.remoteMethod("testModel", {
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
    description: ["Test menu"]
  });

  InvMenu.userSelectionMenu =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userSelection) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", userSelectionMenu.userSelectionMenu(userSelection));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  InvMenu.remoteMethod("userSelectionMenu", {
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
    description: ["Invoke menu options used by frontend"]
  });
};