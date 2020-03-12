"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../../helpers/mysql-helper");

var _extractFunctionsReal = require("./extract-functions-real");

var _moment = _interopRequireDefault(require("moment"));

// Constants
var destinyTable = "RealCdr";
var originTable = "MainCdr";
var datefield = "cdr_calldate";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractRealCdr(_x) {
  return _extractRealCdr.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/real/extract_real_main_cdr.js
// extractRealCdr(incoming_date);


function _extractRealCdr() {
  _extractRealCdr = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var records, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD"); // Console notification

            console.log("/*************/ Transform ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date); // Read origin data

            _context.next = 5;
            return (0, _extractFunctionsReal.readOriginByDate)(start_date, originTable, datefield)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginAllRecords"), err);
            });

          case 5:
            records = _context.sent;
            console.log("records", records.length); // Transform data to import

            if (!(Array.isArray(records) && records.length > 0)) {
              _context.next = 22;
              break;
            }

            extendedResult = records.map(function (x) {
              return x;
            }).map(function (y) {
              return y;
            }); // Write process data to destiny

            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 22;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _extractFunctionsReal.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractRealCdr caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractRealCdr ",
              result: written
            });

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](11);
            console.log("error", _context.t0);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 18]]);
  }));
  return _extractRealCdr.apply(this, arguments);
}

module.exports = {
  extractRealCdr: extractRealCdr
};