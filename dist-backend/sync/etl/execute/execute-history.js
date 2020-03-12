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

// import { transformHcaAgent } from "../transform/hca/hca-agent/transform_hca_agent";
var chalk = require("chalk");

function extractAll(_x) {
  return _extractAll.apply(this, arguments);
} // Run historic


function _extractAll() {
  _extractAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(input_date) {
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
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT REAL *************************/")); // await extractRealAgents( input_date );
            // await extractRealAudit( input_date );
            // await extractRealBreaks( input_date );
            // await extractRealCallEntry( input_date );
            // await extractRealCalls( input_date );
            // await extractRealCdr( input_date );
            // await extractRealQueueLog( input_date );

            console.log("/***** END EXTRACT REAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM REAL *************************/")); // await transformRealAgents( input_date );
            // await transformRealBreaks( input_date );
            // await transformRealCalls( input_date );

            console.log("/***** END TRANSFORM REAL *******/");
            console.log("");
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** END ALL *************************/"));

          case 80:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _extractAll.apply(this, arguments);
}

function loadHistory() {
  return _loadHistory.apply(this, arguments);
} // Find minimun date in Origin Cdr


function _loadHistory() {
  _loadHistory = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var result, date, min_date;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            date = (0, _moment["default"])().format('YYYY-MM-DD');
            _context2.next = 4;
            return executeMinOriginDate();

          case 4:
            min_date = _context2.sent;
            console.log("**** HISTORIC ".concat(date, " -- ").concat(min_date, "  ********"));

            try {
              extractAll(date);
              setInterval(function () {
                date = previousDate(date);
                console.log('incoming_date', date);
                extractAll(date);
              }, 5000);
            } catch (error) {
              result = {
                error: error
              };
              console.log("Error load-day", error);
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadHistory.apply(this, arguments);
}

function executeMinOriginDate() {
  return _executeMinOriginDate.apply(this, arguments);
} // Get previous date


function _executeMinOriginDate() {
  _executeMinOriginDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var result, querySQL, getQuery, preresult, longDate;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;
            querySQL = "SELECT min(calldate) as min_date from asteriskcdrdb.cdr";
            _context3.prev = 2;
            _context3.next = 5;
            return pool.origin.query(querySQL);

          case 5:
            getQuery = _context3.sent;
            preresult = (0, _mysqlHelper.removeRowDataPacket)(getQuery);
            longDate = Array.isArray(preresult) && preresult.length > 0 ? preresult[0].min_date : '';
            result = (0, _moment["default"])(longDate).format('YYYY-MM-DD'); // console.log( "MinDate in CDR", result );

            return _context3.abrupt("return", result);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            result = {
              error: _context3.t0
            };
            console.log("Error load-day", _context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return _executeMinOriginDate.apply(this, arguments);
}

function previousDate(date) {
  var formated_date = (0, _moment["default"])().format("YYYY-MM-DD");
  var startdate = (0, _moment["default"])(date);
  var previous_date = startdate.subtract(1, "days");
  formated_date = startdate.format("YYYY-MM-DD");
  return formated_date;
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute-history.js


loadHistory();
module.exports = {
  loadHistory: loadHistory
};