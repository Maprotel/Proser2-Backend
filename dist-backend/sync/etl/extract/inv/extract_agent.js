"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extractFunctionsInv = require("./extract-functions-inv");

var _moment = _interopRequireDefault(require("moment"));

// CONSTANTS
var originTable = "call_center.agent";
var destinyTable = "InvAgent";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractInvAgent(_x) {
  return _extractInvAgent.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract-all-inv.js
// extractInvAgent();


function _extractInvAgent() {
  _extractInvAgent = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var records, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format('YYYY-MM-DD'); // Console notification

            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ "));
            console.log("start_date", start_date); // Read origin data

            _context.next = 5;
            return (0, _extractFunctionsInv.readOriginAllRecords)(originTable)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginAllRecords"), err);
            });

          case 5:
            records = _context.sent;
            console.log("records", records.length); // Transform data to import

            if (!(Array.isArray(records) && records.length > 0)) {
              _context.next = 22;
              break;
            }

            extendedResult = records.map(function (x) {
              x.inv_agent_id = x.id;
              x.inv_agent_type = x.type;
              x.inv_agent_extension = x.number;
              x.inv_agent_name = x.name;
              x.inv_agent_status = x.estatus;
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.type;
              delete y.number;
              delete y.name;
              delete y.password;
              delete y.estatus;
              delete y.eccp_password;
              return y;
            }); // Write process data to destiny

            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 22;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _extractFunctionsInv.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractInvAgent caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractInvAgent ",
              result: written
            });

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](11);
            console.log("error", _context.t0);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 18]]);
  }));
  return _extractInvAgent.apply(this, arguments);
}

module.exports = {
  extractInvAgent: extractInvAgent
};