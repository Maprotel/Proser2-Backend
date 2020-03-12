"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardInboundListCurrentCalls = dashboardInboundListCurrentCalls;
exports.sqlModalView = sqlModalView;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../../connectors/pool"));

var _dateFunctions = require("../../../../functions/dateFunctions");

var _sqlFunctions = require("../../../../functions/sqlFunctions");

// DASHBOARD INBOUND CURRENT CALLS

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS

/**************************************** */
// Call Entry List
function dashboardInboundListCurrentCalls(_x) {
  return _dashboardInboundListCurrentCalls.apply(this, arguments);
}

function _dashboardInboundListCurrentCalls() {
  _dashboardInboundListCurrentCalls = (0, _asyncToGenerator2["default"])(
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
            modalView = DashboardSelection.modalView; // if(userSelection.mode.name='Actual'){
            //   userSelection.start_date = userSelection.current_date;
            //   userSelection.end_date = userSelection.end_date;
            // }

            query = "\n\n  -- dashboardInboundListCallEntryFunction --------------------\n  -- FIELDS\n  SET STATEMENT max_statement_time=50 FOR\n  SELECT\n  \n    DATE_FORMAT(rcc_callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n    ,TIME(rcc_callentry_datetime_entry_queue) as entry_queue_time\n    ,rcc_callentry_callerid as callerid\n    ,rcc_callentry_duration_wait_sec as wait_sec\n    ,rcc_callentry_status as call_status\n    ,SEC_TO_TIME(rcc_callentry_duration_sec) AS duration_time\n    ,inv_agent_name as agent_name\n    ,inv_queue_name as queue\n  \n    -- ---------------------------------------------------------------\n    -- TABLES & JOINS\n    \n    FROM\n    \n    RealCurrentCalls\n    \n    LEFT OUTER JOIN InvAgent\n    ON rcc_callentry_agent_id = inv_agent_id\n    \n    LEFT OUTER JOIN InvQueue\n    ON rcc_callentry_queue_id = inv_queue_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcc_callentry_datetime_entry_queue"), "\n\n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "inv_agent_id"), "\n\n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "inv_agent_people_json", "supervisor"), "\n\n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "inv_agent_time_json", "schedule"), "\n\n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "inv_agent_people_json", "role"), "\n\n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_operation_json", "client"), "\n\n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "rcc_callentry_queue_id"), "\n\n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "inv_agent_operation_json", "service"), "\n\n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "rcc_callentry_campaign_id"), "\n\n    -- BREAK\n    -- ASIGNACION\n\n   ORDER BY rcc_callentry_datetime_entry_queue DESC\n     \n   -- END ---------------------------------------------------------------\n\n  ");
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
  return _dashboardInboundListCurrentCalls.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === "activa") {
    return "\n    rcc_callentry_status = 'activa'\n    ";
  } else if (modalView === "en-cola") {
    return "\n    rcc_callentry_status = 'en-cola'\n    ";
  }

  return result;
}