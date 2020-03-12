"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smsInformation = smsInformation;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _fs = _interopRequireDefault(require("fs"));

var _moment = _interopRequireDefault(require("moment"));

require("dotenv").config();

if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}

var input_date = (0, _moment["default"])().format('YYYY-MM-DD');
/******************************************************************** */

function smsInformation() {
  return _smsInformation.apply(this, arguments);
}

function _smsInformation() {
  _smsInformation = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var result, idealTime, filePath, date, query, resultPre, file;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            idealTime = process.env.CDR_SERVICE_IDEAL_TIME;
            filePath = process.env.DESTINY_FILE_PATH_SMS_LOCAL;
            date = (0, _moment["default"])().format("YYYY-MM-DD");
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n\nDATE_FORMAT(now(), \"%Y-%m-%d\") as Fecha\n,TIME(now()) as Hora\n,inv_queue_sms_name as Cola\n,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS Recibidas\n,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS Atendidas\n,CONCAT(FORMAT((SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ".concat(idealTime, ") then 1 else 0 end)/\nSUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)) * 100, 2), '%') AS NS\n,CONCAT(inv_scale_green, '%') as Meta\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\nLEFT OUTER JOIN InvScale\nON JSON_EXTRACT(inv_queue_system_json, \"$.scale.id\") = inv_scale_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\nAND DATE(callentry_datetime_entry_queue)= '").concat(date, "'\n\n\n\nGROUP BY inv_queue_sms_name \n\n-- ---------------------------------------------------------------\n-- END\n");
            _context.prev = 5;
            _context.next = 8;
            return pool.destinyReports.query(query);

          case 8:
            resultPre = _context.sent;
            file = resultPre.map(function (x) {
              var temp = JSON.stringify(x);
              var content = temp.replace(/["{}]/g, "");
              var path = "".concat(filePath).concat(x.Cola, ".txt");

              _fs["default"].writeFile(path, content, function (error) {
                if (error) {
                  throw error;
                }

                console.log("El archivo ha sido creado exitosamente en: ", path);
              });

              return path;
            });
            result = {
              file: file,
              resultPre: resultPre
            };
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
            result = {
              error: _context.t0
            };

          case 16:
            return _context.abrupt("return", result);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 13]]);
  }));
  return _smsInformation.apply(this, arguments);
}

function exportSms(_x) {
  return _exportSms.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/sms/smsExecute.js


function _exportSms() {
  _exportSms = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(input_date) {
    var getSms;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return smsInformation();

          case 2:
            getSms = _context2.sent;
            console.log('************ SMS END ****************');
            console.log('exportSms', getSms);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _exportSms.apply(this, arguments);
}

module.exports = {
  exportSms: exportSms
};