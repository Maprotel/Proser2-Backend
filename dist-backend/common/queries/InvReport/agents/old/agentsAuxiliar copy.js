"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentsAuxiliarReport = agentsAuxiliarReport;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _sqlFunctions = require("../../../functions/sqlFunctions");

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

/******************************************************************** */
function agentsAuxiliarReport(_x) {
  return _agentsAuxiliarReport.apply(this, arguments);
} // async function agentsAuxiliarReportDetail(userSelection){
//   let result = {
//     detail: [],
//     modal: []
//   };
//   let queryDetail = `
//   SELECT
//   id_agent as id_inv_agentes
//   ,hca_agent_name as nombre_agentes
//   ,inv_agent_legal_id as doc_indent_agentes
//   ,inv_agent_internal_id as doc_complemtario_agentes
//   ,hca_agent_extension as numero_agentes
//   ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, "$[0].name") ) as hca_agent_supervisor_name as nombre_supervisor
//   ,hca_agent_schedule_name as agent_schedule_name
//   ,audit_break_name as nombre_auxiliares
//   ,COUNT(id_break) as ocasiones
//   ,MIN(audit_date) as min_date
//   ,MAX(audit_date) as max_date
//   ,MIN(DATE_FORMAT(datetime_init, '%H:%i:%s')) as hora_inicio
//   ,MAX(DATE_FORMAT(datetime_end_full, '%H:%i:%s')) as hora_final
//   ,SEC_TO_TIME(SUM(TIME_TO_SEC(duration_full))) as duracion_total
// FROM
//   (
//     SELECT
//       audit_id
//       , id_agent
//       , id_break
//       , datetime_init
//       , IF(datetime_end is not null, datetime_end, now() ) as datetime_end_full
//       , IF(duration IS not NULL, duration,
//         SEC_TO_TIME(TIMESTAMPDIFF(second,datetime_init,now()))
//       ) as duration_full
//       , ext_parked
//       , __TIME__
//       , audit_duration_sec
//       , audit_status
//       , audit_date_agent_id
//       , audit_date
//       , audit_break_name
//       , audit_break_class
//       , audit_break_productivity
//       from MainAudit
//       where
//       audit_break_productivity = 0
//   ) as MainAudit_full
//   LEFT OUTER JOIN HcaAgent
//   ON audit_date = hca_agent_date
//   AND id_agent = hca_agent_id
//   LEFT OUTER JOIN InvAgent
//   ON id_agent = inv_agent_id
//     WHERE
//       (audit_date BETWEEN '${userSelection.start_date}' AND '${userSelection.end_date}')
//       AND
//       id_break <> 0
//       AND
//       ${userSelection.agent}
// 	GROUP BY
// 		id_agent
//     `;
//   try {
//     result.detail = await pool.destinyReports.query(queryDetail);
//   } catch (error) {
//     result.detail = { errorDetail: error };
//   }
//   let queryModal = `
//   SELECT
//       DISTINCT(audit_id)
//       ,id_agent as agent_id
//       ,inv_agent_name as agent_name
//       ,inv_agent_legal_id as agent_legal_id
//       ,inv_agent_internal_id as agent_internal_id
//       ,hca_agent_extension as agent_extension
//       ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, "$[0].name") ) as hca_agent_supervisor_name as agent_supervisor_name
//       ,hca_agent_schedule_name as agent_schedule_name
//       ,audit_break_name as break_name
//       ,audit_date as date
//       ,DATE_FORMAT(datetime_init, '%H:%i:%s') as start_time
//       ,DATE_FORMAT(datetime_end_full, '%H:%i:%s') as end_time
//       ,TIME_TO_SEC(duration_full) as connection_time
//       ,duration_full as connection_time_secs
// FROM
//   (
//     SELECT
//       audit_id
//       , id_agent
//       , id_break
//       , datetime_init
//       , IF(datetime_end is not null, datetime_end, now() ) as datetime_end_full
//       , IF(duration IS not NULL, duration,
//         SEC_TO_TIME(TIMESTAMPDIFF(second,datetime_init,now()))
//       ) as duration_full
//       , audit_duration_sec
//       , audit_status
//       , audit_date_agent_id
//       , audit_date
//       , audit_break_name
//       , audit_break_class
//       , audit_break_productivity
//       from MainAudit
//       where
//       audit_break_productivity = 0
//   ) as MainAudit_full
//   LEFT OUTER JOIN HcaAgent
//   ON audit_date = hca_agent_date
//   AND id_agent = hca_agent_id
//   LEFT OUTER JOIN InvAgent
//   ON id_agent = inv_agent_id
//     WHERE
//       (audit_date BETWEEN '${userSelection.start_date}' AND '${userSelection.end_date}')
//       AND
//       id_break <> 0
//       AND
//       ${userSelection.agent}
//     `;
//   try {
//     result.modal = await pool.destinyReports.query(queryModal);
//   } catch (error) {
//     result.modal = { errorModal: error };
//   }
//   return result;
// }


