"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayInboundDailyByIntervalReport = displayInboundDailyByIntervalReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function displayInboundDailyByIntervalReport(_x) {
  return _displayInboundDailyByIntervalReport.apply(this, arguments);
} // MAIN QUERY


function _displayInboundDailyByIntervalReport() {
  _displayInboundDailyByIntervalReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // DEFINE VARIABLES
            result = {
              detail: [],
              total: []
            };

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }
            /* DETAIL ********************************* */


            queryDetail = query(userSelection);
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
            queryTotal = "\n  SET STATEMENT max_statement_time=5 FOR\n    SELECT\n      now() AS now\n    ,'' as day_name\n    ,'' as week_day\n\n    ,'' AS start_date\n    ,'' AS start_time\n    ,'' AS end_time\n\n    ,".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n\n    ,SUM(inboundReceived) AS inboundReceived\n\n    ,SUM(inboundAbandoned) AS inboundAbandoned\n\n    ,SUM(inboundAttended) AS inboundAttended\n\n    ,SUM(inboundShort) AS inboundShort\n\n    ,SUM(inboundBeforeTime) AS inboundBeforeTime\n\n    ,SUM(inboundAfterTime) AS inboundAfterTime\n\n    ,SUM(inboundHungAgent) AS inboundHungAgent\n\n    ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel\n\n    ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel\n\n    ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel\n\n    ,SUM(operation_seconds) AS operation_seconds\n\n    ,SEC_TO_TIME(SUM(operation_seconds)) AS operation_time\n\n    ,SUM(wait_seconds) AS wait_seconds\n\n    ,SEC_TO_TIME(SUM(wait_seconds)) AS wait_time\n\n    ,SUM(operation_seconds)/SUM(inboundAttended) AS inboundTmo\n\n    ,SUM(wait_time_recieve)/SUM(inboundAttended) AS inboundAsa\n\n    FROM\n        (\n          \n          ").concat(query(userSelection), "  ) AS daily\n    \n    ");
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
  return _displayInboundDailyByIntervalReport.apply(this, arguments);
}

function query(userSelection) {
  return "\n\n-- ---------------------------------------------------------------\n-- FIELDS\nSET STATEMENT max_statement_time=5 FOR\nSELECT\n\n-- TIME & INTERVAL\n\nnow() AS now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n\n  ,DAYNAME(callentry_date) as day_name\n  ,WEEKDAY(callentry_date) + ").concat(process.env.MONDAY_CONFIG, " as week_day\n\n  ,DATE_FORMAT(callentry_date, \"%Y-%m-%d\") AS start_date\n  \n  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS start_time\n  \n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS end_time\n  \n  ,").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n  ,").concat(process.env.CDR_SHORTCALL_TIME, " AS shortTimeDef\n  \n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundReceived\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS inboundAbandoned\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended\n  \n  ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS inboundShort\n  \n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeTime\n\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) - SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundAfterTime\n  \n  ,SUM(callentry_hung_agent) AS inboundHungAgent\n  \n  ,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevel\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAttentionLevel\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAbandonLevel\n  \n  ,SUM(callentry_duration_sec) AS operation_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS operation_time\n  \n  ,SUM(callentry_duration_sec_wait) AS wait_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) AS wait_time\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundTmo\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAsa\n\n   ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end) as wait_time_recieve\n\n -- ---------------------------------------------------------------\n -- TABLES & JOINS\n FROM\n\n RealCallEntry\n \n LEFT OUTER JOIN InvAgent\n ON callentry_agent_id = inv_agent_id\n  \n LEFT OUTER JOIN InvQueue\n ON callentry_queue_id = inv_queue_id\n \n -- -----------------------------\n WHERE 1\n \n AND\n inv_queue_type = 'inbound'\n \n -- TIME AND DATE\n ").concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "callentry_datetime_entry_queue"), "\n AND callentry_date is not null\n \n -- AGENT\n ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n \n -- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n \n -- CAMPAIGN\n ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n\n-- ---------------------------------------------------------------\n-- END\n");
}