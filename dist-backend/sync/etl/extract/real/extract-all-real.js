"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extract_real_agents = require("./extract_real_agents");

var _extract_real_audit = require("./extract_real_audit");

var _extract_real_breaks = require("./extract_real_breaks");

var _extract_real_callentry = require("./extract_real_callentry");

var _extract_real_calls = require("./extract_real_calls");

var _extract_real_cdr = require("./extract_real_cdr");

var _extract_real_queuelog = require("./extract_real_queuelog");

var chalk = require("chalk");

var incoming_date = process.argv[2];

function extractAllReal() {
  return _extractAllReal.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/real/extract-all-real.js
// extractAllReal();


function _extractAllReal() {
  _extractAllReal = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT REAL *************************/"));
            _context.next = 4;
            return (0, _extract_real_agents.extractRealAgents)(incoming_date);

          case 4:
            _context.next = 6;
            return (0, _extract_real_audit.extractRealAudit)(incoming_date);

          case 6:
            _context.next = 8;
            return (0, _extract_real_breaks.extractRealBreaks)(incoming_date);

          case 8:
            _context.next = 10;
            return (0, _extract_real_callentry.extractRealCallEntry)(incoming_date);

          case 10:
            _context.next = 12;
            return (0, _extract_real_calls.extractRealCalls)(incoming_date);

          case 12:
            _context.next = 14;
            return (0, _extract_real_cdr.extractRealCdr)(incoming_date);

          case 14:
            _context.next = 16;
            return (0, _extract_real_queuelog.extractRealQueueLog)(incoming_date);

          case 16:
            console.log("/***** END EXTRACT REAL *******/");
            console.log("");

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _extractAllReal.apply(this, arguments);
}

module.exports = {
  extractAllReal: extractAllReal
};