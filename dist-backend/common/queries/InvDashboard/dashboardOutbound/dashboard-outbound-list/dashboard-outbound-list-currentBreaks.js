"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardOutboundListCurrentBreaksFunction = dashboardOutboundListCurrentBreaksFunction;
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
function dashboardOutboundListCurrentBreaksFunction(_x) {
  return _dashboardOutboundListCurrentBreaksFunction.apply(this, arguments);
}

function _dashboardOutboundListCurrentBreaksFunction() {
  _dashboardOutboundListCurrentBreaksFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(DashboardSelection) {
    var result, resume_error, userSelection, modalView, type, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            resume_error = false;
            userSelection = DashboardSelection.userSelection;
            modalView = DashboardSelection.modalView;
            type = DashboardSelection.type;
            query = "\n\n  -- dashboardInboundListCurrentBreaksFunction --------------------\n  -- FIELDS\n  SELECT\n  \n  now() as now\n      \n  ,rcb_break_agent_id as agent_id\n  ,inv_agent_name as agent_name\n  ,rcb_break_name as group_name\n  ,rcb_break_duration as duration\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentBreaks\n  LEFT OUTER JOIN InvAgent\n  ON rcb_break_agent_id = inv_agent_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   ".concat(sqlModalView(modalView), "\n   \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcb_break_datetime_init"), "\n   \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rcb_break_agent_id"), "\n   \n   -- SUPERVISOR\n   ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "rcb_people_json", "supervisor"), "\n \n   -- SCHEDULE\n   ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "rcb_time_json", "schedule"), "\n \n   -- ROLE\n   ").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "rcb_people_json", "role"), "\n \n   -- CLIENT\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rcb_operation_json", "client"), "\n \n   -- QUEUE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rcb_operation_json", "queue"), "\n \n   -- SERVICE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rcb_operation_json", "service"), "\n \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rcb_operation_json", "campaign"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "rcb_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "rcb_break_id"), "\n   \n   GROUP BY inv_agent_name\n     \n   -- END ---------------------------------------------------------------\n\n  ");
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
  return _dashboardOutboundListCurrentBreaksFunction.apply(this, arguments);
}

function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === "asignado" || modalView === "asignacion") {
    return "\n    rcb_break_productivity = 1\n    ";
  } else if (modalView === "auxiliar") {
    return "\n    rcb_break_productivity = 0\n    ";
  }

  return result;
}