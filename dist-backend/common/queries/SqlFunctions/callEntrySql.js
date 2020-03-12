"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callEntryFunction = callEntryFunction;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

// import {
//   userSelectionFilters,
//   userSelectionSqlFunction
// } from "../InvMenu/userSelection/userSelectionFilters";
// import { sqlDateQueries, sqlIntervalFields } from "./inboundFunctions";
// export async function callEntry(userSelection, selectField, aditionalFilterField) {
//   let result_final = {};
//   let resume_error = false;
function callEntryFunction(_x, _x2, _x3) {
  return _callEntryFunction.apply(this, arguments);
} //   return callEntryFunction(userSelection);
// }


function _callEntryFunction() {
  _callEntryFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection, selectField, aditionalFilterField) {
    var result, resume_error, selectFieldQuery, aditionalFilterFieldQuery, userSelectionFields, filter, filterDates, intervalFields, group_interval, main_where, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resume_error = false;
            selectFieldQuery = selectField ? selectField : "1";
            aditionalFilterFieldQuery = aditionalFilterField ? aditionalFilterField : "1";
            userSelectionFields = {
              agent: "hca_agent_id",
              supervisor: "hca_agent_people_json",
              role: "hca_agent_role_json",
              schedule: "hca_agent_schedule_json",
              client: "hca_queue_client_json",
              service: "hca_queue_service_json",
              queue: "hca_queue_id",
              campaign: "inv_campaign_id" // plannedClient: "inv_service_id",
              // plannedQueue: "inv_service_id",
              // plannedService: "inv_service_id",
              // plannedCampaign: "inv_service_id",

            };
            filter = userSelectionFilters(userSelection, userSelectionFields);
            filterDates = sqlDateQueries(filter, "callentry_datetime_entry_queue");
            intervalFields = sqlIntervalFields(filter, "callentry_datetime_entry_queue", userSelection.interval ? userSelection.interval.minute : "");
            group_interval = !filter.interval || filter.interval === "00:00:00" ? "" : "GROUP BY interval_init";
            main_where = filter.agent + filter.supervisor + filter.role + filter.schedule + filter.client + filter.service + filter.queue + filter.campaign + " 1";
            query = "\n    SELECT 1\n\n      ".concat(intervalFields, "\n\n    ,").concat(selectFieldQuery, "\n      \n      FROM\n         MainCallEntry\n\n         LEFT OUTER JOIN  InvAgent\n          ON callentry_agent_id = inv_agent_id\n      \n         LEFT OUTER JOIN InvQueue\n          ON callentry_queue_id = inv_queue_id\n      \n         LEFT OUTER JOIN HcaAgent\n          ON callentry_date = hca_agent_date\n          AND callentry_agent_id = hca_agent_id\n      \n         LEFT OUTER JOIN HcaQueue\n          ON callentry_date = hca_queue_date\n          AND callentry_queue_id = hca_queue_id\n\n         LEFT OUTER JOIN  InvCampaign\n          ON callentry_campaign_id = inv_campaign_id\n\n      WHERE 1\n          ").concat(filterDates, "\n      AND\n         ").concat(main_where, "\n\n      AND\n          ").concat(aditionalFilterFieldQuery, "\n\n      ").concat(group_interval, "\n      ").concat(filter.groupBy, "\n      ").concat(filter.orderBy, "\n      ").concat(filter.limitBy, "\n\n          "); // AND
            // ${main_where}
            // ${filter.groupBy}
            // ${filter.orderBy}
            // ${filter.limitBy}

            _context.prev = 10;
            _context.next = 13;
            return pool.destinyReports.query(query);

          case 13:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](10);
            resume_error = true;
            return _context.abrupt("return", {
              error: "callEntry - callEntryFunction " + _context.t0
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 17]]);
  }));
  return _callEntryFunction.apply(this, arguments);
}