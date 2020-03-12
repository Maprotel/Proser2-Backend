"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsMain = require("./extract-functions-main");

var _moment = _interopRequireDefault(require("moment"));

var destinyTable = "MainAudit";
var destinyTableReal = "RealAudit";
var destinyDateField = "audit_datetime_init";
var destinyNumberField = "audit_id";
var originTable = "call_center.audit";
var originDateField = "datetime_init";
var originNumberField = "id";
var incoming_date = process.argv[2];
var first_pass = true; // let incoming_date = process.argv[3];

/******************* Running actual program -- exec*/

function extractMainAudit(_x) {
  return _extractMainAudit.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/main/extract_audit.js


function _extractMainAudit() {
  _extractMainAudit = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var result, temp_date, min_date, maxValueTemp, maxValue, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD");
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date);
            _context.next = 6;
            return (0, _extractFunctionsMain.minDate)(originTable, originDateField)["catch"](function (err) {
              return console.log("extractMainAudit caught it - minDate", err);
            });

          case 6:
            temp_date = _context.sent;
            min_date = Array.isArray(temp_date) && temp_date.length > 0 ? (0, _mysqlHelper.removeRowDataPacket)(temp_date)[0].min_date : "";
            console.log("min_date", min_date);
            console.log("start_date", start_date);
            _context.next = 12;
            return (0, _extractFunctionsMain.readTableMaxIdByDate)(start_date, destinyTable, destinyDateField, destinyNumberField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readTableMaxIdByDate"), err);
            });

          case 12:
            maxValueTemp = _context.sent;
            maxValue = maxValueTemp ? (0, _mysqlHelper.removeRowDataPacket)(maxValueTemp)[0].maxId : "";
            console.log("maxValue on date", start_date, maxValue);
            _context.next = 17;
            return (0, _extractFunctionsMain.readOriginByDate)(start_date, originTable, originDateField, originNumberField, maxValue)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginByDate"), err);
            });

          case 17:
            result = _context.sent;

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 39;
              break;
            }

            extendedResult = result.map(function (x) {
              x.audit_id = x.id;
              x.audit_agent_id = x.id_agent;
              x.audit_break_id = x.id_break;
              x.audit_datetime_init = x.datetime_init;
              x.audit_datetime_end = x.datetime_end;
              x.audit_duration = x.duration;
              x.audit_ext_parked = x.ext_parked;
              x.audit_date = (0, _moment["default"])(x.audit_datetime_init).format("YYYY-MM-DD");
              x.audit_hca_agent_serial_id = x.audit_datetime_init === null ? null : (0, _moment["default"])(x.audit_datetime_init).format("YYYY-MM-DD") + "-" + x.audit_agent_id;
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.id_agent;
              delete y.id_break;
              delete y.datetime_init;
              delete y.datetime_end;
              delete y.duration;
              delete y.ext_parked;
              return y;
            });
            validation = extendedResult[0] ? true : false;

            if (!validation) {
              _context.next = 35;
              break;
            }

            _context.prev = 22;
            _context.next = 25;
            return (0, _extractFunctionsMain.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractMainAudit caught it - writeDestiny", err);
            });

          case 25:
            written = _context.sent;
            return _context.abrupt("return", "extractMainAudit end");

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](22);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 33:
            _context.next = 37;
            break;

          case 35:
            console.log("********************************************");
            console.log("El resultado est\xE1 vac\xEDo en ".concat(originTable));

          case 37:
            _context.next = 41;
            break;

          case 39:
            console.log("********************************************");
            console.log("No hay registros nuevos por actualizar en ".concat(destinyTable));

          case 41:
            return _context.abrupt("return", "extractMainAudit end");

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[22, 29]]);
  }));
  return _extractMainAudit.apply(this, arguments);
}

extractMainAudit(incoming_date);
module.exports = {
  extractMainAudit: extractMainAudit
};