"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardInboundList = dashboardInboundList;

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
function dashboardInboundList(_x) {
  return _dashboardInboundList.apply(this, arguments);
}
/**************************************** */
// Calls Recieved List


function _dashboardInboundList() {
  _dashboardInboundList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, resume_error, dashboardInboundListReceived, dashboardInboundListAttended, dashboardInboundListAbandoned, dashboardInboundListShort, dashboardInboundListBeforeTime, dashboardInboundListHungAgent, dashboardInboundListActive, dashboardInboundListOnQueue, dashboardInboundListQueueResume, dashboardInboundListAgentsPlanned, dashboardInboundListAgentsConnected, dashboardInboundListAgentsEffective, dashboardInboundListAgentsBusy, dashboardInboundListAgentsAvailable, dashboardInboundListAgentsAssigned, dashboardInboundListAgentsAuxiliar, dashboardInboundListAgentsAuxiliarHistoric, dashboardInboundListAgentsAssignationHistoric;
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
            return dashboardInboundListReceivedFunction(userSelection);

          case 5:
            dashboardInboundListReceived = _context.sent;
            _context.next = 8;
            return dashboardInboundListAttendedFunction(userSelection);

          case 8:
            dashboardInboundListAttended = _context.sent;
            _context.next = 11;
            return dashboardInboundListAbandonedFunction(userSelection);

          case 11:
            dashboardInboundListAbandoned = _context.sent;
            _context.next = 14;
            return dashboardInboundListShortFunction(userSelection);

          case 14:
            dashboardInboundListShort = _context.sent;
            _context.next = 17;
            return dashboardInboundListBeforeTimeFunction(userSelection);

          case 17:
            dashboardInboundListBeforeTime = _context.sent;
            _context.next = 20;
            return dashboardInboundListHungAgentFunction(userSelection);

          case 20:
            dashboardInboundListHungAgent = _context.sent;
            _context.next = 23;
            return dashboardInboundListActiveFunction(userSelection);

          case 23:
            dashboardInboundListActive = _context.sent;
            _context.next = 26;
            return dashboardInboundListOnQueueFunction(userSelection);

          case 26:
            dashboardInboundListOnQueue = _context.sent;
            _context.next = 29;
            return dashboardInboundListQueueResumeFunction(userSelection);

          case 29:
            dashboardInboundListQueueResume = _context.sent;
            _context.next = 32;
            return dashboardInboundListAgentsPlannedFunction(userSelection);

          case 32:
            dashboardInboundListAgentsPlanned = _context.sent;
            _context.next = 35;
            return dashboardInboundListAgentsConnectedFunction(userSelection);

          case 35:
            dashboardInboundListAgentsConnected = _context.sent;
            _context.next = 38;
            return dashboardInboundListAgentsEffectiveFunction(userSelection);

          case 38:
            dashboardInboundListAgentsEffective = _context.sent;
            _context.next = 41;
            return dashboardInboundListAgentsBusyFunction(userSelection);

          case 41:
            dashboardInboundListAgentsBusy = _context.sent;
            _context.next = 44;
            return dashboardInboundListAgentsAvailableFunction(userSelection);

          case 44:
            dashboardInboundListAgentsAvailable = _context.sent;
            _context.next = 47;
            return dashboardInboundListAgentsAssignedFunction(userSelection);

          case 47:
            dashboardInboundListAgentsAssigned = _context.sent;
            _context.next = 50;
            return dashboardInboundListAgentsAuxiliarFunction(userSelection);

          case 50:
            dashboardInboundListAgentsAuxiliar = _context.sent;
            _context.next = 53;
            return dashboardInboundListAgentsAuxiliarHistoricFunction(userSelection);

          case 53:
            dashboardInboundListAgentsAuxiliarHistoric = _context.sent;
            _context.next = 56;
            return dashboardInboundListAgentsAssignationHistoricFunction(userSelection);

          case 56:
            dashboardInboundListAgentsAssignationHistoric = _context.sent;
            result = {
              dashboardInboundListReceived: dashboardInboundListReceived,
              dashboardInboundListAttended: dashboardInboundListAttended,
              dashboardInboundListAbandoned: dashboardInboundListAbandoned,
              dashboardInboundListShort: dashboardInboundListShort,
              dashboardInboundListBeforeTime: dashboardInboundListBeforeTime,
              dashboardInboundListHungAgent: dashboardInboundListHungAgent,
              dashboardInboundListActive: dashboardInboundListActive,
              dashboardInboundListOnQueue: dashboardInboundListOnQueue,
              dashboardInboundListQueueResume: dashboardInboundListQueueResume,
              dashboardInboundListAgentsPlanned: dashboardInboundListAgentsPlanned,
              dashboardInboundListAgentsConnected: dashboardInboundListAgentsConnected,
              dashboardInboundListAgentsEffective: dashboardInboundListAgentsEffective,
              dashboardInboundListAgentsBusy: dashboardInboundListAgentsBusy,
              dashboardInboundListAgentsAvailable: dashboardInboundListAgentsAvailable,
              dashboardInboundListAgentsAssigned: dashboardInboundListAgentsAssigned,
              dashboardInboundListAgentsAuxiliar: dashboardInboundListAgentsAuxiliar,
              dashboardInboundListAgentsAuxiliarHistoric: dashboardInboundListAgentsAuxiliarHistoric,
              dashboardInboundListAgentsAssignationHistoric: dashboardInboundListAgentsAssignationHistoric
            };
            return _context.abrupt("return", result);

          case 59:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dashboardInboundList.apply(this, arguments);
}

