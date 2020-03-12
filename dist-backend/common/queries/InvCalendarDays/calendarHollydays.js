"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryCalendarDay = queryCalendarDay;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

function queryCalendarDay(_x) {
  return _queryCalendarDay.apply(this, arguments);
}

function _queryCalendarDay() {
  _queryCalendarDay = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "\n    SELECT\n    *\n    FROM\n    InvCalendarDay\n    WHERE\n    inv_calendarday_date = '".concat(userSelection.start_date, "'\n    AND\n    inv_calendarday_id = '").concat(userSelection.calendar.id, "'\n\n        ");
            _context.prev = 1;
            _context.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              errorInboundCall: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _queryCalendarDay.apply(this, arguments);
}