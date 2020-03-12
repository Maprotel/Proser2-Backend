"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsReal = require("./extract-functions-real");

var _moment = _interopRequireDefault(require("moment"));

var _repl = require("repl");

var destinyTable = "RealCurrentCalls";
var destinyDateField = "rca_break_datetime_init";
var destinyNumberField = "rca_logged_id";
var originTable = "call_center.call_entry";
var originDateField = "datetime_init";
var originNumberField = "id";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractRealCalls(_x) {
  return _extractRealCalls.apply(this, arguments);
} // Read actual records


function _extractRealCalls() {
  _extractRealCalls = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var result, preresult, erased, written, msg, validation, extendedResult;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD");
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date);
            _context.next = 6;
            return readOrigin(start_date, originTable, originDateField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOrigin"), err);
            });

          case 6:
            preresult = _context.sent;
            console.log("records", preresult.length);
            _context.next = 10;
            return deleteOtherDates(start_date, originTable, originDateField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - deleteOtherDates"), err);
            });

          case 10:
            erased = _context.sent;
            result = (0, _mysqlHelper.removeRowDataPacket)(preresult);
            _context.prev = 12;
            msg = "";
            validation = "";
            extendedResult = "";

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 28;
              break;
            }

            extendedResult = result.map(function (x) {
              // x.rca_logged_id = x.id;
              // x.rca_logged_agent_id = x.id_agent;
              // x.rca_break_id = x.id_break;
              // x.rca_break_datetime_init = x.datetime_init;
              // x.rca_break_datetime_end = x.datetime_end;
              // x.rca_break_duration = x.duration;
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.id_agent;
              delete y.id_break;
              delete y.datetime_init;
              delete y.datetime_end;
              delete y.duration;
              delete y.ext_parked;
              delete y.rca_logged_id;
              delete y.rcc_date;
              return y;
            });
            written;
            msg = "extractRealCalls end";
            validation = extendedResult[0] ? true : false;

            if (!(validation === true)) {
              _context.next = 27;
              break;
            }

            _context.next = 24;
            return (0, _extractFunctionsReal.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractRealCalls caught it - writeDestiny", err);
            });

          case 24:
            written = _context.sent;
            _context.next = 28;
            break;

          case 27:
            msg = "No hay registros nuevos por actualizar en ".concat(destinyTable);

          case 28:
            return _context.abrupt("return", msg);

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](12);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 31]]);
  }));
  return _extractRealCalls.apply(this, arguments);
}

function deleteOtherDates(_x2, _x3, _x4) {
  return _deleteOtherDates.apply(this, arguments);
} // Read actual records


function _deleteOtherDates() {
  _deleteOtherDates = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(start_date, destinyTable, destinyDateField) {
    var today;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            today = (0, _moment["default"])().format("YYYY-MM-DD");
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var querySQL = "\n    DELETE FROM RealCurrentCalls WHERE rcc_date <> '".concat(start_date, "';\n    DELETE FROM RealCurrentCalls WHERE rcc_callentry_datetime_end is not null;\n\n    ");
              resolve(pool.destinyReports.query(querySQL));
              reject("Error");
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _deleteOtherDates.apply(this, arguments);
}

function readOrigin(_x5, _x6, _x7) {
  return _readOrigin.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/real/extract_realcalls.js
// extractRealCalls(incoming_date);


function _readOrigin() {
  _readOrigin = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(start_date, table, datefield) {
    var next_date;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            next_date = (0, _extractFunctionsReal.nextDate)(start_date);
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              var querySQL = "\n    SELECT\n\n    callentry_id AS rcc_callentry_id\n\n    ,callentry_agent_id AS rcc_callentry_agent_id\n    ,callentry_queue_id AS rcc_callentry_queue_id\n    ,callentry_contact_id AS rcc_callentry_contact_id\n    ,callentry_callerid AS rcc_callentry_callerid\n\n    ,DATE_FORMAT(callentry_datetime_init,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_init\n    ,DATE_FORMAT(callentry_datetime_end,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_end\n\n    ,callentry_duration_sec AS rcc_callentry_duration_sec\n    ,callentry_status AS rcc_callentry_status\n    ,callentry_transfer AS rcc_callentry_transfer\n\n    ,DATE_FORMAT(callentry_datetime_entry_queue,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_entry_queue\n\n    ,callentry_duration_sec_wait AS rcc_callentry_duration_wait_sec\n    ,callentry_uniqueid AS rcc_callentry_uniqueid\n    ,callentry_campaign_id AS rcc_callentry_campaign_id\n    ,callentry_trunk AS rcc_callentry_trunk\n\n    ,DATE_FORMAT(callentry_date,'%Y-%m-%d %H:%i:%s') as rcc_date\n\n\n    FROM\n    MainCallEntry\n\n    WHERE\n    callentry_date = '".concat(start_date, "'\n    AND\n    (callentry_status = 'activa' OR callentry_status = 'en-cola')\n    AND\n    callentry_datetime_end is null\n\n    ");
              resolve(pool.destinyReports.query(querySQL));
              reject("Error");
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _readOrigin.apply(this, arguments);
}

module.exports = {
  extractRealCalls: extractRealCalls
};