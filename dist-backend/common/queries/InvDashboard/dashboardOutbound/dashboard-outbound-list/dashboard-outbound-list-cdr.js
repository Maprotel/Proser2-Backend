"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardOutboundListCdrFunction = dashboardOutboundListCdrFunction;
exports.sqlModalView = sqlModalView;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../../connectors/pool"));

var _dateFunctions = require("../../../../functions/dateFunctions");

var _sqlFunctions = require("../../../../functions/sqlFunctions");

// DASHBOARD INBOUND CALL ENTRY

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS

/**************************************** */
// Call Entry List
function dashboardOutboundListCdrFunction(_x) {
  return _dashboardOutboundListCdrFunction.apply(this, arguments);
}

function _dashboardOutboundListCdrFunction() {
  _dashboardOutboundListCdrFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(DashboardSelection) {
    var result, resume_error, userSelection, modalView, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            resume_error = false;
            userSelection = DashboardSelection.userSelection;
            modalView = DashboardSelection.modalView;
            query = "\n\n  -- dashboardOutboundListCdrFunction --------------------\n  -- FIELDS\n  SELECT\n  \n    DATE_FORMAT(cdr_calldate, \"%Y-%m-%d\") as call_date\n    ,TIME(cdr_calldate) as call_time\n    ,cdr_cnam as agent_name\n    ,cdr_dst as destiny_number\n    ,cdr_duration_sec as duration_sec\n    ,SEC_TO_TIME(cdr_duration_sec) AS duration_time\n    ,cdr_billsec_sec as billsec_sec\n    ,SEC_TO_TIME(cdr_billsec_sec) AS billsec_time\n    ,IF(cdr_call_fail = 1, 'Fallida',\n      IF(cdr_call_answered = 1, 'Contestada', \n        IF(cdr_call_efective = 1, 'Efectiva', null))) as call_status\n  \n   -- ---------------------------------------------------------------\n   -- TABLES & JOINS\n   FROM\n   \n   MainCdr\n   LEFT OUTER JOIN InvAgent\n   ON cdr_agent_id = inv_agent_id\n   \n   LEFT OUTER JOIN InvQueue\n   ON cdr_queue_id = inv_queue_id\n   \n   LEFT OUTER JOIN MainCallEntry\n   ON cdr_uniqueid = callentry_uniqueid\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND \n   cdr_call_type = 'outbound'\n\n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n    ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n\n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n\n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "cdr_people_json", "supervisor"), "\n\n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_time_json", "schedule"), "\n\n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_people_json", "role"), "\n\n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "cdr_operation_json", "client"), "\n\n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n\n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "cdr_operation_json", "service"), "\n\n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n    ORDER BY cdr_calldate DESC\n     \n   -- END ---------------------------------------------------------------\n\n  ");
            _context.prev = 5;
            _context.next = 8;
            return pool.destinyReports.query(query);

          case 8:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", result = {
              errorDetail: _context.t0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12]]);
  }));
  return _dashboardOutboundListCdrFunction.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === 'saliente-realizada') {
    return "\n    cdr_call_made = 1\n    ";
  } else if (modalView === 'saliente-fallida') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_fail = 1\n    ";
  } else if (modalView === 'saliente-contestada') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_answered = 1\n    ";
  } else if (modalView === 'saliente-efectiva') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_efective = 1\n    ";
  } else if (modalView === 'saliente-colgada') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_hungout = 1\n    ";
  } else if (modalView === null) {
    return "1";
  }

  return result;
}