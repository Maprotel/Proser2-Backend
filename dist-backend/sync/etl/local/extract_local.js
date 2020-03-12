"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper");

var chalk = require("chalk"); // Main function


function extractLocalTable(_x) {
  return _extractLocalTable.apply(this, arguments);
}
/************************************************************************ */
// Read actual records


function _extractLocalTable() {
  _extractLocalTable = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(tableName) {
    var destinyTable, originTable, records, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            destinyTable = tableName;
            originTable = tableName;
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            _context.next = 5;
            return readOriginAllRecords(originTable)["catch"](function (err) {
              return console.log("".concat(originTable, " caught it - readOriginAllRecords"), err);
            });

          case 5:
            records = _context.sent;
            console.log("".concat(destinyTable, " records"), records.length);
            extendedResult = records;
            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 23;
              break;
            }

            _context.prev = 10;
            _context.next = 13;
            return writeDestiny(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractLocalTable caught it - writeDestiny", err);
            });

          case 13:
            written = _context.sent;
            return _context.abrupt("return", "extractLocalTable ".concat(destinyTable, " end"));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](10);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 21:
            _context.next = 25;
            break;

          case 23:
            console.log("********************************************");
            console.log("Empty result in: ".concat(originTable));

          case 25:
            return _context.abrupt("return", "extractLocalTable ${destinyTable} end");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 17]]);
  }));
  return _extractLocalTable.apply(this, arguments);
}

function readOriginAllRecords(_x2) {
  return _readOriginAllRecords.apply(this, arguments);
}
/************************************************************************ */
// write processed records


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
            return pool.destinyInventory.query(querySQL);

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

function writeDestiny(_x3, _x4) {
  return _writeDestiny.apply(this, arguments);
}
/************************************************************************ */
// execute


function _writeDestiny() {
  _writeDestiny = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(data, current_table) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = null;

            if (!(data[0] !== undefined)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", new Promise(function (resolve, reject) {
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
            return _context3.abrupt("return", []);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _writeDestiny.apply(this, arguments);
}

function extractLocalInvToRep() {
  return _extractLocalInvToRep.apply(this, arguments);
} // export


function _extractLocalInvToRep() {
  _extractLocalInvToRep = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** START IMPORT LOCAL INV TO REPORTS *************************/"));
            _context4.next = 4;
            return extractLocalTable("AuxColor");

          case 4:
            _context4.next = 6;
            return extractLocalTable("AuxHour");

          case 6:
            _context4.next = 8;
            return extractLocalTable("AuxInfo");

          case 8:
            _context4.next = 10;
            return extractLocalTable("AuxInterval");

          case 10:
            _context4.next = 12;
            return extractLocalTable("AuxLine");

          case 12:
            _context4.next = 14;
            return extractLocalTable("HcxChange");

          case 14:
            _context4.next = 16;
            return extractLocalTable("InvAgent");

          case 16:
            _context4.next = 18;
            return extractLocalTable("InvAgentRole");

          case 18:
            _context4.next = 20;
            return extractLocalTable("InvBreak");

          case 20:
            _context4.next = 22;
            return extractLocalTable("InvCalendar");

          case 22:
            _context4.next = 24;
            return extractLocalTable("InvCalendarDay");

          case 24:
            _context4.next = 26;
            return extractLocalTable("InvCampaign");

          case 26:
            _context4.next = 28;
            return extractLocalTable("InvClient");

          case 28:
            _context4.next = 30;
            return extractLocalTable("InvQueue");

          case 30:
            _context4.next = 32;
            return extractLocalTable("InvQueueConfig");

          case 32:
            _context4.next = 34;
            return extractLocalTable("InvScale");

          case 34:
            _context4.next = 36;
            return extractLocalTable("InvSchedule");

          case 36:
            _context4.next = 38;
            return extractLocalTable("InvScheduleDay");

          case 38:
            _context4.next = 40;
            return extractLocalTable("InvService");

          case 40:
            _context4.next = 42;
            return extractLocalTable("InvSupervisor");

          case 42:
            _context4.next = 44;
            return extractLocalTable("ProScheduleChange");

          case 44:
            _context4.next = 46;
            return extractLocalTable("ProShowDisplay");

          case 46:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _extractLocalInvToRep.apply(this, arguments);
}

module.exports = {
  extractLocalInvToRep: extractLocalInvToRep
};