function dashboardInboundListReceivedFunction(_x2) {
  return _dashboardInboundListReceivedFunction.apply(this, arguments);
}
/**************************************** */
// Calls Attended List


function _dashboardInboundListReceivedFunction() {
  _dashboardInboundListReceivedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n\n  -- dashboardInboundListReceivedFunction --------------------\n  -- FIELDS\n  SET STATEMENT max_statement_time=50 FOR\n  SELECT\n  \n     DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n    ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n    ,callentry_callerid as callerid\n    ,callentry_duration_sec_wait as wait_sec\n    ,callentry_status as call_status\n    ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n    ,inv_agent_name as agent_name\n    ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n  \n   -- ---------------------------------------------------------------\n   -- TABLES & JOINS\n   FROM\n   \n   MainCallEntry\n   \n   LEFT OUTER JOIN InvAgent\n   ON callentry_agent_id = inv_agent_id\n  \n    \n   LEFT OUTER JOIN InvQueue\n   ON callentry_queue_id = inv_queue_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n   \n   -- TIME AND DATE\n   ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n      \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n   \n   -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n   \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n   ORDER BY entry_queue_date, entry_queue_time DESC\n     \n   -- END ---------------------------------------------------------------\n\n  ");
            _context2.prev = 3;
            _context2.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", result = {
              errorDetail: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _dashboardInboundListReceivedFunction.apply(this, arguments);
}

function dashboardInboundListAttendedFunction(_x3) {
  return _dashboardInboundListAttendedFunction.apply(this, arguments);
}
/**************************************** */
// Calls Abandoned List


