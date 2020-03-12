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
var originTable = "call_center.campaign";
var destinyTable = "InvCampaign";
var incoming_date = process.argv[2];
/******************* Running actual program -- exec*/

function extractInvCampaign(_x) {
  return _extractInvCampaign.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/extract/inv/extract_agent.js
// extractInvCampaign();


function _extractInvCampaign() {
  _extractInvCampaign = (0, _asyncToGenerator2["default"])(
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
              // date
              x.inv_campaign_id = x.id;
              x.inv_campaign_status = x.estatus;
              x.inv_campaign_name = x.name;
              x.inv_campaign_shortname = x.name;
              x.inv_campaign_start_date = x.datetime_init;
              x.inv_campaign_end_date = x.datetime_end;
              x.inv_campaign_start_time = x.daytime_init;
              x.inv_campaign_end_time = x.daytime_end; // calc

              x.inv_campaign_queue_number = x.queue;
              x.inv_campaign_queue_id = 1; //campaignFunctions.inv_campaign_queue_id(thisQueueClean, x.queue);

              x.inv_campaign_queue_name = 1; //campaignFunctions.inv_campaign_queue_name(thisQueueClean, x.queue);

              x.inv_campaign_description = 1; //campaignFunctions.inv_campaign_description(thisQueueClean, x.queue);

              x.inv_campaign_aftercall_time = null;
              return x;
            }).map(function (y) {
              delete y.id;
              delete y.name;
              delete y.datetime_init;
              delete y.datetime_end;
              delete y.daytime_init;
              delete y.daytime_end;
              delete y.retries;
              delete y.trunk;
              delete y.context;
              delete y.queue;
              delete y.max_canales;
              delete y.num_completadas;
              delete y.promedio;
              delete y.desviacion;
              delete y.script;
              delete y.estatus;
              delete y.id_url;
              return y;
            });
            validation = Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

            if (!validation) {
              _context.next = 22;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return (0, _extractFunctionsInv.writeDestiny)(extendedResult, destinyTable)["catch"](function (err) {
              return console.log("extractInvCampaign caught it - writeDestiny", err);
            });

          case 14:
            written = _context.sent;
            return _context.abrupt("return", {
              "function": "extractInvCampaign ",
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
  return _extractInvCampaign.apply(this, arguments);
}

module.exports = {
  extractInvCampaign: extractInvCampaign
};