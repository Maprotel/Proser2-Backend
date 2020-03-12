"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _execute_inv = require("./execute_inv");

var _execute_hca = require("./execute_hca");

var _execute_main = require("./execute_main");

var _execute_real = require("./execute_real");

var chalk = require("chalk");

function executeDay() {
  return _executeDay.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute_day.js


function _executeDay() {
  _executeDay = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** START ALL *************************/"));
            _context.next = 4;
            return (0, _execute_inv.executeAllInv)();

          case 4:
            _context.next = 6;
            return (0, _execute_hca.executeHca)();

          case 6:
            _context.next = 8;
            return (0, _execute_main.executeAllMain)();

          case 8:
            _context.next = 10;
            return (0, _execute_real.executeAllReal)();

          case 10:
            console.log(chalk.hex("#E50001")("/*********************** END ALL *************************/"));
            console.log("");
            return _context.abrupt("return");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeDay.apply(this, arguments);
}

executeDay();
module.exports = {
  executeDay: executeDay
};