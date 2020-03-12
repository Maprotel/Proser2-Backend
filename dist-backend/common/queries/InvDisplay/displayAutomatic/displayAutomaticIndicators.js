"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayAutomaticIndicators = displayAutomaticIndicators;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _dateFunctions = require("../../../functions/dateFunctions");

var _sqlFunctions = require("../../../functions/sqlFunctions");

var _scaleFunctions = require("../../../functions/scaleFunctions");

var _userSelectionFunctions = require("../../../functions/userSelectionFunctions.js");

// DISPLAY Automatic REPORT

/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */
// IMPORTS

/******************************************************************** */
// MAIN FUNCTION
function displayAutomaticIndicators(_x) {
  return _displayAutomaticIndicators.apply(this, arguments);
}
/**************************************** */
// indicators


function _displayAutomaticIndicators() {
  _displayAutomaticIndicators = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, resume_error, displayAutomaticCallsIndicators, displayAutomaticCurrentCallsIndicators, agentsPlannedTotal, agentsConnectedTotal, agentsLoggedTotal, agentsConnectedByGroup, agentHistoricResume, agentsAuxiliarResume, agentsAssignationResume, agentsHistoricBreakResume, agentsHistoricAssignationResume, scale, colors;
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
            return displayAutomaticCallsIndicatorsFunction(userSelection);

          case 5:
            displayAutomaticCallsIndicators = _context.sent;
            _context.next = 8;
            return displayAutomaticCurrentCallsIndicatorsFunction(userSelection);

          case 8:
            displayAutomaticCurrentCallsIndicators = _context.sent;
            _context.next = 11;
            return agentsPlannedTotalFunction(userSelection);

          case 11:
            agentsPlannedTotal = _context.sent;
            _context.next = 14;
            return agentsConnectedTotalFunction(userSelection);

          case 14:
            agentsConnectedTotal = _context.sent;
            _context.next = 17;
            return agentsLoggedTotalFunction(userSelection);

          case 17:
            agentsLoggedTotal = _context.sent;
            _context.next = 20;
            return agentsConnectedByGroupFunction(userSelection);

          case 20:
            agentsConnectedByGroup = _context.sent;
            _context.next = 23;
            return agentHistoricResumeFunction(userSelection);

          case 23:
            agentHistoricResume = _context.sent;
            _context.next = 26;
            return agentsAuxiliarResumeFunction(userSelection);

          case 26:
            agentsAuxiliarResume = _context.sent;
            _context.next = 29;
            return agentsAssignationResumeFunction(userSelection);

          case 29:
            agentsAssignationResume = _context.sent;
            _context.next = 32;
            return agentsHistoricBreakResumeFunction(userSelection);

          case 32:
            agentsHistoricBreakResume = _context.sent;
            _context.next = 35;
            return agentsHistoricAssignationResumeFunction(userSelection);

          case 35:
            agentsHistoricAssignationResume = _context.sent;
            _context.next = 38;
            return scaleFunction(userSelection);

          case 38:
            scale = _context.sent;
            colors = [{
              AutomaticServiceLevel: (0, _scaleFunctions.onColorForPercentage)(displayAutomaticCallsIndicators[0].AutomaticServiceLevel, scale[0]),
              AutomaticAtentionLevel: (0, _scaleFunctions.onColorForPercentage)(displayAutomaticCallsIndicators[0].AutomaticAtentionLevel, scale[0]),
              AutomaticAbandonLevel: (0, _scaleFunctions.onColorForPercentage)(displayAutomaticCallsIndicators[0].AutomaticAbandonLevel, scale[0]),
              callsOnQueue: (0, _scaleFunctions.onColorForCallsOnQueue)(displayAutomaticCurrentCallsIndicators[0].maxWaitTimeOnQue, parseInt(process.env.CDR_SERVICE_IDEAL_TIME)),
              callsOnQueueWaitTime: displayAutomaticCurrentCallsIndicators[0].maxWaitTimeOnQue,
              callsOnQueueIdeal: parseInt(process.env.CDR_SERVICE_IDEAL_TIME)
            }];
            result = {
              displayAutomaticCallsIndicators: displayAutomaticCallsIndicators,
              displayAutomaticCurrentCallsIndicators: displayAutomaticCurrentCallsIndicators,
              agentsPlannedTotal: agentsPlannedTotal,
              agentsConnectedTotal: agentsConnectedTotal,
              agentsLoggedTotal: agentsLoggedTotal,
              agentsConnectedByGroup: agentsConnectedByGroup,
              agentHistoricResume: agentHistoricResume,
              agentsAuxiliarResume: agentsAuxiliarResume,
              agentsAssignationResume: agentsAssignationResume,
              agentsHistoricBreakResume: agentsHistoricBreakResume,
              agentsHistoricAssignationResume: agentsHistoricAssignationResume,
              scale: scale,
              colors: colors
            };
            return _context.abrupt("return", result);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _displayAutomaticIndicators.apply(this, arguments);
}

