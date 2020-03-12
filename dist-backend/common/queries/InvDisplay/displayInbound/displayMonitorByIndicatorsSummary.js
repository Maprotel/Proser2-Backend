"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayMonitorByIndicatorsSummary = displayMonitorByIndicatorsSummary;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function displayMonitorByIndicatorsSummary(_x) {
  return _displayMonitorByIndicatorsSummary.apply(this, arguments);
} // TOTAL FIELDS


function _displayMonitorByIndicatorsSummary() {
  _displayMonitorByIndicatorsSummary = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // DEFINE VARIABLES
            result = {
              now: (0, _moment["default"])().format('YYYY-MM-DD hh:mm:ss'),
              total: [],
              detail: []
            }; // if ( userSelection.mode.name = 'Actual' ) {
            //   userSelection.start_date = userSelection.current_date;
            //   userSelection.end_date = userSelection.end_date;
            // }

            /* DETAIL ********************************* */

            queryDetail = "\n    SELECT\n      ".concat(detailFields(userSelection), "\n    FROM\n      ").concat(query(userSelection), "\n  ");
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
            /* TOTAL ********************************* */
            queryTotal = "\n    SELECT\n      ".concat(totalFields(userSelection), "\n    FROM\n      (").concat(queryDetail, ") AS detail\n    ");
            _context.prev = 12;
            _context.next = 15;
            return pool.destinyReports.query(queryTotal);

          case 15:
            result.total = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](12);
            result.total = {
              errorTotal: _context.t1
            };

          case 21:
            return _context.abrupt("return", result);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8], [12, 18]]);
  }));
  return _displayMonitorByIndicatorsSummary.apply(this, arguments);
}

function totalFields(userSelection) {
  var group_name = userSelection.groupBy.name;
  return "\n  DATE(now()) as now_date\n  ,TIME(now()) as now_time\n  ,'TOTAL' as queueName\n  \n  ,'' as day_name\n  ,'' as week_day\n\n  ,'' AS start_date\n  ,'' AS start_time\n  ,'' AS end_time\n\n   ,".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n\n  ,SUM(inboundReceived) AS inboundReceived\n\n  ,SUM(inboundAbandoned) AS inboundAbandoned\n\n  ,SUM(inboundAttended) AS inboundAttended\n\n  ,SUM(inboundShort) AS inboundShort\n\n  ,SUM(inboundBeforeTime) AS inboundBeforeTime\n\n  ,SUM(inboundAfterTime) AS inboundAfterTime\n\n  ,SUM(inboundHungAgent) AS inboundHungAgent\n\n  ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel\n\n  ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel\n\n  ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel\n\n  ,SUM(operation_seconds) AS operation_seconds\n\n  ,SEC_TO_TIME(SUM(operation_seconds)) AS operation_time\n\n  ,SUM(wait_seconds) AS wait_seconds\n\n  ,SEC_TO_TIME(SUM(wait_seconds)) AS wait_time\n\n  ,SUM(operation_seconds)/SUM(inboundAttended) AS inboundTmo\n\n  ,SUM(wait_time_recieve)/SUM(inboundAttended) AS inboundAsa\n  \n  ");
}
/******************************************************* */
// DETAIL FIELDS


function detailFields(userSelection) {
  return "\n  DATE(now()) as now_date\n  ,TIME(now()) as now_time\n\n  ,inv_queue_shortname as queueName\n  \n  ,DAYNAME(callentry_date) as day_name\n  ,WEEKDAY(callentry_date) + ".concat(process.env.MONDAY_CONFIG, " as week_day\n\n  ,DATE_FORMAT(callentry_date, \"%Y-%m-%d\") AS start_date\n  \n  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS start_time\n  \n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS end_time\n  \n  ,").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n  ,").concat(process.env.CDR_SHORTCALL_TIME, " AS shortTimeDef\n  \n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundReceived\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS inboundAbandoned\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended\n  \n  ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS inboundShort\n  \n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeTime\n\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) - SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundAfterTime\n  \n  ,SUM(callentry_hung_agent) AS inboundHungAgent\n  \n  ,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevel\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAttentionLevel\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAbandonLevel\n  \n  ,SUM(callentry_duration_sec) AS operation_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS operation_time\n  \n  ,SUM(callentry_duration_sec_wait) AS wait_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) AS wait_time\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundTmo\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAsa\n\n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end) as wait_time_recieve\n\n  ");
}
/********************************************************* */
// MAIN QUERY


function query(userSelection) {
  return "\n\nMainCallEntry\n\nLEFT OUTER JOIN InvAgent as AGENT\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue as QUEUE\nON callentry_queue_id = inv_queue_id\n\n-- -----------------------------\nWHERE 1\n\nAND\nQUEUE.inv_queue_type = 'inbound'\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\nAND callentry_date is not null\n\n\nGROUP BY inv_queue_name \n\n\n-- ---------------------------------------------------------------\n-- END\n");
}