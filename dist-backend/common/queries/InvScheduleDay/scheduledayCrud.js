"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invScheduleDayCrudInsert = invScheduleDayCrudInsert;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

function invScheduleDayCrudInsert(_x) {
  return _invScheduleDayCrudInsert.apply(this, arguments);
} // write procesed records


function _invScheduleDayCrudInsert() {
  _invScheduleDayCrudInsert = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(data) {
    var id, myfields, myRecords, querySQL, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = data.id;
            myfields = "inv_scheduleday_id,   inv_schedule_id,   inv_scheduleday_weekday,   inv_scheduleday_name,   inv_scheduleday_start_time,   inv_scheduleday_end_time,   inv_scheduleday_legal_break, inv_scheduleday_laborday";
            myRecords = "( null, ".concat(id, ",1,'lunes','08:00:00','17:00:00','01:00:00',1 ), ( null, ").concat(id, ",2,'martes','08:00:00','17:00:00','01:00:00',1 ), ( null, ").concat(id, ",3,'mi\xE9rcoles','08:00:00','17:00:00','01:00:00',1), ( null, ").concat(id, ",4,'jueves','08:00:00','17:00:00','01:00:00',1 ), ( null, ").concat(id, ",5,'viernes','08:00:00','17:00:00','01:00:00',1 ), (  null, ").concat(id, ", 6, 's\xE1bado', null, null, null, 0), (  null, ").concat(id, ", 7, 'domingo', null, null, null, 0 )");
            querySQL = "INSERT INTO InvScheduleDay (".concat(myfields, ") values ").concat(myRecords);
            _context.prev = 4;
            console.log("*****************");
            console.log("myfields", myfields);
            console.log("*****************");
            console.log("myRecords", myRecords);
            console.log("*****************");
            console.log("querySQL", querySQL);
            _context.next = 13;
            return pool.destinyInventory.query(querySQL);

          case 13:
            result = _context.sent;
            console.log("*****************");
            console.log("result", result);
            return _context.abrupt("return", result);

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", {
              invScheduleDayCrudInsert: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 19]]);
  }));
  return _invScheduleDayCrudInsert.apply(this, arguments);
}

function writeDestiny(_x2, _x3) {
  return _writeDestiny.apply(this, arguments);
}

function _writeDestiny() {
  _writeDestiny = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(data, current_table) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;

            if (!(data[0] !== undefined)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", new Promise(function (resolve, reject) {
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
              reject("Error", error);
            }));

          case 5:
            return _context2.abrupt("return", []);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _writeDestiny.apply(this, arguments);
}