function _dashboardInboundListAttendedFunction() {
  _dashboardInboundListAttendedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  \n    -- dashboardInboundListAttendedFunction --------------------\n    -- FIELDS\n    SET STATEMENT max_statement_time=50 FOR\n    SELECT\n    \n      DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n\t  ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n      ,callentry_callerid as callerid\n      ,callentry_duration_sec_wait as wait_sec\n      ,callentry_status as call_status\n      ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n      ,inv_agent_name as agent_name\n      ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n    \n     -- ---------------------------------------------------------------\n     -- TABLES & JOINS\n     FROM\n     \n     MainCallEntry\n     \n     LEFT OUTER JOIN InvAgent\n     ON callentry_agent_id = inv_agent_id\n    \n      \n     LEFT OUTER JOIN InvQueue\n     ON callentry_queue_id = inv_queue_id\n     \n     \n     -- -----------------------------\n     WHERE 1\n     \n     AND\n     callentry_status = 'terminada'\n     \n     -- TIME AND DATE\n     ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n        \n     -- AGENT\n     ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n     \n     -- SUPERVISOR\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n  \n    -- SCHEDULE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n  \n    -- ROLE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n  \n    -- CLIENT\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n  \n    -- QUEUE\n    ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n  \n    -- SERVICE\n    ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n     \n     -- CAMPAIGN\n     ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n     \n     -- BREAK\n     ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n     \n     -- ASIGNACION\n     ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n     ORDER BY entry_queue_date, entry_queue_time DESC\n       \n     -- END ---------------------------------------------------------------\n  \n    ");
            _context3.prev = 3;
            _context3.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            return _context3.abrupt("return", result = {
              errorDetail: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _dashboardInboundListAttendedFunction.apply(this, arguments);
}

function dashboardInboundListAbandonedFunction(_x4) {
  return _dashboardInboundListAbandonedFunction.apply(this, arguments);
}
/**************************************** */
// Calls Short List


function _dashboardInboundListAbandonedFunction() {
  _dashboardInboundListAbandonedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n    \n      -- dashboardInboundListAbandonedFunction --------------------\n      -- FIELDS\n      SELECT\n      \n        DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n        ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n        ,callentry_callerid as callerid\n        ,callentry_duration_sec_wait as wait_sec\n        ,callentry_status as call_status\n        ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n        ,inv_agent_name as agent_name\n        ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n      \n       -- ---------------------------------------------------------------\n       -- TABLES & JOINS\n       FROM\n       \n       MainCallEntry\n       \n       LEFT OUTER JOIN InvAgent\n       ON callentry_agent_id = inv_agent_id\n      \n        \n       LEFT OUTER JOIN InvQueue\n       ON callentry_queue_id = inv_queue_id\n       \n       \n       -- -----------------------------\n       WHERE 1\n       \n       AND\n       callentry_status = 'abandonada'\n       \n       -- TIME AND DATE\n       ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n          \n       -- AGENT\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n       \n       -- SUPERVISOR\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n    \n      -- SCHEDULE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n    \n      -- ROLE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n    \n      -- CLIENT\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n    \n      -- QUEUE\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n    \n      -- SERVICE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n       \n       -- CAMPAIGN\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n       \n       -- BREAK\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n       \n       -- ASIGNACION\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n    \n       ORDER BY entry_queue_date, entry_queue_time DESC\n         \n       -- END ---------------------------------------------------------------\n    \n      ");
            _context4.prev = 3;
            _context4.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", result = {
              errorDetail: _context4.t0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 10]]);
  }));
  return _dashboardInboundListAbandonedFunction.apply(this, arguments);
}

function dashboardInboundListShortFunction(_x5) {
  return _dashboardInboundListShortFunction.apply(this, arguments);
}
/**************************************** */
// Calls Before TimeL List


function _dashboardInboundListShortFunction() {
  _dashboardInboundListShortFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n    \n      -- dashboardInboundListShortFunction --------------------\n      -- FIELDS\n      SELECT\n      \n        DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n        ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n        ,callentry_callerid as callerid\n        ,callentry_duration_sec_wait as wait_sec\n        ,callentry_status as call_status\n        ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n        ,inv_agent_name as agent_name\n        ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n      \n       -- ---------------------------------------------------------------\n       -- TABLES & JOINS\n       FROM\n       \n       MainCallEntry\n       \n       LEFT OUTER JOIN InvAgent\n       ON callentry_agent_id = inv_agent_id\n      \n        \n       LEFT OUTER JOIN InvQueue\n       ON callentry_queue_id = inv_queue_id\n       \n       \n       -- -----------------------------\n       WHERE 1\n       \n       AND\n       (callentry_status = 'terminada')\n       AND\n       callentry_duration_sec <= ".concat(process.env.CDR_SHORTCALL_TIME, "\n       \n       -- TIME AND DATE\n       ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n          \n       -- AGENT\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n       \n       -- SUPERVISOR\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n    \n      -- SCHEDULE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n    \n      -- ROLE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n    \n      -- CLIENT\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n    \n      -- QUEUE\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n    \n      -- SERVICE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n       \n       -- CAMPAIGN\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n       \n       -- BREAK\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n       \n       -- ASIGNACION\n       ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n    \n       ORDER BY entry_queue_date, entry_queue_time DESC\n         \n       -- END ---------------------------------------------------------------\n    \n      ");
            _context5.prev = 3;
            _context5.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            return _context5.abrupt("return", result = {
              errorDetail: _context5.t0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));
  return _dashboardInboundListShortFunction.apply(this, arguments);
}