function displayAutomaticCallsIndicatorsFunction(_x2) {
  return _displayAutomaticCallsIndicatorsFunction.apply(this, arguments);
}
/**************************************** */
// current calls


function _displayAutomaticCallsIndicatorsFunction() {
  _displayAutomaticCallsIndicatorsFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(userSelection) {
    var result, resume_error, query;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            resume_error = false; // ,SUM(case when callentry_duration_sec_wait <= ${
            //   process.env.CDR_SERVICE_IDEAL_TIME
            // } then 1 else 0 end)/
            //  SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS AutomaticServiceLevel

            query = "\n\n  -- displayAutomaticCallsIndicatorsFunction --------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  \n  now() AS now\n  ,DAYNAME(callentry_date) as day_name\n  ,WEEKDAY(callentry_date) + ".concat(process.env.MONDAY_CONFIG, " as week_day\n      \n  ,'").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.start_date), "' AS start_date\n  ,'").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.end_date), "' AS end_date\n\n  ,'").concat((0, _dateFunctions.valueFromObject)(userSelection.start_time, "00:00:00"), "' AS start_time\n  ,'").concat((0, _dateFunctions.valueFromObject)(userSelection.end_time, "24:00:00"), "' AS end_time\n  \n  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS min_start_time\n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS max_end_time\n  \n  ,").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealResponseTime\n  ,").concat(process.env.CDR_SHORTCALL_TIME, " AS shortTimeDef\n\n  ,MAX(callentry_duration_sec_wait) as maxWaitTime\n  \n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS AutomaticReceived\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS AutomaticAbandoned\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS AutomaticAttended\n  \n  ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS AutomaticShort\n  \n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS AutomaticBeforeTime\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) - SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS AutomaticAfterTime\n  \n  ,SUM(callentry_hung_agent) AS AutomaticHungAgent\n  \n  ,SUM (case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " ) then 1 else 0 end) / SUM ( case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' ) then 1 else 0 end) AS AutomaticServiceLevel\n\n  \n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS AutomaticAtentionLevel\n  \n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS AutomaticAbandonLevel\n  \n  ,SUM(callentry_duration_sec) AS operation_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS operation_time\n  \n  ,SUM(callentry_duration_sec_wait) AS wait_seconds\n  \n  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) AS wait_time\n\n  ,MAX(callentry_duration_sec_wait) as maxWaitTime\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS AutomaticTmo\n  \n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS AutomaticAsa\n  \n   -- ---------------------------------------------------------------\n   -- TABLES & JOINS\n   FROM\n   \n   MainCallEntry\n   \n   LEFT OUTER JOIN InvAgent\n   ON callentry_agent_id = inv_agent_id\n   \n\n\n\n   LEFT OUTER JOIN HcaAgent\n   ON (callentry_agent_id = hca_agent_id AND callentry_date = \n    (SELECT hca_agent_date FROM HcaAgent WHERE hca_agent_date <= '").concat((0, _dateFunctions.objectDateToTextDate)(userSelection.start_date), "' ORDER BY hca_agent_date DESC LIMIT 1))\n   \n\n\n    \n   LEFT OUTER JOIN InvQueue\n   ON callentry_queue_id = inv_queue_id\n   \n   LEFT OUTER JOIN HcaQueue\n   ON (callentry_agent_id = hca_queue_id AND callentry_date = hca_queue_date)\n   \n   -- -----------------------------\n   WHERE 1\n   \n   AND\n   inv_queue_type = 'automatic'\n   \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_entry_queue"), "\n   AND callentry_date is not null\n   \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "callentry_agent_id"), "\n   \n   -- SUPERVISOR\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n   \n   -- SCHEDULE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n   \n   -- ROLE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n   \n   -- CLIENT\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_client_json"), "\n   \n   -- QUEUE\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n   \n   -- SERVICE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_service_json"), "\n   \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n   \n  \n   -- END ---------------------------------------------------------------\n\n  ");
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
  return _displayAutomaticCallsIndicatorsFunction.apply(this, arguments);
}

