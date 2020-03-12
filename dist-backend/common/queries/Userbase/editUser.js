"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editUser = editUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

function editUser(_x) {
  return _editUser.apply(this, arguments);
}

function _editUser() {
  _editUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(user) {
    var result, resume_error, email, username, queryUsername, queryEmail;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {
              email: null,
              username: null
            };
            resume_error = {
              email: null,
              username: null
            };
            email = user.email;
            username = user.username;
            queryUsername = "\n    SELECT\n    username\n      FROM\n         Userbase\n      WHERE\n      username = '".concat(username, "'\n          ");
            _context.prev = 5;
            _context.next = 8;
            return pool.destinyInventory.query(queryUsername);

          case 8:
            result.username = _context.sent;
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            resume_error.username = true;
            return _context.abrupt("return", {
              error: "Userbase - checkIfExists " + _context.t0
            });

          case 15:
            queryEmail = "\n    SELECT\n    email\n      FROM\n         Userbase\n      WHERE\n      email = '".concat(email, "'\n          ");
            _context.prev = 16;
            _context.next = 19;
            return pool.destinyInventory.query(queryEmail);

          case 19:
            result.email = _context.sent;
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t1 = _context["catch"](16);
            resume_error.email = true;
            return _context.abrupt("return", {
              error: "Userbase - checkIfExists " + _context.t1
            });

          case 26:
            result.username === null ? false : true;
            result.email === null ? false : true;
            return _context.abrupt("return", result);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11], [16, 22]]);
  }));
  return _editUser.apply(this, arguments);
}