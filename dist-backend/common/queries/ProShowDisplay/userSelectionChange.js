"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSelectionChange = userSelectionChange;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

function userSelectionChange() {
  return _userSelectionChange.apply(this, arguments);
}

function _userSelectionChange() {
  _userSelectionChange = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resume_error = false;
            query = "\n    SELECT \n    \n    JSON_UNQUOTE(JSON_EXTRACT(pro_show_display_selection, '$.start_time.value')) as start_time\n    \n    , pro_show_display_selection as userSelection FROM ProShowDisplay ORDER BY start_time DESC\n          ";
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyInventory.query(query);

          case 5:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            resume_error = true;
            return _context.abrupt("return", {
              error: "callEntry - userSelectionChange " + _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _userSelectionChange.apply(this, arguments);
}