"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extract_audit = require("./extract_audit");

var _extract_callentry = require("./extract_callentry");

var _extract_cdr = require("./extract_cdr");

var _extract_queuelog = require("./extract_queuelog");

var chalk = require("chalk");

var incoming_date = process.argv[2];

function extractAllMain() {
  return _extractAllMain.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/main/extract-all-main.js
// extractAllMain();


function _extractAllMain() {
  _extractAllMain = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT MAIN *************************/"));
            _context.next = 4;
            return (0, _extract_audit.extractMainAudit)(incoming_date);

          case 4:
            _context.next = 6;
            return (0, _extract_callentry.extractMainCallEntry)(incoming_date);

          case 6:
            _context.next = 8;
            return (0, _extract_cdr.extractMainCdr)(incoming_date);

          case 8:
            _context.next = 10;
            return (0, _extract_queuelog.extractMainQueueLog)(incoming_date);

          case 10:
            console.log("/***** END EXTRACT MAIN *******/");
            console.log("");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _extractAllMain.apply(this, arguments);
}

module.exports = {
  extractAllMain: extractAllMain
};