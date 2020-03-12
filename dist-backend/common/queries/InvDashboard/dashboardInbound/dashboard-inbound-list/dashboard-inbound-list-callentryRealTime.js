"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardInboundListCallEntryRealTime = dashboardInboundListCallEntryRealTime;
exports.sqlModalView = sqlModalView;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../../connectors/pool"));

var _dateFunctions = require("../../../../functions/dateFunctions");

var _sqlFunctions = require("../../../../functions/sqlFunctions");

// DASHBOARD INBOUND CALL ENTRY LIST

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS

/**************************************** */
// Call Entry List
function dashboardInboundListCallEntryRealTime(_x) {
  return _dashboardInboundListCallEntryRealTime.apply(this, arguments);
}

function _dashboardInboundListCallEntryRealTime() {
  _dashboardInboundListCallEntryRealTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(dashboardSelection) {
    var result, resume_error, userSelection, modalView, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            resume_error = false;
            userSelection = dashboardSelection.userSelection;
            modalView = dashboardSelection.modalView;

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }

            query = "\n\n  -- dashboardInboundListCallEntryFunction --------------------\n  -- FIELDS\n  SET STATEMENT max_statement_time=50 FOR\n  SELECT\n  \n    DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n    ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n    ,callentry_callerid as callerid\n    ,callentry_duration_sec_wait as wait_sec\n    ,callentry_status as call_status\n    ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n    ,inv_agent_name as agent_name\n    ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n  \n   -- ---------------------------------------------------------------\n   -- TABLES & JOINS\n   FROM\n   \n   RealCallEntry\n   \n   LEFT OUTER JOIN InvAgent\n   ON callentry_agent_id = inv_agent_id\n  \n    \n   LEFT OUTER JOIN InvQueue\n   ON callentry_queue_id = inv_queue_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "callentry_datetime_entry_queue"), "\n      \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n   \n   -- SUPERVISOR\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n   \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n   ORDER BY callentry_datetime_entry_queue DESC\n     \n   -- END ---------------------------------------------------------------\n\n  ");
            _context.prev = 6;
            _context.next = 9;
            return pool.destinyReports.query(query);

          case 9:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", result = {
              errorDetail: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));
  return _dashboardInboundListCallEntryRealTime.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === "recibida") {
    return "\n    (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n    ";
  } else if (modalView === "atendida") {
    return "\n    callentry_status = 'terminada'\n    ";
  } else if (modalView === "abandonada") {
    return "\n    callentry_status = 'abandonada'\n    ";
  } else if (modalView === "corta") {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec <= ".concat(process.env.CDR_SHORTCALL_TIME, "\n    ");
  } else if (modalView === "antes tiempo ideal") {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec_wait <= ".concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n    ");
  } else if (modalView === "despues tiempo ideal") {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec_wait > ".concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n    ");
  } else if (modalView === "colgada por agente") {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_hung_agent = 1\n    ";
  }

  return result;
}