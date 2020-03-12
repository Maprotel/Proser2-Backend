"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multipleSqlMenu = multipleSqlMenu;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var _dateFunctions = _interopRequireDefault(require("../../functions/dateFunctions"));

function multipleSqlMenu(_x) {
  return _multipleSqlMenu.apply(this, arguments);
}

function _multipleSqlMenu() {
  _multipleSqlMenu = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14(userSelection) {
    var result, resume_error, queryCalendarDayFunction, _queryCalendarDayFunction, queryMenuClientFunction, _queryMenuClientFunction, queryMenuQueueFunction, _queryMenuQueueFunction, queryMenuServiceFunction, _queryMenuServiceFunction, queryMenuCampaignFunction, _queryMenuCampaignFunction, queryMenuSupervisorFunction, _queryMenuSupervisorFunction, queryMenuAgentFunction, _queryMenuAgentFunction, queryMenuScheduleFunction, _queryMenuScheduleFunction, queryMenuAuxiliarFunction, _queryMenuAuxiliarFunction, queryMenuAsignationFunction, _queryMenuAsignationFunction, queryMenuReportLinesFunction, _queryMenuReportLinesFunction, queryMenuHourFunction, _queryMenuHourFunction, queryMenuIntervalFunction, _queryMenuIntervalFunction, queryCalendarDay, queryMenuClient, queryMenuQueue, queryMenuService, queryMenuCampaign, queryMenuSupervisor, queryMenuAgent, queryMenuSchedule, queryMenuAuxiliar, queryMenuAsignation, queryMenuReportLines, queryMenuHour, queryMenuInterval;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _queryMenuIntervalFunction = function _ref26() {
              _queryMenuIntervalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee13(userSelection) {
                var query, _result13;

                return _regenerator["default"].wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        query = "\n\n    SELECT\n\n    aux_interval_id as id,\n    aux_interval_name as name,\n    aux_interval_value as value\n\n    FROM AuxInterval\n  \n          ";
                        _context13.prev = 1;
                        _context13.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result13 = _context13.sent;
                        return _context13.abrupt("return", _result13);

                      case 8:
                        _context13.prev = 8;
                        _context13.t0 = _context13["catch"](1);
                        resume_error = true;
                        return _context13.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuIntervalFunction " + _context13.t0
                        });

                      case 12:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, null, [[1, 8]]);
              }));
              return _queryMenuIntervalFunction.apply(this, arguments);
            };

            queryMenuIntervalFunction = function _ref25(_x14) {
              return _queryMenuIntervalFunction.apply(this, arguments);
            };

            _queryMenuHourFunction = function _ref24() {
              _queryMenuHourFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee12(userSelection) {
                var query, _result12;

                return _regenerator["default"].wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        query = "\n\n    SELECT\n    \n    aux_hour_id as id,\n    aux_hour_name as name,\n    aux_hour_value as value\n\n    FROM AuxHour\n  \n          ";
                        _context12.prev = 1;
                        _context12.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result12 = _context12.sent;
                        return _context12.abrupt("return", _result12);

                      case 8:
                        _context12.prev = 8;
                        _context12.t0 = _context12["catch"](1);
                        resume_error = true;
                        return _context12.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuHourFunction " + _context12.t0
                        });

                      case 12:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[1, 8]]);
              }));
              return _queryMenuHourFunction.apply(this, arguments);
            };

            queryMenuHourFunction = function _ref23(_x13) {
              return _queryMenuHourFunction.apply(this, arguments);
            };

            _queryMenuReportLinesFunction = function _ref22() {
              _queryMenuReportLinesFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(userSelection) {
                var query, _result11;

                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        query = "\n\n    SELECT\n    \n    aux_line_id as id,\n    aux_line_name as name,\n    aux_line_value as value\n    \n    FROM AuxLine\n  \n          ";
                        _context11.prev = 1;
                        _context11.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result11 = _context11.sent;
                        return _context11.abrupt("return", _result11);

                      case 8:
                        _context11.prev = 8;
                        _context11.t0 = _context11["catch"](1);
                        resume_error = true;
                        return _context11.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuReportLinesFunction " + _context11.t0
                        });

                      case 12:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[1, 8]]);
              }));
              return _queryMenuReportLinesFunction.apply(this, arguments);
            };

            queryMenuReportLinesFunction = function _ref21(_x12) {
              return _queryMenuReportLinesFunction.apply(this, arguments);
            };

            _queryMenuAsignationFunction = function _ref20() {
              _queryMenuAsignationFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee10(userSelection) {
                var query, _result10;

                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        query = "\n\n    SELECT\n      DISTINCT(break.inv_break_id) as id,\n      break.inv_break_name as name\n\n      FROM\n      MainAudit AS audit\n      INNER JOIN InvBreak AS break\n      ON\n      break.inv_break_id = audit_break_id\n\n      WHERE\n      audit.audit_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "'\n      AND\n      break.inv_break_productivity = 1\n\n\n  \n          ");
                        _context10.prev = 1;
                        _context10.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result10 = _context10.sent;
                        return _context10.abrupt("return", _result10);

                      case 8:
                        _context10.prev = 8;
                        _context10.t0 = _context10["catch"](1);
                        resume_error = true;
                        return _context10.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuAsignationFunction " + _context10.t0
                        });

                      case 12:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[1, 8]]);
              }));
              return _queryMenuAsignationFunction.apply(this, arguments);
            };

            queryMenuAsignationFunction = function _ref19(_x11) {
              return _queryMenuAsignationFunction.apply(this, arguments);
            };

            _queryMenuAuxiliarFunction = function _ref18() {
              _queryMenuAuxiliarFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(userSelection) {
                var query, _result9;

                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        query = "\n\n    SELECT\n      DISTINCT(break.inv_break_id) as id,\n      break.inv_break_name as name\n\n      FROM\n      MainAudit AS audit INNER JOIN InvBreak AS break\n      ON\n      break.inv_break_id = audit_break_id\n\n      WHERE\n      audit.audit_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "'\n      AND\n      break.inv_break_productivity is null or break.inv_break_productivity <> 1\n\n\n  \n          ");
                        _context9.prev = 1;
                        _context9.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result9 = _context9.sent;
                        return _context9.abrupt("return", _result9);

                      case 8:
                        _context9.prev = 8;
                        _context9.t0 = _context9["catch"](1);
                        resume_error = true;
                        return _context9.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuAuxiliarFunction " + _context9.t0
                        });

                      case 12:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[1, 8]]);
              }));
              return _queryMenuAuxiliarFunction.apply(this, arguments);
            };

            queryMenuAuxiliarFunction = function _ref17(_x10) {
              return _queryMenuAuxiliarFunction.apply(this, arguments);
            };

            _queryMenuScheduleFunction = function _ref16() {
              _queryMenuScheduleFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee8(userSelection) {
                var query, _result8;

                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        query = "\n\n    SELECT\n    inv_schedule_id as id,\n    inv_schedule_name as name\n  \n    FROM\n    InvSchedule\n  \n    WHERE\n    inv_schedule_status = 'A'\n\n\n  \n          ";
                        _context8.prev = 1;
                        _context8.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result8 = _context8.sent;
                        return _context8.abrupt("return", _result8);

                      case 8:
                        _context8.prev = 8;
                        _context8.t0 = _context8["catch"](1);
                        resume_error = true;
                        return _context8.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuScheduleFunction " + _context8.t0
                        });

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[1, 8]]);
              }));
              return _queryMenuScheduleFunction.apply(this, arguments);
            };

            queryMenuScheduleFunction = function _ref15(_x9) {
              return _queryMenuScheduleFunction.apply(this, arguments);
            };

            _queryMenuAgentFunction = function _ref14() {
              _queryMenuAgentFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee7(userSelection) {
                var query, _result7;

                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        query = "\n\n    SELECT DISTINCT\n\t\taudit_agent_id AS id\n        ,inv_agent_name as name\n       FROM\n        MainAudit AS audit\n        LEFT OUTER JOIN HcaAgent AS agent\n        ON audit_agent_id = hca_agent_id\n        LEFT OUTER JOIN InvAgent AS inv_agent\n        ON audit_agent_id = inv_agent_id\n        \n      WHERE\n\n        audit_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "'\n\n          ");
                        _context7.prev = 1;
                        _context7.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result7 = _context7.sent;
                        return _context7.abrupt("return", _result7);

                      case 8:
                        _context7.prev = 8;
                        _context7.t0 = _context7["catch"](1);
                        resume_error = true;
                        return _context7.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuAgentFunction " + _context7.t0
                        });

                      case 12:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 8]]);
              }));
              return _queryMenuAgentFunction.apply(this, arguments);
            };

            queryMenuAgentFunction = function _ref13(_x8) {
              return _queryMenuAgentFunction.apply(this, arguments);
            };

            _queryMenuSupervisorFunction = function _ref12() {
              _queryMenuSupervisorFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee6(userSelection) {
                var query, _result6;

                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        query = "\n\n    SELECT DISTINCT\n       JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].id\") ) as hca_agent_supervisor_id AS id\n      ,inv_supervisor_name as name\n\n    FROM\n      MainAudit AS audit\n\n    LEFT OUTER JOIN HcaAgent AS agent\n      ON audit_agent_id = hca_agent_id\n\n    LEFT OUTER JOIN InvSupervisor AS inv_supervisor\n      ON JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].id\") ) as hca_agent_supervisor_id = inv_supervisor_id\n    \n    WHERE\n      audit_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "'\n\n\n  \n          ");
                        _context6.prev = 1;
                        _context6.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result6 = _context6.sent;
                        return _context6.abrupt("return", _result6);

                      case 8:
                        _context6.prev = 8;
                        _context6.t0 = _context6["catch"](1);
                        resume_error = true;
                        return _context6.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuSupervisorFunction " + _context6.t0
                        });

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[1, 8]]);
              }));
              return _queryMenuSupervisorFunction.apply(this, arguments);
            };

            queryMenuSupervisorFunction = function _ref11(_x7) {
              return _queryMenuSupervisorFunction.apply(this, arguments);
            };

            _queryMenuCampaignFunction = function _ref10() {
              _queryMenuCampaignFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(userSelection) {
                var query, _result5;

                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        query = "\n\n    SELECT\n    inv_campaign_id as id,\n    inv_campaign_name as name\n\n    FROM\n    InvCampaign\n    WHERE  (inv_campaign_start_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "')\n\n\n  \n          ");
                        _context5.prev = 1;
                        _context5.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result5 = _context5.sent;
                        return _context5.abrupt("return", _result5);

                      case 8:
                        _context5.prev = 8;
                        _context5.t0 = _context5["catch"](1);
                        resume_error = true;
                        return _context5.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuCampaignFunction " + _context5.t0
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[1, 8]]);
              }));
              return _queryMenuCampaignFunction.apply(this, arguments);
            };

            queryMenuCampaignFunction = function _ref9(_x6) {
              return _queryMenuCampaignFunction.apply(this, arguments);
            };

            _queryMenuServiceFunction = function _ref8() {
              _queryMenuServiceFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee4(userSelection) {
                var query, _result4;

                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        query = "\n\n    SELECT DISTINCT\n      inv_service_id AS id\n    ,inv_service_name AS name\n      \n    FROM\n      MainCdr\n      LEFT OUTER JOIN InvQueue\n      ON cdr_queue_id = inv_queue_id\n    \n    WHERE\n      (cdr_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "')\n\n      GROUP BY inv_service_id\n          ");
                        _context4.prev = 1;
                        _context4.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result4 = _context4.sent;
                        return _context4.abrupt("return", _result4);

                      case 8:
                        _context4.prev = 8;
                        _context4.t0 = _context4["catch"](1);
                        resume_error = true;
                        return _context4.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuServiceFunction " + _context4.t0
                        });

                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 8]]);
              }));
              return _queryMenuServiceFunction.apply(this, arguments);
            };

            queryMenuServiceFunction = function _ref7(_x5) {
              return _queryMenuServiceFunction.apply(this, arguments);
            };

            _queryMenuQueueFunction = function _ref6() {
              _queryMenuQueueFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(userSelection) {
                var query, _result3;

                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        query = "\n\n    SELECT DISTINCT\n      inv_queue_number as id\n      ,inv_queue_name as name\n\n    FROM\n      MainCdr\n      LEFT OUTER JOIN InvQueue\n      ON cdr_queue_id = inv_queue_id\n    \n    WHERE\n      (cdr_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "')\n      GROUP BY inv_queue_number\n  \n          ");
                        _context3.prev = 1;
                        _context3.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result3 = _context3.sent;
                        return _context3.abrupt("return", _result3);

                      case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3["catch"](1);
                        resume_error = true;
                        return _context3.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuQueueFunction " + _context3.t0
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1, 8]]);
              }));
              return _queryMenuQueueFunction.apply(this, arguments);
            };

            queryMenuQueueFunction = function _ref5(_x4) {
              return _queryMenuQueueFunction.apply(this, arguments);
            };

            _queryMenuClientFunction = function _ref4() {
              _queryMenuClientFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(userSelection) {
                var query, _result2;

                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        query = "\n\n        SELECT DISTINCT\n        inv_client_id AS id\n        ,inv_client_name AS name\n      FROM\n        MainCdr\n      LEFT OUTER JOIN InvQueue\n      ON  cdr_queue_id = inv_queue_id\n\n      WHERE\n      (cdr_date BETWEEN '".concat(userSelection.start_date, "' AND '").concat(userSelection.end_date, "')\n      \n      GROUP BY\n        inv_client_id\n  \n          ");
                        _context2.prev = 1;
                        _context2.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result2 = _context2.sent;
                        return _context2.abrupt("return", _result2);

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](1);
                        resume_error = true;
                        return _context2.abrupt("return", {
                          error: "multipleSqlMenu - queryMenuClientFunction " + _context2.t0
                        });

                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 8]]);
              }));
              return _queryMenuClientFunction.apply(this, arguments);
            };

            queryMenuClientFunction = function _ref3(_x3) {
              return _queryMenuClientFunction.apply(this, arguments);
            };

            _queryCalendarDayFunction = function _ref2() {
              _queryCalendarDayFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(userSelection) {
                var query, _result;

                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        query = "\n      SELECT\n      *\n      FROM\n      InvCalendarDay\n      WHERE\n      inv_calendarday_date = '".concat(userSelection.start_date, "'\n\n          ");
                        _context.prev = 1;
                        _context.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result = _context.sent;
                        return _context.abrupt("return", _result);

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](1);
                        resume_error = true;
                        return _context.abrupt("return", {
                          error: "multipleSqlMenu - queryCalendarDayFunction " + _context.t0
                        });

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 8]]);
              }));
              return _queryCalendarDayFunction.apply(this, arguments);
            };

            queryCalendarDayFunction = function _ref(_x2) {
              return _queryCalendarDayFunction.apply(this, arguments);
            };

            result = {};
            resume_error = false;
            _context14.next = 30;
            return queryCalendarDayFunction(userSelection);

          case 30:
            queryCalendarDay = _context14.sent;
            _context14.next = 33;
            return queryMenuClientFunction(userSelection);

          case 33:
            queryMenuClient = _context14.sent;
            _context14.next = 36;
            return queryMenuQueueFunction(userSelection);

          case 36:
            queryMenuQueue = _context14.sent;
            _context14.next = 39;
            return queryMenuServiceFunction(userSelection);

          case 39:
            queryMenuService = _context14.sent;
            _context14.next = 42;
            return queryMenuCampaignFunction(userSelection);

          case 42:
            queryMenuCampaign = _context14.sent;
            _context14.next = 45;
            return queryMenuSupervisorFunction(userSelection);

          case 45:
            queryMenuSupervisor = _context14.sent;
            _context14.next = 48;
            return queryMenuAgentFunction(userSelection);

          case 48:
            queryMenuAgent = _context14.sent;
            _context14.next = 51;
            return queryMenuScheduleFunction(userSelection);

          case 51:
            queryMenuSchedule = _context14.sent;
            _context14.next = 54;
            return queryMenuAuxiliarFunction(userSelection);

          case 54:
            queryMenuAuxiliar = _context14.sent;
            _context14.next = 57;
            return queryMenuAsignationFunction(userSelection);

          case 57:
            queryMenuAsignation = _context14.sent;
            _context14.next = 60;
            return queryMenuReportLinesFunction(userSelection);

          case 60:
            queryMenuReportLines = _context14.sent;
            _context14.next = 63;
            return queryMenuHourFunction(userSelection);

          case 63:
            queryMenuHour = _context14.sent;
            _context14.next = 66;
            return queryMenuIntervalFunction(userSelection);

          case 66:
            queryMenuInterval = _context14.sent;
            result = {
              dashboardType: userSelection.dashboardType,
              bootstrap_start_date: userSelection.bootstrap_start_date,
              bootstrap_end_date: userSelection.bootstrap_end_date,
              bootstrap_start_time: userSelection.bootstrap_start_time,
              bootstrap_end_time: userSelection.bootstrap_end_time,
              title: userSelection.title,
              subtitle: userSelection.subtitle,
              filter: userSelection.filter,
              status: userSelection.status,
              reportlines: queryMenuReportLines,
              scale: userSelection.scale,
              login: userSelection.login,
              today: userSelection.today,
              schedule_hollyday: queryCalendarDay,
              start_date: userSelection.start_date,
              end_date: userSelection.end_date,
              start_time: queryMenuHour,
              end_time: queryMenuHour,
              interval: queryMenuInterval,
              last_minutes: queryMenuInterval,
              client: queryMenuClient,
              queue: queryMenuQueue,
              service: queryMenuService,
              campaign: queryMenuCampaign,
              supervisor: queryMenuSupervisor,
              agent: queryMenuAgent,
              schedule: queryMenuSchedule,
              auxiliar: queryMenuAuxiliar,
              assignation: queryMenuAsignation,
              groupBy: userSelection.groupBy,
              orderBy: userSelection.orderBy,
              limitBy: userSelection.limitBy,
              break_class: userSelection.break_class
            };

            if (resume_error) {
              _context14.next = 72;
              break;
            }

            return _context14.abrupt("return", result);

          case 72:
            return _context14.abrupt("return", {
              error: result
            });

          case 73:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _multipleSqlMenu.apply(this, arguments);
}