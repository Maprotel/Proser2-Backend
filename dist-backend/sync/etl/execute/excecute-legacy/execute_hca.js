"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _update_hca_agent = require("../update/hca/update_hca_agent");

var _update_hca_queue = require("../update/hca/update_hca_queue");

var chalk = require("chalk");

function executeHca() {
  return _executeHca.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute_hca.js
// executeHca();


function _executeHca() {
  _executeHca = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** START INV *************************/"));
            _context.next = 4;
            return (0, _update_hca_agent.updateHcaAgent)();

          case 4:
            _context.next = 6;
            return (0, _update_hca_queue.updateHcaQueue)();

          case 6:
            console.log(chalk.hex("#E5E510")("/*********************** END INV *************************/"));
            console.log("");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeHca.apply(this, arguments);
}

module.exports = {
  executeHca: executeHca
};