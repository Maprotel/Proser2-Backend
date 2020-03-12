"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operationProductivityReport = operationProductivityReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _dateFunctions = require("../../../functions/dateFunctions");

var _sqlFunctions = require("../../../functions/sqlFunctions");

/******************************************************************** */
function operationProductivityReport(_x) {
  return _operationProductivityReport.apply(this, arguments);
}

function _operationProductivityReport() {
  _operationProductivityReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, sqlArray, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            _context.next = 3;
            return queryBuilder(userSelection);

          case 3:
            sqlArray = _context.sent;
            query = "\n\n  SELECT\n  *\n  \n  FROM InvAgent\n\n  LEFT OUTER JOIN\n  (".concat(auditConecctionQuery(userSelection), ") as CONNECT\n   ON inv_agent_id = CONNECT.audit_agent_id\n\n  LEFT OUTER JOIN\n  (").concat(cdrQuery(userSelection), ") as CDR\n  ON inv_agent_id = CDR.cdr_agent_id\n\n  LEFT OUTER JOIN\n  (").concat(callentryQuery(userSelection), ") as CALLENTRY\n  ON inv_agent_id = CALLENTRY.callentry_agent_id\n \n\n  LEFT OUTER JOIN\n  (").concat(sqlArray, ") as BREAK\n  ON inv_agent_id = BREAK.agent_id  \n  \n  WHERE \n  CONNECT.login_duration_sec is not null\n  \n  GROUP BY inv_agent_id\n\n\n  ");
            _context.prev = 5;
            _context.next = 8;
            return pool.destinyReports.query(query);

          case 8:
            resultPre = _context.sent;
            result = resultPre;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            result = {
              error: _context.t0
            };

          case 15:
            return _context.abrupt("return", result);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12]]);
  }));
  return _operationProductivityReport.apply(this, arguments);
}

function queryBuilder(_x2) {
  return _queryBuilder.apply(this, arguments);
}

function _queryBuilder() {
  _queryBuilder = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(userSelection) {
    var result, query, resultPre, fieldArray;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            query = "\n        SELECT\n            inv_break_id as id\n            ,inv_break_name as name\n            ,inv_break_productivity as productivity\n            ,inv_break_class as class\n            ,inv_break_shortname as shortname\n        \n        FROM\n            InvBreak\n    ";
            _context2.prev = 2;
            _context2.next = 5;
            return pool.destinyReports.query(query);

          case 5:
            resultPre = _context2.sent;
            fieldArray = resultPre.map(function (x) {
              return "(CAST(JSON_OBJECT(\"agent_id\", audit_agent_id,\"name\", '".concat(x.name, "',\"clase\", '").concat(x["class"], "',\"count\", SUM(CASE when audit_break_id = ").concat(x.id, " then 1 else 0 end),\"duration_sec\", SUM(CASE when audit_break_id = ").concat(x.id, " then (IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), audit_duration_sec) ) else 0 end),\"duration_time\", SEC_TO_TIME(SUM(CASE when audit_break_id = ").concat(x.id, " then (IF(audit_datetime_end is null, TIMESTAMPDIFF(second,audit_datetime_init,now()), audit_duration_sec) ) else 0 end)) ) AS CHAR(10000) CHARACTER SET utf8) ) as '").concat(x.shortname, "'");
            });
            result = "\n          SELECT\n          audit_agent_id as agent_id\n          ,".concat(fieldArray, "\n        \n          FROM\n          MainAudit\n        \n          WHERE\n          1\n          AND\n          audit_break_id is not null\n          \n          -- TIME AND DATE\n          ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n          -- AGENT\n          ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n          -- SUPERVISOR\n          ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n\n          -- SCHEDULE\n          ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n\n          -- ROLE\n          ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n\n\n          -- CLIENT\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n          -- QUEUE\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n          -- SERVICE\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n          -- CAMPAIGN\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n          -- BREAK\n          ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n          -- ASIGNACION\n          ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n\n          GROUP BY agent_id\n          ");
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            result = {
              error: _context2.t0
            };

          case 13:
            return _context2.abrupt("return", result);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return _queryBuilder.apply(this, arguments);
}

function callentryQuery(userSelection) {
  return "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\n    callentry_agent_id\n    ,SUM(callentry_duration_sec) as inbound_duration_sec\n    ,SEC_TO_TIME(SUM(callentry_duration_sec)) as inbound_duration_time\n\n    -- ---------------------------------------------------------------\n    -- TABLES & JOINS\n    \n    FROM\n    \n    MainCallEntry\n    LEFT OUTER JOIN InvAgent\n    ON callentry_agent_id = inv_agent_id\n    \n    LEFT OUTER JOIN HcaAgent\n    ON callentry_agent_id = hca_agent_id\n    AND callentry_date = hca_agent_date\n    \n    LEFT OUTER JOIN InvQueue\n    ON callentry_queue_id = inv_queue_id\n    \n    LEFT OUTER JOIN HcaQueue\n    ON callentry_queue_id = hca_queue_id\n    AND callentry_date = hca_queue_date\n    \n    \n    -- ---------------------------------------------------------------\n    -- CONDITIONS\n    WHERE 1\n    AND\n    callentry_status = 'terminada'\n    \n    -- TIME AND DATE\n    ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_init"), "\n\n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n\n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n\n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n\n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n\n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_operation_json", "client"), "\n\n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_agent_operation_json", "service"), "\n\n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\nGROUP BY callentry_agent_id\n\n-- ---------------------------------------------------------------\n-- END\n ");
}

