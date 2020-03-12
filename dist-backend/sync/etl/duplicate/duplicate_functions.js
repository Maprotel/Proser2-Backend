"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _mysqlHelper = require("../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

// write procesed records
function writeDestiny(_x, _x2) {
  return _writeDestiny.apply(this, arguments);
} // Read actual records


function _writeDestiny() {
  _writeDestiny = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(data, current_table) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;

            if (!(data[0] !== undefined)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var myfields = Object.keys(data[0]);
              var myRecords = data.map(function (x) {
                return Object.values(x);
              });
              var updateFieldsArray = myfields.map(function (x, index) {
                return "".concat(x, " = VALUE(").concat(x, ")");
              });
              var updateFields = updateFieldsArray;
              var querySQL = "INSERT INTO ".concat(current_table, " (").concat(myfields, ") values ?\n    ON DUPLICATE KEY UPDATE ").concat(updateFields, "\n    "); // Record in database

              resolve(pool.destinyReports.query(querySQL, [myRecords]));
              reject("Error");
            }));

          case 5:
            return _context.abrupt("return", []);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _writeDestiny.apply(this, arguments);
}

function readOriginByDate(_x3, _x4, _x5) {
  return _readOriginByDate.apply(this, arguments);
} // Read actual records


function _readOriginByDate() {
  _readOriginByDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(start_date, table, datefield) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  "); // return new Promise((resolve, reject) => {
            //   resolve(pool.origin.query(querySQL));
            //   reject(`Error`);
            // });

            _context2.prev = 3;
            _context2.next = 6;
            return pool.origin.query(querySQL);

          case 6:
            result = _context2.sent;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            result = {
              error: _context2.t0
            };

          case 12:
            return _context2.abrupt("return", result);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 9]]);
  }));
  return _readOriginByDate.apply(this, arguments);
}

function readDestinyMissingId(_x6, _x7, _x8, _x9, _x10) {
  return _readDestinyMissingId.apply(this, arguments);
} // Read actual records


function _readDestinyMissingId() {
  _readDestinyMissingId = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(start_date, table, datefield, emptyField, idField) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            querySQL = "\n  SELECT\n  ".concat(idField, " AS id\n  FROM\n  ").concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  AND\n  ").concat(emptyField, " IS NULL\n  ");
            _context3.prev = 3;
            _context3.next = 6;
            return pool.origin.query(querySQL);

          case 6:
            result = _context3.sent;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            result = {
              error: _context3.t0
            };

          case 12:
            return _context3.abrupt("return", result);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9]]);
  }));
  return _readDestinyMissingId.apply(this, arguments);
}

function readOriginByDateIdList(_x11, _x12, _x13, _x14, _x15) {
  return _readOriginByDateIdList.apply(this, arguments);
} // Read actual records


function _readOriginByDateIdList() {
  _readOriginByDateIdList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(start_date, table, datefield, idField, idList) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            idList === undefined || idList === null || idList[0] === undefined ? idList = 1 : idList;
            querySQL = "\n    SELECT\n    *\n    FROM\n    ".concat(table, "\n    WHERE\n    ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n    AND\n    ").concat(idField, " IN (").concat(idList, ")\n    ");
            _context4.prev = 4;
            _context4.next = 7;
            return pool.origin.query(querySQL);

          case 7:
            result = _context4.sent;
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](4);
            result = {
              error: _context4.t0
            };

          case 13:
            return _context4.abrupt("return", result);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 10]]);
  }));
  return _readOriginByDateIdList.apply(this, arguments);
}

function readOriginByDateMaxNum(_x16, _x17, _x18, _x19, _x20, _x21) {
  return _readOriginByDateMaxNum.apply(this, arguments);
} // Read actual records


function _readOriginByDateMaxNum() {
  _readOriginByDateMaxNum = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(start_date, table, datefield, numberField, numberValue, selection) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            numberValue === undefined || numberValue === null ? numberValue = 0 : numberValue;
            selection === undefined || selection === null ? selection = 1 : selection;
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  AND\n  ").concat(numberField, " > ").concat(numberValue, "\n  AND\n  ").concat(selection, "\n  ");
            _context5.prev = 5;
            _context5.next = 8;
            return pool.origin.query(querySQL);

          case 8:
            result = _context5.sent;
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](5);
            result = {
              error: _context5.t0
            };

          case 14:
            return _context5.abrupt("return", result);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 11]]);
  }));
  return _readOriginByDateMaxNum.apply(this, arguments);
}

function readOriginByDateMaxNumAllRecords(_x22, _x23, _x24, _x25, _x26, _x27) {
  return _readOriginByDateMaxNumAllRecords.apply(this, arguments);
} // Read actual records


function _readOriginByDateMaxNumAllRecords() {
  _readOriginByDateMaxNumAllRecords = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(start_date, table, datefield, numberField, numberValue, selection) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            numberValue === undefined || numberValue === null ? numberValue = 0 : numberValue;
            selection === undefined || selection === null ? selection = 1 : selection;
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  AND\n  ").concat(selection);
            _context6.prev = 5;
            _context6.next = 8;
            return pool.origin.query(querySQL);

          case 8:
            result = _context6.sent;
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](5);
            result = {
              error: _context6.t0
            };

          case 14:
            return _context6.abrupt("return", result);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 11]]);
  }));
  return _readOriginByDateMaxNumAllRecords.apply(this, arguments);
}

function readTableMaxIdByDate(_x28, _x29, _x30, _x31) {
  return _readTableMaxIdByDate.apply(this, arguments);
} // Read actual records


