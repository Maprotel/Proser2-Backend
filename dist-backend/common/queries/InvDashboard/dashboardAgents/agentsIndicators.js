"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentsIndicators = agentsIndicators;
exports.agentsPlannedList = agentsPlannedList;
exports.agentsConnectedList = agentsConnectedList;
exports.agentsEffectiveList = agentsEffectiveList;
exports.agentsAsignedList = agentsAsignedList;
exports.agentsBreakList = agentsBreakList;
exports.agentsAvailableList = agentsAvailableList;
exports.agentsOccupiedList = agentsOccupiedList;
exports.agentsLoggedList = agentsLoggedList;
exports.agentsAsignedDetailList = agentsAsignedDetailList;
exports.agentsBreakDetailList = agentsBreakDetailList;
exports.agentsAsignedHistoricList = agentsAsignedHistoricList;
exports.agentsBreakHistoricList = agentsBreakHistoricList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

function agentsIndicators(_x) {
  return _agentsIndicators.apply(this, arguments);
}

function _agentsIndicators() {
  _agentsIndicators = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee15(userSelection) {
    var result, resume_error, agentsPlannedTotalFunction, _agentsPlannedTotalFunction, agentsConnectedTotalFunction, _agentsConnectedTotalFunction, agentsEffectiveTotalFunction, _agentsEffectiveTotalFunction, agentsAsignedTotalFunction, _agentsAsignedTotalFunction, agentsBreakTotalFunction, _agentsBreakTotalFunction, agentsAvailableTotalFunction, _agentsAvailableTotalFunction, agentsOccupiedTotalFunction, _agentsOccupiedTotalFunction, agentsConnectedByGroupFunction, _agentsConnectedByGroupFunction, agentsBreakResumeFunction, _agentsBreakResumeFunction, agentsAssignationResumeFunction, _agentsAssignationResumeFunction, agentsLoggedTotalFunction, _agentsLoggedTotalFunction, agentHistoricResumeFunction, _agentHistoricResumeFunction, agentsHistoricBreakResumeFunction, _agentsHistoricBreakResumeFunction, agentsHistoricAssignationResumeFunction, _agentsHistoricAssignationResumeFunction, agentsPlannedTotal, agentsConnectedTotal, agentsEffectiveTotal, agentsAsignedTotal, agentsBreakTotal, agentsAvailableTotal, agentsOccupiedTotal, agentsConnectedByGroup, agentsBreakResume, agentsAssignationResume, agentsLoggedTotal, agentHistoricResume, agentsHistoricBreakResume, agentsHistoricAssignationResume;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _agentsHistoricAssignationResumeFunction = function _ref28() {
              _agentsHistoricAssignationResumeFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee14(userSelection) {
                var query, _result14;

                return _regenerator["default"].wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        query = "\n    SELECT\n      inv_break_name as name\n      ,inv_break_id as id\n      ,count(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n    FROM\n      MainAudit AS audit\n    LEFT OUTER JOIN\n      InvBreak AS break\n        ON audit_break_id = inv_break_id\n    LEFT OUTER JOIN\n      InvAgent AS agent\n        ON audit_agent_id = inv_agent_id\n    WHERE\n    audit_date = '".concat(userSelection.start_date, "'\n    AND\n      inv_break_productivity = 1\n    AND\n      inv_break_name is not null\n    AND\n      ").concat(userSelection.filter_inv_agent, "\n      \n      GROUP BY inv_break_name\n  ");
                        _context14.prev = 1;
                        _context14.next = 4;
                        return pool.destinyReports.query(query);

                      case 4:
                        _result14 = _context14.sent;
                        return _context14.abrupt("return", _result14);

                      case 8:
                        _context14.prev = 8;
                        _context14.t0 = _context14["catch"](1);
                        resume_error = true;
                        return _context14.abrupt("return", {
                          error: "agentsIndicators - agentsHistoricAssignationResumeFunction " + _context14.t0
                        });

                      case 12:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, null, [[1, 8]]);
              }));
              return _agentsHistoricAssignationResumeFunction.apply(this, arguments);
            };

            agentsHistoricAssignationResumeFunction = function _ref27(_x27) {
              return _agentsHistoricAssignationResumeFunction.apply(this, arguments);
            };

            _agentsHistoricBreakResumeFunction = function _ref26() {
              _agentsHistoricBreakResumeFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee13(userSelection) {
                var query, _result13;

                return _regenerator["default"].wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        query = "\n    SELECT\n      inv_break_name as name\n      ,inv_break_id as id\n      ,count(DISTINCT audit_agent_id) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n    FROM\n      MainAudit AS audit\n    LEFT OUTER JOIN\n      InvBreak AS break\n        ON audit_break_id = inv_break_id\n    LEFT OUTER JOIN\n      InvAgent AS agent\n        ON audit_agent_id = inv_agent_id\n    WHERE\n    audit_date = '".concat(userSelection.start_date, "'\n    AND\n      inv_break_productivity = 0\n    AND\n      inv_break_name is not null\n    AND\n    ").concat(userSelection.filter_inv_agent, "\n      \n      GROUP BY inv_break_name\n  ");
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
                          error: "agentsIndicators - agentsHistoricBreakResumeFunction " + _context13.t0
                        });

                      case 12:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, null, [[1, 8]]);
              }));
              return _agentsHistoricBreakResumeFunction.apply(this, arguments);
            };

            agentsHistoricBreakResumeFunction = function _ref25(_x26) {
              return _agentsHistoricBreakResumeFunction.apply(this, arguments);
            };

            _agentHistoricResumeFunction = function _ref24() {
              _agentHistoricResumeFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee12(userSelection) {
                var query, _result12;

                return _regenerator["default"].wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        query = "\n        SELECT\n        'planificados' as concept\n        ,COUNT(hca_agent_schedule_plan) as count_agents\n        ,SEC_TO_TIME(SUM(hca_agent_schedule_duration)) as duration_agents\n        ,DATE_FORMAT(SEC_TO_TIME(SUM(hca_agent_schedule_duration) / COUNT(hca_agent_schedule_plan)), '%H:%i:%s')\n        as average_agents\n        FROM\n        HcaAgent\n        LEFT OUTER JOIN InvAgent as agent\n        ON hca_agent_id = inv_agent_id\n        WHERE\n        hca_agent_date = '".concat(userSelection.start_date, "'\n        AND\n        ").concat(userSelection.filter_hca_agent, "\n  \n  \n        UNION\n  \n        SELECT\n        'registrados' as concept\n        ,COUNT(DISTINCT audit_agent_id) as count_agents\n        ,SEC_TO_TIME( SUM( audit_duration_sec )) as duration_agents\n        ,SEC_TO_TIME( SUM( audit_duration_sec) / COUNT(DISTINCT audit_agent_id))\n        as average_agents\n        FROM\n        MainAudit\n        LEFT OUTER JOIN InvAgent\n        ON audit_agent_id = inv_agent_id\n        WHERE\n        audit_break_id = 0\n        AND\n        audit_date = '").concat(userSelection.start_date, "'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n  \n  \n        UNION\n  \n  \n        SELECT\n        'Llamadas entrantes' as concept\n        ,COUNT(DISTINCT callentry_agent_id) as count_agents\n        ,SEC_TO_TIME(SUM((callentry_duration_sec))) as duration_agents\n        ,DATE_FORMAT(SEC_TO_TIME(SUM((callentry_duration_sec)) / COUNT(DISTINCT callentry_agent_id)), '%H:%i:%s')\n        as average_agents\n        FROM\n        MainCallEntry\n        LEFT OUTER JOIN InvAgent\n        ON callentry_agent_id = inv_agent_id\n        WHERE\n        callentry_date = '").concat(userSelection.start_date, "'\n        AND\n        callentry_status = 'terminada'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n  \n        UNION\n  \n        SELECT\n        'Llamadas salientes' as concept\n        ,COUNT(DISTINCT cdr_agent_id) as count_agents\n        ,SEC_TO_TIME(SUM((cdr_duration_sec))) as duration_agents\n        ,DATE_FORMAT(SEC_TO_TIME(SUM((cdr_duration_sec)) / COUNT(DISTINCT cdr_agent_id)), '%H:%i:%s')\n        as average_agents\n        FROM\n        MainCdr\n        LEFT OUTER JOIN InvAgent\n        ON cdr_agent_id = inv_agent_id\n        WHERE\n        cdr_call_made = 1\n        AND\n        cdr_date = '").concat(userSelection.start_date, "'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n  \n          ");
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
                          error: "agentsIndicators - agentHistoricResumeFunction " + _context12.t0
                        });

                      case 12:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[1, 8]]);
              }));
              return _agentHistoricResumeFunction.apply(this, arguments);
            };

            agentHistoricResumeFunction = function _ref23(_x25) {
              return _agentHistoricResumeFunction.apply(this, arguments);
            };

            _agentsLoggedTotalFunction = function _ref22() {
              _agentsLoggedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(userSelection) {
                var query, _result11;

                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT inv_agent_id) as agentsLoggedTotal\n    FROM\n        MainAudit as audit\n        LEFT OUTER JOIN InvAgent as agent\n        ON audit_agent_id = agent.inv_agent_id\n\n    WHERE\n        audit_date = '".concat(userSelection.start_date, "'\n        AND\n        audit_break_id = 0\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsLoggedTotalFunction " + _context11.t0
                        });

                      case 12:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[1, 8]]);
              }));
              return _agentsLoggedTotalFunction.apply(this, arguments);
            };

            agentsLoggedTotalFunction = function _ref21(_x24) {
              return _agentsLoggedTotalFunction.apply(this, arguments);
            };

            _agentsAssignationResumeFunction = function _ref20() {
              _agentsAssignationResumeFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee10(userSelection) {
                var query, _result10;

                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        query = "\n    SELECT\n    rcb_break_name as name\n    ,rcb_break_id as id\n      ,count(*) as value\n      ,DATE_FORMAT(SEC_TO_TIME(SUM(rcb_break_duration_sec)), '%H:%i:%s') AS color\n      ,SEC_TO_TIME(SUM(rcb_break_duration_sec)) AS duration\n\n    FROM\n      RealCurrentBreaks\n    LEFT OUTER JOIN InvAgent\n        ON rca_break_agent_id = inv_agent_id\n    WHERE\n      rcb_date = '".concat(userSelection.start_date, "'\n    AND\n      rcb_break_productivity = 1\n    AND\n      ").concat(userSelection.filter_inv_agent, "\n      \n      GROUP BY rcb_break_name\n  ");
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
                          error: "agentsIndicators - agentsAssignationResumeFunction " + _context10.t0
                        });

                      case 12:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[1, 8]]);
              }));
              return _agentsAssignationResumeFunction.apply(this, arguments);
            };

            agentsAssignationResumeFunction = function _ref19(_x23) {
              return _agentsAssignationResumeFunction.apply(this, arguments);
            };

            _agentsBreakResumeFunction = function _ref18() {
              _agentsBreakResumeFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(userSelection) {
                var query, _result9;

                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        query = "\n    SELECT\n       rcb_break_name as name\n       ,rcb_break_id as id\n      ,count(*) as value\n      ,DATE_FORMAT(SEC_TO_TIME(SUM(rcb_break_duration_sec)), '%H:%i:%s') AS color\n      ,SEC_TO_TIME(SUM(rcb_break_duration_sec)) AS duration\n\n    FROM\n      RealCurrentBreaks\n    \n    LEFT OUTER JOIN InvAgent\n        ON rca_break_agent_id = inv_agent_id\n    WHERE\n    rcb_date = '".concat(userSelection.start_date, "'\n    AND\n      rcb_break_productivity = 0\n    AND\n      ").concat(userSelection.filter_inv_agent, "\n      \n      GROUP BY rcb_break_name\n  ");
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
                          error: "agentsIndicators - agentsBreakResumeFunction " + _context9.t0
                        });

                      case 12:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[1, 8]]);
              }));
              return _agentsBreakResumeFunction.apply(this, arguments);
            };

            agentsBreakResumeFunction = function _ref17(_x22) {
              return _agentsBreakResumeFunction.apply(this, arguments);
            };

            _agentsConnectedByGroupFunction = function _ref16() {
              _agentsConnectedByGroupFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee8(userSelection) {
                var query, _result8;

                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        query = "\n    SELECT\n\n     rca_group_name as name\n    ,aux_color_string as color\n    ,COUNT(DISTINCT rca_agent_id) as value\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n        LEFT OUTER JOIN AuxColor\n        ON aux_color_use = rca_group_name\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n        GROUP BY rca_group_name\n    ");
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
                          error: "agentsIndicators - agentsConnectedByGroupFunction " + _context8.t0
                        });

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[1, 8]]);
              }));
              return _agentsConnectedByGroupFunction.apply(this, arguments);
            };

            agentsConnectedByGroupFunction = function _ref15(_x21) {
              return _agentsConnectedByGroupFunction.apply(this, arguments);
            };

            _agentsOccupiedTotalFunction = function _ref14() {
              _agentsOccupiedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee7(userSelection) {
                var query, _result7;

                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT rca_agent_id)\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsOccupiedTotalFunction " + _context7.t0
                        });

                      case 12:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 8]]);
              }));
              return _agentsOccupiedTotalFunction.apply(this, arguments);
            };

            agentsOccupiedTotalFunction = function _ref13(_x20) {
              return _agentsOccupiedTotalFunction.apply(this, arguments);
            };

            _agentsAvailableTotalFunction = function _ref12() {
              _agentsAvailableTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee6(userSelection) {
                var query, _result6;

                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT rca_agent_id)\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsAvailableTotalFunction " + _context6.t0
                        });

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[1, 8]]);
              }));
              return _agentsAvailableTotalFunction.apply(this, arguments);
            };

            agentsAvailableTotalFunction = function _ref11(_x19) {
              return _agentsAvailableTotalFunction.apply(this, arguments);
            };

            _agentsBreakTotalFunction = function _ref10() {
              _agentsBreakTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(userSelection) {
                var query, _result5;

                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT rca_agent_id)\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsBreakTotalFunction " + _context5.t0
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[1, 8]]);
              }));
              return _agentsBreakTotalFunction.apply(this, arguments);
            };

            agentsBreakTotalFunction = function _ref9(_x18) {
              return _agentsBreakTotalFunction.apply(this, arguments);
            };

            _agentsAsignedTotalFunction = function _ref8() {
              _agentsAsignedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee4(userSelection) {
                var query, _result4;

                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT rca_agent_id)\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsAsignedTotalFunction " + _context4.t0
                        });

                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 8]]);
              }));
              return _agentsAsignedTotalFunction.apply(this, arguments);
            };

            agentsAsignedTotalFunction = function _ref7(_x17) {
              return _agentsAsignedTotalFunction.apply(this, arguments);
            };

            _agentsEffectiveTotalFunction = function _ref6() {
              _agentsEffectiveTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(userSelection) {
                var query, _result3;

                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        query = "\n    SELECT\n\t  COUNT(DISTINCT rca_agent_id) as agentsEffectiveTotal\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n      rca_agent_status = 'Logueado'\n    AND\n    (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado' )\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsEffectiveTotalFunction " + _context3.t0
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1, 8]]);
              }));
              return _agentsEffectiveTotalFunction.apply(this, arguments);
            };

            agentsEffectiveTotalFunction = function _ref5(_x16) {
              return _agentsEffectiveTotalFunction.apply(this, arguments);
            };

            _agentsConnectedTotalFunction = function _ref4() {
              _agentsConnectedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(userSelection) {
                var query, _result2;

                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        query = "\n    SELECT\n    COUNT(DISTINCT rca_agent_id) as agentsConnectedTotal\n\n    FROM\n        RealCurrentAgents\n        LEFT OUTER JOIN InvAgent\n        ON rca_agent_id = inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'Logueado'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
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
                          error: "agentsIndicators - agentsConnectedTotalFunction " + _context2.t0
                        });

                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 8]]);
              }));
              return _agentsConnectedTotalFunction.apply(this, arguments);
            };

            agentsConnectedTotalFunction = function _ref3(_x15) {
              return _agentsConnectedTotalFunction.apply(this, arguments);
            };

            _agentsPlannedTotalFunction = function _ref2() {
              _agentsPlannedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(userSelection) {
                var query, _result;

                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        query = "\n      SELECT\n\n          COUNT(hca_agent_id) as agentsRegistredTotal\n          ,COUNT(hca_agent_schedule_plan) as agentsPlannedTotal\n\n      FROM\n          HcaAgent\n      LEFT OUTER JOIN InvAgent as agent\n          ON hca_agent_id = agent.inv_agent_id\n      WHERE\n          hca_agent_date = '".concat(userSelection.start_date, "'\n\n        ");
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
                          error: "agentsIndicators - agentsPlannedTotalFunction " + _context.t0
                        });

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 8]]);
              }));
              return _agentsPlannedTotalFunction.apply(this, arguments);
            };

            agentsPlannedTotalFunction = function _ref(_x14) {
              return _agentsPlannedTotalFunction.apply(this, arguments);
            };

            result = {};
            resume_error = false;

            if (userSelection.mode.name = 'Actual') {
              userSelection.start_date = userSelection.current_date;
              userSelection.end_date = userSelection.end_date;
            }

            _context15.next = 33;
            return agentsPlannedTotalFunction(userSelection);

          case 33:
            agentsPlannedTotal = _context15.sent;
            _context15.next = 36;
            return agentsConnectedTotalFunction(userSelection);

          case 36:
            agentsConnectedTotal = _context15.sent;
            _context15.next = 39;
            return agentsEffectiveTotalFunction(userSelection);

          case 39:
            agentsEffectiveTotal = _context15.sent;
            _context15.next = 42;
            return agentsAsignedTotalFunction(userSelection);

          case 42:
            agentsAsignedTotal = _context15.sent;
            _context15.next = 45;
            return agentsBreakTotalFunction(userSelection);

          case 45:
            agentsBreakTotal = _context15.sent;
            _context15.next = 48;
            return agentsAvailableTotalFunction(userSelection);

          case 48:
            agentsAvailableTotal = _context15.sent;
            _context15.next = 51;
            return agentsOccupiedTotalFunction(userSelection);

          case 51:
            agentsOccupiedTotal = _context15.sent;
            _context15.next = 54;
            return agentsConnectedByGroupFunction(userSelection);

          case 54:
            agentsConnectedByGroup = _context15.sent;
            _context15.next = 57;
            return agentsBreakResumeFunction(userSelection);

          case 57:
            agentsBreakResume = _context15.sent;
            _context15.next = 60;
            return agentsAssignationResumeFunction(userSelection);

          case 60:
            agentsAssignationResume = _context15.sent;
            _context15.next = 63;
            return agentsLoggedTotalFunction(userSelection);

          case 63:
            agentsLoggedTotal = _context15.sent;
            _context15.next = 66;
            return agentHistoricResumeFunction(userSelection);

          case 66:
            agentHistoricResume = _context15.sent;
            _context15.next = 69;
            return agentsHistoricBreakResumeFunction(userSelection);

          case 69:
            agentsHistoricBreakResume = _context15.sent;
            _context15.next = 72;
            return agentsHistoricAssignationResumeFunction(userSelection);

          case 72:
            agentsHistoricAssignationResume = _context15.sent;
            result = {
              agentsPlannedTotal: agentsPlannedTotal,
              agentsConnectedTotal: agentsConnectedTotal,
              agentsEffectiveTotal: agentsEffectiveTotal,
              agentsAsignedTotal: agentsAsignedTotal,
              agentsBreakTotal: agentsBreakTotal,
              agentsAvailableTotal: agentsAvailableTotal,
              agentsOccupiedTotal: agentsOccupiedTotal,
              agentsConnectedByGroup: agentsConnectedByGroup,
              agentsBreakResume: agentsBreakResume,
              agentsAssignationResume: agentsAssignationResume,
              agentsLoggedTotal: agentsLoggedTotal,
              agentHistoricResume: agentHistoricResume,
              agentsHistoricBreakResume: agentsHistoricBreakResume,
              agentsHistoricAssignationResume: agentsHistoricAssignationResume
            };

            if (resume_error) {
              _context15.next = 78;
              break;
            }

            return _context15.abrupt("return", result);

          case 78:
            return _context15.abrupt("return", {
              error: result
            });

          case 79:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _agentsIndicators.apply(this, arguments);
}

