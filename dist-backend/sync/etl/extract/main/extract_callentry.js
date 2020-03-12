"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsMain = require("./extract-functions-main");

var _moment = _interopRequireDefault(require("moment"));

var destinyTable = "MainCallEntry";
var destinyTableReal = "RealCallEntry";
var destinyDateField = "callentry_datetime_entry_queue";
var destinyNumberField = "callentry_id";
var originTable = "call_center.call_entry";
var originDateField = "datetime_entry_queue";
var originNumberField = "id";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractMainCallEntry(_x) {
  return _extractMainCallEntry.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/main/extract_callentry.js
// extractMainCallEntry(incoming_date);


function _extractMainCallEntry() {
  _extractMainCallEntry = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var temp_date, min_date, maxValueTemp, maxValue, result, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD");
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date);
            _context.next = 5;
            return (0, _extractFunctionsMain.minDate)(originTable, originDateField)["catch"](function (err) {
              return console.log("extractMainCallEntry caught it - minDate", err);
            });

          case 5:
            temp_date = _context.sent;
            min_date = Array.isArray(temp_date) && temp_date.length > 0 ? (0, _mysqlHelper.removeRowDataPacket)(temp_date)[0].min_date : "";
            console.log("min_date", min_date);
            console.log("start_date", start_date);
            _context.next = 11;
            return (0, _extractFunctionsMain.readTableMaxIdByDate)(start_date, destinyTable, destinyDateField, destinyNumberField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readTableMaxIdByDate"), err);
            });

          case 11:
            maxValueTemp = _context.sent;
            maxValue = maxValueTemp ? (0, _mysqlHelper.removeRowDataPacket)(maxValueTemp)[0].maxId : "";
            console.log("maxValue on date", start_date, maxValue);
            _context.next = 16;
            return (0, _extractFunctionsMain.readOriginByDate)(start_date, originTable, originDateField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginByDate"), err);
            });

          case 16:
            result = _context.sent;

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 38;
              break;
            }

            extendedResult = result.map(function (x) {
              x.callentry_id = x.id;
              x.callentry_agent_id = x.id_agent;
              x.callentry_queue_id = x.id_queue_call_entry;
              x.callentry_contact_id = x.id_contact;
              x.callentry_callerid = x.callerid;
              x.callentry_datetime_init = x.datetime_init;
              x.callentry_datetime_end = x.datetime_end;
              x.callentry_duration_sec = x.duration;
              x.callentry_status = x.status;
              x.callentry_transfer = x.transfer;
              x.callentry_datetime_entry_queue = x.datetime_entry_queue;
              x.callentry_duration_sec_wait = x.duration_wait;
              x.callentry_uniqueid = x.uniqueid;
              x.callentry_campaign_id = x.id_campaign;
              x.callentry_trunk = x.trunk;
              x.callentry_people_json = JSON.stringify({
                agent: {
                  id: x.callentry_agent_id
                }
              });
              x.callentry_operation_json = JSON.stringify({
                queue: {
                  id: x.callentry_queue_id
                }
              });
              x.callentry_date = (0, _moment["default"])(x.callentry_datetime_entry_queue).format("YYYY-MM-DD");
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.id_agent;
              delete y.id_queue_call_entry;
              delete y.id_contact;
              delete y.callerid;
              delete y.datetime_init;
              delete y.datetime_end;
              delete y.duration;
              delete y.status;
              delete y.transfer;
              delete y.datetime_entry_queue;
              delete y.duration_wait;
              delete y.uniqueid;
              delete y.id_campaign;
              delete y.trunk;
              return y;
            });
            validation = extendedResult[0] ? true : false;

            if (!validation) {
              _context.next = 34;
              break;
            }

            _context.prev = 21;
            _context.next = 24;
            return (0, _extractFunctionsMain.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractMainCallEntry caught it - writeDestiny", err);
            });

          case 24:
            written = _context.sent;
            return _context.abrupt("return", "extractMainCallEntry end");

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](21);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 32:
            _context.next = 36;
            break;

          case 34:
            console.log("********************************************");
            console.log("El resultado est\xE1 vac\xEDo en ".concat(originTable));

          case 36:
            _context.next = 40;
            break;

          case 38:
            console.log("********************************************");
            console.log("No hay registros nuevos por actualizar en ".concat(destinyTable));

          case 40:
            return _context.abrupt("return", "extractMainCallEntry end");

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[21, 28]]);
  }));
  return _extractMainCallEntry.apply(this, arguments);
}

module.exports = {
  extractMainCallEntry: extractMainCallEntry
};