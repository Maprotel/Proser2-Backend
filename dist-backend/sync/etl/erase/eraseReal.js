"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _mysqlHelper = require("../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

// Read actual records
function eraseTestData() {
  return _eraseTestData.apply(this, arguments);
}

function _eraseTestData() {
  _eraseTestData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            querySQL = "\n\n  DELETE FROM RealCurrentAgents;\n  DELETE FROM RealCurrentBreaks;\n  DELETE FROM RealCurrentCalls;\n  \n  DELETE FROM RealAudit;\n  DELETE FROM RealCdr;\n  DELETE FROM RealCallEntry;\n  DELETE FROM RealQueueLog;\n\n\n  ";
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(querySQL);

          case 5:
            result = _context.sent;
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            result = {
              error: _context.t0
            };
            console.log("error", _context.t0);

          case 12:
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _eraseTestData.apply(this, arguments);
}

function erase() {
  return _erase.apply(this, arguments);
}

function _erase() {
  _erase = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.clear();
            console.log("***********  REAL TABLES ERASED ".concat(pool.destinyReports.config.connectionConfig.database, " ***********"));
            _context2.next = 4;
            return eraseTestData();

          case 4:
            console.log("All Erased");
            process.exit(0);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _erase.apply(this, arguments);
}

erase();