function agentsPlannedList(_x2) {
  return _agentsPlannedList.apply(this, arguments);
}

function _agentsPlannedList() {
  _agentsPlannedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            query = "\n  SELECT\n      *\n      FROM\n          HcaAgent\n\n     LEFT OUTER JOIN\n      (\n        SELECT\n          *\n      FROM MainAudit as audit\n          \n      LEFT OUTER JOIN InvAgent as agent\n      ON audit_agent_id = agent.inv_agent_id\n      \n      WHERE\n        audit_date = '".concat(userSelection.start_date, "'\n      AND\n        audit_break_id = 0\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n      GROUP BY audit_agent_id\n      ) as audit\n      \n      ON\n      audit_agent_id = hca_agent_id\n\n\n      WHERE\n          hca_agent_date = '").concat(userSelection.start_date, "'\n      AND\n          hca_agent_schedule_plan = 1\n      AND\n      ").concat(userSelection.filter_hca_agent, "\n  ");
            _context16.prev = 1;
            _context16.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context16.sent;
            return _context16.abrupt("return", result);

          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](1);
            return _context16.abrupt("return", {
              error: "agentsPlannedList " + _context16.t0
            });

          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 8]]);
  }));
  return _agentsPlannedList.apply(this, arguments);
}

function agentsConnectedList(_x3) {
  return _agentsConnectedList.apply(this, arguments);
}