function dashboardInboundListBeforeTimeFunction(_x6) {
  return _dashboardInboundListBeforeTimeFunction.apply(this, arguments);
}
/**************************************** */
// Calls Before TimeL List


function _dashboardInboundListBeforeTimeFunction() {
  _dashboardInboundListBeforeTimeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n      \n        -- dashboardInboundListBeforeTimeFunction --------------------\n        -- FIELDS\n        SELECT\n        \n          DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n          ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n          ,callentry_callerid as callerid\n          ,callentry_duration_sec_wait as wait_sec\n          ,callentry_status as call_status\n          ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n          ,inv_agent_name as agent_name\n          ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n        \n         -- ---------------------------------------------------------------\n         -- TABLES & JOINS\n         FROM\n         \n         MainCallEntry\n         \n         LEFT OUTER JOIN InvAgent\n         ON callentry_agent_id = inv_agent_id\n        \n          \n         LEFT OUTER JOIN InvQueue\n         ON callentry_queue_id = inv_queue_id\n         \n         \n         -- -----------------------------\n         WHERE 1\n         \n         AND\n         (callentry_status = 'terminada')\n         AND\n         callentry_duration_sec <= ".concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n         \n         -- TIME AND DATE\n         ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n            \n         -- AGENT\n         ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n         \n         -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n      \n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n      \n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n      \n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n      \n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n      \n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n         \n         -- CAMPAIGN\n         ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n         \n         -- BREAK\n         ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n         \n         -- ASIGNACION\n         ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n      \n         ORDER BY entry_queue_date, entry_queue_time DESC\n           \n         -- END ---------------------------------------------------------------\n      \n        ");
            _context6.prev = 3;
            _context6.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](3);
            return _context6.abrupt("return", result = {
              errorDetail: _context6.t0
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 10]]);
  }));
  return _dashboardInboundListBeforeTimeFunction.apply(this, arguments);
}

function dashboardInboundListHungAgentFunction(_x7) {
  return _dashboardInboundListHungAgentFunction.apply(this, arguments);
}
/**************************************** */
// Calls Active List


function _dashboardInboundListHungAgentFunction() {
  _dashboardInboundListHungAgentFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n        \n          -- dashboardInboundListHungAgentFunction --------------------\n          -- FIELDS\n          SELECT\n          \n            DATE_FORMAT(callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n            ,TIME(callentry_datetime_entry_queue) as entry_queue_time\n            ,callentry_callerid as callerid\n            ,callentry_duration_sec_wait as wait_sec\n            ,callentry_status as call_status\n            ,SEC_TO_TIME(callentry_duration_sec) AS duration_time\n            ,inv_agent_name as agent_name\n            ,CONCAT(inv_queue_number, \"-\", inv_queue_name) as queue \n          \n           -- ---------------------------------------------------------------\n           -- TABLES & JOINS\n           FROM\n           \n           MainCallEntry\n           \n           LEFT OUTER JOIN InvAgent\n           ON callentry_agent_id = inv_agent_id\n          \n            \n           LEFT OUTER JOIN InvQueue\n           ON callentry_queue_id = inv_queue_id\n           \n           \n           -- -----------------------------\n           WHERE 1\n           \n           AND\n           callentry_hung_agent = 1\n                      \n           -- TIME AND DATE\n           ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n              \n           -- AGENT\n           ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n           \n           -- SUPERVISOR\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n        \n          -- SCHEDULE\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n        \n          -- ROLE\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n        \n          -- CLIENT\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n        \n          -- QUEUE\n          ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n        \n          -- SERVICE\n          ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n           \n           -- CAMPAIGN\n           ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n           \n           -- BREAK\n           ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n           \n           -- ASIGNACION\n           ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n        \n           ORDER BY entry_queue_date, entry_queue_time DESC\n             \n           -- END ---------------------------------------------------------------\n        \n          ");
            _context7.prev = 3;
            _context7.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            result = _context7.sent;
            return _context7.abrupt("return", result);

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            return _context7.abrupt("return", result = {
              errorDetail: _context7.t0
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 10]]);
  }));
  return _dashboardInboundListHungAgentFunction.apply(this, arguments);
}

