"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsInv = require("./extract-functions-inv");

var _moment = _interopRequireDefault(require("moment"));

// CONSTANTS
var originTable = "call_center.break";
var destinyTable = "InvBreak";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractInvBreak(_x) {
  return _extractInvBreak.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract_agent.js
// extractInvBreak();


function _extractInvBreak() {
  _extractInvBreak = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var records, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format('YYYY-MM-DD'); // Console notification

            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date); // Read origin data

            _context.next = 5;
            return (0, _extractFunctionsInv.readOriginAllRecords)(originTable)["catch"](function (err) {
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
              x.inv_break_id = x.id;
              x.inv_break_name = x.name;
              x.inv_break_description = x.description;
              x.inv_break_status = x.status;
              x.inv_break_type = x.tipo;
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.name;
              delete y.description;
              delete y.status;
              delete y.tipo;
              return y;
            });
            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 22;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _extractFunctionsInv.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractInvBreak caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractInvBreak ",
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
  return _extractInvBreak.apply(this, arguments);
}

module.exports = {
  extractInvBreak: extractInvBreak
};