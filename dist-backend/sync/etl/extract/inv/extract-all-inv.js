"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extract_agent = require("./extract_agent");

var _extract_break = require("./extract_break");

var _extract_campaign = require("./extract_campaign");

var _extract_queue = require("./extract_queue");

var _extract_queueconfig = require("./extract_queueconfig");

var chalk = require("chalk");

function extractAllInv() {
  return _extractAllInv.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract-all-inv.js
// extractAllInv();


function _extractAllInv() {
  _extractAllInv = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT INV *************************/"));
            _context.next = 4;
            return (0, _extract_agent.extractInvAgent)();

          case 4:
            _context.next = 6;
            return (0, _extract_break.extractInvBreak)();

          case 6:
            _context.next = 8;
            return (0, _extract_campaign.extractInvCampaign)();

          case 8:
            _context.next = 10;
            return (0, _extract_queue.extractInvQueue)();

          case 10:
            _context.next = 12;
            return (0, _extract_queueconfig.extractInvQueueConfig)();

          case 12:
            console.log("/***** END EXTRACT INV *******/");
            console.log("");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _extractAllInv.apply(this, arguments);
}

module.exports = {
  extractAllInv: extractAllInv
};