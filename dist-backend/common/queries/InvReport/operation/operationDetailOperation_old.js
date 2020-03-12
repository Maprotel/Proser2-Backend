"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operationDetailOperationReport = operationDetailOperationReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

var _dateFunctions = require("../../../functions/dateFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function operationDetailOperationReport(_x) {
  return _operationDetailOperationReport.apply(this, arguments);
}

function _operationDetailOperationReport() {
  _operationDetailOperationReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n  SELECT\n\n     agent_id\n    ,agent_name\n    ,start_date\n    ,date_init_interval\n    ,date_end_interval\n    ,supervisor_name\n    ,login_duration_sec\n    ,login_duration_time\n    ,inbound_calls_attended\n    ,inbound_attended_duration_sec\n    ,inbound_attended_duration_time\n    ,inbound_attended_avg_time\n    ,outbound_calls_made\n    ,outbound_made_sec\n    ,outbound_made_time\n    ,outbound_made_avg_time\n    ,outbound_internal_made\n    ,outbound_internal_sec\n    ,outbound_internal_time\n    ,outbound_internal_avg_time\n    ,auxiliar_duration_sec\n    ,auxiliar_duration_time\n    ,percent_auxiliar\n    ,assignation_duration_sec\n    ,assignation_duration_time\n    ,percent_assignation\n    ,login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec as available_sec\n    ,SEC_TO_TIME(login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec) as available_time\n    ,IF((login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec)/\n    login_duration_sec is not null,\n      (login_duration_sec - inbound_attended_duration_sec - outbound_made_sec - auxiliar_duration_sec - assignation_duration_sec)/\n    login_duration_sec, \n        0) as available_percent\n  \n    FROM\n      (".concat(mainQuery(userSelection), ") as MAIN\n\n    GROUP BY \n      agent_id, start_date \n  ");
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
  return _operationDetailOperationReport.apply(this, arguments);
}

function mainQuery(userSelection) {
  return "\n\nSELECT\n    \n   \n    hca_agent_id as agent_id\n,hca_agent_name as agent_name\n,hca_agent_date as start_date\n,'".concat((0, _dateFunctions.objectDateToTextDate)(userSelection.start_date), "' as date_init_interval\n,'").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.end_date), "' as date_end_interval\n,CALLENTRY.supervisor_name as supervisor_name\n,IF(CONNECT.login_duration_sec is not null, CONNECT.login_duration_sec, 0) as login_duration_sec\n,IF(CONNECT.login_duration_time is not null, CONNECT.login_duration_time, 0) as login_duration_time\n,IF(CALLENTRY.inbound_calls_attended is not null, CALLENTRY.inbound_calls_attended, 0) as inbound_calls_attended\n,IF(CALLENTRY.inbound_attended_duration_sec is not null, CALLENTRY.inbound_attended_duration_sec, 0) as inbound_attended_duration_sec\n,IF(CALLENTRY.inbound_attended_duration_time is not null, CALLENTRY.inbound_attended_duration_time, 0) as inbound_attended_duration_time\n,IF(CALLENTRY.inbound_attended_duration_sec/CONNECT.login_duration_sec is not null, CALLENTRY.inbound_attended_duration_sec/CONNECT.login_duration_sec, 0) as inbound_attended_avg_time\n,IF(CDR.outbound_calls_made is not null, CDR.outbound_calls_made, 0) as outbound_calls_made\n,IF(CDR.outbound_made_sec is not null, CDR.outbound_made_sec, 0) as outbound_made_sec\n,IF(CDR.outbound_made_time is not null, CDR.outbound_made_time, 0) as outbound_made_time\n,IF(CDR.outbound_made_sec/login_duration_sec is not null, CDR.outbound_made_sec/login_duration_sec, 0) as outbound_made_avg_time\n,IF(CDR.outbound_internal_made is not null, CDR.outbound_internal_made, 0) as outbound_internal_made\n,IF(CDR.outbound_internal_sec is not null, CDR.outbound_internal_sec, 0) as outbound_internal_sec\n,IF(CDR.outbound_internal_time is not null, CDR.outbound_internal_time, 0) as outbound_internal_time\n,IF(CDR.outbound_internal_sec/login_duration_sec is not null, CDR.outbound_internal_sec/login_duration_sec, 0) as outbound_internal_avg_time\n,IF(AUXILIAR.auxiliar_duration_sec is not null, AUXILIAR.auxiliar_duration_sec, 0) as auxiliar_duration_sec\n,IF(AUXILIAR.auxiliar_duration_time is not null, AUXILIAR.auxiliar_duration_time, 0) as auxiliar_duration_time\n,IF(AUXILIAR.auxiliar_duration_sec/CONNECT.login_duration_sec is not null, AUXILIAR.auxiliar_duration_sec/CONNECT.login_duration_sec, 0) as percent_auxiliar\n,IF(ASSIGNATION.assignation_duration_sec is not null, ASSIGNATION.assignation_duration_sec, 0) as assignation_duration_sec\n,IF(ASSIGNATION.assignation_duration_time is not null, ASSIGNATION.assignation_duration_time, 0) as assignation_duration_time\n,IF(ASSIGNATION.assignation_duration_sec/CONNECT.login_duration_sec is not null, ASSIGNATION.assignation_duration_sec/CONNECT.login_duration_sec, 0) as percent_assignation\n\n\nFROM HcaAgent\n\n    LEFT OUTER JOIN\n    (").concat(auditConecctionQuery(userSelection), ") as CONNECT\n    ON (hca_agent_id = CONNECT.audit_agent_id\n    AND hca_agent_date = CONNECT.login_start_date)\n\n    LEFT OUTER JOIN\n    (").concat(cdrQuery(userSelection), ") as CDR\n    ON (hca_agent_id = CDR.cdr_agent_id\n    AND hca_agent_date = CDR.outbound_start_date)\n\n    LEFT OUTER JOIN\n    (").concat(callentryQuery(userSelection), ") as CALLENTRY\n    ON (hca_agent_id = CALLENTRY.callentry_agent_id\n    AND hca_agent_date = CALLENTRY.inbound_start_date)\n\n    LEFT OUTER JOIN\n    (").concat(auditAuxiliarQuery(userSelection), ") as AUXILIAR\n    ON (hca_agent_id = AUXILIAR.audit_agent_id\n    AND hca_agent_date = AUXILIAR.auxiliar_start_date)\n\n    LEFT OUTER JOIN\n    (").concat(auditAssignationQuery(userSelection), ") as ASSIGNATION\n    ON (hca_agent_id = ASSIGNATION.audit_agent_id\n    AND hca_agent_date = ASSIGNATION.assignation_start_date)\n\n WHERE\n     \n hca_agent_date BETWEEN '").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.start_date), "' AND '").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.end_date), "'\n\n     -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "hca_agent_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_agent_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "hca_agent_operation_json", "campaign"), "\n\n  GROUP BY \n      hca_agent_id, start_date\n\n\n");
}

function auditConecctionQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\naudit_agent_id\n,DATE(audit_datetime_init) as login_start_date\n,count(audit_agent_id) AS COUNT_audit_agent_id\n,IF(audit_datetime_end is null, SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())), SUM(audit_duration_sec)) as login_duration_sec\n,SEC_TO_TIME(IF(audit_datetime_end is null, SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())), SUM(audit_duration_sec))) as login_duration_time\n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n\nGROUP BY audit_agent_id, login_start_date\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function auditAuxiliarQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\naudit_agent_id\n,DATE(audit_datetime_init) as auxiliar_start_date\n,count(audit_agent_id) AS COUNT_audit_agent_id\n,IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec)) as auxiliar_duration_sec\n,SEC_TO_TIME(IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec))) as auxiliar_duration_time\n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is not null\nAND\ninv_break_productivity = 0\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n\nGROUP BY audit_agent_id, auxiliar_start_date\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function auditAssignationQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\naudit_agent_id\n,DATE(audit_datetime_init) as assignation_start_date\n,count(audit_agent_id) AS COUNT_audit_agent_id\n,IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec)) as assignation_duration_sec\n,SEC_TO_TIME(IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), SUM(audit_duration_sec))) as assignation_duration_time\n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\naudit_break_id is not null\nAND\ninv_break_productivity = 1\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n\nGROUP BY audit_agent_id, assignation_start_date\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function cdrQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- MAINCDR FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\n\ncdr_agent_id\n,DATE(cdr_calldate) as outbound_start_date\n,IF(cdr_call_type = 'outbound', SUM(cdr_call_made), 0) as outbound_calls_made\n,IF(cdr_call_type = 'outbound', SUM(cdr_duration_sec), 0) as outbound_made_sec\n,IF(cdr_call_type = 'outbound', SEC_TO_TIME(SUM(cdr_duration_sec)), 0) as outbound_made_time\n,IF(cdr_call_type = 'internal', SUM(cdr_call_made), 0) as outbound_internal_made\n,IF(cdr_call_type = 'internal', SUM(cdr_duration_sec), 0) as outbound_internal_sec\n,IF(cdr_call_type = 'internal', SEC_TO_TIME(SUM(cdr_duration_sec)), 0) as outbound_internal_time\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCdr\nLEFT OUTER JOIN InvAgent\nON cdr_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON cdr_queue_id = inv_queue_id\n\nLEFT OUTER JOIN MainCallEntry\nON cdr_uniqueid = callentry_uniqueid\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\ncdr_call_made = 1\nAND\ncdr_agent_id is not null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "cdr_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "cdr_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "cdr_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\nGROUP BY cdr_agent_id, outbound_start_date\n\n-- ---------------------------------------------------------------\n-- END\n");
}

function callentryQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\ncallentry_agent_id\n,DATE(callentry_datetime_init) as inbound_start_date\n,count(callentry_agent_id) AS COUNT_callentry_agent_id\n,JSON_UNQUOTE(JSON_EXTRACT(callentry_people_json, \"$[0].name\")) as supervisor_name\n,IF(callentry_status = 'terminada', COUNT(callentry_id), 0) as inbound_calls_attended\n,IF(callentry_status = 'terminada', SUM(callentry_duration_sec), 0) as inbound_attended_duration_sec\n,IF(callentry_status = 'terminada', SEC_TO_TIME(SUM(callentry_duration_sec)), 0) as inbound_attended_duration_time\n\n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\nAND\ninv_queue_type = 'inbound'\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\nGROUP BY callentry_agent_id, inbound_start_date\n\n-- ---------------------------------------------------------------\n-- END\n ");
}