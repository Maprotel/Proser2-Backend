"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentsConnectionReport = agentsConnectionReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function agentsConnectionReport(_x) {
  return _agentsConnectionReport.apply(this, arguments);
}
/******************************************************************** */


function _agentsConnectionReport() {
  _agentsConnectionReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryGroup, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {
              total: [],
              detail: [],
              individual: []
            }; // SQL DETAIL

            queryDetail = query(userSelection, "detail");
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
            // SQL GROUP
            queryGroup = query(userSelection, "group") + "\n" + "GROUP BY audit_agent_id";
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
            // SQL TOTAL
            queryTotal = "\n\n   SELECT\n   ".concat(totalFields(userSelection), "\n   FROM\n\n   (").concat(query(userSelection, "group") + "\n" + "GROUP BY audit_agent_id", ") as detail\n\n    ");
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
  return _agentsConnectionReport.apply(this, arguments);
}

function totalFields() {
  return "\n\n   '' as previous_day\n  ,'' as connected\n  ,COUNT(agent_id) as agent_id\n  ,SUM(times_registered) as times_registered\n  ,COUNT(agent_name) as agent_name\n  ,COUNT(agent_legal_id) as agent_legal_id\n  ,COUNT(agent_internal_id) as agent_internal_id\n  ,COUNT(agent_extension) as agent_extension\n  ,COUNT(agent_supervisor_name) as agent_supervisor_name\n  ,COUNT(agent_schedule_name) as agent_schedule_name\n  ,MIN(min_date) as min_date\n  ,MAX(max_date) as max_date\n  ,MIN(start_time) as start_time\n  ,MAX(end_time) as end_time\n  ,SEC_TO_TIME(SUM(connection_time_secs)) as connection_time\n  ,SUM(connection_time_secs) as connection_time_secs\n\n  ";
}
/******************************************************************** */


function groupFields() {
  return "\n\n  'prev' as previous_day\n  ,IF(COUNT(audit_datetime_init) <> COUNT(audit_datetime_end) , 'si-conectado', 'no-conectado') as connected\n  ,audit_agent_id as agent_id\n  ,COUNT(audit_id) as times_registered\n  ,inv_agent_name as agent_name\n  ,inv_agent_legal_id as agent_legal_id\n  ,inv_agent_internal_id as agent_internal_id\n  ,hca_agent_extension as agent_extension\n  ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as hca_agent_supervisor_name as agent_supervisor_name\n  ,hca_agent_schedule_name as agent_schedule_name\n  ,DATE(audit_datetime_init) as min_date\n  ,DATE(IF(audit_datetime_end is null, now(), audit_datetime_end)) as max_date\n  ,TIME(audit_datetime_init) as start_time\n  ,TIME(IF(audit_datetime_end is null, now(), audit_datetime_end)) as end_time\n  ,SEC_TO_TIME(IF(audit_duration_sec is not null, SUM(audit_duration_sec), SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())))) as connection_time\n  ,IF(audit_duration_sec is not null, SUM(audit_duration_sec), SUM(TIMESTAMPDIFF(second,audit_datetime_init,now()))) as connection_time_secs\n  ";
}
/******************************************************************** */


function detailFields() {
  return "\n  IF(DATE(audit_datetime_init) = DATE(audit_datetime_end) OR audit_datetime_init is null, 'no-previo', 'si-previo') as previous_day\n  ,IF(audit_datetime_end is null, 'si-conectado', 'no-conectado') as connected\n  ,audit_agent_id as agent_id\n  ,'' as times_registered\n  ,inv_agent_name as agent_name\n  ,inv_agent_legal_id as agent_legal_id\n  ,inv_agent_internal_id as agent_internal_id\n  ,hca_agent_extension as agent_extension\n  ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as hca_agent_supervisor_name as agent_supervisor_name\n  ,hca_agent_schedule_name as agent_schedule_name\n  ,audit_datetime_init as min_date\n  ,audit_datetime_end as max_date\n  ,TIME(audit_datetime_init) as start_time\n  ,TIME(IF(audit_datetime_end is null, now(), audit_datetime_end)) as end_time\n  ,SEC_TO_TIME(IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now()))) as connection_time\n  ,IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now())) as connection_time_secs\n  ";
}

function query(userSelection, option) {
  var fields = detailFields(userSelection);

  if (option === "group") {
    fields = groupFields(userSelection);
  }

  return "\n\n    SELECT\n      \n        ".concat(fields, "\n      \n      -- ---------------------------------------------------------------\n-- TABLES & JOINS\n\n        FROM\n\n        MainAudit\n        LEFT OUTER JOIN InvAgent\n        ON audit_agent_id = inv_agent_id\n\n        LEFT OUTER JOIN InvBreak\n        ON audit_break_id = inv_break_id\n\n        LEFT OUTER JOIN HcaAgent\n        ON audit_agent_id = hca_agent_id\n        AND audit_date = hca_agent_date\n\n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n\n        AND\n        audit_break_id is null\n\n        -- TIME AND DATE\n        ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n        -- BREAK\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n        -- ASIGNACION\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n        -- PLANNED CLIENT\n\n\n        -- PLANNED QUEUE\n\n\n        -- PLANNED SERVICE\n\n\n        -- PLANNED CAMPAIGN\n\n    ");
}