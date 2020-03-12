"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

var _extract_agent = require("../extract/inv/extract_agent");

var _extract_break = require("../extract/inv/extract_break");

var _extract_campaign = require("../extract/inv/extract_campaign");

var _extract_queue = require("../extract/inv/extract_queue");

var _extract_queueconfig = require("../extract/inv/extract_queueconfig");

var _transform_agent = require("../transform/inv/agent/transform_agent");

var _transform_break = require("../transform/inv/break/transform_break");

var _transform_campaign = require("../transform/inv/campaign/transform_campaign");

var _transform_queue = require("../transform/inv/queue/transform_queue");

var _extract_local = require("../local/extract_local");

var _update_hca_agent = require("../update/hca/update_hca_agent");

var _update_hca_queue = require("../update/hca/update_hca_queue");

var _extract_audit = require("../extract/main/extract_audit");

var _extract_callentry = require("../extract/main/extract_callentry");

var _extract_cdr = require("../extract/main/extract_cdr");

var _extract_queuelog = require("../extract/main/extract_queuelog");

var _transform_audit = require("../transform/main/audit/transform_audit");

var _transform_callentry = require("../transform/main/callentry/transform_callentry");

var _transform_cdr = require("../transform/main/cdr/transform_cdr");

var _transform_cdr_hca = require("../transform/main/cdr/transform_cdr_hca");

var _update_audit = require("../update/main/update_audit");

var _update_callentry = require("../update/main/update_callentry");

var _extract_real_agents = require("../extract/real/extract_real_agents");

var _extract_real_audit = require("../extract/real/extract_real_audit");

var _extract_real_breaks = require("../extract/real/extract_real_breaks");

var _extract_real_callentry = require("../extract/real/extract_real_callentry");

var _extract_real_calls = require("../extract/real/extract_real_calls");

var _extract_real_cdr = require("../extract/real/extract_real_cdr");

var _extract_real_queuelog = require("../extract/real/extract_real_queuelog");

var _transform_realagents = require("../transform/real/real-agents/transform_realagents");

var _transform_realbreaks = require("../transform/real/real-breaks/transform_realbreaks");

var _transform_realcalls = require("../transform/real/real-calls/transform_realcalls");

var _smsExecute = require("../sms/smsExecute");

// import { transformHcaAgent } from "../transform/hca/hca-agent/transform_hca_agent";
var input_date = process.argv[2];
var incoming_date = input_date === '' ? '' : process.argv[2];

var chalk = require("chalk");

var min_date = executeMinOriginDate();

function extractAll(_x) {
  return _extractAll.apply(this, arguments);
} // Find minimun date in Origin Cdr


function _extractAll() {
  _extractAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(incoming_date) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** START ALL *************************/"));
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT INV *************************/"));
            _context.next = 6;
            return (0, _extract_agent.extractInvAgent)(input_date);

          case 6:
            _context.next = 8;
            return (0, _extract_break.extractInvBreak)(input_date);

          case 8:
            _context.next = 10;
            return (0, _extract_campaign.extractInvCampaign)(input_date);

          case 10:
            _context.next = 12;
            return (0, _extract_queue.extractInvQueue)(input_date);

          case 12:
            _context.next = 14;
            return (0, _extract_queueconfig.extractInvQueueConfig)(input_date);

          case 14:
            console.log("/***** END EXTRACT INV *******/");
            console.log("");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM INV *************************/"));
            _context.next = 20;
            return (0, _transform_agent.transformInvAgent)(input_date);

          case 20:
            _context.next = 22;
            return (0, _transform_break.transformInvBreak)(input_date);

          case 22:
            _context.next = 24;
            return (0, _transform_campaign.transformInvCampaign)(input_date);

          case 24:
            _context.next = 26;
            return (0, _transform_queue.transformInvQueue)(input_date);

          case 26:
            console.log("/***** END TRANSFORM INV *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT LOCAL *************************/"));
            _context.next = 31;
            return (0, _extract_local.extractLocalInvToRep)(input_date);

          case 31:
            console.log("/***** END EXTRACT LOCAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START UPDATE HCA *************************/"));
            _context.next = 36;
            return (0, _update_hca_agent.updateHcaAgent)(input_date);

          case 36:
            _context.next = 38;
            return (0, _update_hca_queue.updateHcaQueue)(input_date);

          case 38:
            console.log("/***** END UPDATE HCA *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM HCA *************************/")); // await transformHcaAgent( input_date );

            console.log("/***** END TRANSFORM HCA *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT MAIN *************************/"));
            _context.next = 46;
            return (0, _extract_audit.extractMainAudit)(input_date);

          case 46:
            _context.next = 48;
            return (0, _extract_callentry.extractMainCallEntry)(input_date);

          case 48:
            _context.next = 50;
            return (0, _extract_queuelog.extractMainQueueLog)(input_date);

          case 50:
            _context.next = 52;
            return (0, _extract_cdr.extractMainCdr)(input_date);

          case 52:
            console.log("/***** END EXTRACT MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM MAIN *************************/"));
            _context.next = 57;
            return (0, _transform_audit.transformMainAudit)(input_date);

          case 57:
            _context.next = 59;
            return (0, _transform_callentry.transformMainCallEntry)(input_date);

          case 59:
            _context.next = 61;
            return (0, _transform_cdr.transformMainCdr)(input_date);

          case 61:
            _context.next = 63;
            return (0, _transform_cdr_hca.transformMainCdrHca)(input_date);

          case 63:
            console.log("/***** END TRANSFORM MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START UPDATE MAIN *************************/"));
            _context.next = 68;
            return (0, _update_audit.updateMainAudit)(input_date);

          case 68:
            _context.next = 70;
            return (0, _update_callentry.updateMainCalEntry)(input_date);

          case 70:
            console.log("/***** END UPDATE MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT REAL *************************/"));
            _context.next = 75;
            return (0, _extract_real_agents.extractRealAgents)(input_date);

          case 75:
            _context.next = 77;
            return (0, _extract_real_audit.extractRealAudit)(input_date);

          case 77:
            _context.next = 79;
            return (0, _extract_real_breaks.extractRealBreaks)(input_date);

          case 79:
            _context.next = 81;
            return (0, _extract_real_callentry.extractRealCallEntry)(input_date);

          case 81:
            _context.next = 83;
            return (0, _extract_real_calls.extractRealCalls)(input_date);

          case 83:
            _context.next = 85;
            return (0, _extract_real_cdr.extractRealCdr)(input_date);

          case 85:
            _context.next = 87;
            return (0, _extract_real_queuelog.extractRealQueueLog)(input_date);

          case 87:
            console.log("/***** END EXTRACT REAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM REAL *************************/"));
            _context.next = 92;
            return (0, _transform_realagents.transformRealAgents)(input_date);

          case 92:
            _context.next = 94;
            return (0, _transform_realbreaks.transformRealBreaks)(input_date);

          case 94:
            _context.next = 96;
            return (0, _transform_realcalls.transformRealCalls)(input_date);

          case 96:
            console.log("/***** END TRANSFORM REAL *******/");
            console.log("");
            _context.next = 100;
            return (0, _smsExecute.exportSms)(input_date);

          case 100:
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** END ALL *************************/"));

          case 102:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _extractAll.apply(this, arguments);
}