function dashboardInboundListActiveFunction(_x8) {
  return _dashboardInboundListActiveFunction.apply(this, arguments);
}
/**************************************** */
// Calls On-Queue List


function _dashboardInboundListActiveFunction() {
  _dashboardInboundListActiveFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(userSelection) {
    var result, resume_error, query, _result;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n-- dashboardInboundListActiveFunction --------------\n-- FIELDS\nSELECT\n\nDATE_FORMAT(rcc_callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n\t,TIME(rcc_callentry_datetime_entry_queue) as entry_queue_time\n    ,rcc_callentry_callerid as callerid\n    ,rcc_callentry_duration_wait_sec as wait_sec\n    ,rcc_callentry_status as call_status\n    ,SEC_TO_TIME(rcc_callentry_duration_sec) AS duration_time\n    ,inv_agent_name as agent_name\n    ,JSON_UNQUOTE(JSON_EXTRACT(rcc_operation_json, \"$[0].name\") ) as queue\n  \n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCurrentCalls\n\nLEFT OUTER JOIN InvAgent\nON rcc_callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON rcc_callentry_queue_id = inv_queue_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\n   rcc_callentry_status = 'activa'\n\n-- TIME AND DATE\n\n-- AGENT\n".concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "inv_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "inv_agent_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "rcc_callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "inv_agent_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "rcc_callentry_campaign_id"), "\n\n-- BREAK\n-- ASIGNACION\n\nORDER BY entry_queue_date, entry_queue_time DESC\n\n-- END -------------------------------------------------------\n");
            _context8.prev = 3;
            _context8.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result = _context8.sent;
            return _context8.abrupt("return", _result);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](3);
            return _context8.abrupt("return", result = {
              error: _context8.t0
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 10]]);
  }));
  return _dashboardInboundListActiveFunction.apply(this, arguments);
}

function dashboardInboundListOnQueueFunction(_x9) {
  return _dashboardInboundListOnQueueFunction.apply(this, arguments);
}
/**************************************** */
// Calls Queue Resume List


function _dashboardInboundListOnQueueFunction() {
  _dashboardInboundListOnQueueFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(userSelection) {
    var result, resume_error, query, _result2;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n-- dashboardInboundListOnQueueFunction --------------\n-- FIELDS\nSELECT\n\nDATE_FORMAT(rcc_callentry_datetime_entry_queue, \"%Y-%m-%d\") as entry_queue_date\n\t,TIME(rcc_callentry_datetime_entry_queue) as entry_queue_time\n    ,rcc_callentry_callerid as callerid\n    ,rcc_callentry_duration_wait_sec as wait_sec\n    ,rcc_callentry_status as call_status\n    ,SEC_TO_TIME(rcc_callentry_duration_sec) AS duration_time\n    ,inv_agent_name as agent_name\n    ,JSON_UNQUOTE(JSON_EXTRACT(rcc_operation_json, \"$[0].name\") ) as queue\n  \n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCurrentCalls\n\nLEFT OUTER JOIN InvAgent\nON rcc_callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON rcc_callentry_queue_id = inv_queue_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\n   rcc_callentry_status = 'en-cola'\n\n-- TIME AND DATE\n\n-- AGENT\n".concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "inv_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "inv_agent_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "inv_agent_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "rcc_callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "inv_agent_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "rcc_callentry_campaign_id"), "\n\n-- BREAK\n-- ASIGNACION\n\nORDER BY entry_queue_date, entry_queue_time DESC\n\n-- END -------------------------------------------------------\n");
            _context9.prev = 3;
            _context9.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result2 = _context9.sent;
            return _context9.abrupt("return", _result2);

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](3);
            return _context9.abrupt("return", result = {
              error: _context9.t0
            });

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[3, 10]]);
  }));
  return _dashboardInboundListOnQueueFunction.apply(this, arguments);
}

function dashboardInboundListQueueResumeFunction(_x10) {
  return _dashboardInboundListQueueResumeFunction.apply(this, arguments);
}

