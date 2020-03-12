"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardAgentsList = dashboardAgentsList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _dateFunctions = require("../../../functions/dateFunctions");

var _sqlFunctions = require("../../../functions/sqlFunctions");

// DASHBOARD INBOUND REPORT

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS

/******************************************************************** */
// MAIN FUNCTION
function dashboardAgentsList(_x) {
  return _dashboardAgentsList.apply(this, arguments);
}
/**************************************** */
// Agents Planned List


function _dashboardAgentsList() {
  _dashboardAgentsList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, resume_error, dashboardAgentsListPlanned, dashboardAgentsListConnected, dashboardAgentsListEffective;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            resume_error = false;

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }

            _context.next = 5;
            return dashboardAgentsListPlannedFunction(userSelection);

          case 5:
            dashboardAgentsListPlanned = _context.sent;
            _context.next = 8;
            return dashboardAgentsListConnectedFunction(userSelection);

          case 8:
            dashboardAgentsListConnected = _context.sent;
            _context.next = 11;
            return dashboardAgentsListEffectiveFunction(userSelection);

          case 11:
            dashboardAgentsListEffective = _context.sent;
            result = {
              dashboardAgentsListPlanned: dashboardAgentsListPlanned,
              dashboardAgentsListConnected: dashboardAgentsListConnected,
              dashboardAgentsListEffective: dashboardAgentsListEffective
            };
            return _context.abrupt("return", result);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dashboardAgentsList.apply(this, arguments);
}

function dashboardAgentsListPlannedFunction(_x2) {
  return _dashboardAgentsListPlannedFunction.apply(this, arguments);
}
/**************************************** */
// Agents Connected


function _dashboardAgentsListPlannedFunction() {
  _dashboardAgentsListPlannedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(userSelection) {
    var result, resume_error, query, temp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = [{
              now: "",
              agentsPlannedTotal: null
            }];
            resume_error = false;
            query = "\n  -- agentsPlannedTotalFunction ----------\n-- FIELDS\nSELECT\n\n  'CONSTRUCCION' as agentsPlannedList\n\n    FROM\n        HcaAgent\n       \n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n        \n        -- TIME AND DATE\n        ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "hca_agent_date"), "\n        \n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n        \n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n        \n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n        \n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n        \n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_client_json"), "\n        \n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "hca_agent_queue_json"), "\n        \n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_agent_service_json"), "\n        \n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "hca_agent_campaign_json"), "\n        \n        -- BREAK\n        -- ASIGNACION\n\n        GROUP BY hca_agent_date\n        -- END ----------------------------------------------------------\n        ");
            _context2.prev = 3;
            _context2.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            temp = _context2.sent;
            return _context2.abrupt("return", temp.length < 1 ? result : temp);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", result = {
              error: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _dashboardAgentsListPlannedFunction.apply(this, arguments);
}

function dashboardAgentsListConnectedFunction(_x3) {
  return _dashboardAgentsListConnectedFunction.apply(this, arguments);
}
/**************************************** */
// Agents Effective


function _dashboardAgentsListConnectedFunction() {
  _dashboardAgentsListConnectedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userSelection) {
    var result, resume_error, query, _result;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,rca_subgroup_name as subgroup_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context3.prev = 3;
            _context3.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result = _context3.sent;
            return _context3.abrupt("return", _result);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            return _context3.abrupt("return", result = {
              error: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _dashboardAgentsListConnectedFunction.apply(this, arguments);
}

function dashboardAgentsListEffectiveFunction(_x4) {
  return _dashboardAgentsListEffectiveFunction.apply(this, arguments);
}

function _dashboardAgentsListEffectiveFunction() {
  _dashboardAgentsListEffectiveFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(userSelection) {
    var result, resume_error, query, _result2;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  AND\n  (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado')\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context4.prev = 3;
            _context4.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result2 = _context4.sent;
            return _context4.abrupt("return", _result2);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", result = {
              error: _context4.t0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 10]]);
  }));
  return _dashboardAgentsListEffectiveFunction.apply(this, arguments);
}