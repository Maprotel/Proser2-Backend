"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardInboundListCurrentAgentsRealTime = dashboardInboundListCurrentAgentsRealTime;
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
function dashboardInboundListCurrentAgentsRealTime(_x) {
  return _dashboardInboundListCurrentAgentsRealTime.apply(this, arguments);
}

function _dashboardInboundListCurrentAgentsRealTime() {
  _dashboardInboundListCurrentAgentsRealTime = (0, _asyncToGenerator2["default"])(
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

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }

            query = "\n\n  -- dashboardInboundListCurrentAgents --------------------\n  -- FIELDS\n  SET STATEMENT max_statement_time=50 FOR\n  SELECT\n  \n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,rca_subgroup_name as subgroup_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n    -- ---------------------------------------------------------------\n    -- TABLES & JOINS\n    \n    FROM\n    \n    RealCurrentAgents\n    LEFT OUTER JOIN InvAgent\n    ON rca_agent_id = inv_agent_id\n    \n    LEFT OUTER JOIN MainAudit\n    ON rca_audit_login_id = audit_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n  ").concat((0, _sqlFunctions.dateAndTimeSqlQueryRealTime)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n  GROUP BY rca_agent_name\n     \n   -- END ---------------------------------------------------------------\n\n  ");
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
  return _dashboardInboundListCurrentAgentsRealTime.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === "efectivo") {
    return "\n    rca_agent_status = 'Logueado' AND\n    (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado')\n    ";
  } else if (modalView === "ocupado") {
    return "\n    rca_agent_status = 'Logueado' AND\n    (rca_group_name = 'Ocupado')\n    ";
  } else if (modalView === "disponible") {
    return "\n    rca_agent_status = 'Logueado' AND\n    (rca_group_name = 'Disponible')\n    ";
  } else if (modalView === "auxiliar") {
    return "\n    rca_agent_status = 'Logueado' AND\n    rca_group_name = 'Auxiliar'\n    ";
  } else if (modalView === "logueado") {
    return "\n    rca_agent_status = 'Logueado'\n    ";
  } else if (modalView === "conectado") {
    return "\n    rca_agent_status = 'Logueado'\n    ";
  }

  return result;
}