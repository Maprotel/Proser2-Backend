"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callsWaitTimeReport = callsWaitTimeReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

/******************************************************************** */
function callsWaitTimeReport(_x) {
  return _callsWaitTimeReport.apply(this, arguments);
} // TOTAL FIELDS


function _callsWaitTimeReport() {
  _callsWaitTimeReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // DEFINE VARIABLES
            result = {
              total: [],
              detail: []
            };
            /* DETAIL ********************************* */

            queryDetail = "\n    ".concat(query(userSelection), "\n  ");
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
            queryTotal = "\n    SELECT\n      ".concat(totalFields(), "\n    FROM\n      (").concat(query(userSelection), ") AS daily\n    ");
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
  return _callsWaitTimeReport.apply(this, arguments);
}

function totalFields() {
  return "\n  now() AS now\n  ,'' as day_name\n  ,'' as week_day\n\n  ,'' AS start_date\n  ,'' AS start_time\n  ,'' AS end_time\n  \n  ,SUM(beforeIdealTime) AS beforeIdealTime\n\n  ,SUM(inboundAttended) AS inboundAttended\n\n  ,SUM(afterFive) AS afterFive\n\n  ,SUM(afterTen) AS afterTen\n\n  ,SUM(afterFifteen) AS afterFifteen\n\n  ,SUM(afterTwenty) AS afterTwenty\n\n  ,SUM(afterTwentyfive) AS afterTwentyfive\n\n  ,SUM(afterThirty) AS afterThirty\n\n  ,SUM(afterSixty) AS afterSixty\n\n  ,SUM(afterTwoMinutes) AS afterTwoMinutes\n\n  ,SUM(afterThreeMinutes) AS afterThreeMinutes\n\n  ,SUM(afterFourMinutes) AS afterFourMinutes\n\n  ,SUM(afterMoreFourMinutes) AS afterMoreFourMinutes \n\n  ";
}
/******************************************************* */
// DETAIL FIELDS


function detailFields(userSelection) {
  return "\n  now() AS now\n  ,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n  ,DAYNAME(callentry_date) as day_name\n  ,WEEKDAY(callentry_date) + ").concat(process.env.MONDAY_CONFIG, " as week_day\n\n  ,DATE_FORMAT(callentry_date, \"%Y-%m-%d\") AS start_date\n  \n,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, ") then 1 else 0 end) as beforeIdealTime\n,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended\n,SUM(case when (callentry_duration_sec_wait > 0 AND callentry_duration_sec_wait <= 5) then 1 else 0 end) as afterFive\n,SUM(case when (callentry_duration_sec_wait > 6 AND callentry_duration_sec_wait <= 10) then 1 else 0 end) as afterTen\n,SUM(case when (callentry_duration_sec_wait > 11 AND callentry_duration_sec_wait <= 15) then 1 else 0 end) as afterFifteen\n,SUM(case when (callentry_duration_sec_wait > 16 AND callentry_duration_sec_wait <= 20) then 1 else 0 end) as afterTwenty\n,SUM(case when (callentry_duration_sec_wait > 21 AND callentry_duration_sec_wait <= 25) then 1 else 0 end) as afterTwentyfive\n,SUM(case when (callentry_duration_sec_wait > 26 AND callentry_duration_sec_wait <= 30) then 1 else 0 end) as afterThirty\n,SUM(case when (callentry_duration_sec_wait > 31 AND callentry_duration_sec_wait <= 60) then 1 else 0 end) as afterSixty\n,SUM(case when (callentry_duration_sec_wait > 61 AND callentry_duration_sec_wait <= 120) then 1 else 0 end) as afterTwoMinutes\n,SUM(case when (callentry_duration_sec_wait > 121 AND callentry_duration_sec_wait <= 180) then 1 else 0 end) as afterThreeMinutes\n,SUM(case when (callentry_duration_sec_wait > 181 AND callentry_duration_sec_wait <= 240) then 1 else 0 end) as afterFourMinutes\n,SUM(case when (callentry_duration_sec_wait > 241) then 1 else 0 end) as afterMoreFourMinutes\n\n  ");
}
/********************************************************* */
// MAIN QUERY


function query(userSelection) {
  return "\n\nSELECT\n\n  ".concat(detailFields(userSelection), "\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\nFROM\n\nMainCallEntry\n\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\n-- -----------------------------\nWHERE 1\nAND\ncallentry_status = 'terminada'\nAND\ninv_queue_type = 'Inbound'\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\nAND callentry_date is not null\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\nGROUP BY callentry_date\n\n\n-- ---------------------------------------------------------------\n-- END\n");
}