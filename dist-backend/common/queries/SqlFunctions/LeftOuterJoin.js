"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audit_InvAgent_ById = exports.RealCurrentAgents_InvAgent_ById = exports.HcaAgent_InvAgent_ById = exports.Cdr_Full_ById = exports.Cdr_InvQueue_ById = exports.Cdr_InvAgent_ById = exports.CallEntry_Full_ById = exports.CallEntry_InvQueue_ById = exports.CallEntry_InvAgent_ById = void 0;
var CallEntry_InvAgent_ById = "\n    LEFT OUTER JOIN  InvAgent\n    ON callentry_agent_id = inv_agent_id\n     ";
exports.CallEntry_InvAgent_ById = CallEntry_InvAgent_ById;
var CallEntry_InvQueue_ById = "\n      LEFT OUTER JOIN InvQueue\n      ON callentry_queue_id = inv_queue_id\n      ";
exports.CallEntry_InvQueue_ById = CallEntry_InvQueue_ById;
var CallEntry_Full_ById = "\n      LEFT OUTER JOIN  InvAgent\n      ON callentry_agent_id = inv_agent_id \n      LEFT OUTER JOIN InvQueue\n      ON callentry_queue_id = inv_queue_id\n      LEFT OUTER JOIN HcaAgent\n      ON callentry_date = hca_agent_date\n      AND callentry_agent_id = hca_agent_id\n      LEFT OUTER JOIN HcaQueue\n      ON callentry_date = hca_queue_date\n      AND callentry_queue_id = hca_queue_id\n       ";
exports.CallEntry_Full_ById = CallEntry_Full_ById;
var Cdr_InvAgent_ById = "\n    LEFT OUTER JOIN  InvAgent\n    ON cdr_agent_id = inv_agent_id\n     ";
exports.Cdr_InvAgent_ById = Cdr_InvAgent_ById;
var Cdr_InvQueue_ById = "\n    LEFT OUTER JOIN InvQueue\n    ON cdr_queue_id = inv_queue_id\n     ";
exports.Cdr_InvQueue_ById = Cdr_InvQueue_ById;
var Cdr_Full_ById = "\n     LEFT OUTER JOIN InvQueue\n     ON cdr_queue_id = inv_queue_id\n     LEFT OUTER JOIN InvQueue\n     ON cdr_queue_id = inv_queue_id\n     LEFT OUTER JOIN HcaAgent\n     ON cdr_date = hca_agent_date\n     AND cdr_agent_id = hca_agent_id\n     LEFT OUTER JOIN HcaQueue\n     ON cdr_date = hca_queue_date\n     AND cdr_queue_id = hca_queue_id\n      ";
exports.Cdr_Full_ById = Cdr_Full_ById;
var HcaAgent_InvAgent_ById = "\n    LEFT OUTER JOIN InvAgent\n    ON hca_agent_id = inv_agent_id\n     ";
exports.HcaAgent_InvAgent_ById = HcaAgent_InvAgent_ById;
var RealCurrentAgents_InvAgent_ById = "\n     LEFT OUTER JOIN InvAgent\n     ON rca_logged_agent_id = inv_agent_id\n      ";
exports.RealCurrentAgents_InvAgent_ById = RealCurrentAgents_InvAgent_ById;
var Audit_InvAgent_ById = "\n      LEFT OUTER JOIN InvAgent\n      ON audit_agent_id = inv_agent_id\n       ";
exports.Audit_InvAgent_ById = Audit_InvAgent_ById;
var Audit_InvQueue_ById = "\n       LEFT OUTER JOIN InvAgent\n       ON audit_agent_id = inv_queue_id\n        ";