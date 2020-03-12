"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callsDetailReport = callsDetailReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function callsDetailReport(_x) {
  return _callsDetailReport.apply(this, arguments);
}

function _callsDetailReport() {
  _callsDetailReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "cdr_calldate"), "\n\n,cdr_id as cdr_id\n,cdr_uniqueid as cdr_uniqueid\n,cdr_agent_id as agent_id\n,IF(cdr_call_type = \"outbound\", cdr_cnam, inv_agent_name) as agent_name\n,cdr_agent_extension as agent_extension\n,IF(cdr_dcontext = 'from-internal-xfer', 'xfer', '') as agent_transfer\n,JSON_UNQUOTE(JSON_EXTRACT(JSON_EXTRACT(inv_agent_people_json, '$.supervisor.name'), '$[0]')) as agent_supervisor_name\n,DATE_FORMAT(cdr_date, '%Y-%m-%d') as start_date\n,DATE_FORMAT(cdr_calldate, '%H:%i:%s') as start_time\n,cdr_call_class as call_class\n,cdr_src as call_source\n,cdr_dst as call_destiny\n,SEC_TO_TIME(cdr_duration_sec) as duration\n,cdr_disposition as call_status\n,cdr_call_type as call_type\n,cdr_recordingfile as record\n,DATE_FORMAT(callentry_datetime_entry_queue, '%H:%i:%s') as queue_time\n,DATE_FORMAT(callentry_datetime_init, '%H:%i:%s') as connection_time\n,DATE_FORMAT(callentry_datetime_end, '%H:%i:%s') as end_time\n,IF(callentry_hung_agent = 1, DATE_FORMAT(callentry_datetime_end, '%H:%i:%s'), null) as time_hung_agent\n,IF(callentry_hung_caller = 1, DATE_FORMAT(callentry_datetime_end, '%H:%i:%s'), null) as time_hung_caller\n,IF(callentry_status = 'abandonada', DATE_FORMAT(callentry_datetime_end, '%H:%i:%s'), null) as time_abandoned\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCdr\nLEFT OUTER JOIN InvAgent\nON cdr_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON cdr_queue_id = inv_queue_id\n\nLEFT OUTER JOIN MainCallEntry\nON cdr_uniqueid = callentry_uniqueid\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "cdr_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "cdr_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "cdr_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n\n\n-- ---------------------------------------------------------------\n-- END\n");
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(query);

          case 5:
            resultPre = _context.sent;
            result = resultPre;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            result = {
              error: _context.t0
            };

          case 12:
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _callsDetailReport.apply(this, arguments);
}