function _agentsConnectedList() {
  _agentsConnectedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            query = "\n    SELECT\n    *\n\n    FROM\n        RealCurrentAgents as realagent\n        LEFT OUTER JOIN InvAgent as agent\n        ON rca_logged_agent_id = agent.inv_agent_id\n\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n      AND\n      rca_agent_status = 'logged'\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
            _context17.prev = 1;
            _context17.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context17.sent;
            return _context17.abrupt("return", result);

          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](1);
            return _context17.abrupt("return", {
              error: "agentsConnectedList " + _context17.t0
            });

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 8]]);
  }));
  return _agentsConnectedList.apply(this, arguments);
}

function agentsEffectiveList(_x4) {
  return _agentsEffectiveList.apply(this, arguments);
}

function _agentsEffectiveList() {
  _agentsEffectiveList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee18(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            query = "\n    SELECT\n\t  *\n    FROM\n        RealCurrentAgents as agents\n        LEFT OUTER JOIN InvAgent as agent\n        ON agents.rca_logged_agent_id = agent.inv_agent_id\n\n    WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    rca_agent_status = 'logged'\n    AND\n    (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado' )\n        AND\n        ").concat(userSelection.filter_inv_agent, "\n    \n    ");
            _context18.prev = 1;
            _context18.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context18.sent;
            return _context18.abrupt("return", result);

          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](1);
            return _context18.abrupt("return", {
              error: "agentsEffectiveList " + _context18.t0
            });

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 8]]);
  }));
  return _agentsEffectiveList.apply(this, arguments);
}