function displayAutomaticCurrentCallsIndicatorsFunction(_x3) {
  return _displayAutomaticCurrentCallsIndicatorsFunction.apply(this, arguments);
}
/**************************************** */
// Agents planned


function _displayAutomaticCurrentCallsIndicatorsFunction() {
  _displayAutomaticCurrentCallsIndicatorsFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userSelection) {
    var result, resume_error, query, _result;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n-- displayAutomaticCurrentCallsIndicatorsFunction --------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n\n,SUM(CASE when rcc_callentry_status = 'activa' then 1 else 0 end) as callsActive\n,SUM(CASE when rcc_callentry_status = 'en-cola' then 1 else 0 end) as callsOnQueue\n,MAX(CASE when rcc_callentry_status = 'en-cola' then rcc_callentry_duration_wait_sec else 0 end) as maxWaitTimeOnQue\n, 'blue' as color\n\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCurrentCalls\n\nLEFT OUTER JOIN InvAgent\nON rcc_callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN HcaAgent\nON rcc_callentry_agent_id = hca_agent_id\nAND rcc_date = hca_agent_date\n\nLEFT OUTER JOIN InvQueue\nON rcc_callentry_queue_id = inv_queue_id\n\nLEFT OUTER JOIN HcaQueue\nON rcc_callentry_queue_id = hca_queue_id\nAND rcc_date = hca_queue_date\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\nAND\ninv_queue_type = 'automatic'\n\n-- TIME AND DATE\n\n-- AGENT\n".concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_client_json"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "rcc_callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_service_json"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "rcc_callentry_campaign_id"), "\n\n-- BREAK\n-- ASIGNACION\n-- END -------------------------------------------------------\n");
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
  return _displayAutomaticCurrentCallsIndicatorsFunction.apply(this, arguments);
}

function agentsPlannedTotalFunction(_x4) {
  return _agentsPlannedTotalFunction.apply(this, arguments);
}
/**************************************** */
// Agents connected


function _agentsPlannedTotalFunction() {
  _agentsPlannedTotalFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(userSelection) {
    var result, resume_error, query, temp;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = [{
              now: "",
              agentsPlannedTotal: null
            }];
            resume_error = false;
            query = "\n  -- agentsPlannedTotalFunction ----------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\n   now() as now\n   ,COUNT(hca_agent_id) as agentsPlannedTotal\n\n    FROM\n        HcaAgent\n       \n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n        \n        -- TIME AND DATE\n        ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "hca_agent_date"), "\n        \n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n        \n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n        \n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n        \n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n        \n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_client_json"), "\n        \n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "hca_agent_queue_json"), "\n        \n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_agent_service_json"), "\n        \n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "hca_agent_campaign_json"), "\n        \n        -- BREAK\n        -- ASIGNACION\n\n        GROUP BY hca_agent_date\n        -- END ----------------------------------------------------------\n        ");
            _context4.prev = 3;
            _context4.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            temp = _context4.sent;
            return _context4.abrupt("return", temp.length < 1 ? result : temp);

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
  return _agentsPlannedTotalFunction.apply(this, arguments);
}

