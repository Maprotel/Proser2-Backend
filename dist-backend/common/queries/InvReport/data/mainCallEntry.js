"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainCallEntryReport = mainCallEntryReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function mainCallEntryReport(_x) {
  return _mainCallEntryReport.apply(this, arguments);
}

function _mainCallEntryReport() {
  _mainCallEntryReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n\n,callentry_id\n,callentry_agent_id\n\n,inv_agent_name\n,inv_queue_number\n\n,JSON_UNQUOTE(JSON_EXTRACT(callentry_people_json, \"$.supervisor.name\") ) as agent_supervisor_name\n\n,callentry_queue_id\n,callentry_contact_id\n,callentry_callerid\n,DATE_FORMAT(callentry_datetime_init, \"%Y-%m-%d %H:%i:%S\") as callentry_datetime_init\n,DATE_FORMAT(callentry_datetime_end, \"%Y-%m-%d %H:%i:%S\") as callentry_datetime_end\n,callentry_duration_sec\n,callentry_status\n,callentry_transfer\n,DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d %H:%i:%S\") as callentry_datetime_entry_queue\n,callentry_duration_sec_wait\n,callentry_uniqueid\n,callentry_campaign_id\n,callentry_trunk\n,callentry_date\n,callentry_queue_time_expired\n,callentry_type\n,callentry_auto_campaign\n,callentry_queue_number\n,__QUEUELOG__\n,callentry_who_hung\n,callentry_hung_agent\n,callentry_hung_caller\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n-- ---------------------------------------------------------------\n-- END\n");
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
  return _mainCallEntryReport.apply(this, arguments);
}