function agentsAsignedList(_x5) {
  return _agentsAsignedList.apply(this, arguments);
}

function _agentsAsignedList() {
  _agentsAsignedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee19(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            query = "\n  SELECT\n  *\n\n  FROM\n      RealCurrentAgents as realagent\n      LEFT OUTER JOIN InvAgent as agent\n      ON rca_logged_agent_id = agent.inv_agent_id\n\n  WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    inv_break_id = ").concat(userSelection.selected_break, "\n    AND\n    rca_agent_status = 'logged'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n  \n  ");
            _context19.prev = 1;
            _context19.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context19.sent;
            return _context19.abrupt("return", result);

          case 8:
            _context19.prev = 8;
            _context19.t0 = _context19["catch"](1);
            return _context19.abrupt("return", {
              error: "agentsAsignedList " + _context19.t0
            });

          case 11:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[1, 8]]);
  }));
  return _agentsAsignedList.apply(this, arguments);
}

function agentsBreakList(_x6) {
  return _agentsBreakList.apply(this, arguments);
}

function _agentsBreakList() {
  _agentsBreakList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee20(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            query = "\n  SELECT\n *\n\n  FROM\n      RealCurrentAgents as realagent\n      LEFT OUTER JOIN InvAgent as agent\n      ON rca_logged_agent_id = agent.inv_agent_id\n\n  WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    inv_break_id = ").concat(userSelection.selected_break, "\n    AND\n    rca_agent_status = 'logged'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n  \n  ");
            _context20.prev = 1;
            _context20.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context20.sent;
            return _context20.abrupt("return", result);

          case 8:
            _context20.prev = 8;
            _context20.t0 = _context20["catch"](1);
            return _context20.abrupt("return", {
              error: "agentsBreakList " + _context20.t0
            });

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 8]]);
  }));
  return _agentsBreakList.apply(this, arguments);
}