function agentsConnectedTotalFunction(_x5) {
  return _agentsConnectedTotalFunction.apply(this, arguments);
} // Agents connected


function _agentsConnectedTotalFunction() {
  _agentsConnectedTotalFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(userSelection) {
    var result, resume_error, query, _result2;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,COUNT(DISTINCT rca_agent_id) as agentsConnectedTotal\n  ,SUM(CASE when rca_group_name = 'Disponible' or rca_group_name = 'Ocupado' then 1 else 0 end ) as agentsEffectiveTotal\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN HcaAgent\n  ON rca_agent_id = hca_agent_id\n  AND rca_date = hca_agent_date\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n  \n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n  \n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n  \n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n  \n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n  \n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n  \n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  \n  -- END -----------------------------------------------------------\n  ");
            _context5.prev = 3;
            _context5.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result2 = _context5.sent;
            return _context5.abrupt("return", _result2);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            return _context5.abrupt("return", result = {
              error: _context5.t0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));
  return _agentsConnectedTotalFunction.apply(this, arguments);
}

function agentsLoggedTotalFunction(_x6) {
  return _agentsLoggedTotalFunction.apply(this, arguments);
}
/**************************************** */
// agents grouped


function _agentsLoggedTotalFunction() {
  _agentsLoggedTotalFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(userSelection) {
    var result, resume_error, query, _result3;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,COUNT(DISTINCT audit_agent_id) as agentsLoggedTotal\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  MainAudit\n  LEFT OUTER JOIN InvAgent\n  ON audit_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN HcaAgent\n  ON audit_agent_id = hca_agent_id\n  AND audit_date = hca_agent_date\n  \n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "audit_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n  \n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n  \n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n  \n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n  \n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n  \n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n  \n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  \n  -- END ------------------------------------------------------------\n  ");
            _context6.prev = 3;
            _context6.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result3 = _context6.sent;
            return _context6.abrupt("return", _result3);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](3);
            return _context6.abrupt("return", result = {
              error: _context6.t0
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 10]]);
  }));
  return _agentsLoggedTotalFunction.apply(this, arguments);
}

function agentsConnectedByGroupFunction(_x7) {
  return _agentsConnectedByGroupFunction.apply(this, arguments);
}
/**************************************** */
// agents historic


function _agentsConnectedByGroupFunction() {
  _agentsConnectedByGroupFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(userSelection) {
    var result, resume_error, query, _result4;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n      \n  ,rca_group_name as name\n  ,aux_color_string as color\n  ,COUNT(DISTINCT rca_agent_id) as value\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentAgents\n  LEFT OUTER JOIN InvAgent\n  ON rca_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN HcaAgent\n  ON rca_agent_id = hca_agent_id\n  AND rca_date = hca_agent_date\n  \n  LEFT OUTER JOIN MainAudit\n  ON rca_audit_login_id = audit_id\n\n  LEFT OUTER JOIN AuxColor\n  ON aux_color_use = rca_group_name\n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n  rca_agent_status = 'Logueado'\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rca_agent_datetime_login"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n  \n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n  \n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n  \n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n  \n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n  \n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n  \n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  \n  GROUP BY rca_group_name\n      \n  -- END ---------------------------------------------------------\n  ");
            _context7.prev = 3;
            _context7.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result4 = _context7.sent;
            return _context7.abrupt("return", _result4);

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            return _context7.abrupt("return", result = {
              error: _context7.t0
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 10]]);
  }));
  return _agentsConnectedByGroupFunction.apply(this, arguments);
}