function _dashboardInboundListQueueResumeFunction() {
  _dashboardInboundListQueueResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(userSelection) {
    var result, resume_error, start_date, query;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            result = null;
            resume_error = false;
            start_date = (0, _dateFunctions.objectDateToTextDate)(userSelection.start_date);
            query = "\n\n  -- dashboardInboundListQueueResumeFunction --------------------\n  -- FIELDS\n  SELECT\n  \n    callentry_queue_id AS queue_id\n    ,inv_queue_number as queue_number\n    ,inv_queue_name as queue_name\n    ,'".concat(start_date, "' AS start_date_requested\n    ,CURRENT_TIMESTAMP AS now\n    ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n    AS inboundReceivedTotal\n\n    ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)\n      AS inboundAbandonedTotal\n\n    ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n      AS inboundAttendedTotal\n    \n\n    ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end)\n      AS inboundShortTotal\n\n    ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end)\n      AS inboundBeforeTimeTotal\n\n    ,SUM(case when callentry_hung_agent = 1 then 1 else 0 end)\n      AS inboundHungAgentTotal\n\n    ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end)/ SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' ) then 1 else 0 end) AS inboundServiceLevelTotal\n\n\n    ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n    SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n    AS inboundAttentionLevelTotal\n    \n    ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n    SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n    AS inboundAbandonLevelTotal\n    \n    ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n    SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n    AS inboundAsaTotal\n    \n    ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n    SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n    AS inboundTmoTotal\n  \n   -- ---------------------------------------------------------------\n   -- TABLES & JOINS\n   FROM\n   \n   MainCallEntry\n   \n   LEFT OUTER JOIN InvAgent\n   ON callentry_agent_id = inv_agent_id\n  \n    \n   LEFT OUTER JOIN InvQueue\n   ON callentry_queue_id = inv_queue_id\n   \n   \n   -- -----------------------------\n   WHERE 1\n   \n     \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n      \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n   \n   -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "callentry_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "callentry_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "callentry_operation_json", "service"), "\n   \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n   GROUP BY callentry_queue_id\n     \n   -- END ---------------------------------------------------------------\n\n  ");
            _context10.prev = 4;
            _context10.next = 7;
            return pool.destinyReports.query(query);

          case 7:
            result = _context10.sent;
            return _context10.abrupt("return", result);

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](4);
            return _context10.abrupt("return", result = {
              errorDetail: _context10.t0
            });

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[4, 11]]);
  }));
  return _dashboardInboundListQueueResumeFunction.apply(this, arguments);
}

function dashboardInboundListAgentsPlannedFunction(_x11) {
  return _dashboardInboundListAgentsPlannedFunction.apply(this, arguments);
}
/**************************************** */
// Agents Connected


function _dashboardInboundListAgentsPlannedFunction() {
  _dashboardInboundListAgentsPlannedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11(userSelection) {
    var result, resume_error, query, temp;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            result = [{
              now: "",
              agentsPlannedTotal: null
            }];
            resume_error = false;
            query = "\n  -- agentsPlannedTotalFunction ----------\n-- FIELDS\nSELECT\n\n  'CONSTRUCCION' as agentsPlannedList\n\n    FROM\n        HcaAgent\n       \n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n        \n        -- TIME AND DATE\n        ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "hca_agent_date"), "\n        \n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n        \n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n        \n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n        \n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n        \n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_client_json"), "\n        \n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "hca_agent_queue_json"), "\n        \n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_agent_service_json"), "\n        \n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "hca_agent_campaign_json"), "\n        \n        -- BREAK\n        -- ASIGNACION\n\n        GROUP BY hca_agent_date\n        -- END ----------------------------------------------------------\n        ");
            _context11.prev = 3;
            _context11.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            temp = _context11.sent;
            return _context11.abrupt("return", temp.length < 1 ? result : temp);

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](3);
            return _context11.abrupt("return", result = {
              error: _context11.t0
            });

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsPlannedFunction.apply(this, arguments);
}

function dashboardInboundListAgentsConnectedFunction(_x12) {
  return _dashboardInboundListAgentsConnectedFunction.apply(this, arguments);
}
/**************************************** */
// Agents Effective