function agentsAvailableList(_x7) {
  return _agentsAvailableList.apply(this, arguments);
}

function _agentsAvailableList() {
  _agentsAvailableList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee21(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            query = "\n  SELECT\n  *\n\n  FROM\n      RealCurrentAgents as realagent\n      LEFT OUTER JOIN InvAgent as agent\n      ON rca_logged_agent_id = agent.inv_agent_id\n\n  WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    rca_agent_status = 'logged'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n  \n  ");
            _context21.prev = 1;
            _context21.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context21.sent;
            return _context21.abrupt("return", result);

          case 8:
            _context21.prev = 8;
            _context21.t0 = _context21["catch"](1);
            return _context21.abrupt("return", {
              error: "agentsAvailableList " + _context21.t0
            });

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return _agentsAvailableList.apply(this, arguments);
}

function agentsOccupiedList(_x8) {
  return _agentsOccupiedList.apply(this, arguments);
}

function _agentsOccupiedList() {
  _agentsOccupiedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee22(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            query = "\n  SELECT\n  *\n\n  FROM\n      RealCurrentAgents as realagent\n      LEFT OUTER JOIN InvAgent as agent\n      ON rca_logged_agent_id = agent.inv_agent_id\n\n  WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    rca_agent_status = 'logged'\n      AND\n      ").concat(userSelection.filter_inv_agent, "\n  \n  ");
            _context22.prev = 1;
            _context22.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context22.sent;
            return _context22.abrupt("return", result);

          case 8:
            _context22.prev = 8;
            _context22.t0 = _context22["catch"](1);
            return _context22.abrupt("return", {
              error: "agentsOccupiedList " + _context22.t0
            });

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[1, 8]]);
  }));
  return _agentsOccupiedList.apply(this, arguments);
}

