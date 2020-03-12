"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inboundIndicators = inboundIndicators;
exports.inboundIndicatorsInterval = inboundIndicatorsInterval;
exports.inboundReceivedList = inboundReceivedList;
exports.inboundAttendedList = inboundAttendedList;
exports.inboundAbandonedList = inboundAbandonedList;
exports.inboundShortList = inboundShortList;
exports.inboundBeforeTimeList = inboundBeforeTimeList;
exports.inboundHungAgentList = inboundHungAgentList;
exports.inboundLostCallsList = inboundLostCallsList;
exports.inboundQueueResume = inboundQueueResume;
exports.inboundQueueList = inboundQueueList;
exports.inboundActiveList = inboundActiveList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var LeftOuterJoin = _interopRequireWildcard(require("../../../SqlFunctions/LeftOuterJoin"));

function inboundIndicators(_x) {
  return _inboundIndicators.apply(this, arguments);
} // INDIVIDUAL METHODS


function _inboundIndicators() {
  _inboundIndicators = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16(userSelection) {
    var result, resume_error, inboundReceivedTotalFunction, _inboundReceivedTotalFunction, inboundAttendedTotalFunction, _inboundAttendedTotalFunction, inboundAbandonedTotalFunction, _inboundAbandonedTotalFunction, inboundShortTotalFunction, _inboundShortTotalFunction, inboundBeforeTimeTotalFunction, _inboundBeforeTimeTotalFunction, inboundHungAgentTotalFunction, _inboundHungAgentTotalFunction, inboundLostCallsTotalFunction, _inboundLostCallsTotalFunction, inboundServiceLevelTotalFunction, _inboundServiceLevelTotalFunction, inboundAttentionLevelTotalFunction, _inboundAttentionLevelTotalFunction, inboundAbandonLevelTotalFunction, _inboundAbandonLevelTotalFunction, inboundAsaTotalFunction, _inboundAsaTotalFunction, inboundTmoTotalFunction, _inboundTmoTotalFunction, inboundActiveTotalFunction, _inboundActiveTotalFunction, inboundOnQueTotalFunction, _inboundOnQueTotalFunction, inboundIndicatorsIntervalFunction, _inboundIndicatorsIntervalFunction, inboundReceivedTotal, inboundAttendedTotal, inboundAbandonedTotal, inboundShortTotal, inboundBeforeTimeTotal, inboundHungAgentTotal, inboundLostCallsTotal, inboundServiceLevelTotal, inboundAttentionLevelTotal, inboundAbandonLevelTotal, inboundAsaTotal, inboundTmoTotal, inboundActiveTotal, inboundOnQueTotal, inboundIndicatorsInterval;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _inboundIndicatorsIntervalFunction = function _ref30() {
              _inboundIndicatorsIntervalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee15(userSelection) {
                var result, intervalString, sequence, interval_in_minutes, start_date, query, _result15;

                return _regenerator["default"].wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        // xxx
                        result = {};
                        sequence = 'seq_0_to_23';
                        interval_in_minutes = 60;
                        start_date = userSelection.start_date;
                        query = "\n      SELECT\n        *\n      FROM\n      (\n  \n        -- Secuencia Generada con las horas de un dia\n      SELECT\n          seq as id,\n          '".concat(userSelection.start_date, "' as report_date,\n          (seq * ").concat(interval_in_minutes, ") as day_minutes,\n          date(NOW()) + interval (seq * ").concat(interval_in_minutes, ") Minute as myInterval,\n          DATE_FORMAT(date(NOW()) + interval (seq * ").concat(interval_in_minutes, ") Minute, \"%H:%i\") as graphLabel\n        FROM ").concat(sequence, "\n        -- Nota: la expresion seq_0_to_23 hay que calcularla\n  \n        ) AS MyInterval\n        LEFT OUTER JOIN\n        (\n  \n        -- Secuencia de datos agrupados por dia de un fuiente de datos\n        SELECT\n        callentry_datetime_entry_queue\n        ,TRUNCATE((TIME_TO_SEC(DATE_FORMAT(callentry_datetime_entry_queue, '%H:%i:%s')))/60, 0) AS day_minutes\n        ,TRUNCATE((TIME_TO_SEC(DATE_FORMAT(callentry_datetime_entry_queue, '%H:%i:%s')))/60/").concat(interval_in_minutes, ", 0) AS  interval_id\n        ,COUNT(*) as qty\n        ,CURRENT_TIMESTAMP as ahora\n        ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) as llamadas_recibidas\n        ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) as llamadas_abandonadas\n        ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) as llamadas_atendidas\n        ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) as llamadas_cortas\n        ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) as llamadas_antes_de\n        ,SUM(case when callentry_hung_agent = 1 then 1 else 0 end) as colgado_agente\n        ,AVG(callentry_duration_sec_wait) as tiempo_espera_promedio\n        ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada') then 1 else 0 end)/\n          SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada')then 1 else 0 end) as nivel_servicio\n      \n        ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n          SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) as nivel_atencion\n        ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n          SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) as nivel_abandono\n        ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n          SUM(case when callentry_status = 'terminada' then 1 else 0 end) as asa\n        ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n          SUM(case when callentry_status = 'terminada' then 1 else 0 end) as tmo\n        ,SUM(case when callentry_status = 'activa' then 1 else 0 end) as llamadas_activas\n        ,SUM(case when callentry_status = 'en-cola' then 1 else 0 end) as llamadas_en_cola\n\n      FROM\n        MainCallEntry\n        ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n        ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n\n      WHERE\n        callentry_date BETWEEN '").concat(userSelection.start_date, "' and '").concat(userSelection.start_date, "'\n  \n        AND\n          ").concat(userSelection.filter_inv_agent, "\n        AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n        GROUP BY\n        interval_id\n  \n        ) AS MyData\n  \n        ON MyInterval.id = MyData.interval_id\n      ");
                        _context15.prev = 5;
                        _context15.next = 8;
                        return pool.destinyReports.query(query);

                      case 8:
                        _result15 = _context15.sent;
                        return _context15.abrupt("return", _result15);

                      case 12:
                        _context15.prev = 12;
                        _context15.t0 = _context15["catch"](5);
                        resume_error = true;
                        return _context15.abrupt("return", {
                          error: 'inboundIndicators - inboundIndicatorsIntervalFunction ' + _context15.t0
                        });

                      case 16:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, null, [[5, 12]]);
              }));
              return _inboundIndicatorsIntervalFunction.apply(this, arguments);
            };

            inboundIndicatorsIntervalFunction = function _ref29(_x27) {
              return _inboundIndicatorsIntervalFunction.apply(this, arguments);
            };

            _inboundOnQueTotalFunction = function _ref28() {
              _inboundOnQueTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee14(userSelection) {
                var query, _result14;

                return _regenerator["default"].wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        query = "\n      SELECT\n        TIME_TO_SEC(TIMEDIFF(NOW(), MAX(callentry_datetime_entry_queue))) AS waitTime\n        ,".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealTime\n        ,COUNT(callentry_id) AS inboundOnQueTotal\n\n      FROM\n          MainCallEntry\n          ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      \n      WHERE\n          callentry_status = 'en-cola'\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundOnQueTotalFunction ' + _context14.t0
                        });

                      case 12:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, null, [[1, 8]]);
              }));
              return _inboundOnQueTotalFunction.apply(this, arguments);
            };

            inboundOnQueTotalFunction = function _ref27(_x26) {
              return _inboundOnQueTotalFunction.apply(this, arguments);
            };

            _inboundActiveTotalFunction = function _ref26() {
              _inboundActiveTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee13(userSelection) {
                var query, _result13;

                return _regenerator["default"].wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        query = "\n      SELECT\n      COUNT(callentry_id) AS inboundActiveTotal\n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_status = 'activa'\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundActiveTotalFunction ' + _context13.t0
                        });

                      case 12:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, null, [[1, 8]]);
              }));
              return _inboundActiveTotalFunction.apply(this, arguments);
            };

            inboundActiveTotalFunction = function _ref25(_x25) {
              return _inboundActiveTotalFunction.apply(this, arguments);
            };

            _inboundTmoTotalFunction = function _ref24() {
              _inboundTmoTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee12(userSelection) {
                var query, _result12;

                return _regenerator["default"].wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        query = "\n      SELECT\n\n      SUM(case WHEN callentry_status = 'terminada' then callentry_duration_sec else 0 end) AS inboundDuration\n    ,SEC_TO_TIME(SUM(case WHEN callentry_status = 'terminada' then callentry_duration_sec else 0 end) ) AS inboundDurationhHms\n    ,SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end) AS inboundCalls\n    ,SUM(case WHEN callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n     SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end)\n\t\tAS inboundTmoTotal\n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundTmoTotalFunction ' + _context12.t0
                        });

                      case 12:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[1, 8]]);
              }));
              return _inboundTmoTotalFunction.apply(this, arguments);
            };

            inboundTmoTotalFunction = function _ref23(_x24) {
              return _inboundTmoTotalFunction.apply(this, arguments);
            };

            _inboundAsaTotalFunction = function _ref22() {
              _inboundAsaTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(userSelection) {
                var query, _result11;

                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        query = "\n      SELECT\n\n        SUM(case WHEN callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end) AS waitDuration\n      ,SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end) AS totalAttended\n      ,SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end) AS inboundCalls\n      ,SUM(case WHEN callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n        SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end)\n          AS inboundAsaTotal\n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundAsaTotalFunction ' + _context11.t0
                        });

                      case 12:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[1, 8]]);
              }));
              return _inboundAsaTotalFunction.apply(this, arguments);
            };

            inboundAsaTotalFunction = function _ref21(_x23) {
              return _inboundAsaTotalFunction.apply(this, arguments);
            };

            _inboundAbandonLevelTotalFunction = function _ref20() {
              _inboundAbandonLevelTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee10(userSelection) {
                var query, _result10;

                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        query = "\n      SELECT\n        SUM(case WHEN callentry_status = 'abandonada' then 1 else 0 end)/\n        SUM(case WHEN (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n            AS inboundAbandonLevelTotal\n         \n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n      AND\n          callentry_date =  '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundAbandonLevelTotalFunction ' + _context10.t0
                        });

                      case 12:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[1, 8]]);
              }));
              return _inboundAbandonLevelTotalFunction.apply(this, arguments);
            };

            inboundAbandonLevelTotalFunction = function _ref19(_x22) {
              return _inboundAbandonLevelTotalFunction.apply(this, arguments);
            };

            _inboundAttentionLevelTotalFunction = function _ref18() {
              _inboundAttentionLevelTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(userSelection) {
                var query, _result9;

                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        query = "\n      SELECT\n\n        SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end) AttendedCalls\n        ,SUM(case WHEN (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS totalCalls\n        ,SUM(case WHEN callentry_status = 'terminada' then 1 else 0 end)/\n        SUM(case WHEN (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n                AS inboundAttentionLevelTotal\n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundAttentionLevelTotalFunction' + _context9.t0
                        });

                      case 12:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[1, 8]]);
              }));
              return _inboundAttentionLevelTotalFunction.apply(this, arguments);
            };

            inboundAttentionLevelTotalFunction = function _ref17(_x21) {
              return _inboundAttentionLevelTotalFunction.apply(this, arguments);
            };

            _inboundServiceLevelTotalFunction = function _ref16() {
              _inboundServiceLevelTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee8(userSelection) {
                var query, _result8;

                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        query = "\n      SELECT\n\n      ".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealAttendingTime\n      ,SUM(case WHEN (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS beforeTimeAttendedCalls\n      ,SUM(case WHEN (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end)/\n       SUM(case WHEN callentry_status = 'abandonada' OR callentry_status = 'terminada' then 1 else 0 end) AS inboundServiceLevelTotal\n          \n          FROM\n              MainCallEntry\n              ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n              ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n          WHERE\n              (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n          AND\n              callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundServiceLevelTotalFunction' + _context8.t0
                        });

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[1, 8]]);
              }));
              return _inboundServiceLevelTotalFunction.apply(this, arguments);
            };

            inboundServiceLevelTotalFunction = function _ref15(_x20) {
              return _inboundServiceLevelTotalFunction.apply(this, arguments);
            };

            _inboundLostCallsTotalFunction = function _ref14() {
              _inboundLostCallsTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee7(userSelection) {
                var query, _result7;

                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        query = "\n      SELECT\n      COUNT(cdr_id)  AS inboundLostCallsTotal\n      FROM\n          MainCdr\n      ".concat(LeftOuterJoin.Cdr_InvAgent_ById, "\n      ").concat(LeftOuterJoin.Cdr_InvQueue_ById, "\n      WHERE\n          inv_agent_type = 'SIP'\n      AND\n          cdr_duration_sec <= 0\n      AND\n          cdr_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundLostCallsTotalFunction ' + _context7.t0
                        });

                      case 12:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 8]]);
              }));
              return _inboundLostCallsTotalFunction.apply(this, arguments);
            };

            inboundLostCallsTotalFunction = function _ref13(_x19) {
              return _inboundLostCallsTotalFunction.apply(this, arguments);
            };

            _inboundHungAgentTotalFunction = function _ref12() {
              _inboundHungAgentTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee6(userSelection) {
                var query, _result6;

                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        query = "\n      SELECT\n          COUNT(callentry_id)  AS inboundHungAgentTotal\n      FROM\n            MainCallEntry\n            ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n            ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n        WHERE\n            callentry_hung_agent = 1\n        AND\n            callentry_date = '").concat(userSelection.start_date, "'\n        AND\n            ").concat(userSelection.filter_inv_agent, "\n        AND\n            ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundHungAgentTotalFunction ' + _context6.t0
                        });

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[1, 8]]);
              }));
              return _inboundHungAgentTotalFunction.apply(this, arguments);
            };

            inboundHungAgentTotalFunction = function _ref11(_x18) {
              return _inboundHungAgentTotalFunction.apply(this, arguments);
            };

            _inboundBeforeTimeTotalFunction = function _ref10() {
              _inboundBeforeTimeTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(userSelection) {
                var query, _result5;

                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        query = "\n      SELECT\n\n      \n      ".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealAttendingTime\n      ,COUNT(callentry_id) AS inboundBeforeTimeTotal\n      FROM\n          MainCallEntry\n          ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n      AND\n          callentry_status = 'terminada'\n      AND\n          callentry_date ='").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundBeforeTimeTotalFunction ' + _context5.t0
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[1, 8]]);
              }));
              return _inboundBeforeTimeTotalFunction.apply(this, arguments);
            };

            inboundBeforeTimeTotalFunction = function _ref9(_x17) {
              return _inboundBeforeTimeTotalFunction.apply(this, arguments);
            };

            _inboundShortTotalFunction = function _ref8() {
              _inboundShortTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee4(userSelection) {
                var query, _result4;

                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        query = "\n      SELECT\n      \n      ".concat(process.env.CDR_SHORTCALL_TIME, " AS shortCallTime\n      , COUNT(callentry_id) AS inboundShortTotal\n      \n      FROM\n          MainCallEntry\n          ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, "\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundShortTotalFunction ' + _context4.t0
                        });

                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 8]]);
              }));
              return _inboundShortTotalFunction.apply(this, arguments);
            };

            inboundShortTotalFunction = function _ref7(_x16) {
              return _inboundShortTotalFunction.apply(this, arguments);
            };

            _inboundAbandonedTotalFunction = function _ref6() {
              _inboundAbandonedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(userSelection) {
                var query, _result3;

                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        query = "\n      SELECT\n      \n      COUNT(callentry_id) AS inboundAbandonedTotal\n      \n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_status = 'abandonada'\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundAbandonedTotalFunction ' + _context3.t0
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1, 8]]);
              }));
              return _inboundAbandonedTotalFunction.apply(this, arguments);
            };

            inboundAbandonedTotalFunction = function _ref5(_x15) {
              return _inboundAbandonedTotalFunction.apply(this, arguments);
            };

            _inboundAttendedTotalFunction = function _ref4() {
              _inboundAttendedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(userSelection) {
                var query, _result2;

                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        query = "\n      SELECT\n\n      COUNT(callentry_id) AS inboundAttendedTotal\n      \n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_status = 'terminada'\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundAttendedTotalFunction ' + _context2.t0
                        });

                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 8]]);
              }));
              return _inboundAttendedTotalFunction.apply(this, arguments);
            };

            inboundAttendedTotalFunction = function _ref3(_x14) {
              return _inboundAttendedTotalFunction.apply(this, arguments);
            };

            _inboundReceivedTotalFunction = function _ref2() {
              _inboundReceivedTotalFunction = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(userSelection) {
                var query, _result;

                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        query = "\n    SELECT\n\n      COUNT(callentry_id) AS inboundReceivedTotal\n      \n      FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
                          error: 'inboundIndicators - inboundReceivedTotalFunction ' + _context.t0
                        });

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 8]]);
              }));
              return _inboundReceivedTotalFunction.apply(this, arguments);
            };

            inboundReceivedTotalFunction = function _ref(_x13) {
              return _inboundReceivedTotalFunction.apply(this, arguments);
            };

            result = {};
            resume_error = false;
            _context16.next = 34;
            return inboundReceivedTotalFunction(userSelection);

          case 34:
            inboundReceivedTotal = _context16.sent;
            _context16.next = 37;
            return inboundAttendedTotalFunction(userSelection);

          case 37:
            inboundAttendedTotal = _context16.sent;
            _context16.next = 40;
            return inboundAbandonedTotalFunction(userSelection);

          case 40:
            inboundAbandonedTotal = _context16.sent;
            _context16.next = 43;
            return inboundShortTotalFunction(userSelection);

          case 43:
            inboundShortTotal = _context16.sent;
            _context16.next = 46;
            return inboundBeforeTimeTotalFunction(userSelection);

          case 46:
            inboundBeforeTimeTotal = _context16.sent;
            _context16.next = 49;
            return inboundHungAgentTotalFunction(userSelection);

          case 49:
            inboundHungAgentTotal = _context16.sent;
            _context16.next = 52;
            return inboundLostCallsTotalFunction(userSelection);

          case 52:
            inboundLostCallsTotal = _context16.sent;
            _context16.next = 55;
            return inboundServiceLevelTotalFunction(userSelection);

          case 55:
            inboundServiceLevelTotal = _context16.sent;
            _context16.next = 58;
            return inboundAttentionLevelTotalFunction(userSelection);

          case 58:
            inboundAttentionLevelTotal = _context16.sent;
            _context16.next = 61;
            return inboundAbandonLevelTotalFunction(userSelection);

          case 61:
            inboundAbandonLevelTotal = _context16.sent;
            _context16.next = 64;
            return inboundAsaTotalFunction(userSelection);

          case 64:
            inboundAsaTotal = _context16.sent;
            _context16.next = 67;
            return inboundTmoTotalFunction(userSelection);

          case 67:
            inboundTmoTotal = _context16.sent;
            _context16.next = 70;
            return inboundActiveTotalFunction(userSelection);

          case 70:
            inboundActiveTotal = _context16.sent;
            _context16.next = 73;
            return inboundOnQueTotalFunction(userSelection);

          case 73:
            inboundOnQueTotal = _context16.sent;
            _context16.next = 76;
            return inboundIndicatorsIntervalFunction(userSelection);

          case 76:
            inboundIndicatorsInterval = _context16.sent;
            result = {
              inboundReceivedTotal: inboundReceivedTotal,
              inboundAttendedTotal: inboundAttendedTotal,
              inboundAbandonedTotal: inboundAbandonedTotal,
              inboundShortTotal: inboundShortTotal,
              inboundBeforeTimeTotal: inboundBeforeTimeTotal,
              inboundHungAgentTotal: inboundHungAgentTotal,
              inboundLostCallsTotal: inboundLostCallsTotal,
              inboundServiceLevelTotal: inboundServiceLevelTotal,
              inboundAttentionLevelTotal: inboundAttentionLevelTotal,
              inboundAbandonLevelTotal: inboundAbandonLevelTotal,
              inboundAsaTotal: inboundAsaTotal,
              inboundTmoTotal: inboundTmoTotal,
              inboundActiveTotal: inboundActiveTotal,
              inboundOnQueTotal: inboundOnQueTotal,
              inboundIndicatorsInterval: inboundIndicatorsInterval
            };

            if (resume_error) {
              _context16.next = 82;
              break;
            }

            return _context16.abrupt("return", result);

          case 82:
            return _context16.abrupt("return", {
              'error': result
            });

          case 83:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _inboundIndicators.apply(this, arguments);
}