function cdrQuery(userSelection) {
  return "\n  -- ---------------------------------------------------------------\n  -- MAINCDR FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n\n    cdr_agent_id\n    ,SUM(cdr_duration_sec) as outbound_duration_sec\n    ,SEC_TO_TIME(SUM(cdr_duration_sec)) as outbound_duration_time\n    \n    -- ---------------------------------------------------------------\n    -- TABLES & JOINS\n    \n    FROM\n    \n    MainCdr\n    LEFT OUTER JOIN InvAgent\n    ON cdr_agent_id = inv_agent_id\n    \n    LEFT OUTER JOIN HcaAgent\n    ON cdr_agent_id = hca_agent_id\n    AND cdr_date = hca_agent_date\n    \n    LEFT OUTER JOIN InvQueue\n    ON cdr_queue_id = inv_queue_id\n    \n    LEFT OUTER JOIN HcaQueue\n    ON cdr_agent_id = hca_queue_id\n    AND cdr_date = hca_queue_date\n    \n    LEFT OUTER JOIN MainCallEntry\n    ON cdr_uniqueid = callentry_uniqueid\n    \n    \n    -- ---------------------------------------------------------------\n    -- CONDITIONS\n    WHERE 1\n\n    AND\n    cdr_call_made = 1\n    \n    -- TIME AND DATE\n    ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n    \n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n    \n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n    \n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n    \n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n    \n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_operation_json", "client"), "\n    \n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n    \n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_operation_json", "service"), "\n    \n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\nGROUP BY cdr_agent_id\n\n-- ---------------------------------------------------------------\n-- END\n");
}

function auditConecctionQuery(userSelection) {
  return "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n \n    audit_agent_id\n    ,IF(audit_datetime_end is null, SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())), SUM(audit_duration_sec)) as login_duration_sec\n    ,SEC_TO_TIME(IF(audit_datetime_end is null, SUM(TIMESTAMPDIFF(second,audit_datetime_init,now())), SUM(audit_duration_sec))) as login_duration_time\n\n    -- ---------------------------------------------------------------\n    -- TABLES & JOINS\n    \n    FROM\n    \n    MainAudit\n    LEFT OUTER JOIN InvAgent\n    ON audit_agent_id = inv_agent_id\n    \n    LEFT OUTER JOIN InvBreak\n    ON audit_break_id = inv_break_id\n    \n    LEFT OUTER JOIN HcaAgent\n    ON audit_agent_id = hca_agent_id\n    AND audit_date = hca_agent_date\n    \n    -- ---------------------------------------------------------------\n    -- CONDITIONS\n    WHERE 1\n    \n    AND\n    audit_break_id is null\n    \n    -- TIME AND DATE\n    ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n\n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n\n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n\n\n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n    -- BREAK\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n    -- ASIGNACION\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n    \n    \n    GROUP BY audit_agent_id\n    \n    -- ---------------------------------------------------------------\n    -- END\n     ");
}