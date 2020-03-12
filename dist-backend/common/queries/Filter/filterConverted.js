"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqlFilter = sqlFilter;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function sqlFilter(_x) {
  return _sqlFilter.apply(this, arguments);
}

function _sqlFilter() {
  _sqlFilter = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(userSelection) {
    var result, client, queue, service, campaign, supervisor, agent, schedule, substitute, userSelectionObject, preClient, preQueue, preService, preSupervisor, preAgent, preSchedule, preResult, preResultFixed;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = "";
            client = ""; // userSelection.client;

            queue = ""; // userSelection.queue;

            service = ""; // userSelection.service;

            campaign = ""; // userSelection.campaign;

            supervisor = ""; // userSelection.supervisor;

            agent = ""; // userSelection.agent;

            schedule = ""; // userSelection.schedule;

            substitute = ""; // userSelection.substitute;
            //   let userSelectionObject = {
            //       client: JSON.parse(userSelection.client),
            //       queue: JSON.parse(userSelection.queue),
            //       service: JSON.parse(userSelection.service),
            //       campaign: JSON.parse(userSelection.campaign),
            //       supervisor: JSON.parse(userSelection.supervisor),
            //       agent: JSON.parse(userSelection.agent),
            //       schedule: JSON.parse(userSelection.schedule),
            //       substitute: JSON.parse(userSelection.substitute)
            //   }

            userSelectionObject = userSelection; // CLIENT

            preClient = userSelectionObject.client.map(function (x) {
              return "hca_queue_client_id = " + x.id;
            }).join(" OR ");
            preClient.length > 0 ? client = "(" + preClient + ")" : ""; // QUEUE

            preQueue = userSelectionObject.queue.map(function (x) {
              return "hca_queue_number = " + x.id;
            }).join(" OR ");
            preQueue.length > 0 ? queue = "(" + preQueue + ")" : ""; // SERVICE

            preService = userSelectionObject.service.map(function (x) {
              return "hca_queue_service_number = " + x.id;
            }).join(" OR ");
            preService.length > 0 ? service = "(" + preService + ")" : ""; // CAMPAIGN
            // let preCampaign = userSelectionObject.campaign
            //   .map( x => {
            //     return 'inv_campaign_id = ' + x.id;
            //   })
            //   .join(' OR ');
            // preCampaign.length > 0? campaign = '('+ preCampaign + ')': '';
            // SUPERVISOR

            preSupervisor = userSelectionObject.supervisor.map(function (x) {
              return 'JSON_UNQUOTE(JSON_EXTRACT(hca_agent_people_json, "$[0].id") ) as hca_agent_supervisor_id = ' + x.id;
            }).join(" OR ");
            preSupervisor.length > 0 ? supervisor = "(" + preSupervisor + ")" : ""; // AGENT

            preAgent = userSelectionObject.agent.map(function (x) {
              return "hca_agent_id = " + x.id;
            }).join(" OR ");
            preAgent.length > 0 ? agent = "(" + preAgent + ")" : ""; // SCHEDULE

            preSchedule = userSelectionObject.schedule.map(function (x) {
              return "hca_agent_schedule_id = " + x.id;
            }).join(" OR ");
            preSchedule.length > 0 ? schedule = "(" + preSchedule + ")" : ""; // SUBSTITUTE
            // let preSubstitute = userSelectionObject.substitute
            //   .map( x => {
            //     return 'hca_agent_substitute_id = ' + x.id;
            //   })
            //   .join(' OR ');
            // preSubstitute.length > 0? substitute = '('+ preSubstitute + ')': '';

            /*********************************************************************************** */
            //  CONVERTION TO ARRAY OS STRINGS

            preResult = [];
            preResult.push(client, queue, service, campaign, supervisor, agent, schedule, substitute); // ADD AND AND REMOVE EMPTY STRINGS

            preResultFixed = preResult.filter(function (x) {
              return x.length;
            }).join(" AND ");
            result = preResultFixed.length > 0 ? preResultFixed : 1;
            return _context.abrupt("return", result);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sqlFilter.apply(this, arguments);
}