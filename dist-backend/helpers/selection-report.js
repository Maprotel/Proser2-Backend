"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectionReport = selectionReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var myPool = require('../connectors/pool');

var poolDat = myPool.poolDat; // const filter = {
//     "id": 1,
//     "filter":[
//         "inv_agent_status = 'A'"
//     ],
//     "group":[
//         "inv_agent_supervisor_name DESC"
//     ],
//     "order":[
//         "inv_agent_supervisor_name"
//     ],
//     "limit":[
//         3
//     ]
// };

function selectionReport(_x) {
  return _selectionReport.apply(this, arguments);
}

function _selectionReport() {
  _selectionReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(arg) {
    var report_id, findSQL, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            report_id = validateId(arg) ? arg.report_id : "";

            if (!report_id) {
              _context.next = 19;
              break;
            }

            findSQL = "\n    SELECT inv_report_field, inv_report_table, inv_report_filter\n    FROM InvReport\n    WHERE inv_report_id = ".concat(report_id, "\n    ");
            console.log("SQL", findSQL);
            _context.prev = 4;
            _context.next = 7;
            return poolDat.query(findSQL);

          case 7:
            result = _context.sent;
            console.log("REPORTE", result);
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');

          case 17:
            _context.next = 21;
            break;

          case 19:
            result = null;
            return _context.abrupt("return", result);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 12]]);
  }));
  return _selectionReport.apply(this, arguments);
}

;

function validateId(arg) {
  var result = false;

  if (arg.report_id) {
    if (arg.report_id > 0) {
      return true;
    } else {
      result = false;
    }

    ;
  }

  return result;
}

; //   let respon = selectionReport(filter);
//   console.log(respon);