function inboundIndicatorsInterval(_x2) {
  return _inboundIndicatorsInterval.apply(this, arguments);
}

function _inboundIndicatorsInterval() {
  _inboundIndicatorsInterval = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(userSelection) {
    var result, intervalString, sequence, interval_in_minutes, query, _result16;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            // xxx
            result = {};
            sequence = 'seq_0_to_23';
            interval_in_minutes = 60;
            query = "\n    SELECT\n      *\n    FROM\n    (\n\n      -- Secuencia Generada con las horas de un dia\n    SELECT\n        seq as id,\n        (seq * ".concat(interval_in_minutes, ") as day_minutes,\n        date(NOW()) + interval (seq * ").concat(interval_in_minutes, ") Minute as myInterval,\n        DATE_FORMAT(date(NOW()) + interval (seq * ").concat(interval_in_minutes, ") Minute, \"%H:%i\") as graphLabel\n      FROM ").concat(sequence, "\n      -- Nota: la expresion seq_0_to_23 hay que calcularla\n\n      ) AS MyInterval\n      LEFT OUTER JOIN\n      (\n\n      -- Secuencia de datos agrupados por dia de un fuiente de datos\n      SELECT\n        datetime_entry_queue\n        ,TRUNCATE((TIME_TO_SEC(DATE_FORMAT(datetime_entry_queue, '%H:%i:%s')))/60, 0) AS day_minutes\n        ,TRUNCATE((TIME_TO_SEC(DATE_FORMAT(datetime_entry_queue, '%H:%i:%s')))/60/").concat(interval_in_minutes, ", 0) AS  interval_id\n        ,COUNT(*) as qty\n        ,CURRENT_TIMESTAMP as ahora\n        ,SUM(case when (status = 'abandonada' OR status = 'terminada' )then 1 else 0 end) as llamadas_recibidas\n        ,SUM(case when status = 'abandonada' then 1 else 0 end) as llamadas_abandonadas\n        ,SUM(case when status = 'terminada' then 1 else 0 end) as llamadas_atendidas\n        ,SUM(case when duration <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) as llamadas_cortas\n        ,SUM(case when (duration_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND status = 'terminada')then 1 else 0 end) as llamadas_antes_de\n        ,null as colgado_agente\n        ,AVG(duration_wait) as tiempo_espera_promedio\n        ,SUM(case when (duration_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND status = 'terminada') then 1 else 0 end)/\n          SUM(case when (status = 'abandonada' OR status = 'terminada')then 1 else 0 end) as nivel_servicio\n      \n        ,SUM(case when status = 'terminada' then 1 else 0 end)/\n          SUM(case when (status = 'abandonada' OR status = 'terminada' )then 1 else 0 end) as nivel_atencion\n        ,SUM(case when status = 'abandonada' then 1 else 0 end)/\n          SUM(case when (status = 'abandonada' OR status = 'terminada' )then 1 else 0 end) as nivel_abandono\n        ,SUM(case when status = 'terminada' then duration_wait else 0 end)/\n          SUM(case when status = 'terminada' then 1 else 0 end) as asa\n        ,SUM(case when status = 'terminada' then duration else 0 end)/\n          SUM(case when status = 'terminada' then 1 else 0 end) as tmo\n        ,SUM(case when status = 'activa' then 1 else 0 end) as llamadas_activas\n        ,SUM(case when status = 'en-cola' then 1 else 0 end) as llamadas_en_cola\n\n      FROM MainCall\n\n      LEFT OUTER JOIN InvQueue\n      ON MainCall.id_queue_call_entry = InvQueue.inv_queue_id\n      \n      LEFT OUTER JOIN  InvAgent\n      ON MainCall.id_agent = InvAgent.inv_agent_id\n\n      WHERE\n        call_entry_date BETWEEN '").concat(userSelection.start_date, "' and '").concat(userSelection.start_date, "'\n\n      AND\n        ").concat(userSelection.filter_inv_agent, "\n      AND\n        ").concat(userSelection.filter_inv_queue, "\n\n      GROUP BY\n      interval_id\n\n      ) AS MyData\n\n      ON MyInterval.id = MyData.interval_id\n    ");
            _context17.prev = 4;
            _context17.next = 7;
            return pool.destinyReports.query(query);

          case 7:
            _result16 = _context17.sent;
            return _context17.abrupt("return", _result16);

          case 11:
            _context17.prev = 11;
            _context17.t0 = _context17["catch"](4);
            return _context17.abrupt("return", {
              'error': 'inboundIndicatorsInterval ' + _context17.t0
            });

          case 14:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[4, 11]]);
  }));
  return _inboundIndicatorsInterval.apply(this, arguments);
}