function _agentsAuxiliarReport() {
  _agentsAuxiliarReport = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, queryDetail, queryTotal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // if (userSelection.agent) {
            //   return agentsAuxiliarReportDetail(userSelection);
            // } else {
            result = {
              detail: [],
              total: []
            };
            queryDetail = "\n  SELECT\n      \n       audit_agent_id as agent_id\n      ,COUNT(audit_id) as times_registered\n      ,inv_break_name as break_name\n      ,inv_agent_name as agent_name\n      ,inv_agent_legal_id as agent_legal_id\n      ,inv_agent_internal_id as agent_internal_id\n      ,hca_agent_extension as agent_extension\n      ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as hca_agent_supervisor_name as agent_supervisor_name\n      ,hca_agent_schedule_name as agent_schedule_name\n      ,DATE(audit_datetime_init) as min_date\n      ,DATE(IF(audit_datetime_end is null, now(), audit_datetime_end)) as max_date\n      ,TIME(audit_datetime_init) as start_time\n      ,TIME(IF(audit_datetime_end is null, now(), audit_datetime_end)) as end_time\n      ,SEC_TO_TIME(IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now()))) as connection_time\n      ,IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now())) as connection_time_secs\n      \n      -- ---------------------------------------------------------------\n-- TABLES & JOINS\n\n        FROM\n\n        MainAudit\n        LEFT OUTER JOIN InvAgent\n        ON audit_agent_id = inv_agent_id\n\n        LEFT OUTER JOIN InvBreak\n        ON audit_break_id = inv_break_id\n\n        LEFT OUTER JOIN HcaAgent\n        ON audit_agent_id = hca_agent_id\n        AND audit_date = hca_agent_date\n\n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n        AND\n        audit_break_id is not null\n        AND\n        inv_break_productivity = 0\n\n        -- TIME AND DATE\n        ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n        -- BREAK\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n        -- ASIGNACION\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n        -- PLANNED CLIENT\n\n\n        -- PLANNED QUEUE\n\n\n        -- PLANNED SERVICE\n\n\n        -- PLANNED CAMPAIGN\n      \n\tGROUP BY\n  audit_agent_id\n\n    ");
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
            queryTotal = "\n    SELECT\n\t    SEC_TO_TIME(SUM(TIME_TO_SEC(connection_time_secs))) as total\n    \n      FROM\n    (\n      SELECT\n      \n       audit_agent_id as agent_id\n      ,COUNT(audit_id) as times_registered\n      ,inv_break_name as break_name\n      ,inv_agent_name as agent_name\n      ,inv_agent_legal_id as agent_legal_id\n      ,inv_agent_internal_id as agent_internal_id\n      ,hca_agent_extension as agent_extension\n      ,JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, \"$[0].name\") ) as hca_agent_supervisor_name as agent_supervisor_name\n      ,hca_agent_schedule_name as agent_schedule_name\n      ,DATE(audit_datetime_init) as min_date\n      ,DATE(IF(audit_datetime_end is null, now(), audit_datetime_end)) as max_date\n      ,TIME(audit_datetime_init) as start_time\n      ,TIME(IF(audit_datetime_end is null, now(), audit_datetime_end)) as end_time\n      ,SEC_TO_TIME(IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now()))) as connection_time\n      ,IF(audit_duration_sec is not null, audit_duration_sec, TIMESTAMPDIFF(second,audit_datetime_init,now())) as connection_time_secs\n      \n      -- ---------------------------------------------------------------\n-- TABLES & JOINS\n\n        FROM\n\n        MainAudit\n        LEFT OUTER JOIN InvAgent\n        ON audit_agent_id = inv_agent_id\n\n        LEFT OUTER JOIN InvBreak\n        ON audit_break_id = inv_break_id\n\n        LEFT OUTER JOIN HcaAgent\n        ON audit_agent_id = hca_agent_id\n        AND audit_date = hca_agent_date\n\n        -- ---------------------------------------------------------------\n        -- CONDITIONS\n        WHERE 1\n        AND\n        audit_break_id is not null\n        AND\n        inv_break_productivity = 0\n\n        -- TIME AND DATE\n        ".concat((0, _sqlFunctions.dateAndTimeSqlQuery)(userSelection, "audit_datetime_init"), "\n\n        -- AGENT\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.agent, "hca_agent_id"), "\n\n        -- SUPERVISOR\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.supervisor, "hca_agent_people_json"), "\n\n        -- SCHEDULE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_schedule_json"), "\n\n        -- ROLE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "hca_agent_role_json"), "\n\n        -- CLIENT\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.client, "audit_operation_json", "client"), "\n\n        -- QUEUE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.queue, "audit_operation_json", "queue"), "\n\n        -- SERVICE\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.service, "audit_operation_json", "service"), "\n\n        -- CAMPAIGN\n        ").concat((0, _sqlFunctions.arrayToJsonSqlQuery)(userSelection.campaign, "audit_operation_json", "campaign"), "\n\n        -- BREAK\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.auxiliar, "audit_break_id"), "\n\n        -- ASIGNACION\n        ").concat((0, _sqlFunctions.arrayToSqlQuery)(userSelection.assignation, "audit_break_id"), "\n\n        -- PLANNED CLIENT\n\n\n        -- PLANNED QUEUE\n\n\n        -- PLANNED SERVICE\n\n\n        -- PLANNED CAMPAIGN\n      \n\tGROUP BY\n  audit_agent_id\n    ) as detail\n    \n    ");
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
  return _agentsAuxiliarReport.apply(this, arguments);
}