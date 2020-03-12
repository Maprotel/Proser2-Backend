"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _duplicate_functions = require("../duplicate_functions");

var _moment = _interopRequireDefault(require("moment"));

// IMPORTS
// VARIABLES
var weekday = (0, _moment["default"])().isoWeekday();
var today = (0, _moment["default"])().format("YYYY-MM-DD");
var current_date = today;
var destinyTable = "HcaAgent";
var destinyDateField = "";
var destinyStatusField = "hca_agent_status";
var originTable = "HcaAgent";
var originDateField = "";
var originStatusField = "hca_agent_status";
var first_pass = true;
var incoming_date_one = process.argv[2];
var incoming_date_two = process.argv[3]; // read origin records

function readOrigin(_x) {
  return _readOrigin.apply(this, arguments);
}

function _readOrigin() {
  _readOrigin = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var result, querySQL;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            querySQL = "\n      SELECT\n      *\n      FROM HcaAgent\n      WHERE hca_agent_date = '".concat(start_date, "'\n      ");
            _context.prev = 2;
            console.log("reading...");
            _context.next = 6;
            return pool.destinyReports.query(querySQL);

          case 6:
            result = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            result = {
              error: _context.t0
            };

          case 12:
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _readOrigin.apply(this, arguments);
}

function duplicateHcaAgent(_x2, _x3) {
  return _duplicateHcaAgent.apply(this, arguments);
}
/************************************************************************ */


function _duplicateHcaAgent() {
  _duplicateHcaAgent = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(start_date, destiny_date) {
    var val, preResult, result, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("/*************/ Extracting HISTORIC ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date);
            console.log("destiny_date", destiny_date);
            val = true;
            _context2.next = 6;
            return readOrigin(start_date)["catch"](function (err) {
              return console.log("duplicateHcaAgent error - readOrigin", err);
            });

          case 6:
            preResult = _context2.sent;
            result = preResult ? preResult : [""];

            if (!result) {
              _context2.next = 30;
              break;
            }

            extendedResult = result.map(function (x) {
              var new_date = (0, _moment["default"])(destiny_date).format("YYYY-MM-DD");
              x.hca_agent_serial_id = new_date + "-" + x.hca_agent_id;
              x.hca_agent_date = new_date;
              x.hca_agent_origin = "Rebuilt" + " " + start_date;
              return x;
            }).map(function (y) {
              // TYPE
              return y;
            });
            validation = extendedResult[0] ? true : false;

            if (!validation) {
              _context2.next = 26;
              break;
            }

            _context2.prev = 12;
            _context2.next = 15;
            return (0, _duplicate_functions.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("duplicateHcaAgent caught it - writeDestiny", err);
            });

          case 15:
            written = _context2.sent;
            console.log("Finished");
            return _context2.abrupt("return", "duplicateHcaAgent end");

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](12);
            console.log("e", _context2.t0);
            return _context2.abrupt("return", _context2.t0);

          case 24:
            _context2.next = 28;
            break;

          case 26:
            console.log("********************************************");
            console.log("El resultado est\xE1 vacio en ".concat(originTable));

          case 28:
            _context2.next = 32;
            break;

          case 30:
            console.log("********************************************");
            console.log("No hay registros nuevos por actualizar en ".concat(destinyTable));

          case 32:
            return _context2.abrupt("return", "duplicateHcaAgent end");

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 20]]);
  }));
  return _duplicateHcaAgent.apply(this, arguments);
}

duplicateHcaAgent(incoming_date_one, incoming_date_two);
module.exports = {
  duplicateHcaAgent: duplicateHcaAgent
};