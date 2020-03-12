"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayMonitorByCalls = displayMonitorByCalls;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function displayMonitorByCalls(_x) {
  return _displayMonitorByCalls.apply(this, arguments);
} // TOTAL FIELDS


function _displayMonitorByCalls() {
  _displayMonitorByCalls = (0, _asyncToGenerator2["default"])(
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
            };

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }
            /* DETAIL ********************************* */


            queryDetail = "\n    SELECT\n      ".concat(detailFields(userSelection), "\n    FROM\n      ").concat(query(userSelection), "\n  ");
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
            queryTotal = "\n    SELECT\n      ".concat(totalFields(userSelection), "\n    FROM\n      (").concat(queryDetail, ") AS detail\n    ");
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
  return _displayMonitorByCalls.apply(this, arguments);
}

function totalFields(userSelection) {
  var group_name = userSelection.groupBy.name;
  return "\n  DATE(now()) as now_date\n  ,TIME(now()) as now_time\n  ,idealResponseTime\n  ,'' as queueName\n  ,'' as queueNumber\n  ,MAX(maxWaitTime) as maxWaitTime\n  ,MAX(maxWaitTimeAnswer) as maxWaitTimeAnswer\n  ,MAX(maxWaitTimeAbandon) as maxWaitTimeAbandon\n  ,SUM(inboundReceived) AS inboundReceived\n  ,SUM(inboundAttended) AS inboundAttended\n  ,SUM(inboundAbandoned) AS inboundAbandoned\n  ,SUM(inboundBeforeTime) AS inboundBeforeTime\n  ,SUM(inboundBeforeMinute) AS inboundBeforeMinute\n  ,SUM(inboundShort) AS inboundShort\n  ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel\n  ,SUM(inboundAttendedLastHourBeforeTime)/SUM(inboundReceivedLastHour) AS inboundServiceLevelLastHourBeforeTime\n  ,SUM(inboundBeforeMinute)/SUM(inboundReceived) AS inboundServiceLevelMinute\n  ,SUM(inboundAttendedLastHourBeforeMinute)/SUM(inboundReceivedLastHour) AS inboundServiceLevelLastHourBeforeMinute\n  ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel\n  ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel\n  \n  ";
}
/******************************************************* */
// DETAIL FIELDS


function detailFields(userSelection) {
  return "\nDATE(now()) as now_date\n,TIME(now()) as now_time\n,".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n,inv_queue_shortname as queueName\n,callentry_queue_number as queueNumber\n,MAX(callentry_duration_sec_wait) as maxWaitTime\n,MAX(IF(callentry_status = 'terminada', callentry_duration_sec_wait, 0)) as maxWaitTimeAnswer\n,MAX(IF(callentry_status = 'abandonada', callentry_duration_sec_wait, 0)) as maxWaitTimeAbandon\n,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundReceived\n,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended\n,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS inboundAbandoned\n,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeTime\n,SUM(case when (callentry_duration_sec_wait <= 59.9 AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeMinute\n,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS inboundShort\n,SUM(case when (callentry_status = 'terminada' OR callentry_status = 'abandonada') AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end) as inboundReceivedLastHour\n,SUM(case when (callentry_status = 'terminada' ) AND (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end) as inboundAttendedLastHourBeforeTime\n,SUM(case when (callentry_status = 'terminada' ) AND (callentry_duration_sec_wait <= 59.9) AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end) as inboundAttendedLastHourBeforeMinute\n,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevel\n,SUM(case when (callentry_status = 'terminada') AND (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' ) AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end) AS inboundServiceLevelLastHourBeforeTime\n,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= 59.9) then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevelMinute\n,SUM(case when (callentry_status = 'terminada') AND (callentry_duration_sec_wait <= 59.9) AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' ) AND (callentry_datetime_init >= (TIMEDIFF(TIME(now()), SEC_TO_TIME(3600)))) then 1 else 0 end) AS inboundServiceLevelLastHourBeforeMinute\n,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAttentionLevel\n,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAbandonLevel\n\n  ");
}
/********************************************************* */
// MAIN QUERY


function query(userSelection) {
  return "\n\n  RealCallEntry\n\n  LEFT OUTER JOIN InvAgent\n  ON callentry_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN InvQueue\n  ON callentry_queue_id = inv_queue_id\n\n\n-- -----------------------------\nWHERE 1\n\nAND\ninv_queue_type = 'inbound'\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "callentry_datetime_entry_queue"), "\nAND callentry_date is not null\n\n\nGROUP BY inv_queue_name\n\n\n-- ---------------------------------------------------------------\n-- END\n");
}