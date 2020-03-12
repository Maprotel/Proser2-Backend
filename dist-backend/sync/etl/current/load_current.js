"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkConnection = checkConnection;
exports.extractAll = extractAll;
exports.transformAll = transformAll;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _extract_queuelog = require("../extract/main/extract_queuelog");

var _extract_audit = require("../extract/main/extract_audit");

var _extract_callentry = require("../extract/main/extract_callentry");

var _extract_cdr = require("../extract/main/extract_cdr");

var _extract_agent = require("../extract/inv/extract_agent");

var _extract_break = require("../extract/inv/extract_break");

var _extract_campaign = require("../extract/inv/extract_campaign");

var _extract_queue = require("../extract/inv/extract_queue");

var _extract_queueconfig = require("../extract/inv/extract_queueconfig");

var _extract_realagents = require("../extract/real/extract_realagents");

var _extract_realbreaks = require("../extract/real/extract_realbreaks");

var _extract_realcalls = require("../extract/real/extract_realcalls");

var _transform_audit = require("../transform/main/audit/transform_audit");

var _transform_callentry = require("../transform/main/callentry/transform_callentry");

var _transform_cdr = require("../transform/main/cdr/transform_cdr");

var _transform_cdr_hca = require("../transform/main/cdr/transform_cdr_hca");

var _transform_agent = require("../transform/inv/agent/transform_agent");

var _transform_break = require("../transform/inv/break/transform_break");

var _transform_queue = require("../transform/inv/queue/transform_queue");

var _transform_campaign = require("../transform/inv/campaign/transform_campaign");

var _transform_realagents = require("../transform/real/real-agents/transform_realagents");

var _transform_realbreaks = require("../transform/real/real-breaks/transform_realbreaks");

var _transform_realcalls = require("../transform/real/real-calls/transform_realcalls");

var _update_hca_agent = require("../update/hca/update_hca_agent");

var _update_hca_queue = require("../update/hca/update_hca_queue");

var _update_audit = require("../update/main/update_audit");

var _update_callentry = require("../update/main/update_callentry");

var _update_realagents = require("../update/real/update_realagents");

var _update_realbreaks = require("../update/real/update_realbreaks");

var _update_realcalls = require("../update/real/update_realcalls");

var moment = require("moment");

var colors = require("colors");

var _require = require("set-interval-async/dynamic"),
    setIntervalAsync = _require.setIntervalAsync,
    clearIntervalAsync = _require.clearIntervalAsync; // EXTRACT MAIN


/**************************************************************************** */

/** AUXILIAR FUNCTIONS */
function delay(_x) {
  return _delay.apply(this, arguments);
}

function _delay() {
  _delay = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(ms) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _delay.apply(this, arguments);
}

function now() {
  return {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm:ss")
  };
}

function consoleInit() {
  console.clear();
  console.log("");
  console.log("\x1b[33m%s\x1b[0m", "**********************************************");
}

function checkConnection() {
  return _checkConnection.apply(this, arguments);
}

function _checkConnection() {
  _checkConnection = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var query, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = "\n  select id, user, host, db, command, time, state, info, progress\n  from information_schema.processlist\n  ";
            _context2.prev = 1;
            consoleInit();
            console.log("Conectando con servidor");
            _context2.next = 6;
            return pool.origin.query(query);

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", true);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log("Falla de conexión con el servidor", _context2.t0);
            return _context2.abrupt("return", false);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _checkConnection.apply(this, arguments);
}

function extractAll() {
  return _extractAll.apply(this, arguments);
}