function inboundReceivedList(_x3) {
  return _inboundReceivedList.apply(this, arguments);
}

function _inboundReceivedList() {
  _inboundReceivedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee18(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            /* PENDING FIELDS
              callentry_id, callentry_agent_id, callentry_queue_id, callentry_contact_id, callentry_datetime_init, callentry_datetime_end, callentry_duration_sec, callentry_status, callentry_transfer, callentry_datetime_entry_queue, callentry_duration_sec_wait, callentry_uniqueid, callentry_campaign_id, callentry_trunk, callentry_date, callentry_queue_time_expired, callentry_type, callentry_auto_campaign, callentry_queue_number, __QUEUELOG__, callentry_who_hung, callentry_hung_agent, callentry_hung_caller,
            */
            query = "\n    SELECT\n\n    callentry_callerid,\n    callentry_duration_sec_wait,\n    callentry_status,\n    SEC_TO_TIME(callentry_duration_sec) AS callentry_duration,\n    \n    inv_agent_name,\n    inv_queue_number\n  \n    FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n    AND\n        callentry_date ='").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              'error': 'inboundReceivedList ' + _context18.t0
            });

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 8]]);
  }));
  return _inboundReceivedList.apply(this, arguments);
}

function inboundAttendedList(_x4) {
  return _inboundAttendedList.apply(this, arguments);
}

