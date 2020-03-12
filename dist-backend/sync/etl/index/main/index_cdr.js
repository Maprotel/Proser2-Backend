"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../../connectors/pool"));

var _mysqlHelper = require("../../../../helpers/mysql-helper");

var _transform_functions = require("../../transform_functions");

var _transform_cdr_functions = require("./transform_cdr_functions");

var datesFunctions = _interopRequireWildcard(require("./cdr_dates_functions"));

var typeFunctions = _interopRequireWildcard(require("./cdr_type_functions"));

var callFunctions = _interopRequireWildcard(require("./cdr_call_functions"));

var minMaxFunctions = _interopRequireWildcard(require("./min_max.js"));

var queryCdrFunctions = _interopRequireWildcard(require("./cdr_query_functions"));

var _moment = _interopRequireDefault(require("moment"));

var destinyTable = "MainCdr";
var destinyTableReal = "RealCdr";
var destinyDateField = "";
var destinyStatusField = "calldate";
var originTable = "MainCdr";
var originDateField = "";
var originStatusField = "calldate";
var first_pass = true;
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function transformMainCdr(_x) {
  return _transformMainCdr.apply(this, arguments);
}
/************************************************************************ */


function _transformMainCdr() {
  _transformMainCdr = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date) {
    var numberPattern, result, extendedResult, validation, written;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("/*************/ Transform ".concat(destinyTable, " /*************/ "));
            numberPattern = /\d+/g;

            if (!start_date) {
              _context.next = 34;
              break;
            }

            console.log("start_date", start_date);
            _context.next = 6;
            return (0, _transform_cdr_functions.readOriginCdr)(start_date, originTable, originStatusField)["catch"](function (err) {
              return console.log("".concat(destinyTable, " caught it - readOriginCdr"), err);
            });

          case 6:
            result = _context.sent;

            if (!(Array.isArray(result) && result.length > 0)) {
              _context.next = 31;
              break;
            }

            extendedResult = result.map(function (x) {
              x.cdr_callcenter_name = process.env.CDR_CALLCENTER_NAME;
              x.cdr_queue_id = x.callentry_queue_id; // // x.__CLASSIFICATION__

              x.cdr_call_type = callFunctions.cdr_call_type(x.cdr_src, x.cdr_dst, x.cdrcontext, x.callentry_id, x.callentry_type);
              x.cdr_agent_extension = x.cdr_call_type === "inbound" ? x.cdr_dst : x.cdr_agent_extension;
              x.cdr_agent_extension = x.cdr_call_type === "outbound" ? x.cdr_src : x.cdr_agent_extension;
              x.cdr_queue_number = x.callentry_queue_number;
              x.cdr_call_class = callFunctions.cdr_call_class(x.cdr_src, x.cdr_dst, x.cdr_lastapp, x.cdr_type_queue);
              x.__MADE__;
              x.cdr_call_made = callFunctions.cdr_call_made(x.cdr_call_type);
              x.cdr_call_fail = callFunctions.cdr_call_fail(x.cdr_call_made, x.cdr_disposition, x.cdr_lastapp);
              x.cdr_call_answered = callFunctions.cdr_call_answered(x.cdr_call_made, x.cdr_disposition);
              x.cdr_call_hungout = callFunctions.cdr_call_hungout(x.cdr_call_made, x.cdr_lastapp);
              x.cdr_hca_agent_serial_id = "".concat((0, _moment["default"])(x.cdr_date).format("YYYY-MM-DD"), "-").concat(x.cdr_agent_id);
              x.cdr_hca_queue_serial_id = "".concat((0, _moment["default"])(x.cdr_date).format("YYYY-MM-DD"), "-").concat(x.cdr_agent_id);
              x.cdr_people_json = x.inv_agent_people_json;
              x.cdr_operation_json = x.inv_queue_operation_json;
              x.cdr_time_json = x.inv_agent_time_json;
              return x;
            }).map(function (y) {
              delete y.inv_agent_id;
              delete y.inv_agent_id;
              delete y.inv_queue_id;
              delete y.inv_agent_people_json;
              delete y.inv_agent_operation_json;
              delete y.inv_agent_time_json;
              delete y.inv_queue_number;
              delete y.cdr_date;
              delete y.cdr_type_ext_in_long;
              delete y.cdr_type_ext_in;
              delete y.cdr_type_extension;
              delete y.cdr_type_ext_out;
              delete y.cdr_type_int_ext;
              delete y.cdr_type_out_ent;
              delete y.cdr_type_in_out_empty;
              delete y.cdr_type_in_out;
              delete y.cdr_type_prod;
              delete y.cdr_call_class;
              delete y.hca_agent_id;
              delete y.hca_queue_id;
              delete y.inv_agent_id;
              delete y.callentry_agent_extension;
              delete y.callentry_queue_number;
              delete y.callentry_id;
              delete y.callentry_agent_id;
              delete y.callentry_queue_id;
              delete y.callentry_type;
              delete y.cdr_type_prod_call;
              delete y.cdr_type_queue;
              delete y.hca_agent_serial_id;
              delete y.hca_queue_serial_id;
              delete y.hca_agent_people_json;
              delete y.hca_agent_time_json;
              delete y.hca_queue_operation_json;
              delete y.inv_queue_operation_json;
              delete y.inv_queue_system_json;
              return y;
            });
            validation = extendedResult[0] ? true : false;

            if (!validation) {
              _context.next = 27;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _transform_functions.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("transformMainCdr caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            _context.next = 17;
            return (0, _transform_functions.writeDestiny)(extendedResult, destinyTableReal)["catch"](function (err) {
              return console.log("transformMainCdr caught it - writeDestiny", err);
            });

          case 17:
            written = _context.sent;
            return _context.abrupt("return", "transformMainCdr end");

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](11);
            console.log("e", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 25:
            _context.next = 29;
            break;

          case 27:
            console.log("********************************************");
            console.log("El resultado est\xE1 vac\xEDo en ".concat(originTable));

          case 29:
            _context.next = 33;
            break;

          case 31:
            console.log("********************************************");
            console.log("No hay registros nuevos por actualizar en ".concat(destinyTable));

          case 33:
            return _context.abrupt("return", "transformMainCdr end");

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 21]]);
  }));
  return _transformMainCdr.apply(this, arguments);
}

module.exports = {
  transformMainCdr: transformMainCdr
};