"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../connectors/pool"));

var _mysqlHelper = require("../../../helpers/mysql-helper.js");

var _moment = _interopRequireDefault(require("moment"));

var _extract_agent = require("../extract/inv/extract_agent");

var _extract_break = require("../extract/inv/extract_break");

var _extract_campaign = require("../extract/inv/extract_campaign");

var _extract_queue = require("../extract/inv/extract_queue");

var _extract_queueconfig = require("../extract/inv/extract_queueconfig");

var _transform_agent = require("../transform/inv/agent/transform_agent");

var _transform_break = require("../transform/inv/break/transform_break");

var _transform_campaign = require("../transform/inv/campaign/transform_campaign");

var _transform_queue = require("../transform/inv/queue/transform_queue");

var _extract_local = require("../local/extract_local");

var _update_hca_agent = require("../update/hca/update_hca_agent");

var _update_hca_queue = require("../update/hca/update_hca_queue");

// import { transformHcaAgent } from "../transform/hca/hca-agent/transform_hca_agent";
var input_date = process.argv[2];
var incoming_date = input_date === '' ? '' : process.argv[2];

var chalk = require("chalk");

function executeAllInv() {
  return _executeAllInv.apply(this, arguments);
}
/************************************************************************ */
// npx babel-node src/sync/etl/execute/execute_inv.js


function _executeAllInv() {
  _executeAllInv = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** START INV *************************/"));
            console.log("");
            console.log(chalk.hex("#E50001")("/*********************** START ALL *************************/"));
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT INV *************************/"));
            _context.next = 8;
            return (0, _extract_agent.extractInvAgent)(input_date);

          case 8:
            _context.next = 10;
            return (0, _extract_break.extractInvBreak)(input_date);

          case 10:
            _context.next = 12;
            return (0, _extract_campaign.extractInvCampaign)(input_date);

          case 12:
            _context.next = 14;
            return (0, _extract_queue.extractInvQueue)(input_date);

          case 14:
            _context.next = 16;
            return (0, _extract_queueconfig.extractInvQueueConfig)(input_date);

          case 16:
            console.log("/***** END EXTRACT INV *******/");
            console.log("");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM INV *************************/"));
            _context.next = 22;
            return (0, _transform_agent.transformInvAgent)(input_date);

          case 22:
            _context.next = 24;
            return (0, _transform_break.transformInvBreak)(input_date);

          case 24:
            _context.next = 26;
            return (0, _transform_campaign.transformInvCampaign)(input_date);

          case 26:
            _context.next = 28;
            return (0, _transform_queue.transformInvQueue)(input_date);

          case 28:
            console.log("/***** END TRANSFORM INV *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START EXTRACT LOCAL *************************/"));
            _context.next = 33;
            return (0, _extract_local.extractLocalInvToRep)(input_date);

          case 33:
            console.log("/***** END EXTRACT LOCAL *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START UPDATE HCA *************************/"));
            _context.next = 38;
            return (0, _update_hca_agent.updateHcaAgent)(input_date);

          case 38:
            _context.next = 40;
            return (0, _update_hca_queue.updateHcaQueue)(input_date);

          case 40:
            console.log("/***** END UPDATE HCA *******/");
            console.log("");
            console.log(chalk.hex("#4657bd")("/*********************** START TRANSFORM HCA *************************/")); // await transformHcaAgent( input_date );

            console.log("/***** END TRANSFORM HCA *******/");
            console.log("");
            console.log(chalk.hex("#E5E510")("/*********************** END INV *************************/"));
            console.log("");

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeAllInv.apply(this, arguments);
}

executeAllInv();
module.exports = {
  executeAllInv: executeAllInv
};