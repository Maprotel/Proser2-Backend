"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operationConsolidateOperationReport = operationConsolidateOperationReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

var _dateFunctions = require("../../../functions/dateFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function operationConsolidateOperationReport(_x) {
  return _operationConsolidateOperationReport.apply(this, arguments);
}
/******************************* 3rd LEVEL QUERIES ************************************ */


function _operationConsolidateOperationReport() {
  _operationConsolidateOperationReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n  SELECT\n\n  base_date\n  , agent_id\n  , agent_name\n  ,'".concat((0, _dateFunctions.objectDateToTextDate)(userSelection.start_date), "' as min_date\n  ,'").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.end_date), "' as max_date\n  -- SAME DATA IN ALL\n  , login_duration_sec\n  , login_duration_time\n  , inbound_calls_attended\n  , inbound_attended_duration_sec\n  , inbound_attended_duration_time\n  , inbound_attended_duration_sec/login_duration_sec as inbound_percent\n  , outbound_calls_made\n  , outbound_made_sec\n  , outbound_made_time\n  , outbound_made_sec/login_duration_sec as outbound_percent\n  , outbound_internal_made\n  , outbound_internal_sec\n  , outbound_internal_time\n  , outbound_internal_sec/login_duration_sec as internal_percent\n  , hung_agent as hung_by_agent\n  , auxiliar_duration_sec\n  , auxiliar_duration_time\n  , auxiliar_duration_sec/login_duration_sec as auxiliar_percent\n  , assignation_duration_sec\n  , assignation_duration_time\n  , assignation_duration_sec/login_duration_sec as assignation_percent\n  , MAIN.login_duration_sec - MAIN.inbound_attended_duration_sec - MAIN.outbound_made_sec - MAIN.auxiliar_duration_sec - MAIN.assignation_duration_sec as available_duration_sec\n  , SEC_TO_TIME(login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec) as available_duration_time\n  , (login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec) /\n      login_duration_sec as available_percent\n  \n    FROM\n      (").concat(preFinalQuery(userSelection), ") as MAIN\n\n    GROUP BY \n      agent_id\n  ");
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
  return _operationConsolidateOperationReport.apply(this, arguments);
}

function preFinalQuery(userSelection) {
  return "\n\nSELECT\n     \nbase_date\n, agent_id\n, agent_name\n-- SAME DATA IN ALL\n, SUM(IF(login_duration_sec is not null, login_duration_sec, 0)) as login_duration_sec\n, SEC_TO_TIME(SUM(IF(login_duration_sec is not null, login_duration_sec, 0))) as login_duration_time\n\n, SUM(IF(inbound_calls_attended is not null, inbound_calls_attended, 0)) as inbound_calls_attended\n, SUM(IF(inbound_attended_duration_sec is not null, inbound_attended_duration_sec, 0)) as inbound_attended_duration_sec\n, SEC_TO_TIME(SUM(IF(inbound_attended_duration_sec is not null, inbound_attended_duration_sec, 0))) as inbound_attended_duration_time\n\n, SUM(IF(outbound_calls_made is not null, outbound_calls_made, 0)) as outbound_calls_made\n, SUM(IF(outbound_made_sec is not null, outbound_made_sec, 0)) as outbound_made_sec\n, SEC_TO_TIME(SUM(IF(outbound_made_sec is not null, outbound_made_sec, 0))) as outbound_made_time\n, SUM(IF(outbound_internal_made is not null, outbound_internal_made, 0)) as outbound_internal_made\n, SUM(IF(outbound_internal_sec is not null, outbound_internal_sec, 0)) as outbound_internal_sec\n, SEC_TO_TIME(SUM(IF(outbound_internal_made is not null, outbound_internal_made, 0))) as outbound_internal_time\n, SUM(IF(auxiliar_duration_sec is not null, auxiliar_duration_sec, 0)) as auxiliar_duration_sec\n, SEC_TO_TIME(SUM(IF(auxiliar_duration_sec is not null, auxiliar_duration_sec, 0))) as auxiliar_duration_time\n, SUM(IF(assignation_duration_sec is not null, assignation_duration_sec, 0)) as assignation_duration_sec\n, SEC_TO_TIME(SUM(IF(assignation_duration_sec is not null, assignation_duration_sec, 0))) as assignation_duration_time\n\n, SUM(IF(hung_agent is not null, hung_agent, 0)) as hung_agent\n\nFROM \n  (".concat(unionQuery(userSelection), ") AS BASE\n\n\nGROUP BY \n    agent_id\n\n\n");
}
/******************************* 2nd LEVEL QUERIES ************************************ */


