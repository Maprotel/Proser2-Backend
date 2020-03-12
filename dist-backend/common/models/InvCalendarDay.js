'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var calendarHollydays = _interopRequireWildcard(require("../queries/InvCalendarDays/calendarHollydays"));

module.exports = function (InvCalendar) {
  InvCalendar.queryCalendarDay =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", calendarHollydays.queryCalendarDay(userSelection));

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

  InvCalendar.remoteMethod('queryCalendarDay', {
    accepts: {
      arg: 'userSelection',
      type: 'Filter',
      http: {
        source: 'body'
      }
    },
    returns: {
      type: 'array',
      root: 'true'
    },
    description: ["Return principal values to dashboard"]
  });
};