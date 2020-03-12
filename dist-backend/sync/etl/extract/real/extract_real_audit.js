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
var destinyTable = "RealAudit";
var originTable = "MainAudit";
var datefield = "audit_datetime_init";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractRealAudit(_x) {
  return _extractRealAudit.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/real/extract_real_main_audit.js
// extractRealAudit(incoming_date);


function _extractRealAudit() {
  _extractRealAudit = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var preresult, records, extendedResult, validation, written;
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
            preresult = _context.sent;
            records = (0, _mysqlHelper.removeRowDataPacket)(preresult);
            console.log("records", records.length); // Transform data to import

            if (!(Array.isArray(records) && records.length > 0)) {
              _context.next = 23;
              break;
            }

            extendedResult = records.map(function (x) {
              x.audit_datetime_init = x.audit_datetime_init === null ? null : (0, _moment["default"])(x.audit_datetime_init).format("YYYY-MM-DD hh:mm:ss");
              x.audit_datetime_end = x.audit_datetime_end === null ? null : (0, _moment["default"])(x.audit_datetime_end).format("YYYY-MM-DD hh:mm:ss");
              x.audit_date = (0, _moment["default"])(x.audit_datetime_init).format("YYYY-MM-DD");
              x.audit_hca_agent_serial_id = x.audit_datetime_init === null ? null : (0, _moment["default"])(x.audit_datetime_init).format("YYYY-MM-DD") + "-" + x.audit_agent_id;
              return x;
            }).map(function (y) {
              return y;
            }); // Write process data to destiny

            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 23;
              break;
            }

            _context.prev = 12;
            _context.next = 15;
            return (0, _extractFunctionsReal.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractRealAudit caught it - writeDestiny", err);
            });

          case 15:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractRealAudit ",
              result: written
            });

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            console.log("error", _context.t0);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 19]]);
  }));
  return _extractRealAudit.apply(this, arguments);
}

module.exports = {
  extractRealAudit: extractRealAudit
};