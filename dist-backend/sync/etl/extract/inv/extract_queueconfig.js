"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsInv = require("./extract-functions-inv");

var _moment = _interopRequireDefault(require("moment"));

// CONSTANTS
var originTable = "asterisk.queues_config";
var destinyTable = "InvQueueConfig";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractInvQueueConfig(_x) {
  return _extractInvQueueConfig.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract_agent.js
// extractInvQueueConfig();


function _extractInvQueueConfig() {
  _extractInvQueueConfig = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var records, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format('YYYY-MM-DD'); // Console notification

            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date); // Read origin data

            _context.next = 5;
            return (0, _extractFunctionsInv.readOriginAllRecords)(originTable)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginAllRecords"), err);
            });

          case 5:
            records = _context.sent;
            console.log("records", records.length); // Transform data to import

            if (!(Array.isArray(records) && records.length > 0)) {
              _context.next = 22;
              break;
            }

            extendedResult = records.map(function (x) {
              x.queueconfig_extension = x.extension;
              x.queueconfig_descr = x.descr;
              x.queueconfig_grppre = x.grppre;
              x.queueconfig_alertinfo = x.alertinfo;
              x.queueconfig_ringing = x.ringing;
              x.queueconfig_maxwait = x.maxwait;
              x.queueconfig_password = x.password;
              x.queueconfig_ivr_id = x.ivr_id;
              x.queueconfig_dest = x.dest;
              x.queueconfig_cwignore = x.cwignore;
              x.queueconfig_qregex = x.qregex;
              x.queueconfig_agentannounce_id = x.agentannounce_id;
              x.queueconfig_joinannounce_id = x.joinannounce_id;
              x.queueconfig_queuewait = x.queuewait;
              x.queueconfig_use_queue_context = x.use_queue_context;
              x.queueconfig_togglehint = x.togglehint;
              x.queueconfig_qnoanswer = x.qnoanswer;
              x.queueconfig_callconfirm = x.callconfirm;
              x.queueconfig_callconfirm_id = x.callconfirm_id;
              x.queueconfig_monitor_type = x.monitor_type;
              x.queueconfig_monitor_heard = x.monitor_heard;
              x.queueconfig_monitor_spoken = x.monitor_spoken;
              x.queueconfig_callback_id = x.callback_id;
              return x;
            }).map(function (y) {
              delete y.extension;
              delete y.descr;
              delete y.grppre;
              delete y.alertinfo;
              delete y.ringing;
              delete y.maxwait;
              delete y.password;
              delete y.ivr_id;
              delete y.dest;
              delete y.cwignore;
              delete y.qregex;
              delete y.agentannounce_id;
              delete y.joinannounce_id;
              delete y.queuewait;
              delete y.use_queue_context;
              delete y.togglehint;
              delete y.qnoanswer;
              delete y.callconfirm;
              delete y.callconfirm_id;
              delete y.monitor_type;
              delete y.monitor_heard;
              delete y.monitor_spoken;
              delete y.callback_id;
              delete y.destcontinue;
              return y;
            });
            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 22;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _extractFunctionsInv.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractInvQueueConfig caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractInvQueueConfig ",
              result: written
            });

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](11);
            console.log("error", _context.t0);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 18]]);
  }));
  return _extractInvQueueConfig.apply(this, arguments);
}

module.exports = {
  extractInvQueueConfig: extractInvQueueConfig
};