function _inboundAttendedList() {
  _inboundAttendedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee19(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            query = "\n    SELECT\n    \n    callentry_callerid,\n    callentry_duration_sec_wait,\n    callentry_status,\n    SEC_TO_TIME(callentry_duration_sec) AS callentry_duration,\n    \n    inv_agent_name,\n    inv_queue_number\n\n    FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        (callentry_status = 'terminada')\n    AND\n        callentry_date ='").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundAttendedList ' + _context19.t0
            });

          case 11:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[1, 8]]);
  }));
  return _inboundAttendedList.apply(this, arguments);
}

function inboundAbandonedList(_x5) {
  return _inboundAbandonedList.apply(this, arguments);
}

function _inboundAbandonedList() {
  _inboundAbandonedList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee20(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            query = "\n    SELECT\n    \n    callentry_callerid as callerid\n    ,callentry_datetime_entry_queue as datetime_entry_queue\n    ,callentry_duration_sec_wait as duration_wait\n    ,callentry_status as status\n    ,inv_queue_number\n    ,inv_queue_name\n\n    FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        (callentry_status = 'abandonada')\n    AND\n        callentry_date = '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundAbandonedList ' + _context20.t0
            });

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 8]]);
  }));
  return _inboundAbandonedList.apply(this, arguments);
}