function _dashboardInboundListAgentsConnectedFunction() {
  _dashboardInboundListAgentsConnectedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(userSelection) {
    var result, resume_error, query, _result3;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,rca_subgroup_name as subgroup_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context12.prev = 3;
            _context12.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result3 = _context12.sent;
            return _context12.abrupt("return", _result3);

          case 10:
            _context12.prev = 10;
            _context12.t0 = _context12["catch"](3);
            return _context12.abrupt("return", result = {
              error: _context12.t0
            });

          case 13:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsConnectedFunction.apply(this, arguments);
}

function dashboardInboundListAgentsEffectiveFunction(_x13) {
  return _dashboardInboundListAgentsEffectiveFunction.apply(this, arguments);
}
/**************************************** */
// Agents Busy


function _dashboardInboundListAgentsEffectiveFunction() {
  _dashboardInboundListAgentsEffectiveFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13(userSelection) {
    var result, resume_error, query, _result4;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  AND\n  (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado')\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context13.prev = 3;
            _context13.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result4 = _context13.sent;
            return _context13.abrupt("return", _result4);

          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13["catch"](3);
            return _context13.abrupt("return", result = {
              error: _context13.t0
            });

          case 13:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsEffectiveFunction.apply(this, arguments);
}

function dashboardInboundListAgentsBusyFunction(_x14) {
  return _dashboardInboundListAgentsBusyFunction.apply(this, arguments);
}
/**************************************** */
// Agents Available


function _dashboardInboundListAgentsBusyFunction() {
  _dashboardInboundListAgentsBusyFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14(userSelection) {
    var result, resume_error, query, _result5;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,rca_agent_duration as duration\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  AND\n  rca_group_name = 'Ocupado'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context14.prev = 3;
            _context14.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result5 = _context14.sent;
            return _context14.abrupt("return", _result5);

          case 10:
            _context14.prev = 10;
            _context14.t0 = _context14["catch"](3);
            return _context14.abrupt("return", result = {
              error: _context14.t0
            });

          case 13:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsBusyFunction.apply(this, arguments);
}

function dashboardInboundListAgentsAvailableFunction(_x15) {
  return _dashboardInboundListAgentsAvailableFunction.apply(this, arguments);
}
/**************************************** */
// Agents Assigned


function _dashboardInboundListAgentsAvailableFunction() {
  _dashboardInboundListAgentsAvailableFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee15(userSelection) {
    var result, resume_error, query, _result6;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_agent_name as agent_name\n  ,rca_group_name as group_name\n  ,rca_agent_duration as duration\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  AND\n  rca_group_name = 'Disponible'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY rca_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context15.prev = 3;
            _context15.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result6 = _context15.sent;
            return _context15.abrupt("return", _result6);

          case 10:
            _context15.prev = 10;
            _context15.t0 = _context15["catch"](3);
            return _context15.abrupt("return", result = {
              error: _context15.t0
            });

          case 13:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsAvailableFunction.apply(this, arguments);
}

function dashboardInboundListAgentsAssignedFunction(_x16) {
  return _dashboardInboundListAgentsAssignedFunction.apply(this, arguments);
}
/**************************************** */
// Agents Auxiliar


function _dashboardInboundListAgentsAssignedFunction() {
  _dashboardInboundListAgentsAssignedFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16(userSelection) {
    var result, resume_error, query, _result7;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rcb_break_agent_id as agent_id\n  ,inv_agent_name as agent_name\n  ,rcb_break_name as group_name\n  ,rcb_break_duration as duration\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentBreaks\n  LEFT OUTER JOIN InvAgent\n  ON rcb_break_agent_id = inv_agent_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rcb_break_productivity = 1\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcb_break_datetime_init"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rca_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rca_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rca_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rca_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rca_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  GROUP BY inv_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context16.prev = 3;
            _context16.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result7 = _context16.sent;
            return _context16.abrupt("return", _result7);

          case 10:
            _context16.prev = 10;
            _context16.t0 = _context16["catch"](3);
            return _context16.abrupt("return", result = {
              error: _context16.t0
            });

          case 13:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsAssignedFunction.apply(this, arguments);
}

function dashboardInboundListAgentsAuxiliarFunction(_x17) {
  return _dashboardInboundListAgentsAuxiliarFunction.apply(this, arguments);
}
/**************************************** */
// Agents Auxiliar Historic


function _dashboardInboundListAgentsAuxiliarFunction() {
  _dashboardInboundListAgentsAuxiliarFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(userSelection) {
    var result, resume_error, query, _result8;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rcb_break_agent_id as agent_id\n  ,inv_agent_name as agent_name\n  ,rcb_break_name as group_name\n  ,rcb_break_duration as duration\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_people_json, \"$.supervisor[0].name\") ) as supervisor_name\n  ,JSON_UNQUOTE(JSON_EXTRACT(rcb_time_json, \"$.schedule[0].name\") ) as schedule_name\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentBreaks\n  LEFT OUTER JOIN InvAgent\n  ON rcb_break_agent_id = inv_agent_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rcb_break_productivity = 0\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcb_break_datetime_init"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "rcb_break_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "rcb_people_json", "supervisor"), "\n\n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rcb_time_json", "schedule"), "\n\n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rcb_people_json", "role"), "\n\n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "rcb_operation_json", "client"), "\n\n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "rcb_operation_json", "queue"), "\n\n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "rcb_operation_json", "service"), "\n\n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "rcb_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "rcb_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "rcb_break_id"), "\n  \n  GROUP BY inv_agent_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context17.prev = 3;
            _context17.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result8 = _context17.sent;
            return _context17.abrupt("return", _result8);

          case 10:
            _context17.prev = 10;
            _context17.t0 = _context17["catch"](3);
            return _context17.abrupt("return", result = {
              error: _context17.t0
            });

          case 13:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsAuxiliarFunction.apply(this, arguments);
}

function dashboardInboundListAgentsAuxiliarHistoricFunction(_x18) {
  return _dashboardInboundListAgentsAuxiliarHistoricFunction.apply(this, arguments);
}
/**************************************** */
// Agents Assignation Historic


function _dashboardInboundListAgentsAuxiliarHistoricFunction() {
  _dashboardInboundListAgentsAuxiliarHistoricFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee18(userSelection) {
    var result, resume_error, query, _result9;

    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n\n  -- TIME & INTERVAL\nnow() as now\n\n      ,inv_agent_name as agent_name\n      ,inv_break_name as name\n      ,inv_break_id as id\n      ,COUNT(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\ninv_break_productivity = 0\nAND\naudit_break_id is not null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\nGROUP BY audit_agent_id\n-- ---------------------------------------------------------------\n-- END\n");
            _context18.prev = 3;
            _context18.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result9 = _context18.sent;
            return _context18.abrupt("return", _result9);

          case 10:
            _context18.prev = 10;
            _context18.t0 = _context18["catch"](3);
            return _context18.abrupt("return", result = {
              error: _context18.t0
            });

          case 13:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsAuxiliarHistoricFunction.apply(this, arguments);
}

function dashboardInboundListAgentsAssignationHistoricFunction(_x19) {
  return _dashboardInboundListAgentsAssignationHistoricFunction.apply(this, arguments);
}

function _dashboardInboundListAgentsAssignationHistoricFunction() {
  _dashboardInboundListAgentsAssignationHistoricFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee19(userSelection) {
    var result, resume_error, query, _result10;

    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n\n  -- TIME & INTERVAL\nnow() as now\n\n      ,inv_agent_name as agent_name\n      ,inv_break_name as name\n      ,inv_break_id as id\n      ,COUNT(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainAudit\nLEFT OUTER JOIN InvAgent\nON audit_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvBreak\nON audit_break_id = inv_break_id\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\ninv_break_productivity = 1\nAND\naudit_break_id is not null\n\n-- TIME AND DATE\n".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "audit_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_people_json", "role"), "\n\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\nGROUP BY audit_agent_id\n-- ---------------------------------------------------------------\n-- END\n");
            _context19.prev = 3;
            _context19.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result10 = _context19.sent;
            return _context19.abrupt("return", _result10);

          case 10:
            _context19.prev = 10;
            _context19.t0 = _context19["catch"](3);
            return _context19.abrupt("return", result = {
              error: _context19.t0
            });

          case 13:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[3, 10]]);
  }));
  return _dashboardInboundListAgentsAssignationHistoricFunction.apply(this, arguments);
}