function _extractAll() {
  _extractAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var msg, today, input_date;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            msg = "No extraction";
            today = now();
            input_date = today.date;
            consoleInit();
            console.log("EXTRACT", today);
            console.log("\x1b[33m%s\x1b[0m", "**********************************************");
            _context3.prev = 6;
            Promise.all([(0, _extract_queuelog.extractMainQueueLog)(input_date), (0, _extract_audit.extractMainAudit)(input_date), (0, _extract_callentry.extractMainCallEntry)(input_date), (0, _extract_cdr.extractMainCdr)(input_date), (0, _extract_agent.extractInvAgent)(input_date), (0, _extract_break.extractInvBreak)(input_date), (0, _extract_campaign.extractInvCampaign)(input_date), (0, _extract_queue.extractInvQueue)(input_date), (0, _extract_queueconfig.extractInvQueueConfig)(input_date), (0, _extract_realagents.extractRealAgents)(input_date), (0, _extract_realbreaks.extractRealBreaks)(input_date), (0, _extract_realcalls.extractRealCalls)(input_date)]).then(function (extract) {
              msg = "Extracted";
              console.log("msg", msg);
            });
            return _context3.abrupt("return", "Extracted");

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](6);
            console.log("error", _context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[6, 11]]);
  }));
  return _extractAll.apply(this, arguments);
}

function transformAll() {
  return _transformAll.apply(this, arguments);
}

function _transformAll() {
  _transformAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var msg, today, input_date;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            msg = "No extraction";
            today = now();
            input_date = today.date;
            consoleInit();
            console.log("TRANSFORM", today);
            console.log("\x1b[33m%s\x1b[0m", "**********************************************");
            _context4.prev = 6;
            Promise.all([(0, _transform_audit.transformMainAudit)(input_date), (0, _transform_callentry.transformMainCallEntry)(input_date), (0, _transform_cdr.transformMainCdr)(input_date), (0, _transform_cdr_hca.transformMainCdrHca)(input_date), (0, _transform_agent.transformInvAgent)(input_date), (0, _transform_break.transformInvBreak)(input_date), (0, _transform_queue.transformInvQueue)(input_date), (0, _transform_campaign.transformInvCampaign)(input_date), (0, _transform_realagents.transformRealAgents)(input_date), (0, _transform_realbreaks.transformRealBreaks)(input_date), (0, _transform_realcalls.transformRealCalls)(input_date)]).then(function (extract) {
              msg = "Transform";
              console.log("msg", msg);
            });
            return _context4.abrupt("return", "Transformed");

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](6);
            console.log("error", _context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 11]]);
  }));
  return _transformAll.apply(this, arguments);
}

function executeExtract() {
  return _executeExtract.apply(this, arguments);
}

function _executeExtract() {
  _executeExtract = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    var num, status;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            num = 0;

          case 1:
            if (!true) {
              _context5.next = 15;
              break;
            }

            _context5.next = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 10 * 1000);
            });

          case 4:
            num += 1;
            consoleInit();
            _context5.next = 8;
            return checkConnection();

          case 8:
            status = _context5.sent;
            console.log("print", num, status);

            if (!status) {
              _context5.next = 13;
              break;
            }

            _context5.next = 13;
            return extractAll();

          case 13:
            _context5.next = 1;
            break;

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _executeExtract.apply(this, arguments);
}

function executeTransform() {
  return _executeTransform.apply(this, arguments);
}

function _executeTransform() {
  _executeTransform = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    var num, status;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            num = 0;

          case 1:
            if (!true) {
              _context6.next = 15;
              break;
            }

            _context6.next = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 10 * 1000);
            });

          case 4:
            num += 1;
            consoleInit();
            _context6.next = 8;
            return checkConnection();

          case 8:
            status = _context6.sent;
            console.log("print", num, status);

            if (!status) {
              _context6.next = 13;
              break;
            }

            _context6.next = 13;
            return transformAll();

          case 13:
            _context6.next = 1;
            break;

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _executeTransform.apply(this, arguments);
}

function executeAll() {
  return _executeAll.apply(this, arguments);
}

function _executeAll() {
  _executeAll = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            executeExtract();
            executeTransform();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _executeAll.apply(this, arguments);
}

executeAll();