function inboundShortList(_x6) {
  return _inboundShortList.apply(this, arguments);
}

function _inboundShortList() {
  _inboundShortList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee21(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            query = "\n    SELECT\n\n    callentry_callerid as callerid\n    ,inv_agent_name\n    ,callentry_duration_sec_wait as duration_wait\n    ,callentry_duration_sec as duration\n    ,callentry_status as status\n    ,inv_queue_number\n\n    FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        (callentry_status = 'terminada')\n    AND\n        callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, "\n    AND\n        callentry_date =  '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundShortList' + _context21.t0
            });

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return _inboundShortList.apply(this, arguments);
}

function inboundBeforeTimeList(_x7) {
  return _inboundBeforeTimeList.apply(this, arguments);
}

function _inboundBeforeTimeList() {
  _inboundBeforeTimeList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee22(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            query = "\n    SELECT\n\n    callentry_callerid as callerid\n    ,inv_agent_name\n    ,callentry_duration_sec_wait as duration_wait\n    ,callentry_duration_sec as duration\n    ,callentry_status as status\n    ,inv_queue_number\n\n    FROM\n          MainCallEntry\n          ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n    AND\n        callentry_status = 'terminada'\n    AND\n        callentry_date ='").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundBeforeTimeList ' + _context22.t0
            });

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[1, 8]]);
  }));
  return _inboundBeforeTimeList.apply(this, arguments);
}

