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

var destinyTable = "RealCurrentBreaks";
var destinyDateField = "rcb_break_datetime_init";
var destinyNumberField = "rcb_break_audit_id";
var originTable = "call_center.audit";
var originDateField = "datetime_init";
var originNumberField = "id";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractRealBreaks(_x) {
  return _extractRealBreaks.apply(this, arguments);
} // Read actual records


function _extractRealBreaks() {
  _extractRealBreaks = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var result, preresult, extendedResult, written, msg, validation;
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
            result = (0, _mysqlHelper.removeRowDataPacket)(preresult);
            _context.prev = 9;
            msg = "";
            validation = "";

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 24;
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
              delete y.rcb_date;
              return y;
            });
            written;
            msg = "extractRealBreaks end";
            validation = extendedResult[0] ? true : false;

            if (!(validation === true)) {
              _context.next = 23;
              break;
            }

            _context.next = 20;
            return (0, _extractFunctionsReal.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractRealBreaks caught it - writeDestiny", err);
            });

          case 20:
            written = _context.sent;
            _context.next = 24;
            break;

          case 23:
            msg = "No hay registros nuevos por actualizar en ".concat(destinyTable);

          case 24:
            return _context.abrupt("return", msg);

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](9);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 27]]);
  }));
  return _extractRealBreaks.apply(this, arguments);
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
              var querySQL = "\n    DELETE FROM RealCurrentBreaks WHERE rcb_date <> '".concat(start_date, "';\n    DELETE FROM RealCurrentBreaks WHERE rcb_break_datetime_end IS NOT NULL;\n    ");
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
// npx babel-node src/sync/etl/extract/real/extract_realbreaks.js
// extractRealBreaks(incoming_date);


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
              var querySQL = "\n    SELECT\n\n      MIN(audit_id) as rcb_break_audit_id\n      ,audit_agent_id as rcb_break_agent_id\n      ,audit_break_id as rcb_break_id\n\n      ,DATE_FORMAT(audit_datetime_init,'%Y-%m-%d %H:%i:%s') as rcb_break_datetime_init\n      ,DATE_FORMAT(audit_datetime_end,'%Y-%m-%d %H:%i:%s') as rcb_break_datetime_end\n\n      ,DATE_FORMAT(audit_datetime_init,'%Y-%m-%d') as rcb_date\n      ,inv_break_name AS rcb_break_name\n      ,inv_break_productivity AS rcb_break_productivity\n\n    FROM\n    MainAudit\n\n    LEFT OUTER JOIN InvBreak\n    ON audit_break_id = inv_break_id\n\n    WHERE\n\n    audit_datetime_end is null\n\n    AND\n\n    audit_datetime_init >= '".concat(start_date, "' AND audit_datetime_init < '").concat(next_date, "'\n\n    AND\n    audit_break_id is not null\n\n    GROUP BY audit_agent_id\n\n    ");
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
  extractRealBreaks: extractRealBreaks
};