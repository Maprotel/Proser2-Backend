"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.realCurrentCallsReport = realCurrentCallsReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function realCurrentCallsReport(_x) {
  return _realCurrentCallsReport.apply(this, arguments);
}

function _realCurrentCallsReport() {
  _realCurrentCallsReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "rcc_callentry_datetime_entry_queue"), "\n\n\n,rcc_callentry_id, rcc_callentry_agent_id, rcc_callentry_queue_id, rcc_callentry_contact_id, rcc_callentry_callerid, rcc_callentry_datetime_init, rcc_callentry_datetime_end, rcc_callentry_duration, rcc_callentry_duration_sec, rcc_callentry_status, rcc_callentry_transfer, rcc_callentry_datetime_entry_queue, rcc_callentry_duration_wait_sec, rcc_callentry_uniqueid, rcc_callentry_campaign_id, rcc_callentry_trunk, rcc_date\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nRealCurrentCalls\n\nLEFT OUTER JOIN InvAgent\nON rcc_callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN HcaAgent\nON rcc_callentry_agent_id = hca_agent_id\nAND rcc_date = hca_agent_date\n\nLEFT OUTER JOIN InvQueue\nON rcc_callentry_queue_id = inv_queue_id\n\nLEFT OUTER JOIN HcaQueue\nON rcc_callentry_queue_id = hca_queue_id\nAND rcc_date = hca_queue_date\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "rcc_callentry_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_client_json"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "rcc_callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_service_json"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "rcc_callentry_campaign_id"), "\n\n-- BREAK\n\n\n-- ASIGNACION\n\n\n-- PLANNED CLIENT\n\n\n-- PLANNED QUEUE\n\n\n-- PLANNED SERVICE\n\n\n-- PLANNED CAMPAIGN\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n-- ---------------------------------------------------------------\n-- END\n");
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(query);

          case 5:
            resultPre = _context.sent;
            result = resultPre;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            result = {
              error: _context.t0
            };

          case 12:
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _realCurrentCallsReport.apply(this, arguments);
}