function inboundHungAgentList(_x8) {
  return _inboundHungAgentList.apply(this, arguments);
}

function _inboundHungAgentList() {
  _inboundHungAgentList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee23(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            query = "\n    SELECT\n\n    callentry_callerid as callerid\n    ,inv_agent_name\n    ,callentry_duration_sec as duration\n    ,inv_queue_number\n    ,inv_queue_name\n\n    FROM\n\t  MainCallEntry\n    ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n    ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        callentry_hung_agent = 1\n    AND\n        callentry_date = '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundHungAgentList ' + _context23.t0
            });

          case 11:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 8]]);
  }));
  return _inboundHungAgentList.apply(this, arguments);
}

function inboundLostCallsList(_x9) {
  return _inboundLostCallsList.apply(this, arguments);
}

function _inboundLostCallsList() {
  _inboundLostCallsList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee24(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            query = "\n    SELECT\n\n    cdr_id\n\n    FROM\n        MainCdr\n    ".concat(LeftOuterJoin.Cdr_InvAgent_ById, "\n    ").concat(LeftOuterJoin.Cdr_InvQueue_ById, "\n    WHERE\n        inv_agent_type = 'SIP'\n    AND\n        cdr_duration_sec <= 0\n    AND\n        cdr_date = '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundLostCallsList ' + _context24.t0
            });

          case 11:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[1, 8]]);
  }));
  return _inboundLostCallsList.apply(this, arguments);
}