function unionQuery(userSelection) {
  return "\n  ".concat(auditConecctionQuery(userSelection), "\n\n  -- ------------------------------\n  UNION\n\n  ").concat(callentryQuery(userSelection), "\n\n  -- ------------------------------\n  UNION\n\n  ").concat(cdrQuery(userSelection), "\n\n  -- ------------------------------\n  UNION\n\n  ").concat(auditAuxiliarQuery(userSelection), "\n\n  -- ------------------------------\n  UNION\n\n  ").concat(auditAssignationQuery(userSelection), "\n\n\n  ");
}
/******************************* 1st LEVEL QUERIES ************************************ */


function auditConecctionQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nDATE_FORMAT(audit_datetime_init, '%Y-%m-%d') as base_date\n, audit_agent_id as agent_id\n, inv_agent_name as agent_name\n-- SAME DATA IN ALL\n,IF(audit_datetime_end is null, SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())), SUM(audit_duration_sec)) as login_duration_sec\n,null as inbound_calls_attended\n,null as inbound_attended_duration_sec\n,null as outbound_calls_made\n,null as outbound_made_sec\n,null as outbound_internal_made\n,null as outbound_internal_sec\n,null as auxiliar_duration_sec\n,null as assignation_duration_sec\n,null as hung_agent\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n\nGROUP BY agent_id\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function auditAuxiliarQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nDATE_FORMAT(audit_datetime_init, '%Y-%m-%d') as base_date\n, audit_agent_id as agent_id\n, inv_agent_name as agent_name\n-- SAME DATA IN ALL\n,null as login_duration_sec\n,null as inbound_calls_attended\n,null as inbound_attended_duration_sec\n,null as outbound_calls_made\n,null as outbound_made_sec\n,null as outbound_internal_made\n,null as outbound_internal_sec\n,IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec)) as auxiliar_duration_sec\n,null as assignation_duration_sec\n,null as hung_agent\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is not null\nAND\ninv_break_productivity = 0\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n\nGROUP BY agent_id\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function auditAssignationQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nDATE_FORMAT(audit_datetime_init, '%Y-%m-%d') as base_date\n, audit_agent_id as agent_id\n, inv_agent_name as agent_name\n-- SAME DATA IN ALL\n,null as login_duration_sec\n,null as inbound_calls_attended\n,null as inbound_attended_duration_sec\n,null as outbound_calls_made\n,null as outbound_made_sec\n,null as outbound_internal_made\n,null as outbound_internal_sec\n,null as auxiliar_duration_sec\n,IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec)) as assignation_duration_sec\n,null as hung_agent\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is not null\nAND\ninv_break_productivity = 1\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n\nGROUP BY agent_id\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function cdrQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- MAINCDR FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nDATE_FORMAT(cdr_calldate, '%Y-%m-%d') as base_date\n, cdr_agent_id as agent_id\n, inv_agent_name as agent_name\n-- SAME DATA IN ALL\n,null as login_duration_sec\n,null as inbound_calls_attended\n,null as inbound_attended_duration_sec\n,IF(cdr_call_type = 'outbound', SUM(cdr_call_made), 0) as outbound_calls_made\n,IF(cdr_call_type = 'outbound', SUM(cdr_duration_sec), 0) as outbound_made_sec\n,IF(cdr_call_type = 'internal', SUM(cdr_call_made), 0) as outbound_internal_made\n,IF(cdr_call_type = 'internal', SUM(cdr_duration_sec), 0) as outbound_internal_sec\n,null as auxiliar_duration_sec\n,null as assignation_duration_sec\n,IF(cdr_call_type = 'outbound', COUNT(cdr_call_hungout), 0) as hung_agent\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCdr\nLEFT OUTER JOIN InvAgent\nON cdr_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON cdr_queue_id = inv_queue_id\n\nLEFT OUTER JOIN MainCallEntry\nON cdr_uniqueid = callentry_uniqueid\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\ncdr_call_made = 1\nAND\ncdr_agent_id is not null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n\n\nGROUP BY base_date\n\n-- ---------------------------------------------------------------\n-- END\n");
}

function callentryQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nDATE_FORMAT(callentry_datetime_init, '%Y-%m-%d') as base_date\n, callentry_agent_id as agent_id\n, inv_agent_name as agent_name\n-- SAME DATA IN ALL\n,null as login_duration_sec\n,IF(callentry_status = 'terminada', COUNT(callentry_id), 0) as inbound_calls_attended\n,IF(callentry_status = 'terminada', SUM(callentry_duration_sec), 0) as inbound_attended_duration_sec\n,null as outbound_calls_made\n,null as outbound_made_sec\n,null as outbound_internal_made\n,null as outbound_internal_sec\n,null as auxiliar_duration_sec\n,null as assignation_duration_sec\n,IF(callentry_status = 'terminada', COUNT(callentry_hung_agent), 0) as hung_agent\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\nAND\ninv_queue_type = 'inbound'\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n\n\nGROUP BY agent_id\n\n-- ---------------------------------------------------------------\n-- END\n ");
}