"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsMain = require("./extract-functions-main");

var _moment = _interopRequireDefault(require("moment"));

var destinyTable = "MainQueueLog";
var destinyTableReal = "RealQueueLog";
var destinyDateField = "queuelog_created";
var destinyNumberField = "queuelog_id";
var originTable = "asterisk.queuelog";
var originDateField = "created";
var originNumberField = "id";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractMainQueueLog(_x) {
  return _extractMainQueueLog.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/main/extract_queuelog.js
// extractMainQueueLog(incoming_date);


function _extractMainQueueLog() {
  _extractMainQueueLog = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var temp_date, min_date, selection, maxValueTemp, maxValue, result, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD");
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date);
            _context.next = 5;
            return (0, _extractFunctionsMain.minDate)(originTable, originDateField)["catch"](function (err) {
              return console.log("extractMainQueueLog caught it - minDate", err);
            });

          case 5:
            temp_date = _context.sent;
            min_date = Array.isArray(temp_date) && temp_date.length > 0 ? (0, _mysqlHelper.removeRowDataPacket)(temp_date)[0].min_date : "";
            console.log("min_date", min_date);
            console.log("start_date", start_date);
            selection = "(event = 'COMPLETEAGENT' OR event = 'COMPLETECALLER') ";
            _context.next = 12;
            return (0, _extractFunctionsMain.readTableMaxIdByDate)(start_date, destinyTable, destinyDateField, destinyNumberField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readTableMaxIdByDate"), err);
            });

          case 12:
            maxValueTemp = _context.sent;
            maxValue = maxValueTemp ? (0, _mysqlHelper.removeRowDataPacket)(maxValueTemp)[0].maxId : "";
            console.log("maxValue on date", start_date, maxValue);
            _context.next = 17;
            return (0, _extractFunctionsMain.readOriginByDateMaxNum)(start_date, originTable, originDateField, originNumberField, maxValue, selection)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginByDate"), err);
            });

          case 17:
            result = _context.sent;

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 39;
              break;
            }

            extendedResult = result.map(function (x) {
              x.queuelog_id = x.id;
              x.queuelog_time = x.time;
              x.queuelog_uniqueid = x.callid;
              x.queuelog_queuename = x.queuename;
              x.queuelog_agent = x.agent;
              x.queuelog_event = x.event;
              x.queuelog_data = x.data;
              x.queuelog_data1 = x.data1;
              x.queuelog_data2 = x.data2;
              x.queuelog_data3 = x.data3;
              x.queuelog_data4 = x.data4;
              x.queuelog_data5 = x.data5;
              x.queuelog_created = x.created;
              x.queuelog_date = (0, _moment["default"])(x.queuelog_time).format("YYYY-MM-DD");
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.time;
              delete y.callid;
              delete y.queuename;
              delete y.agent;
              delete y.event;
              delete y.data;
              delete y.data1;
              delete y.data2;
              delete y.data3;
              delete y.data4;
              delete y.data5;
              delete y.created;
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
              return console.log("extractMainQueueLog caught it - writeDestiny", err);
            });

          case 25:
            written = _context.sent;
            return _context.abrupt("return", "extractMainQueueLog end");

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
            return _context.abrupt("return", "extractMainQueueLog end");

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[22, 29]]);
  }));
  return _extractMainQueueLog.apply(this, arguments);
}

module.exports = {
  extractMainQueueLog: extractMainQueueLog
};