function inboundQueueResume(_x10) {
  return _inboundQueueResume.apply(this, arguments);
}

function _inboundQueueResume() {
  _inboundQueueResume = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee25(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            query = "\n    SELECT\n\n    callentry_queue_id\n    AS queue_id\n\n   ,inv_queue_number\n    as queue_number\n    \n   ,inv_queue_name\n    as queue_name\n\n   ,'".concat(userSelection.start_date, "'\n    AS start_date_requested\n\n   ,CURRENT_TIMESTAMP\n    AS now\n   ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n    AS inboundReceivedTotal\n\n   ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)\n    AS inboundAbandonedTotal\n\n   ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n    AS inboundAttendedTotal\n   \n\n   ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end)\n    AS inboundShortTotal\n\n   ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end)\n    AS inboundBeforeTimeTotal\n\n   ,SUM(case when callentry_hung_agent = 1 then 1 else 0 end)\n    AS inboundHungAgentTotal\n\n   ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end)/ SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' ) then 1 else 0 end) AS inboundServiceLevelTotal\n\n\n   ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n   AS inboundAttentionLevelTotal\n   \n   ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end)\n   AS inboundAbandonLevelTotal\n   \n   ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n   AS inboundAsaTotal\n   \n   ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end)\n   AS inboundTmoTotal\n   \n\nFROM\n     MainCallEntry\n     ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n     ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n\nWHERE\n   DATE_FORMAT(callentry_datetime_entry_queue, '%Y-%m-%d') = '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n    \n    GROUP BY callentry_queue_id\n        ");
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
              error: 'inboundQueueResume ' + _context25.t0
            });

          case 11:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[1, 8]]);
  }));
  return _inboundQueueResume.apply(this, arguments);
}