function agentsLoggedList(_x9) {
  return _agentsLoggedList.apply(this, arguments);
}

function _agentsLoggedList() {
  _agentsLoggedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee23(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            query = "\n  SELECT\n  \n  audit_id, audit_agent_id, audit_break_id, datetime_init, datetime_end, audit_duration, ext_parked, __TIME__, audit_duration_sec, audit_status, audit_date_agent_id, audit_date, audit_break_name, audit_break_class, audit_break_productivity, audit_operation_json,\n\n  DATE_FORMAT(min(datetime_init), '%H:%i:%s') as min_datetime_init,\n  DATE_FORMAT(max(datetime_end), '%H:%i:%s') as max_datetime_end,\n\n  hca_agent_id, hca_agent_serial, hca_agent_date, hca_agent_id, hca_agent_name, hca_agent_extension, JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].id\") ) as hca_agent_supervisor_id, JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as hca_agent_supervisor_name, hca_agent_schedule_id, hca_agent_schedule_name, hca_agent_assignation, hca_agent_calendar_id, hca_agent_calendar_name, hca_agent_schedule_day, hca_agent_guard, hca_agent_schedule_plan, hca_agent_start, hca_agent_end, hca_agent_break, hca_agent_schedule_duration,\n\n  inv_agent_id, inv_agent_status, inv_agent_chk, inv_agent_name, inv_agent_shortname, inv_agent_type, inv_agent_extension, inv_agent_legal_id, inv_agent_internal_id, JSON_UNQUOTE(JSON_EXTRACT(inv_agent_people_json, \"$[0].name\") ) as inv_agent_supervisor_name, JSON_UNQUOTE(JSON_EXTRACT(inv_agent_people_json, \"$[0].id\") ) as inv_agent_supervisor_id, inv_agent_schedule_id, inv_agent_schedule_name, inv_agent_password, inv_agent_eccp_password, inv_agent_assignation, inv_agent_calendar_id, inv_agent_calendar_name, inv_agent_calendar_type\n\n  FROM\n      MainAudit as audit\n      LEFT OUTER JOIN HcaAgent as HcaAgent\n      ON audit_agent_id = hca_agent_id\n\n      LEFT OUTER JOIN InvAgent as InvAgent\n      ON audit_agent_id = inv_agent_id\n\n  WHERE\n      audit_date = '".concat(userSelection.start_date, "'\n      AND\n      audit_break_id = 0\n      AND\n      ").concat(userSelection.filter_hca_agent, "\n  \n  GROUP BY audit_agent_id\n  ");
            _context23.prev = 1;
            _context23.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context23.sent;
            return _context23.abrupt("return", result);

          case 8:
            _context23.prev = 8;
            _context23.t0 = _context23["catch"](1);
            return _context23.abrupt("return", {
              error: "agentsLoggedList " + _context23.t0
            });

          case 11:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 8]]);
  }));
  return _agentsLoggedList.apply(this, arguments);
}

