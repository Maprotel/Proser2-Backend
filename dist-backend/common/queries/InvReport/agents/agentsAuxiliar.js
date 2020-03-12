"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentsAuxiliarReport = agentsAuxiliarReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function agentsAuxiliarReport(_x) {
  return _agentsAuxiliarReport.apply(this, arguments);
}
/******************************************************************** */


function _agentsAuxiliarReport() {
  _agentsAuxiliarReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryGroup, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {
              total: [],
              group: [],
              detail: []
            }; // SQL DETAIL ******************************************************

            queryDetail = query(userSelection);
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(queryDetail);

          case 5:
            result.detail = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            result.detail = {
              errorDetail: _context.t0
            };

          case 11:
            // SQL GROUP ******************************************************
            queryGroup = "\n\n  SELECT\n  ".concat(groupFields(userSelection), "\n  FROM\n  (").concat(query(userSelection), ") as detail\n  \n  GROUP BY agent_id\n   ");
            _context.prev = 12;
            _context.next = 15;
            return pool.destinyReports.query(queryGroup);

          case 15:
            result.group = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](12);
            result.group = {
              errorDetail: _context.t1
            };

          case 21:
            // SQL TOTAL ******************************************************
            queryTotal = "\n\n   SELECT\n   ".concat(totalFields(userSelection), "\n   FROM\n   (").concat(query(userSelection), ") as detail\n    ");
            _context.prev = 22;
            _context.next = 25;
            return pool.destinyReports.query(queryTotal);

          case 25:
            result.total = _context.sent;
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t2 = _context["catch"](22);
            result.total = {
              errorTotal: _context.t2
            };

          case 31:
            return _context.abrupt("return", result);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8], [12, 18], [22, 28]]);
  }));
  return _agentsAuxiliarReport.apply(this, arguments);
}

function totalFields() {
  return "\n\n  NOW() as now\n  ,'' as break_name\n  ,'' as record_id\n  ,'' as previous_day\n  ,'' as connected\n  ,SUM(connected_num) as connected_num\n  ,COUNT(agent_id) as agent_id\n  ,SUM(times_registered) as times_registered\n  ,'' as agent_name\n  ,'' as agent_legal_id\n  ,'' as agent_internal_id\n  ,'' as agent_extension\n  ,'' as agent_supervisor_name\n  ,'' as agent_schedule_name\n  ,COUNT(datetime_init) as datetime_init\n  ,COUNT(datetime_end) as datetime_end\n  ,MIN(min_date) as min_date\n  ,MAX(max_date) as max_date\n  ,MIN(start_time) as start_time\n  ,MAX(end_time) as end_time\n  ,SEC_TO_TIME(SUM(duration_time_secs)) as duration_time\n  ,SUM(duration_time_secs) as duration_time_secs\n\n  ";
}
/******************************************************************** */


function groupFields() {
  return "\n  NOW() as now\n  ,'' as break_name\n  ,'' as record_id\n  ,'' as previous_day\n  ,IF(SUM(connected_num) > 0 , 'si-conectado', 'no-conectado') as connected\n  ,SUM(connected_num) as connected_num\n  ,(agent_id) as agent_id\n  ,SUM(times_registered) as times_registered\n  ,(agent_name) as agent_name\n  ,(agent_legal_id) as agent_legal_id\n  ,(agent_internal_id) as agent_internal_id\n  ,(agent_extension) as agent_extension\n  ,(agent_supervisor_name) as agent_supervisor_name\n  ,(agent_schedule_name) as agent_schedule_name\n  ,COUNT(datetime_init) as datetime_init\n  ,COUNT(datetime_end) as datetime_end\n  ,MIN(min_date) as min_date\n  ,MAX(max_date) as max_date\n  ,MIN(start_time) as start_time\n  ,MAX(end_time) as end_time\n  ,SEC_TO_TIME(SUM(duration_time_secs)) as duration_time\n  ,SUM(duration_time_secs) as duration_time_secs\n  ";
}
/******************************************************************** */


function detailFields() {
  return "\n\n  NOW() as now\n  ,inv_break_name as break_name\n  ,audit_id as record_id\n  ,IF(DATE(audit_datetime_init) = DATE(audit_datetime_end) OR audit_datetime_init is null, 'no-previo', 'si-previo') as previous_day\n\n  ,IF(audit_datetime_end is null, 'si-conectado', 'no-conectado') as connected\n  ,IF(audit_datetime_end is null, 1, 0) as connected_num\n\n  ,audit_agent_id as agent_id\n  ,1 as times_registered\n  ,inv_agent_name as agent_name\n  ,inv_agent_legal_id as agent_legal_id\n  ,inv_agent_internal_id as agent_internal_id\n\n  ,inv_agent_extension as agent_extension\n  ,JSON_UNQUOTE(JSON_EXTRACT(audit_people_json, \"$supervisor[0].name\") ) as agent_supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(audit_time_json, \"$schedule[0].name\") ) as agent_schedule_name\n\n  ,audit_datetime_init as datetime_init\n\n  ,IF(audit_datetime_end is not null, audit_datetime_end, NOW() ) as datetime_end\n\n  ,audit_datetime_init as min_date\n  ,IF(audit_datetime_end is not null, audit_datetime_end, NOW() ) as max_date\n\n  \n  ,TIME(audit_datetime_init) as start_time\n  ,TIME(IF(audit_datetime_end is null, now(), audit_datetime_end)) as end_time\n  \n  ,SEC_TO_TIME(IF(audit_datetime_end is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init, now()))) as duration_time\n\n  ,IF(audit_datetime_end is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init, now())) as duration_time_secs\n  ";
}
/***************************************************************************************** */


function query(userSelection, option) {
  var fields = detailFields(userSelection);

  if (option === "group") {
    fields = groupFields(userSelection);
  }

  return "\n\n    SELECT\n      \n        ".concat(detailFields(userSelection), "\n      \n      -- ---------------------------------------------------------------\n-- TABLES & JOINS\n\n        FROM\n\n        MainAudit\n        LEFT OUTER JOIN InvAgent\n        ON audit_agent_id = inv_agent_id\n\n        LEFT OUTER JOIN InvBreak\n        ON audit_break_id = inv_break_id\n\n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n\n        AND\n        audit_break_id is not null\n        AND\n        inv_break_productivity = 0\n\n        -- TIME AND DATE\n        ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n        -- ROLE\n        ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n        -- BREAK\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n        -- ASIGNACION\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n    ");
}