"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _select_multiple_control_value_accessor = require("@angular/forms/src/directives/select_multiple_control_value_accessor");

function breakListFunction(_x) {
  return _breakListFunction.apply(this, arguments);
}

function _breakListFunction() {
  _breakListFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var queryDetail;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryDetail = "\n  SELECT\n  *\n  FROM InvBreak\n    \n  GROUP BY inv_break_id\n  ";
            _context.prev = 1;
            _context.next = 4;
            return pool.destinyReports.query(queryTotal);

          case 4:
            result.total = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            result.total = {
              errorTotal: _context.t0
            };

          case 10:
            return _context.abrupt("return", result);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _breakListFunction.apply(this, arguments);
}

function breakQuery(_x2) {
  return _breakQuery.apply(this, arguments);
}

function _breakQuery() {
  _breakQuery = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(breakList) {
    var result, temp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            temp = breakList.map(function (x) {
              return "max(case when t.test = 'T1' then t.grade end) as T1";
            });
            return _context2.abrupt("return", result);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _breakQuery.apply(this, arguments);
}

function productivity(_x3, _x4) {
  return _productivity.apply(this, arguments);
}

function _productivity() {
  _productivity = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userSelection, breakList) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _productivity.apply(this, arguments);
}