function agentsAsignedDetailList(_x10) {
  return _agentsAsignedDetailList.apply(this, arguments);
}

function _agentsAsignedDetailList() {
  _agentsAsignedDetailList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee24(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            query = "\n  SELECT\n      DISTINCT rca_logged_id,\n      inv_agent_name as inv_agent_name,\n      rca_break_name as name,\n      DATE_FORMAT(SEC_TO_TIME( SUM(rca_break_duration) ), '%H:%i:%s') AS duration,\n      DATE_FORMAT(rca_break_datetime_init, '%H:%i:%s') as time_init,\n      rca_break_datetime_init as fulltime_init\n      \n    FROM\n      RealCurrentAgents\n    LEFT OUTER JOIN\n      AuxColor\n        ON rca_group_name = aux_color_use\n    LEFT OUTER JOIN InvAgent as agent\n        ON rca_logged_agent_id = agent.inv_agent_id\n    WHERE\n      rca_date = '".concat(userSelection.start_date, "'\n    AND\n      rca_break_id = '").concat(userSelection.selected_break, "'\n    AND\n      rca_agent_status = 'logged'\n    AND\n      rca_productivity = 1\n    AND\n      rca_break_name is not null\n    AND\n      ").concat(userSelection.filter_inv_agent, "\n      \n      GROUP BY rca_logged_agent_id\n  ");
            _context24.prev = 1;
            _context24.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context24.sent;
            return _context24.abrupt("return", result);

          case 8:
            _context24.prev = 8;
            _context24.t0 = _context24["catch"](1);
            return _context24.abrupt("return", {
              error: "agentsAsignedDetailList " + _context24.t0
            });

          case 11:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[1, 8]]);
  }));
  return _agentsAsignedDetailList.apply(this, arguments);
}

function agentsBreakDetailList(_x11) {
  return _agentsBreakDetailList.apply(this, arguments);
}
/****************************** */


