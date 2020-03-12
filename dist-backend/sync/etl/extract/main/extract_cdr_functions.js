"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

// write procesed records
function writeDestiny(data, current_table) {
  if (data[0] !== undefined) {
    return new Promise(function (resolve, reject) {
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
    });
  } else {
    return [];
  }
} // Read actual records


function readOriginByDateMaxNum(start_date, table, datefield, numberField, numberValue, selection) {
  numberValue === undefined || numberValue === null ? numberValue = 0 : numberValue;
  selection === undefined || selection === null ? selection = 1 : selection;
  var next_date = nextDate(start_date);
  return new Promise(function (resolve, reject) {
    var querySQL = "\n    SELECT\n    DATE_FORMAT(cdr.calldate, '%Y-%m-%d %H:%i:%s') as cdr_calldate\n    , DATE_FORMAT(cdr.calldate, '%Y-%m-%d') as cdr_date\n    , cdr.clid as cdr_clid\n    , cdr.src as cdr_src\n    , cdr.dst as cdr_dst\n    , cdr.dcontext as cdr_dcontext\n    , cdr.channel as cdr_channel\n    , cdr.dstchannel as cdr_dstchannel\n    , cdr.lastapp as cdr_lastapp\n    , cdr.lastdata as cdr_lastdata\n    , cdr.duration as cdr_duration_sec\n    , cdr.billsec as cdr_billsec_sec\n    , cdr.disposition as cdr_disposition\n    , cdr.amaflags as cdr_amaflags\n    , cdr.accountcode as cdr_accountcode\n    , cdr.uniqueid as cdr_uniqueid\n    , cdr.userfield as cdr_userfield\n    , cdr.recordingfile as cdr_recordingfile\n    , cdr.cnum as cdr_cnum\n    , cdr.cnam as cdr_cnam\n    , cdr.outbound_cnum as cdr_outbound_cnum\n    , cdr.outbound_cnam as cdr_outbound_cnam\n    , cdr.dst_cnam as cdr_dst_cnam\n    , cdr.did as cdr_did\n    , cdr.id as cdr_id\n\n    , callentry.id_agent as cdr_agent_id\n    , callentry.id_queue_call_entry as cdr_queue_id\n\n    FROM\n    asteriskcdrdb.cdr as cdr\n\n    LEFT OUTER JOIN call_center.call_entry as callentry\n    ON cdr.uniqueid = callentry.uniqueid\n\n    WHERE\n    ".concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n    AND\n    ").concat(numberField, " > ").concat(numberValue, "\n    AND\n    ").concat(selection, "\n\n    LIMIT 100\n\n    ");
    resolve(pool.origin.query(querySQL));
    reject("Error");
  });
} // Read actual records


function readOriginByDateMaxNumAllRecords(start_date, table, datefield, numberField, numberValue, selection) {
  numberValue === undefined || numberValue === null ? numberValue = 0 : numberValue;
  selection === undefined || selection === null ? selection = 1 : selection;
  var next_date = nextDate(start_date);
  return new Promise(function (resolve, reject) {
    var querySQL = "\n    SELECT\n      DATE_FORMAT(cdr.calldate, '%Y-%m-%d %H:%i:%s') as cdr_calldate\n    , cdr.clid as cdr_clid\n    , cdr.src as cdr_src\n    , cdr.dst as cdr_dst\n    , cdr.dcontext as cdr_dcontext\n    , cdr.channel as cdr_channel\n    , cdr.dstchannel as cdr_dstchannel\n    , cdr.lastapp as cdr_lastapp\n    , cdr.lastdata as cdr_lastdata\n    , cdr.duration as cdr_duration_sec\n    , cdr.billsec as cdr_billsec_sec\n    , cdr.disposition as cdr_disposition\n    , cdr.amaflags as cdr_amaflags\n    , cdr.accountcode as cdr_accountcode\n    , cdr.uniqueid as cdr_uniqueid\n    , cdr.userfield as cdr_userfield\n    , cdr.recordingfile as cdr_recordingfile\n    , cdr.cnum as cdr_cnum\n    , cdr.cnam as cdr_cnam\n    , cdr.outbound_cnum as cdr_outbound_cnum\n    , cdr.outbound_cnam as cdr_outbound_cnam\n    , cdr.dst_cnam as cdr_dst_cnam\n    , cdr.did as cdr_did\n    , cdr.id as cdr_id\n\n    , callentry.id_agent as cdr_agent_id\n    , callentry.id_queue_call_entry as cdr_queue_id\n\n    FROM\n    asteriskcdrdb.cdr as cdr\n\n    LEFT OUTER JOIN call_center.call_entry as callentry\n    ON cdr.uniqueid = callentry.uniqueid\n\n    WHERE\n    ".concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n    AND\n    ").concat(numberField, " > ").concat(numberValue, "\n    AND\n    ").concat(selection, "\n\n    ");
    resolve(pool.origin.query(querySQL));
    reject("Error");
  });
} // Read actual records


function readTableMaxIdByDate(_x, _x2, _x3, _x4) {
  return _readTableMaxIdByDate.apply(this, arguments);
} // Calculate lowest date in ORIGIN table


function _readTableMaxIdByDate() {
  _readTableMaxIdByDate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(start_date, table, datefield, numfield) {
    var next_date;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next_date = nextDate(start_date);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var querySQL = "\n    SELECT\n    max(".concat(numfield, ") as maxId\n    FROM\n    ").concat(table, "\n    WHERE\n    ").concat(datefield, " >= '").concat(start_date, "' AND ").concat(datefield, " < '").concat(next_date, "'\n    ");
              resolve(pool.destinyReports.query(querySQL));
              reject("Error");
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _readTableMaxIdByDate.apply(this, arguments);
}

function minDate(table, datefield) {
  return new Promise(function (resolve, reject) {
    var querySQL = "\n      SELECT\n      DATE_FORMAT(MIN(".concat(datefield, "), '%Y-%m-%d') as min_date\n      FROM\n      ").concat(table, "\n      ");
    resolve(pool.origin.query(querySQL));
    reject("Error");
  });
} // Calculate previous date


function nextDate(initial_date) {
  var formated_date = (0, _moment["default"])().format("YYYY-MM-DD");
  var startdate = (0, _moment["default"])(initial_date);
  var previous_date = startdate.add(1, "days");
  formated_date = startdate.format("YYYY-MM-DD");
  return formated_date;
}

module.exports = {
  writeDestiny: writeDestiny,
  readTableMaxIdByDate: readTableMaxIdByDate,
  minDate: minDate,
  readOriginByDateMaxNum: readOriginByDateMaxNum,
  readOriginByDateMaxNumAllRecords: readOriginByDateMaxNumAllRecords
};