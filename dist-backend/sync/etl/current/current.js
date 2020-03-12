"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _load_inventory = require("../load/load_inventory");

var _load_main = require("../load/load_main");

var _load_hca = require("../load/load_hca");

var _load_real = require("../load/load_real");

var moment = require("moment");

var colors = require("colors");

var fast = process.env.UPDATE_FAST ? parseInt(process.env.UPDATE_FAST, 10) : 5000;
var medium = process.env.UPDATE_MEDIUM ? parseInt(process.env.UPDATE_MEDIUM, 10) : 20000;
var slow = process.env.UPDATE_SLOW ? parseInt(process.env.UPDATE_SLOW, 10) : 30000;
var very_slow = process.env.UPDATE_VERY_SLOW ? parseInt(process.env.UPDATE_VERY_SLOW, 10) : 3600000;
var times_inventory = 0;
var times_main = 0;
var times_hca = 0;
var times_realagents = 0;
var input_request = "all";

function currentUpdate() {
  return _currentUpdate.apply(this, arguments);
}
/** AUXILIAR FUNCTIONS */


function _currentUpdate() {
  _currentUpdate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setInterval(function () {
              var todayDate = today().date;
              var todayTime = today().time;
              console.log("\x1b[33m%s\x1b[0m", "**********************************************");
              console.log("Date - Time", todayDate, todayTime);
              console.log("\x1b[33m%s\x1b[0m", "TIMES executeReal: ", times_realagents);
              console.log("\x1b[33m%s\x1b[0m", "TIMES times_main: ", times_main);
              executeReal(todayDate, input_request);
              executeMain(todayDate, input_request);
              executeInventory(todayDate, input_request);
              executeHca(todayDate, input_request);
              times_realagents = times_realagents + 1;
              times_main = times_main + 1;
              console.log("\x1b[33m%s\x1b[0m", "**********************************************");
            }, fast);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _currentUpdate.apply(this, arguments);
}

function today() {
  return {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm:ss")
  };
}

function executeInventory(_x, _x2) {
  return _executeInventory.apply(this, arguments);
}

function _executeInventory() {
  _executeInventory = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(input_date, input_request) {
    var inv_inventory;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _load_inventory.loadInventory)(input_date, input_request);

          case 2:
            inv_inventory = _context2.sent;
            console.log("////////////////// LOAD INVENTORY END ////////////////////".green);
            console.log("");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _executeInventory.apply(this, arguments);
}

function executeMain(_x3, _x4) {
  return _executeMain.apply(this, arguments);
}

function _executeMain() {
  _executeMain = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(input_date, input_request) {
    var inv_main;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _load_main.loadMain)(input_date, input_request);

          case 2:
            inv_main = _context3.sent;
            console.log("////////////////// LOAD MAIN END ////////////////////".green);
            console.log("");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _executeMain.apply(this, arguments);
}

function executeHca(_x5, _x6) {
  return _executeHca.apply(this, arguments);
}

function _executeHca() {
  _executeHca = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(input_date, input_request) {
    var inv_hca;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _load_hca.loadHca)(input_date, input_request);

          case 2:
            inv_hca = _context4.sent;
            console.log("////////////////// LOAD HCA END ////////////////////".green);
            console.log("");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _executeHca.apply(this, arguments);
}

function executeReal(_x7, _x8) {
  return _executeReal.apply(this, arguments);
}

function _executeReal() {
  _executeReal = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(input_date, input_request) {
    var inv_realagents;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _load_real.loadReal)(input_date, input_request);

          case 2:
            inv_realagents = _context5.sent;
            console.log("////////////////// LOAD REAL END ////////////////////".green);
            console.log("");

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _executeReal.apply(this, arguments);
}

currentUpdate();