"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var systemCommands = _interopRequireWildcard(require("../queries/System/systemCommands"));

var shell = require("shelljs");

module.exports = function (System) {
  /****** ECHO *********************** */
  System.echo =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(command) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", systemCommands.echo(command));

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

  System.remoteMethod("echo", {
    accepts: {
      arg: "command",
      type: "Command",
      http: {
        source: "body"
      }
    },
    returns: {
      arg: "response",
      type: "text"
    }
  });
  /****** PM2 *********************** */

  System.pm2 =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(command) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", systemCommands.pm2(command));

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

  System.remoteMethod("pm2", {
    accepts: {
      arg: "command",
      type: "Command",
      http: {
        source: "body"
      }
    },
    returns: {
      arg: "response",
      type: "text"
    }
  });
  /****** REBOOT *********************** */

  System.reboot =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(command) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", systemCommands.reboot(command));

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

  System.remoteMethod("reboot", {
    accepts: {
      arg: "command",
      type: "Command",
      http: {
        source: "body"
      }
    },
    returns: {
      arg: "response",
      type: "text"
    }
  });
};