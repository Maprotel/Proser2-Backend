"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

// write processed records
function writeDestiny(_x, _x2) {
  return _writeDestiny.apply(this, arguments);
} // Read actual records


function _writeDestiny() {
  _writeDestiny = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(data, current_table) {
    var result, myfields, myRecords, updateFieldsArray, updateFields, querySQL;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;

            if (!(data[0] !== undefined)) {
              _context.next = 9;
              break;
            }

            myfields = Object.keys(data[0]);
            myRecords = data.map(function (x) {
              return Object.values(x);
            });
            updateFieldsArray = myfields.map(function (x, index) {
              return "".concat(x, " = VALUE(").concat(x, ")");
            });
            updateFields = updateFieldsArray;
            querySQL = "\n        INSERT INTO ".concat(current_table, " (").concat(myfields, ") values ?\n        ON DUPLICATE KEY UPDATE ").concat(updateFields, "\n      ");

            try {
              result = pool.destinyInventory.query(querySQL, [myRecords]);
            } catch (error) {
              result = {
                error: error
              };
            }

            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _writeDestiny.apply(this, arguments);
}

function readOriginAllRecords(_x3) {
  return _readOriginAllRecords.apply(this, arguments);
}

function _readOriginAllRecords() {
  _readOriginAllRecords = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(table) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  ");
            _context2.prev = 2;
            _context2.next = 5;
            return pool.origin.query(querySQL);

          case 5:
            result = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            result = {
              error: _context2.t0
            };

          case 11:
            return _context2.abrupt("return", result);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return _readOriginAllRecords.apply(this, arguments);
}

module.exports = {
  writeDestiny: writeDestiny,
  readOriginAllRecords: readOriginAllRecords
};