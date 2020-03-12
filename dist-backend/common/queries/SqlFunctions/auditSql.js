"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditFunction = auditFunction;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

// import {
//   userSelectionFilters,
//   userSelectionSqlFunction
// } from "../InvMenu/userSelection/userSelectionFilters";
// import { sqlDateQueries, sqlIntervalFields } from "./inboundFunctions";
//************************************************************************ */
function auditFunction(_x, _x2, _x3) {
  return _auditFunction.apply(this, arguments);
}

function _auditFunction() {
  _auditFunction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection, selectField, aditionalFilterField) {
    var result, resume_error, selectFieldQuery, aditionalFilterFieldQuery, userSelectionFields, filter, filterDates, intervalFields, group_interval, main_where, audit_queues, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resume_error = false;
            selectFieldQuery = selectField ? selectField : "1";
            aditionalFilterFieldQuery = aditionalFilterField ? aditionalFilterField : "1";
            userSelectionFields = {
              agent: "audit_agent_id",
              supervisor: "hca_agent_people_json",
              role: "hca_agent_role_json",
              schedule: "hca_agent_schedule_json",
              assignation: "audit_break_id",
              auxiliar: "audit_break_id",
              client: "audit_operation_json",
              service: "audit_operation_json",
              queue: "audit_operation_json",
              campaign: "" // plannedClient: "inv_service_id",
              // plannedQueue: "inv_service_id",
              // plannedService: "inv_service_id",
              // plannedCampaign: "inv_service_id",

            };
            filter = userSelectionFilters(userSelection, userSelectionFields);
            filterDates = sqlDateQueries(filter, "audit_datetime_init");
            intervalFields = sqlIntervalFields(filter, "audit_datetime_init", userSelection.interval ? userSelection.interval.minute : "");
            group_interval = !filter.interval || filter.interval === "00:00:00" ? "" : "GROUP BY interval_init";
            main_where = filter.agent + filter.supervisor + filter.role + filter.schedule + filter.assignation + filter.auxiliar;
            audit_queues = filter.client + filter.service + filter.queue;
            query = "\n    SELECT 1\n\n      ".concat(intervalFields, "\n\n    ,").concat(selectFieldQuery, "\n      \n      FROM\n         MainAudit\n\n         LEFT OUTER JOIN  InvAgent\n          ON audit_agent_id = inv_agent_id\n      \n         LEFT OUTER JOIN HcaAgent\n          ON audit_date = hca_agent_date\n          AND audit_agent_id = hca_agent_id \n              \n\n      WHERE 1\n          ").concat(filterDates, "\n          ").concat(main_where, "\n    \n      AND\n          ").concat(aditionalFilterFieldQuery, "\n\n      ").concat(group_interval, "\n      ").concat(filter.groupBy, "\n      ").concat(filter.orderBy, "\n      ").concat(filter.limitBy, "\n\n          ");
            _context.prev = 11;
            _context.next = 14;
            return pool.destinyReports.query(query);

          case 14:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](11);
            resume_error = true;
            return _context.abrupt("return", {
              error: "callEntry - callEntryFunction " + _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 18]]);
  }));
  return _auditFunction.apply(this, arguments);
}