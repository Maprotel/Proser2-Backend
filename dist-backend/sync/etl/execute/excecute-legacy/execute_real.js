"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extractAllReal = require("../extract/real/extract-all-real");

var chalk = require("chalk");

function executeAllReal() {
  return _executeAllReal.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute_real.js
// executeAllReal();


function _executeAllReal() {
  _executeAllReal = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** START REAL *************************/"));
            _context.next = 4;
            return (0, _extractAllReal.extractAllReal)();

          case 4:
            console.log(chalk.hex("#E5E510")("/*********************** END REAL *************************/"));
            console.log("");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeAllReal.apply(this, arguments);
}

module.exports = {
  executeAllReal: executeAllReal
};