function inboundQueueList(_x11) {
  return _inboundQueueList.apply(this, arguments);
}

function _inboundQueueList() {
  _inboundQueueList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee26(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            query = "\n      SELECT\n      (TIMEDIFF(NOW(), (callentry_datetime_entry_queue))) AS waitTime\n      ,callentry_callerid\n      ,callentry_status\n      ,callentry_queue_id\n      inv_queue_number\n      ,inv_queue_name\n\n      ,callentry_datetime_entry_queue as entryTime\n      ,".concat(process.env.CDR_SERVICE_IDEAL_TIME, " as idealTime\n\n      ,IF((TIMEDIFF(NOW(), (callentry_datetime_entry_queue))) >= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " , 'red',\n         \n        IF((TIMEDIFF(NOW(), (callentry_datetime_entry_queue))) >= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " / 2 , 'yellow', 'green'\n         \n         )) as color\n      \n    \n\n      FROM\n          MainCallEntry\n          ").concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n          ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n      WHERE\n          callentry_status = 'en-cola'\n      AND\n          callentry_date = '").concat(userSelection.start_date, "'\n      AND\n          ").concat(userSelection.filter_inv_agent, "\n      AND\n          ").concat(userSelection.filter_inv_queue, "\n  \n          ");
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
              error: 'inboundQueueList ' + _context26.t0
            });

          case 11:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[1, 8]]);
  }));
  return _inboundQueueList.apply(this, arguments);
}

function inboundActiveList(_x12) {
  return _inboundActiveList.apply(this, arguments);
}

function _inboundActiveList() {
  _inboundActiveList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee27(userSelection) {
    var query, result;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            query = "\n    SELECT\n\n    callentry_callerid as callerid\n    ,inv_agent_name\n    ,callentry_duration_sec_wait as duration_wait\n    ,callentry_status as status\n    ,inv_queue_number\n    ,inv_queue_name\n\n    FROM\n        MainCallEntry\n        ".concat(LeftOuterJoin.CallEntry_InvAgent_ById, "\n        ").concat(LeftOuterJoin.CallEntry_InvQueue_ById, "\n    WHERE\n        callentry_status = 'activa'\n    AND\n        callentry_date = '").concat(userSelection.start_date, "'\n    AND\n        ").concat(userSelection.filter_inv_agent, "\n    AND\n        ").concat(userSelection.filter_inv_queue, "\n\n        ");
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
              error: 'inboundActiveList ' + _context27.t0
            });

          case 11:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[1, 8]]);
  }));
  return _inboundActiveList.apply(this, arguments);
}