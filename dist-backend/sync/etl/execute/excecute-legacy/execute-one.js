"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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

var _transform_hca_agent = require("../transform/hca/hca-agent/transform_hca_agent");

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

var chalk = require("chalk");

function extractAll() {
  return _extractAll.apply(this, arguments);
}

function _extractAll() {
  _extractAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** START ALL *************************/"));
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT INV *************************/"));
            _context.next = 6;
            return (0, _extract_agent.extractInvAgent)();

          case 6:
            _context.next = 8;
            return (0, _extract_break.extractInvBreak)();

          case 8:
            _context.next = 10;
            return (0, _extract_campaign.extractInvCampaign)();

          case 10:
            _context.next = 12;
            return (0, _extract_queue.extractInvQueue)();

          case 12:
            _context.next = 14;
            return (0, _extract_queueconfig.extractInvQueueConfig)();

          case 14:
            console.log("/***** END EXTRACT INV *******/");
            console.log("");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM INV *************************/"));
            _context.next = 20;
            return (0, _transform_agent.transformInvAgent)();

          case 20:
            _context.next = 22;
            return (0, _transform_break.transformInvBreak)();

          case 22:
            _context.next = 24;
            return (0, _transform_campaign.transformInvCampaign)();

          case 24:
            _context.next = 26;
            return (0, _transform_queue.transformInvQueue)();

          case 26:
            console.log("/***** END TRANSFORM INV *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT LOCAL *************************/"));
            _context.next = 31;
            return (0, _extract_local.extractLocalInvToRep)();

          case 31:
            console.log("/***** END EXTRACT LOCAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START UPDATE HCA *************************/"));
            _context.next = 36;
            return (0, _update_hca_agent.updateHcaAgent)();

          case 36:
            _context.next = 38;
            return (0, _update_hca_queue.updateHcaQueue)();

          case 38:
            console.log("/***** END UPDATE HCA *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM HCA *************************/"));
            _context.next = 43;
            return (0, _transform_hca_agent.transformHcaAgent)();

          case 43:
            console.log("/***** END TRANSFORM HCA *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT MAIN *************************/"));
            _context.next = 48;
            return (0, _extract_audit.extractMainAudit)();

          case 48:
            _context.next = 50;
            return (0, _extract_callentry.extractMainCallEntry)();

          case 50:
            _context.next = 52;
            return (0, _extract_queuelog.extractMainQueueLog)();

          case 52:
            _context.next = 54;
            return (0, _extract_cdr.extractMainCdr)();

          case 54:
            console.log("/***** END EXTRACT MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM MAIN *************************/"));
            _context.next = 59;
            return (0, _transform_audit.transformMainAudit)();

          case 59:
            _context.next = 61;
            return (0, _transform_callentry.transformMainCallEntry)();

          case 61:
            _context.next = 63;
            return (0, _transform_cdr.transformMainCdr)();

          case 63:
            _context.next = 65;
            return (0, _transform_cdr_hca.transformMainCdrHca)();

          case 65:
            console.log("/***** END TRANSFORM MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START UPDATE MAIN *************************/"));
            _context.next = 70;
            return (0, _update_audit.updateMainAudit)();

          case 70:
            _context.next = 72;
            return (0, _update_callentry.updateMainCalEntry)();

          case 72:
            console.log("/***** END UPDATE MAIN *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT REAL *************************/"));
            _context.next = 77;
            return (0, _extract_real_agents.extractRealAgents)();

          case 77:
            _context.next = 79;
            return (0, _extract_real_audit.extractRealAudit)();

          case 79:
            _context.next = 81;
            return (0, _extract_real_breaks.extractRealBreaks)();

          case 81:
            _context.next = 83;
            return (0, _extract_real_callentry.extractRealCallEntry)();

          case 83:
            _context.next = 85;
            return (0, _extract_real_calls.extractRealCalls)();

          case 85:
            _context.next = 87;
            return (0, _extract_real_cdr.extractRealCdr)();

          case 87:
            _context.next = 89;
            return (0, _extract_real_queuelog.extractRealQueueLog)();

          case 89:
            console.log("/***** END EXTRACT REAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM REAL *************************/"));
            _context.next = 94;
            return (0, _transform_realagents.transformRealAgents)();

          case 94:
            _context.next = 96;
            return (0, _transform_realbreaks.transformRealBreaks)();

          case 96:
            _context.next = 98;
            return (0, _transform_realcalls.transformRealCalls)();

          case 98:
            console.log("/***** END TRANSFORM REAL *******/");
            console.log("");
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

function runExceute() {
  return _runExceute.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute-one.js


function _runExceute() {
  _runExceute = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            extractAll();
            setInterval(function () {
              extractAll();
            }, 10000);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _runExceute.apply(this, arguments);
}

runExceute();
module.exports = {
  extractAll: extractAll,
  runExceute: runExceute
};