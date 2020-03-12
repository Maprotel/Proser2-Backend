"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardInboundListPlanAgents = dashboardInboundListPlanAgents;
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
function dashboardInboundListPlanAgents(_x) {
  return _dashboardInboundListPlanAgents.apply(this, arguments);
}

function _dashboardInboundListPlanAgents() {
  _dashboardInboundListPlanAgents = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, resume_error, query, temp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            resume_error = false; // let userSelection = DashboardSelection.userSelection;
            // let modalView = DashboardSelection.modalView;
            // if(userSelection.mode.name='Actual'){
            //   userSelection.start_date = userSelection.current_date;
            //   userSelection.end_date = userSelection.end_date;
            // }

            query = "\n\n  -- dashboardInboundListAuditFunction --------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n     now() as now\n     ,agent_plan_id\n     ,agent_plan_agent_name\n     ,agent_plan_agent_id\n     ,agent_plan_date\n     ,agent_plan_start_time\n     ,agent_plan_end_time\n     ,agent_plan_agent_type\n  \n      FROM\n          AgentPlan\n         \n          -- ---------------------------------------------------------------\n          -- CONDITIONS\n          WHERE 1\n          \n          -- TIME AND DATE\n          ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "agent_plan_date"), "\n          \n          \n          -- END ----------------------------------------------------------\n        ");
            _context.prev = 3;
            _context.next = 6;
            return pool.destinyInventory.query(query);

          case 6:
            temp = _context.sent;
            return _context.abrupt("return", temp.length < 1 ? result : temp);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", result = {
              error: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return _dashboardInboundListPlanAgents.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statement when interval applies
   */
  var result = null;

  if (modalView === "registrado-historico") {
    return "\n    audit_break_id is null\n    AND\n    audit_datetime_init is not null\n    ";
  }

  return result;
}