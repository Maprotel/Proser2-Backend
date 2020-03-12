"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callsIndicatorsByIntervalReport = callsIndicatorsByIntervalReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function callsIndicatorsByIntervalReport(_x) {
  return _callsIndicatorsByIntervalReport.apply(this, arguments);
} // MAIN QUERY


function _callsIndicatorsByIntervalReport() {
  _callsIndicatorsByIntervalReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, querySubtotal, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // DEFINE VARIABLES
            result = {
              detail: [],
              subtotal: [],
              total: []
            };
            /* DETAIL ********************************* */

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
            /* SUBTOTAL ********************************* */
            querySubtotal = "\n  \n  SELECT\n    \n      now() AS now\n    ,'' as day_name\n    ,'' as week_day\n    ,daily.start_date AS start_date\n    ,'SUBTOTAL' AS interval_start\n    ,'' AS end_time\n    ,SUM(inboundReceived) AS inboundReceived\n    ,SUM(inboundAttended) AS inboundAttended\n    ,SUM(inboundBeforeTime) AS inboundBeforeTime\n    ,SUM(inboundBeforeMinute) AS inboundBeforeMinute\n    ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel\n    ,SUM(inboundBeforeMinute)/SUM(inboundReceived) AS inboundServiceLevelMinute\n    ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel\n    ,SUM(operationSeconds)/SUM(inboundAttended) AS inboundTmo\n    ,SUM(waitTimeAttended)/SUM(inboundAttended) AS avgWaitTimeAnswer\n    ,SUM(waitTimeAbandoned)/SUM(inboundAbandoned) AS avgWaitTimeAbandon\n    ,MAX(maxWaitTimeAnswer) as maxWaitTimeAnswer\n    ,MAX(maxWaitTimeAbandon) as maxWaitTimeAbandon\n    ,SUM(inboundAbandoned) AS inboundAbandoned\n    ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel\n\n    FROM\n        (\n          \n          ".concat(query(userSelection), "  ) AS daily\n\n    GROUP BY\n      start_date\n    \n    ");
            _context.prev = 12;
            _context.next = 15;
            return pool.destinyReports.query(querySubtotal);

          case 15:
            result.subtotal = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](12);
            result.subtotal = {
              errorDetail: _context.t1
            };

          case 21:
            /* TOTAL ********************************* */
            queryTotal = "\n    SELECT\n      now() AS now\n    ,'' as day_name\n    ,'' as week_day\n    ,'' AS start_date\n    ,'TOTAL GENERAL' AS interval_start\n    ,'' AS start_time\n    ,'' AS end_time\n    ,SUM(inboundReceived) AS inboundReceived\n    ,SUM(inboundAttended) AS inboundAttended\n    ,SUM(inboundBeforeTime) AS inboundBeforeTime\n    ,SUM(inboundBeforeMinute) AS inboundBeforeMinute\n    ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel\n    ,SUM(inboundBeforeMinute)/SUM(inboundReceived) AS inboundServiceLevelMinute\n    ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel\n    ,SUM(operationSeconds)/SUM(inboundAttended) AS inboundTmo\n    ,SUM(waitTimeAttended)/SUM(inboundAttended) AS avgWaitTimeAnswer\n    ,SUM(waitTimeAbandoned)/SUM(inboundAbandoned) AS avgWaitTimeAbandon\n    ,MAX(maxWaitTimeAnswer) as maxWaitTimeAnswer\n    ,MAX(maxWaitTimeAbandon) as maxWaitTimeAbandon\n    ,SUM(inboundAbandoned) AS inboundAbandoned\n    ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel\n\n    FROM\n        (\n          \n          ".concat(query(userSelection), "  ) AS daily\n    \n    ");
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
  return _callsIndicatorsByIntervalReport.apply(this, arguments);
}

function query(userSelection) {
  return "\n\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n\nnow() AS now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n\n  ,DAYNAME(callentry_date) as day_name\n  ,WEEKDAY(callentry_date) + ").concat(process.env.MONDAY_CONFIG, " as week_day\n\n  ,DATE_FORMAT(callentry_date, \"%Y-%m-%d\") AS start_date\n  \n  ,MIN(DATE_FORMAT(callentry_datetime_entry_queue, '%H:%i:%s')) AS start_time\n  \n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS end_time\n  \n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundReceived\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended\n\n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeTime\n\n  ,SUM(case when (callentry_duration_sec_wait <= 59.9 AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeMinute\n\n  ,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevel\n\n   ,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= 59.9) then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevelMinute\n\n   ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAttentionLevel\n\n   ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundTmo\n\n   ,SUM(IF(callentry_status = 'terminada', callentry_duration_sec_wait, 0))/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS avgWaitTimeAnswer\n\n   ,SUM(IF(callentry_status = 'abandonada', callentry_duration_sec_wait, 0))/\n   SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS avgWaitTimeAbandon\n\n   ,MAX(IF(callentry_status = 'terminada', callentry_duration_sec_wait, 0)) as maxWaitTimeAnswer\n\n   ,MAX(IF(callentry_status = 'abandonada', callentry_duration_sec_wait, 0)) as maxWaitTimeAbandon\n\n   ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS inboundAbandoned\n\n   ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAbandonLevel\n\n   ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end) AS operationSeconds\n   \n   ,SUM(IF(callentry_status = 'terminada', callentry_duration_sec_wait, 0)) AS waitTimeAttended\n\n   ,SUM(IF(callentry_status = 'abandonada', callentry_duration_sec_wait, 0)) AS waitTimeAbandoned\n\n -- ---------------------------------------------------------------\n -- TABLES & JOINS\n FROM\n\n MainCallEntry\n \n LEFT OUTER JOIN InvAgent\n ON callentry_agent_id = inv_agent_id\n  \n LEFT OUTER JOIN InvQueue\n ON callentry_queue_id = inv_queue_id\n \n -- -----------------------------\n WHERE 1\n \n AND\n inv_queue_type = 'inbound'\n \n -- TIME AND DATE\n ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n AND callentry_date is not null\n \n -- AGENT\n ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n \n -- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n \n -- CAMPAIGN\n ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n GROUP BY\n \nstart_date\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQueryToIndicators)(userSelection), "\n\n\n-- ---------------------------------------------------------------\n-- END\n");
}