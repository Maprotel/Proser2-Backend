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

var _sqlFunctions = require("../../functions/sqlFunctions");

/******************************************************************** */
function smsInformation(_x) {
  return _smsInformation.apply(this, arguments);
}

function _smsInformation() {
  _smsInformation = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre, file;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n\nDATE_FORMAT(now(), \"%Y-%m-%d\") as Fecha\n,TIME(now()) as Hora\n,inv_queue_sms_name as Cola\n,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS Recibidas\n,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS Atendidas\n,CONCAT(FORMAT((SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ".concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end)/\nSUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)) * 100, 2), '%') AS NS\n,CONCAT(inv_scale_green, '%') as Meta\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\nLEFT OUTER JOIN InvScale\nON JSON_EXTRACT(inv_queue_system_json, \"$.scale.id\") = inv_scale_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n\n\nGROUP BY inv_queue_sms_name \n\n-- ---------------------------------------------------------------\n-- END\n");
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(query);

          case 5:
            resultPre = _context.sent;
            file = resultPre.map(function (x) {
              var temp = JSON.stringify(x);
              var content = temp.replace(/["{}]/g, '');
              var path = "".concat(process.env.DESTINY_FILE_PATH_SMS).concat(x.Cola, ".txt");

              _fs["default"].writeFile(path, content, function (error) {
                if (error) {
                  throw error;
                }

                console.log('El archivo ha sido creado exitosamente');
              });

              return path;
            });
            result = {
              file: file,
              resultPre: resultPre
            };
            console.log("RESULT", result);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            result = {
              error: _context.t0
            };

          case 14:
            return _context.abrupt("return", result);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));
  return _smsInformation.apply(this, arguments);
}