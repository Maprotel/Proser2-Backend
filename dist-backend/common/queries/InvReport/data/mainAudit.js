"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainAuditReport = mainAuditReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function mainAuditReport(_x) {
  return _mainAuditReport.apply(this, arguments);
}

function _mainAuditReport() {
  _mainAuditReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "audit_datetime_init"), "\n\n,audit_id\n,audit_agent_id\n\n,audit_break_id\n,TIME(audit_datetime_init) as audit_datetime_init\n,TIME(audit_datetime_end) as audit_datetime_end\n,audit_duration\n,audit_duration_sec\n,audit_status\n,audit_date\n,audit_operation_json\n\n\n,JSON_UNQUOTE(JSON_EXTRACT(JSON_EXTRACT(audit_people_json, '$.supervisor.name'), '$[0]')) AS supervisor\n,JSON_UNQUOTE(JSON_EXTRACT(JSON_EXTRACT(audit_time_json, '$.schedule.name'), '$[0]')) AS schedule\n,JSON_UNQUOTE(JSON_EXTRACT(JSON_EXTRACT(audit_people_json, '$.role.name'), '$[0]')) AS role\n\n,JSON_VALUE(JSON_EXTRACT(audit_operation_json, \"$.client[*].name\"), \"$[*]\") AS client\n,JSON_VALUE(JSON_EXTRACT(audit_operation_json, \"$.queue[*].name\"), \"$[*]\") AS queue\n,JSON_VALUE(JSON_EXTRACT(audit_operation_json, \"$.service[*].name\"), \"$[*]\") AS service\n,JSON_VALUE(JSON_EXTRACT(audit_operation_json, \"$.campaign[*].name\"), \"$[*]\") AS campaign\n\n,inv_agent_name\n,IF(audit_break_id IS NULL, 'LOGIN/LOGOUT', inv_break_name) AS inv_break_name\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n-- ---------------------------------------------------------------\n-- END\n");
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
  return _mainAuditReport.apply(this, arguments);
}