function _readTableMaxIdByDate() {
  _readTableMaxIdByDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(start_date, table, datefield, numfield) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            querySQL = "\n  SELECT\n  max(".concat(numfield, ") as maxId\n  FROM\n  ").concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  ");
            _context7.prev = 3;
            _context7.next = 6;
            return pool.destinyReports.query(querySQL);

          case 6:
            result = _context7.sent;
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](3);
            result = {
              error: _context7.t0
            };

          case 12:
            return _context7.abrupt("return", result);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 9]]);
  }));
  return _readTableMaxIdByDate.apply(this, arguments);
}

function readOriginByStatus(_x32, _x33, _x34) {
  return _readOriginByStatus.apply(this, arguments);
} // Read actual records


function _readOriginByStatus() {
  _readOriginByStatus = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(start_date, table, statusField) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            result = null;
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  WHERE\n  ").concat(statusField, " = 'A'\n  ");
            _context8.prev = 2;
            _context8.next = 5;
            return pool.origin.query(querySQL);

          case 5:
            result = _context8.sent;
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](2);
            result = {
              error: _context8.t0
            };

          case 11:
            return _context8.abrupt("return", result);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 8]]);
  }));
  return _readOriginByStatus.apply(this, arguments);
}

function readOriginAllRecords(_x35) {
  return _readOriginAllRecords.apply(this, arguments);
} // Read actual records


function _readOriginAllRecords() {
  _readOriginAllRecords = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(table) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            result = null;
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  "); // return new Promise((resolve, reject) => {
            //   resolve(pool.origin.query(querySQL));
            //   reject(`Error`);
            // });

            _context9.prev = 2;
            _context9.next = 5;
            return pool.origin.query(querySQL);

          case 5:
            result = _context9.sent;
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](2);
            result = {
              error: _context9.t0
            };

          case 11:
            return _context9.abrupt("return", result);

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 8]]);
  }));
  return _readOriginAllRecords.apply(this, arguments);
}

function readOriginBySelection(_x36, _x37, _x38, _x39) {
  return _readOriginBySelection.apply(this, arguments);
} // Calculate previous date


function _readOriginBySelection() {
  _readOriginBySelection = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(start_date, table, datefield, selection) {
    var result, next_date, querySQL;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            result = null;
            next_date = nextDate(start_date);
            querySQL = "\n  SELECT\n  *\n  FROM\n  ".concat(table, "\n  WHERE\n  ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n  AND\n  ").concat(selection, "\n  ");
            _context10.prev = 3;
            _context10.next = 6;
            return pool.origin.query(querySQL);

          case 6:
            result = _context10.sent;
            _context10.next = 12;
            break;

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](3);
            result = {
              error: _context10.t0
            };

          case 12:
            return _context10.abrupt("return", result);

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[3, 9]]);
  }));
  return _readOriginBySelection.apply(this, arguments);
}

function previousDate(initial_date) {
  var formated_date = (0, _moment["default"])().format("YYYY-MM-DD");
  var startdate = (0, _moment["default"])(initial_date);
  var previous_date = startdate.subtract(1, "days");
  formated_date = startdate.format("YYYY-MM-DD");
  return formated_date;
} // Calculate previous date


function nextDate(initial_date) {
  var formated_date = (0, _moment["default"])().format("YYYY-MM-DD");
  var startdate = (0, _moment["default"])(initial_date);
  var previous_date = startdate.add(1, "days");
  formated_date = startdate.format("YYYY-MM-DD");
  return formated_date;
} // Calculate lowest date in ORIGIN table


function minDate(_x40, _x41) {
  return _minDate.apply(this, arguments);
} // Calculate Destiny minimum date in REPORTS tables


function _minDate() {
  _minDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11(table, datefield) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            result = null;
            querySQL = "\n    SELECT\n    DATE_FORMAT(MIN(".concat(datefield, "), '%Y-%m-%d') as min_date\n    FROM\n    ").concat(table, "\n    "); // return new Promise((resolve, reject) => {
            //   resolve(pool.origin.query(querySQL));
            //   reject(`Error`);
            // });

            _context11.prev = 2;
            _context11.next = 5;
            return pool.origin.query(querySQL);

          case 5:
            result = _context11.sent;
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](2);
            result = {
              error: _context11.t0
            };

          case 11:
            return _context11.abrupt("return", result);

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 8]]);
  }));
  return _minDate.apply(this, arguments);
}

function startDate(_x42, _x43) {
  return _startDate.apply(this, arguments);
}

function _startDate() {
  _startDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(table, datefield) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            result = null;
            querySQL = "\n    SELECT\n    DATE_FORMAT(MIN(".concat(datefield, "), '%Y-%m-%d') as min_date\n    FROM\n    ").concat(table, "\n    "); // return new Promise((resolve, reject) => {
            //   resolve(pool.destinyReports.query(querySQL));
            //   reject(`Error`);
            // });

            _context12.prev = 2;
            _context12.next = 5;
            return pool.destinyReports.query(querySQL);

          case 5:
            result = _context12.sent;
            _context12.next = 11;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](2);
            result = {
              error: _context12.t0
            };

          case 11:
            return _context12.abrupt("return", result);

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 8]]);
  }));
  return _startDate.apply(this, arguments);
}

module.exports = {
  writeDestiny: writeDestiny,
  readOriginByDate: readOriginByDate,
  readOriginByDateMaxNum: readOriginByDateMaxNum,
  readOriginByDateMaxNumAllRecords: readOriginByDateMaxNumAllRecords,
  readTableMaxIdByDate: readTableMaxIdByDate,
  readOriginByStatus: readOriginByStatus,
  readOriginAllRecords: readOriginAllRecords,
  readOriginBySelection: readOriginBySelection,
  readOriginByDateIdList: readOriginByDateIdList,
  readDestinyMissingId: readDestinyMissingId,
  previousDate: previousDate,
  nextDate: nextDate,
  minDate: minDate,
  startDate: startDate
};