function agentHistoricResumeFunction(_x8) {
  return _agentHistoricResumeFunction.apply(this, arguments);
}
/**************************************** */
// break auxiliar resume


function _agentHistoricResumeFunction() {
  _agentHistoricResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(userSelection) {
    var result, resume_error, query, _result5;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n      SELECT\n      'planificados' as concept\n      ,COUNT(hca_agent_schedule_plan) as count_agents\n      ,SEC_TO_TIME(SUM(hca_agent_schedule_duration)) as duration_agents\n      ,DATE_FORMAT(SEC_TO_TIME(SUM(hca_agent_schedule_duration) / COUNT(hca_agent_schedule_plan)), '%H:%i:%s')\n      as average_agents\n      FROM\n      HcaAgent\n      LEFT OUTER JOIN InvAgent as agent\n      ON hca_agent_id = inv_agent_id\n      WHERE\n      hca_agent_date = '".concat(userSelection.start_date, "'\n      AND\n      ").concat(userSelection.filter_hca_agent, "\n\n\n      UNION\n\n      SELECT\n      'registrados' as concept\n      ,COUNT(DISTINCT audit_agent_id) as count_agents\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) as duration_agents\n      ,SEC_TO_TIME( SUM( audit_duration_sec) / COUNT(DISTINCT audit_agent_id))\n      as average_agents\n      FROM\n      MainAudit\n      LEFT OUTER JOIN InvAgent\n      ON audit_agent_id = inv_agent_id\n      WHERE\n      audit_break_id = 0\n      AND\n      audit_date = '").concat(userSelection.start_date, "'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n\n\n      UNION\n\n\n      SELECT\n      'Llamadas entrantes' as concept\n      ,COUNT(DISTINCT callentry_agent_id) as count_agents\n      ,SEC_TO_TIME(SUM((callentry_duration_sec))) as duration_agents\n      ,DATE_FORMAT(SEC_TO_TIME(SUM((callentry_duration_sec)) / COUNT(DISTINCT callentry_agent_id)), '%H:%i:%s')\n      as average_agents\n      FROM\n      MainCallEntry\n      LEFT OUTER JOIN InvAgent\n      ON callentry_agent_id = inv_agent_id\n      WHERE\n      callentry_date = '").concat(userSelection.start_date, "'\n      AND\n      callentry_status = 'terminada'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n\n      UNION\n\n      SELECT\n      'Llamadas salientes' as concept\n      ,COUNT(DISTINCT cdr_agent_id) as count_agents\n      ,SEC_TO_TIME(SUM((cdr_duration_sec))) as duration_agents\n      ,DATE_FORMAT(SEC_TO_TIME(SUM((cdr_duration_sec)) / COUNT(DISTINCT cdr_agent_id)), '%H:%i:%s')\n      as average_agents\n      FROM\n      MainCdr\n      LEFT OUTER JOIN InvAgent\n      ON cdr_agent_id = inv_agent_id\n      WHERE\n      cdr_call_made = 1\n      AND\n      cdr_date = '").concat(userSelection.start_date, "'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n\n        ");
            _context8.prev = 3;
            _context8.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result5 = _context8.sent;
            return _context8.abrupt("return", _result5);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](3);
            resume_error = true;
            return _context8.abrupt("return", {
              error: "agentsIndicators - agentHistoricResumeFunction " + _context8.t0
            });

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 10]]);
  }));
  return _agentHistoricResumeFunction.apply(this, arguments);
}

function agentsAuxiliarResumeFunction(_x9) {
  return _agentsAuxiliarResumeFunction.apply(this, arguments);
}
/**************************************** */
// break assignation resume


