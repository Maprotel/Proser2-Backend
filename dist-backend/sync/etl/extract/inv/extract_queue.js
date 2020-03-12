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
var originTable = "call_center.queue_call_entry";
var destinyTable = "InvQueue";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractInvQueue(_x) {
  return _extractInvQueue.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract_agent.js
// extractInvQueue();


function _extractInvQueue() {
  _extractInvQueue = (0, _asyncToGenerator2["default"])(
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
              // date
              x.inv_queue_number = x.queue;
              x.inv_queue_name = x.descr;
              x.inv_queue_id = x.id;
              x.inv_queue_status = x.estatus;
              return x;
            }).map(function (y) {
              delete y.queue;
              delete y.estatus;
              delete y.id;
              delete y.extension;
              delete y.descr;
              delete y.date_init;
              delete y.time_init;
              delete y.date_end;
              delete y.time_end;
              delete y.script;
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
              return console.log("extractInvQueue caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractInvQueue ",
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
  return _extractInvQueue.apply(this, arguments);
}

module.exports = {
  extractInvQueue: extractInvQueue
};