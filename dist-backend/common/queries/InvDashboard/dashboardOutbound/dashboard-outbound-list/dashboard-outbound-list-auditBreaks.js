"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardOutboundListAuditBreaks = dashboardOutboundListAuditBreaks;
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
function dashboardOutboundListAuditBreaks(_x) {
  return _dashboardOutboundListAuditBreaks.apply(this, arguments);
}

function _dashboardOutboundListAuditBreaks() {
  _dashboardOutboundListAuditBreaks = (0, _asyncToGenerator2["default"])(
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
            query = "\n\n  -- dashboardOutboundListAuditFunction --------------------\n  -- FIELDS\n  SELECT\n  \n  now() as now\n\n  ,COUNT(audit_break_id) as value\n  ,inv_agent_name as agent_name\n  ,inv_break_name as name\n  ,inv_break_id as id\n  ,SEC_TO_TIME(IF(audit_datetime_end is not null, SUM(audit_duration_sec), TIMESTAMPDIFF(second,audit_datetime_init, now()))) AS duration\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\n    FROM\n\n    MainAudit\n    LEFT OUTER JOIN InvAgent\n    ON audit_agent_id = inv_agent_id\n\n    LEFT OUTER JOIN InvBreak\n    ON audit_break_id = inv_break_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n    ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n    -- AGENT\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n    -- SUPERVISOR\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n    -- ROLE\n    ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n    -- CAMPAIGN\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n    -- BREAK\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n    -- ASIGNACION\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n    GROUP BY audit_id\n    ORDER BY inv_agent_name\n     \n   -- END ---------------------------------------------------------------\n\n  ");
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
  return _dashboardOutboundListAuditBreaks.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === 'auxiliar-historico') {
    return "\n    inv_break_productivity = 0\n    AND\n    audit_break_id is not null\n    ";
  } else if (modalView === 'asignado-historico') {
    return "\n    inv_break_productivity = 1\n    AND\n    audit_break_id is not null\n    ";
  }

  return result;
}