function _agentsAuxiliarResumeFunction() {
  _agentsAuxiliarResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(userSelection) {
    var result, resume_error, query, _result6;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n  ,rcb_break_name as name\n  ,rcb_break_id as id\n  ,COUNT(rcb_break_audit_id) as value\n  ,SEC_TO_TIME(SUM(TIME_TO_SEC(rcb_break_duration))) AS duration\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentBreaks\n  LEFT OUTER JOIN InvAgent\n  ON rcb_break_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN InvBreak\n  ON rcb_break_id = inv_break_id\n  \n  LEFT OUTER JOIN HcaAgent\n  ON rcb_break_agent_id = hca_agent_id\n  AND rcb_date = hca_agent_date\n  \n  LEFT OUTER JOIN MainAudit\n  ON rcb_break_audit_id = audit_id\n  \n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n    rcb_break_productivity = 0\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcb_break_datetime_init"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n  \n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n  \n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n  \n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n  \n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n  \n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n  \n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  \n  GROUP BY rcb_break_name\n  \n  -- END -----------------------------------------------------------\n  ");
            _context9.prev = 3;
            _context9.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result6 = _context9.sent;
            return _context9.abrupt("return", _result6);

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
  return _agentsAuxiliarResumeFunction.apply(this, arguments);
}

function agentsAssignationResumeFunction(_x10) {
  return _agentsAssignationResumeFunction.apply(this, arguments);
}
/**************************************** */
// scale


function _agentsAssignationResumeFunction() {
  _agentsAssignationResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(userSelection) {
    var result, resume_error, query, _result7;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n  -- ---------------------------------------------------------------\n  -- FIELDS\n  SELECT\n  \n  -- TIME & INTERVAL\n  now() as now\n  ,rcb_break_name as name\n  ,rcb_break_id as id\n  ,COUNT(rcb_break_audit_id) as value\n  ,SEC_TO_TIME(SUM(rcb_break_duration)) AS duration\n  \n  -- ---------------------------------------------------------------\n  -- TABLES & JOINS\n  \n  FROM\n  \n  RealCurrentBreaks\n  LEFT OUTER JOIN InvAgent\n  ON rcb_break_agent_id = inv_agent_id\n  \n  LEFT OUTER JOIN InvBreak\n  ON rcb_break_id = inv_break_id\n  \n  LEFT OUTER JOIN HcaAgent\n  ON rcb_break_agent_id = hca_agent_id\n  AND rcb_date = hca_agent_date\n  \n  LEFT OUTER JOIN MainAudit\n  ON rcb_break_audit_id = audit_id\n  \n  \n  -- ---------------------------------------------------------------\n  -- CONDITIONS\n  WHERE 1\n\n  AND\n    rcb_break_productivity = 1\n  \n  -- TIME AND DATE\n  ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcb_break_datetime_init"), "\n  \n  -- AGENT\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n  \n  -- SUPERVISOR\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n  \n  -- SCHEDULE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n  \n  -- ROLE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n  \n  -- CLIENT\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n  \n  -- QUEUE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n  \n  -- SERVICE\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n  \n  -- CAMPAIGN\n  ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n  \n  -- BREAK\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n  \n  -- ASIGNACION\n  ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n  \n  \n  GROUP BY rcb_break_name\n  \n  -- END ---------------------------------------------------------\n\n  ");
            _context10.prev = 3;
            _context10.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result7 = _context10.sent;
            return _context10.abrupt("return", _result7);

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](3);
            return _context10.abrupt("return", result = {
              error: _context10.t0
            });

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[3, 10]]);
  }));
  return _agentsAssignationResumeFunction.apply(this, arguments);
}

function scaleFunction(_x11) {
  return _scaleFunction.apply(this, arguments);
}

