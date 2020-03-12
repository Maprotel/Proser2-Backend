"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayMonitorByAgents = displayMonitorByAgents;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function displayMonitorByAgents(_x) {
  return _displayMonitorByAgents.apply(this, arguments);
} // TOTAL FIELDS


function _displayMonitorByAgents() {
  _displayMonitorByAgents = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // DEFINE VARIABLES
            result = {
              now: (0, _moment["default"])().format("YYYY-MM-DD hh:mm:ss"),
              total: [],
              detail: []
            };

            if (userSelection.mode.name = "Actual") {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }
            /* DETAIL ********************************* */


            queryDetail = "\n   SELECT\n     ".concat(detailFields(userSelection), "\n   FROM\n     ").concat(query(userSelection), "\n ");
            _context.prev = 3;
            _context.next = 6;
            return pool.destinyReports.query(queryDetail);

          case 6:
            result.detail = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            result.detail = {
              errorDetail: _context.t0
            };

          case 12:
            /* TOTAL ********************************* */
            queryTotal = "\n   SELECT\n     ".concat(totalFields(userSelection), "\n   FROM\n     (").concat(queryDetail, ") AS detail\n   ");
            _context.prev = 13;
            _context.next = 16;
            return pool.destinyReports.query(queryTotal);

          case 16:
            result.total = _context.sent;
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t1 = _context["catch"](13);
            result.total = {
              errorTotal: _context.t1
            };

          case 22:
            return _context.abrupt("return", result);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9], [13, 19]]);
  }));
  return _displayMonitorByAgents.apply(this, arguments);
}

function totalFields(userSelection) {
  return "\n  DATE(now()) as now_date\n  ,TIME(now()) as now_time\n  ,'' as queueName\n  ,SUM(activeCalls) as activeCalls\n  ,SUM(agentsLogin) as agentsLogin\n  ,SUM(agentsAvailable) as agentsAvailable\n  ,SUM(agentsBusy) as agentsBusy\n  ,SUM(agentsBreak) as agentsBreak\n  ,SUM(agentsAssignation) as agentsAssignation\n  \n  ";
}
/******************************************************* */
// DETAIL FIELDS


function detailFields(userSelection) {
  return "\n  DATE(now()) as now_date\n  ,TIME(now()) as now_time\n  ,inv_queue_shortname as queueName\n  ,CALLS.activeCalls as activeCalls\n  ,AUDIT.agentsLogin as agentsLogin\n  ,AUDIT.agentsAvailable as agentsAvailable\n  ,AUDIT.agentsBusy as agentsBusy\n  ,AUDIT.agentsBreak as agentsBreak\n  ,AUDIT.agentsAssignation as agentsAssignation\n\n  ";
}
/********************************************************* */
// MAIN QUERY


function query(userSelection) {
  return "\n\n  InvQueue\n\n  LEFT OUTER JOIN\n  (".concat(auditQuery(userSelection), ") as AUDIT\n  ON inv_queue_id = AUDIT.queueId\n\n  LEFT OUTER JOIN\n  (").concat(callsQuery(userSelection), ") as CALLS\n  ON inv_queue_id = CALLS.queueId\n\n  WHERE\n  inv_queue_status = 'A'\n\n  GROUP BY inv_queue_shortname\n\n\n-- ---------------------------------------------------------------\n-- END\n");
}

function auditQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\nJSON_UNQUOTE(JSON_EXTRACT(JSON_EXTRACT(audit_operation_json, '$.queue[*].name'), '$[0]')) as queueName\n,JSON_EXTRACT(JSON_EXTRACT(audit_operation_json, '$.queue[*].id'), '$[0]') as queueId\n,SUM(case when (audit_datetime_end is null AND audit_break_id is null) then 1 else 0 end) as agentsLogin\n,SUM(case when (rca_agent_status = 'Logueado' AND rca_group_name = 'Disponible') then 1 else 0 end) as agentsAvailable\n,SUM(case when (rca_agent_status = 'Logueado' AND rca_group_name = 'Ocupado') then 1 else 0 end) as agentsBusy\n,SUM(case when (audit_datetime_end is null AND audit_break_id is not null AND inv_break_productivity = 0) then 1 else 0 end) as agentsBreak\n,SUM(case when (audit_datetime_end is null AND audit_break_id is not null AND inv_break_productivity = 1) then 1 else 0 end) as agentsAssignation\n\nFROM\nRealAudit\n\nLEFT OUTER JOIN RealCurrentAgents\nON audit_id = rca_audit_login_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "audit_datetime_init"), "\n\nGROUP BY queueName\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function callsQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\ninv_queue_shortname as queueName\n,rcc_callentry_queue_id as queueId\n,SUM(case when rcc_callentry_status = 'activa' then 1 else 0 end) as activeCalls\n\nFROM\nRealCurrentCalls\n\nLEFT OUTER JOIN InvQueue\nON rcc_callentry_queue_id = inv_queue_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "rcc_callentry_datetime_entry_queue"), "\n\nGROUP BY\ninv_queue_name\n\n-- ---------------------------------------------------------------\n-- END\n ");
}