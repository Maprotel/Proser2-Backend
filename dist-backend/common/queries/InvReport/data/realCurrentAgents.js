"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.realCurrentAgentsReport = realCurrentAgentsReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function realCurrentAgentsReport(_x) {
  return _realCurrentAgentsReport.apply(this, arguments);
}

function _realCurrentAgentsReport() {
  _realCurrentAgentsReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n\n,rca_audit_login_id, rca_audit_logout_id, rca_date, __AGENT__, rca_agent_id, rca_agent_name, rca_agent_datetime_login, rca_agent_datetime_logout, rca_agent_duration, rca_agent_duration_sec, rca_agent_status, __GROUP__, rca_group_id, rca_group_name, rca_subgroup_id, rca_subgroup_name, audit_operation_json,  inv_agent_name ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as agent_supervisor_name\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCurrentAgents\nLEFT OUTER JOIN InvAgent\nON rca_agent_id = inv_agent_id\n\nLEFT OUTER JOIN HcaAgent\nON rca_agent_id = hca_agent_id\nAND rca_date = hca_agent_date\n\nLEFT OUTER JOIN MainAudit\nON rca_audit_login_id = audit_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n-- PLANNED CLIENT\n\n\n-- PLANNED QUEUE\n\n\n-- PLANNED SERVICE\n\n\n-- PLANNED CAMPAIGN\n\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n-- ---------------------------------------------------------------\n-- END\n");
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
  return _realCurrentAgentsReport.apply(this, arguments);
}