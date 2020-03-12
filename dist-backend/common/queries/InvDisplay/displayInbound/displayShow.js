"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayShow = displayShow;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

// DISPLAY INBOUND REPORT

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS
function displayShow(_x) {
  return _displayShow.apply(this, arguments);
}

function _displayShow() {
  _displayShow = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(type) {
    var result, resume_error, currentDate, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resume_error = false;

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }

            currentDate = (0, _moment["default"])().format("HH:mm:ss");

            if (type === null) {
              type = "inbound";
            }

            query = "\n  SET STATEMENT max_statement_time=5 FORnpm run history\n  \n  SELECT * FROM ProShowDisplay WHERE \n  \n  pro_show_display_start_time <= '".concat(currentDate, "'\n  AND\n  pro_show_display_end_time >=  '").concat(currentDate, "'\n  AND\n  JSON_UNQUOTE(JSON_EXTRACT(pro_show_display_type, \"$.value\")) = 'inbound'\n\n  order by pro_show_display_start_time desc\n  \n  limit 1\n          ");
            console.log("query", query);
            _context.prev = 6;
            _context.next = 9;
            return pool.destinyReports.query(query);

          case 9:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            resume_error = true;
            return _context.abrupt("return", {
              error: "displayShow " + _context.t0
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));
  return _displayShow.apply(this, arguments);
}