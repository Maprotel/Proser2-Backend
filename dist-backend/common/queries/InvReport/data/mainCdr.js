"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainCdrReport = mainCdrReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function mainCdrReport(_x) {
  return _mainCdrReport.apply(this, arguments);
}

function _mainCdrReport() {
  _mainCdrReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, query, resultPre;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            query = "\n-- ---------------------------------------------------------------\n-- MAINCDR FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n,".concat((0, _sqlFunctions.sqlIntervalSqlQuery)(userSelection, "cdr_calldate"), "\n\n,cdr_id\n,cdr_calldate\n,cdr_clid\n,cdr_src\n,cdr_dst\n,cdr_dcontext\n,cdr_channel\n,cdr_dstchannel\n,cdr_lastapp\n,cdr_lastdata\n,cdr_duration_sec\n,cdr_billsec_sec\n,cdr_disposition\n,cdr_amaflags\n,cdr_accountcode\n,cdr_uniqueid\n,cdr_userfield\n,cdr_recordingfile\n,cdr_cnum\n,cdr_cnam\n,cdr_outbound_cnum\n,cdr_outbound_cnam\n,cdr_dst_cnam\n,cdr_did\n,__CALLCENTER__\n,cdr_callcenter_name\n,cdr_call_type\n,cdr_call_class\n,cdr_agent_extension\n,cdr_queue_number\n,cdr_agent_id\n,cdr_queue_id\n,__DATE__\n,cdr_date\n\n,cdr_hca_agent_serial_id\n,cdr_hca_queue_serial_id\n,__MADE__\n,cdr_call_made\n,cdr_call_fail\n,cdr_call_answered\n,cdr_call_efective\n,cdr_call_hungout\n\n-- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCdr\nLEFT OUTER JOIN InvAgent\nON cdr_agent_id = inv_agent_id\n\nLEFT OUTER JOIN InvQueue\nON cdr_queue_id = inv_queue_id\n\nLEFT OUTER JOIN MainCallEntry\nON cdr_uniqueid = callentry_uniqueid\n\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "cdr_calldate"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "cdr_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.supervisor, "cdr_people_json", "supervisor"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_time_json", "schedule"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.objectToJsonSqlQuery)(userSelection.client, "cdr_people_json", "role"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "cdr_operation_json", "client"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "cdr_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "cdr_operation_json", "service"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n\n").concat((0, _sqlFunctions.sqlIntervalGroupSqlQuery)(userSelection), "\n\n\n-- ---------------------------------------------------------------\n-- END\n");
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
  return _mainCdrReport.apply(this, arguments);
}