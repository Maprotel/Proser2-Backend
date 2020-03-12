"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

function createUser(_x) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(user) {
    var queryUsername, queryRoleMapping;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryUsername = "\n    SELECT\n            id\n          , firstname\n          , lastname\n          , profile\n          , realm\n          , username\n          , password\n          , email\n          , emailVerified\n          , verificationToken\n          , memberId\n          , user_legal_id\n          , user_internal_id\n          , user_photo_path\n          , profile_json\n      FROM\n         Userbase\n          ";
            _context.prev = 1;
            _context.next = 4;
            return pool.destinyInventory.query(queryUsername);

          case 4:
            result.username = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            resume_error.username = true;
            return _context.abrupt("return", {
              error: "Userbase - checkIfExists " + _context.t0
            });

          case 11:
            queryRoleMapping = "\n    SELECT\n      id\n    , principalType\n    , principalId\n    , roleId\n     \n    FROM\n      RoleMapping\n    ";
            _context.prev = 12;
            _context.next = 15;
            return pool.destinyInventory.query(queryEmail);

          case 15:
            result.email = _context.sent;
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](12);
            resume_error.email = true;
            return _context.abrupt("return", {
              error: "Userbase - checkIfExists " + _context.t1
            });

          case 22:
            result.username === null ? false : true;
            result.email === null ? false : true;
            return _context.abrupt("return", result);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7], [12, 18]]);
  }));
  return _createUser.apply(this, arguments);
}