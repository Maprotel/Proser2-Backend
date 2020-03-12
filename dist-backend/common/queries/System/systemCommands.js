"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.echo = echo;
exports.pm2 = pm2;
exports.reboot = reboot;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var shell = require("shelljs");

function echo(_x) {
  return _echo.apply(this, arguments);
}

function _echo() {
  _echo = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(command) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return shell.exec("echo ".concat(command.command));

          case 3:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            shell.echo("error", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _echo.apply(this, arguments);
}

function pm2(_x2) {
  return _pm.apply(this, arguments);
}

function _pm() {
  _pm = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(command) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return shell.exec("pm2 ".concat(command.command));

          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            shell.echo("error", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _pm.apply(this, arguments);
}

function reboot(_x3) {
  return _reboot.apply(this, arguments);
}

function _reboot() {
  _reboot = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(command) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return shell.exec("reboot ".concat(command.command)).code;

          case 3:
            result = _context3.sent;

            if (result !== 0) {
              result = "Error: reboot failed";
            }

            return _context3.abrupt("return", result);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            shell.echo("error", _context3.t0);
            return _context3.abrupt("return", _context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _reboot.apply(this, arguments);
}