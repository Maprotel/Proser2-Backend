"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callsInboundDailyReport = callsInboundDailyReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function callsInboundDailyReport(_x) {
  return _callsInboundDailyReport.apply(this, arguments);
}

function _callsInboundDailyReport() {
  _callsInboundDailyReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {
              detail: [],
              total: []
            };
            queryDetail = "\n\n  -- ---------------------------------------------------------------\n-- FIELDS\nSELECT\n\n-- TIME & INTERVAL\nnow() as now\n  \n  ,callentry_date AS fecha_desde\n\n  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS hora_inicio\n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS hora_final\n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS llamadas_recibidas\n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS llamadas_abandonadas\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS llamadas_atendidas\n  ,SUM(case when callentry_duration_sec <= ".concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS llamadas_cortas\n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS llamadas_antes_de_20\n  ,SUM(callentry_hung_agent) AS llamadas_colgadas\n  ,SUM(case when callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_servicios\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_atencion\n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_abandono\n  ,SUM(callentry_duration_sec) AS segundos_operacion\n  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS tiempo_operacion\n  ,SUM(callentry_duration_sec_wait) AS segundos_espera\n  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) as tiempo_espera\n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) as tmo\n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) as asa\n\n  -- ---------------------------------------------------------------\n-- TABLES & JOINS\n\nFROM\n\nMainCallEntry\nLEFT OUTER JOIN InvAgent\nON callentry_agent_id = inv_agent_id\n\nLEFT OUTER JOIN HcaAgent\nON callentry_agent_id = hca_agent_id\nAND callentry_date = hca_agent_date\n\nLEFT OUTER JOIN InvQueue\nON callentry_queue_id = inv_queue_id\n\nLEFT OUTER JOIN HcaQueue\nON callentry_agent_id = hca_queue_id\nAND callentry_date = hca_queue_date\n\nLEFT OUTER JOIN MainAudit\nON callentry_agent_id = audit_agent_id\nAND callentry_date = audit_date\n\n-- ---------------------------------------------------------------\n-- CONDITIONS\nWHERE 1\n\n-- TIME AND DATE\n").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_init"), "\n\n-- AGENT\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n-- SUPERVISOR\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n-- SCHEDULE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n-- ROLE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n-- CLIENT\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_client_json"), "\n\n-- QUEUE\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n\n-- SERVICE\n").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_service_json"), "\n\n-- CAMPAIGN\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n\n-- BREAK\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n-- ASIGNACION\n").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n-- PLANNED CLIENT\n\n\n-- PLANNED QUEUE\n\n\n-- PLANNED SERVICE\n\n\n-- PLANNED CAMPAIGN\n\nGROUP BY\n    callentry_date\n\n\n-- ---------------------------------------------------------------\n-- END\n");
            _context.prev = 2;
            _context.next = 5;
            return pool.destinyReports.query(queryDetail);

          case 5:
            result.detail = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            result.detail = {
              errorDetail: _context.t0
            };

          case 11:
            queryTotal = "\n    SELECT\n         ".concat(process.env.CDR_SERVICE_IDEAL_TIME, " AS idealTime\n        ,SUM(llamadas_recibidas) as llamadas_recibidas_total\n        ,SUM(llamadas_abandonadas) as llamadas_abandonadas_total\n        ,SUM(llamadas_atendidas) as llamadas_atendidas_total\n        ,SUM(llamadas_cortas) as llamadas_cortas_total\n        ,SUM(llamadas_antes_de_20) as llamadas_antes_de_20_total\n        ,SUM(llamadas_colgadas) as llamadas_colgadas_total\n        ,AVG(nivel_servicios) as nivel_servicios_total\n        ,AVG(nivel_atencion) as nivel_atencion_total\n        ,AVG(nivel_abandono) as nivel_abandono_total\n        ,SUM(segundos_operacion) as segundos_operacion_total\n        ,SEC_TO_TIME(SUM(segundos_operacion)) as tiempo_operacion_total\n        ,SUM(segundos_espera) as segundos_espera_total\n        ,SEC_TO_TIME(SUM(segundos_espera)) as tiempo_espera_total\n        ,AVG(tmo) as tmo_total\n        ,AVG(asa) as asa_total\n    FROM\n        (\n          SELECT\n  callentry_date AS fecha_desde\n\n  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS hora_inicio\n  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS hora_final\n  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS llamadas_recibidas\n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS llamadas_abandonadas\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS llamadas_atendidas\n  ,SUM(case when callentry_duration_sec <= ").concat(process.env.CDR_SHORTCALL_TIME, " then 1 else 0 end) AS llamadas_cortas\n  ,SUM(case when (callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " AND callentry_status = 'terminada')then 1 else 0 end) AS llamadas_antes_de_20\n  ,SUM(callentry_hung_agent) AS llamadas_colgadas\n  ,SUM(case when callentry_duration_sec_wait <= ").concat(process.env.CDR_SERVICE_IDEAL_TIME, " then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_servicios\n  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_atencion\n  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/\n   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS nivel_abandono\n  ,SUM(callentry_duration_sec) AS segundos_operacion\n  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS tiempo_operacion\n  ,SUM(callentry_duration_sec_wait) AS segundos_espera\n  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) as tiempo_espera\n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) as tmo\n  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/\n   SUM(case when callentry_status = 'terminada' then 1 else 0 end) as asa\n\n   FROM\n\n   MainCallEntry\n   LEFT OUTER JOIN InvAgent\n   ON callentry_agent_id = inv_agent_id\n   \n   LEFT OUTER JOIN HcaAgent\n   ON callentry_agent_id = hca_agent_id\n   AND callentry_date = hca_agent_date\n   \n   LEFT OUTER JOIN InvQueue\n   ON callentry_queue_id = inv_queue_id\n   \n   LEFT OUTER JOIN HcaQueue\n   ON callentry_agent_id = hca_queue_id\n   AND callentry_date = hca_queue_date\n   \n   LEFT OUTER JOIN MainAudit\n   ON callentry_agent_id = audit_agent_id\n   AND callentry_date = audit_date\n   \n   -- ---------------------------------------------------------------\n   -- CONDITIONS\n   WHERE 1\n   \n   -- TIME AND DATE\n   ").concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "callentry_datetime_init"), "\n   \n   -- AGENT\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n   \n   -- SUPERVISOR\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n   \n   -- SCHEDULE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n   \n   -- ROLE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n   \n   -- CLIENT\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_queue_client_json"), "\n   \n   -- QUEUE\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.queue, "callentry_queue_id"), "\n   \n   -- SERVICE\n   ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "hca_queue_service_json"), "\n   \n   -- CAMPAIGN\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.campaign, "callentry_campaign_id"), "\n   \n   -- BREAK\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n   \n   -- ASIGNACION\n   ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n   \n   -- PLANNED CLIENT\n   \n   \n   -- PLANNED QUEUE\n   \n   \n   -- PLANNED SERVICE\n   \n   \n   -- PLANNED CAMPAIGN\n        \n\n    GROUP BY\n    callentry_date\n        ) as daily\n    \n    ");
            _context.prev = 12;
            _context.next = 15;
            return pool.destinyReports.query(queryTotal);

          case 15:
            result.total = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](12);
            result.total = {
              errorTotal: _context.t1
            };

          case 21:
            return _context.abrupt("return", result);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8], [12, 18]]);
  }));
  return _callsInboundDailyReport.apply(this, arguments);
}