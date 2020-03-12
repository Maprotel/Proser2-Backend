"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extractAllMain = require("../extract/main/extract-all-main");

var _transformAllMain = require("../transform/main/transform-all-main");

var chalk = require("chalk");

function executeAllMain() {
  return _executeAllMain.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute_main.js
// executeAllMain();


function _executeAllMain() {
  _executeAllMain = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** START MAIN *************************/"));
            _context.next = 4;
            return (0, _extractAllMain.extractAllMain)();

          case 4:
            _context.next = 6;
            return (0, _transformAllMain.transformAllMain)();

          case 6:
            console.log(chalk.hex("#E5E510")("/*********************** END MAIN *************************/"));
            console.log("");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeAllMain.apply(this, arguments);
}

module.exports = {
  extractAllMain: _extractAllMain.extractAllMain
};