function executeMinOriginDate() {
  return _executeMinOriginDate.apply(this, arguments);
} // Run endless requests


function _executeMinOriginDate() {
  _executeMinOriginDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var result, querySQL, getQuery, preresult, longDate;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            querySQL = "SELECT min(calldate) as min_date from asteriskcdrdb.cdr";
            _context2.prev = 2;
            console.log("MinDate in CDR");
            _context2.next = 6;
            return pool.origin.query(querySQL);

          case 6:
            getQuery = _context2.sent;
            preresult = (0, _mysqlHelper.removeRowDataPacket)(getQuery);
            longDate = Array.isArray(preresult) && preresult.length > 0 ? preresult[0].min_date : '';
            result = (0, _moment["default"])(longDate).format('YYYY-MM-DD');
            return _context2.abrupt("return", result);

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](2);
            result = {
              error: _context2.t0
            };
            console.log("Error load-day", _context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 13]]);
  }));
  return _executeMinOriginDate.apply(this, arguments);
}

function runExecute(_x2) {
  return _runExecute.apply(this, arguments);
} // Run only one day


function _runExecute() {
  _runExecute = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(incoming_date) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            extractAll(incoming_date);
            setInterval(function () {
              extractAll(incoming_date);
            }, 5000);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _runExecute.apply(this, arguments);
}

function loadOneDay(_x3) {
  return _loadOneDay.apply(this, arguments);
} // Run historic


function _loadOneDay() {
  _loadOneDay = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(incoming_date) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = null;
            querySQL = "SELECT VERSION()";
            _context4.prev = 2;
            console.log("**** LOAD DAY ********");
            _context4.next = 6;
            return pool.origin.query(querySQL);

          case 6:
            result = _context4.sent;
            console.log("result", result);

            if (result.length > 0) {
              runExecute(incoming_date);
            } else {
              console.log("No Origin connection");
            }

            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](2);
            result = {
              error: _context4.t0
            };
            console.log("Error load-day", _context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 11]]);
  }));
  return _loadOneDay.apply(this, arguments);
}

function loadHistory(_x4, _x5) {
  return _loadHistory.apply(this, arguments);
} // Get previous date


function _loadHistory() {
  _loadHistory = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(incoming_date, min_date) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null;

            try {
              console.log("**** HISTORIC ".concat(incoming_date, " -- ").concat(min_date, "  ********"));
              setInterval(function () {
                extractAll(incoming_date);
                incoming_date = previousDate(incoming_date);
              }, 10000);
            } catch (error) {
              result = {
                error: error
              };
              console.log("Error load-day", error);
            }

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadHistory.apply(this, arguments);
}

function previousDate(initial_date) {
  var formated_date = (0, _moment["default"])().format("YYYY-MM-DD");
  var startdate = (0, _moment["default"])(initial_date);
  var previous_date = startdate.subtract(1, "days");
  formated_date = startdate.format("YYYY-MM-DD");
  return formated_date;
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute-date.js


module.exports = {
  extractAll: extractAll,
  loadOneDay: loadOneDay,
  loadHistory: loadHistory
};