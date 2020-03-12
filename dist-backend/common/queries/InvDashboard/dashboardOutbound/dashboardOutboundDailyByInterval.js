"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardOutboundDailyByInterval = dashboardOutboundDailyByInterval;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function dashboardOutboundDailyByInterval(_x) {
  return _dashboardOutboundDailyByInterval.apply(this, arguments);
} // TOTAL FIELDS


function _dashboardOutboundDailyByInterval() {
  _dashboardOutboundDailyByInterval = (0, _asyncToGenerator2["default"])(
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

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }
            /* DETAIL ********************************* */


            queryDetail = "\n    ".concat(query(userSelection), "\n  ");
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
            queryTotal = "\n    SELECT\n      ".concat(totalFields(), "\n    FROM\n      (").concat(query(userSelection), ") AS daily\n    ");
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
  return _dashboardOutboundDailyByInterval.apply(this, arguments);
}

function totalFields() {
  return "\n    \n    '' as day_name\n    ,'' as week_day\n    ,'' AS start_date\n    ,'' AS start_time\n    ,'' AS end_time\n    ,SUM(outboundMade) as outboundMade\n    ,SUM(outboundFail) as outboundFail\n    ,SUM(outboundAnswered) as outboundAnswered\n    ,SUM(outboundEffective) as outboundEffective\n    ,SUM(outboundHungout) as outboundHungout\n    ,SUM(outboundAnswered)/SUM(outboundMade) as outboundContactLevel\n    ,SUM(outboundEffective)/SUM(outboundMade) as outboundEffectiveLevel\n    ,SUM(operation_seconds) as operation_seconds\n    ,SEC_TO_TIME(SUM(operation_seconds)) as operation_time\n    ,SUM(operation_seconds)/SUM(outboundMade) as outboundTMO\n    \n    ";
}
/******************************************************* */
// DETAIL FIELDS


function detailFields(userSelection) {
  return "\n  now() as now\n  ,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "cdr_calldate"), "\n\n        ,DAYNAME(cdr_date) as day_name\n        ,WEEKDAY(cdr_date) + ").concat(process.env.MONDAY_CONFIG, " as week_day\n        ,DATE_FORMAT(cdr_calldate, \"%Y-%m-%d\") AS start_date\n        ,MIN(DATE_FORMAT(cdr_calldate, '%H:%i:%s')) AS start_time\n        ,MAX(DATE_FORMAT(cdr_calldate, '%H:%i:%s')) AS end_time\n        ,SUM(cdr_call_made) AS outboundMade\n        ,SUM(cdr_call_fail) AS outboundFail\n        ,SUM(cdr_call_answered) AS outboundAnswered\n        ,SUM(cdr_call_efective) AS outboundEffective\n        ,SUM(cdr_call_hungout) AS outboundHungout\n        ,SUM(cdr_call_answered)/SUM(cdr_call_made) AS outboundContactLevel\n        ,SUM(cdr_call_efective)/SUM(cdr_call_made) AS outboundEffectiveLevel\n        ,SUM(cdr_duration_sec) AS operation_seconds\n        ,SEC_TO_TIME(SUM(cdr_duration_sec)) AS operation_time\n        ,SUM(cdr_duration_sec)/SUM(cdr_call_made) as outboundTMO\n\n  ");
}
/********************************************************* */
// MAIN QUERY


function query(userSelection) {
  return "\n\nSELECT\n\n  ".concat(detailFields(userSelection), "\n\n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n      FROM\n\n      MainCdr\n      LEFT OUTER JOIN InvAgent\n      ON cdr_agent_id = inv_agent_id\n\n      LEFT OUTER JOIN InvQueue\n      ON cdr_queue_id = inv_queue_id\n\n      LEFT OUTER JOIN MainCallEntry\n      ON cdr_uniqueid = callentry_uniqueid\n      \n      -- ---------------------------------------------------------------\n      -- CONDITIONS\n      WHERE 1\n\n      AND cdr_call_made = 1\n      AND cdr_call_type = 'outbound'\n\n      -- TIME AND DATE\n      ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n      \n      -- AGENT\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n      \n      -- SUPERVISOR\n      ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "cdr_people_json", "supervisor"), "\n\n      -- SCHEDULE\n      ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_time_json", "schedule"), "\n\n      -- ROLE\n      ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_people_json", "role"), "\n\n      -- CLIENT\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "cdr_operation_json", "client"), "\n\n      -- QUEUE\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n\n      -- SERVICE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "cdr_operation_json", "service"), "\n      \n      -- CAMPAIGN\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n        ").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n    ");
}