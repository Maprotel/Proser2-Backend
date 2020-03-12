"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _extract_cdr_functions = require("./extract_cdr_functions");

var _moment = _interopRequireDefault(require("moment"));

var destinyTable = "MainCdr";
var destinyTableReal = "RealCdr";
var destinyDateField = "cdr_calldate";
var destinyNumberField = "cdr_id";
var originTable = "asteriskcdrdb.cdr";
var originDateField = "calldate";
var originNumberField = "cdr.id";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractMainCdr(_x) {
  return _extractMainCdr.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/main/extract_cdr.js
// extractMainCdr(incoming_date);


function _extractMainCdr() {
  _extractMainCdr = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var maxValueTemp, maxValue, preresult, result, extendedResult, written, msg, validation;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start_date = start_date ? start_date : (0, _moment["default"])().format("YYYY-MM-DD");
            console.log("/*************/ Extracting ".concat(destinyTable, " /*************/ ")); // Set date

            console.log("start_date", start_date); // SetMaximum Id Value

            _context.next = 5;
            return (0, _extract_cdr_functions.readTableMaxIdByDate)(start_date, destinyTable, destinyDateField, destinyNumberField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readTableMaxIdByDate"), err);
            });

          case 5:
            maxValueTemp = _context.sent;
            maxValue = maxValueTemp ? (0, _mysqlHelper.removeRowDataPacket)(maxValueTemp)[0].maxId : "";

            if (!(start_date === (0, _moment["default"])().format("YYYY-MM-DD"))) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return (0, _extract_cdr_functions.readOriginByDateMaxNum)(start_date, originTable, originDateField, originNumberField, maxValue)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginByDateMaxNum"), err);
            });

          case 10:
            preresult = _context.sent;
            _context.next = 16;
            break;

          case 13:
            _context.next = 15;
            return (0, _extract_cdr_functions.readOriginByDateMaxNumAllRecords)(start_date, originTable, originDateField, originNumberField, maxValue)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginByDateMaxNum"), err);
            });

          case 15:
            preresult = _context.sent;

          case 16:
            result = (0, _mysqlHelper.removeRowDataPacket)(preresult);
            _context.prev = 17;
            msg = "";
            validation = "";

            if (Array.isArray(result) && result.length > 0) {
              extendedResult = result.map(function (x) {
                x.cdr_date = (0, _moment["default"])(x.cdr_calldate).format("YYYY-MM-DD");
                return x;
              }).map(function (y) {
                return y;
              });
            }

            written;
            msg = "extractMainCdr end";
            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!(validation === true)) {
              _context.next = 30;
              break;
            }

            _context.next = 27;
            return (0, _extract_cdr_functions.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractMainCdr caught it - writeDestiny", err);
            });

          case 27:
            written = _context.sent;
            _context.next = 31;
            break;

          case 30:
            msg = "No hay registros nuevos por actualizar en ".concat(destinyTable);

          case 31:
            return _context.abrupt("return", msg);

          case 34:
            _context.prev = 34;
            _context.t0 = _context["catch"](17);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[17, 34]]);
  }));
  return _extractMainCdr.apply(this, arguments);
}

module.exports = {
  extractMainCdr: extractMainCdr
};