function _scaleFunction() {
  _scaleFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11(userSelection) {
    var result, resume_error, query, _result8;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            result = null;
            resume_error = false;
            query = "\n    SELECT\n    *\n    FROM\n    InvScale\n    WHERE\n    inv_scale_name = '".concat(process.env.COLORSCALE_NAME, "'\n  ");
            _context11.prev = 3;
            _context11.next = 6;
            return pool.destinyReports.query(query);

          case 6:
            _result8 = _context11.sent;
            return _context11.abrupt("return", _result8);

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
  return _scaleFunction.apply(this, arguments);
}

function agentsHistoricBreakResumeFunction(_x12) {
  return _agentsHistoricBreakResumeFunction.apply(this, arguments);
}

function _agentsHistoricBreakResumeFunction() {
  _agentsHistoricBreakResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(userSelection) {
    var query, _result9;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            query = "\n  SELECT\n      inv_break_name as name\n      ,inv_break_id as id\n      ,count(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n      -- ---------------------------------------------------------------\n      -- TABLES & JOINS\n      \n      FROM\n      \n      MainAudit\n      LEFT OUTER JOIN InvAgent\n      ON audit_agent_id = inv_agent_id\n      \n      LEFT OUTER JOIN InvBreak\n      ON audit_break_id = inv_break_id\n      \n      LEFT OUTER JOIN HcaAgent\n      ON audit_agent_id = hca_agent_id\n      AND audit_date = hca_agent_date\n      \n      -- ---------------------------------------------------------------\n      -- CONDITIONS\n    \n    WHERE\n    inv_break_productivity = 0\n    AND\n      inv_break_name is not null\n\n      -- TIME AND DATE\n      ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n      \n      -- AGENT\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n      \n      -- SUPERVISOR\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n      \n      -- SCHEDULE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n      \n      -- ROLE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n      \n      \n      -- CLIENT\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n      \n      -- QUEUE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n      \n      -- SERVICE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n      \n      -- CAMPAIGN\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n      \n      -- BREAK\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n      \n      -- ASIGNACION\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n    \n      \n      GROUP BY inv_break_name\n");
            _context12.prev = 1;
            _context12.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            _result9 = _context12.sent;
            return _context12.abrupt("return", _result9);

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](1);
            return _context12.abrupt("return", result = {
              error: _context12.t0
            });

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 8]]);
  }));
  return _agentsHistoricBreakResumeFunction.apply(this, arguments);
}

function agentsHistoricAssignationResumeFunction(_x13) {
  return _agentsHistoricAssignationResumeFunction.apply(this, arguments);
}

function _agentsHistoricAssignationResumeFunction() {
  _agentsHistoricAssignationResumeFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13(userSelection) {
    var query, _result10;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            query = "\n  SELECT\n      inv_break_name as name\n      ,inv_break_id as id\n      ,count(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n      -- ---------------------------------------------------------------\n      -- TABLES & JOINS\n      \n      FROM\n      \n      MainAudit\n      LEFT OUTER JOIN InvAgent\n      ON audit_agent_id = inv_agent_id\n      \n      LEFT OUTER JOIN InvBreak\n      ON audit_break_id = inv_break_id\n      \n      LEFT OUTER JOIN HcaAgent\n      ON audit_agent_id = hca_agent_id\n      AND audit_date = hca_agent_date\n      \n      -- ---------------------------------------------------------------\n      -- CONDITIONS\n    \n    WHERE\n    inv_break_productivity = 1\n    AND\n      inv_break_name is not null\n\n      -- TIME AND DATE\n      ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n      \n      -- AGENT\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n      \n      -- SUPERVISOR\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json", "supervisor"), "\n      \n      -- SCHEDULE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_time_json", "schedule"), "\n      \n      -- ROLE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_people_json", "role"), "\n      \n      \n      -- CLIENT\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n      \n      -- QUEUE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n      \n      -- SERVICE\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n      \n      -- CAMPAIGN\n      ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n      \n      -- BREAK\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n      \n      -- ASIGNACION\n      ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n    \n      \n      GROUP BY inv_break_name\n");
            _context13.prev = 1;
            _context13.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            _result10 = _context13.sent;
            return _context13.abrupt("return", _result10);

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](1);
            return _context13.abrupt("return", result = {
              error: _context13.t0
            });

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return _agentsHistoricAssignationResumeFunction.apply(this, arguments);
}