function _agentsBreakDetailList() {
  _agentsBreakDetailList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee25(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            query = "\n  SELECT\n    DISTINCT rca_logged_id,\n    inv_agent_name as inv_agent_name,\n    rca_break_name as name,\n    DATE_FORMAT(SEC_TO_TIME( SUM(  rca_break_duration ) ), '%H:%i:%s') AS duration,\n    DATE_FORMAT(rca_break_datetime_init, '%H:%i:%s') as time_init,\n    rca_break_datetime_init as fulltime_init\n\n  FROM\n    RealCurrentAgents\n    LEFT OUTER JOIN\n    AuxColor\n      ON rca_group_name = aux_color_use\n    LEFT OUTER JOIN InvAgent as agent\n      ON rca_logged_agent_id = agent.inv_agent_id\n    \n  WHERE\n    rca_date = '".concat(userSelection.start_date, "'\n    AND\n    rca_break_id = '").concat(userSelection.selected_break, "'\n    AND\n    rca_agent_status = 'logged'\n    AND\n    rca_productivity = 0\n    AND\n    rca_break_name is not null\n    AND\n      ").concat(userSelection.filter_inv_agent, "\n    \n    GROUP BY rca_logged_agent_id\n");
            _context25.prev = 1;
            _context25.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context25.sent;
            return _context25.abrupt("return", result);

          case 8:
            _context25.prev = 8;
            _context25.t0 = _context25["catch"](1);
            return _context25.abrupt("return", {
              error: "agentsBreakDetailList " + _context25.t0
            });

          case 11:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[1, 8]]);
  }));
  return _agentsBreakDetailList.apply(this, arguments);
}

function agentsAsignedHistoricList(_x12) {
  return _agentsAsignedHistoricList.apply(this, arguments);
}

function _agentsAsignedHistoricList() {
  _agentsAsignedHistoricList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee26(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            query = "\n    SELECT\n       inv_agent_id\n      ,inv_agent_name\n      ,inv_break_name as name\n      ,count(*) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n    FROM\n      MainAudit AS audit\n    LEFT OUTER JOIN\n      InvBreak AS break\n        ON audit_break_id = inv_break_id\n    LEFT OUTER JOIN\n      InvAgent AS agent\n        ON audit_agent_id = inv_agent_id\n    WHERE\n    audit_date = '".concat(userSelection.start_date, "'\n    AND\n    inv_break_id = ").concat(userSelection.selected_break, "\n    AND\n      inv_break_productivity = 1\n    AND\n      inv_break_name is not null\n    AND\n    ").concat(userSelection.filter_inv_agent, "\n      \n    GROUP BY inv_agent_id, inv_break_name\n\n    ORDER BY inv_agent_id, inv_break_name\n  ");
            _context26.prev = 1;
            _context26.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context26.sent;
            return _context26.abrupt("return", result);

          case 8:
            _context26.prev = 8;
            _context26.t0 = _context26["catch"](1);
            return _context26.abrupt("return", {
              error: "agentsAsignedHistoricList " + _context26.t0
            });

          case 11:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[1, 8]]);
  }));
  return _agentsAsignedHistoricList.apply(this, arguments);
}

function agentsBreakHistoricList(_x13) {
  return _agentsBreakHistoricList.apply(this, arguments);
}

function _agentsBreakHistoricList() {
  _agentsBreakHistoricList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee27(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            query = "\n    SELECT\n       inv_agent_id\n      ,inv_agent_name\n      ,inv_break_name as name\n      ,count(*) as value\n      ,SEC_TO_TIME( SUM( audit_duration_sec )) AS duration\n\n    FROM\n      MainAudit AS audit\n    LEFT OUTER JOIN\n      InvBreak AS break\n        ON audit_break_id = inv_break_id\n    LEFT OUTER JOIN\n      InvAgent AS agent\n        ON audit_agent_id = inv_agent_id\n    WHERE\n      audit_date = '".concat(userSelection.start_date, "'\n    AND\n      inv_break_id = ").concat(userSelection.selected_break, "\n    AND\n      inv_break_productivity = 0\n    AND\n      inv_break_name is not null\n    AND\n    ").concat(userSelection.filter_inv_agent, "\n      \n    GROUP BY inv_agent_id, inv_break_name\n\n    ORDER BY inv_agent_id, inv_break_name\n  ");
            _context27.prev = 1;
            _context27.next = 4;
            return pool.destinyReports.query(query);

          case 4:
            result = _context27.sent;
            return _context27.abrupt("return", result);

          case 8:
            _context27.prev = 8;
            _context27.t0 = _context27["catch"](1);
            return _context27.abrupt("return", {
              error: "agentsBreakHistoricList " + _context27.t0
            });

          case 11:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[1, 8]]);
  }));
  return _agentsBreakHistoricList.apply(this, arguments);
}