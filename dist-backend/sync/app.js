"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _update_cdr_main = require("./updates/cdr/update_cdr_main");

var _update_audit_main = require("./updates/audit/update_audit_main");

var _update_audit_main_empty = require("./updates/audit/update_audit_main_empty");

var _update_agent = require("./updates/inv/update_agent");

var _update_break = require("./updates/inv/update_break");

var _update_campaign = require("./updates/inv/update_campaign");

var _update_queue = require("./updates/inv/update_queue");

var time = process.env.CDR_TIME_INTERVAL;

function repeatUpdate() {
  return _repeatUpdate.apply(this, arguments);
}

function _repeatUpdate() {
  _repeatUpdate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setInterval(function () {
              console.clear();
              console.log("/*************/ MAIN UPDATE /*************/ "); // updateMainCdr();

              (0, _update_audit_main.updateMainAudit)(); // updateMainAuditEmpty();
              // updateAgent();
              // updateBreak();
              // updateCampaign();
              // updateQueue();
            }, 5000);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _repeatUpdate.apply(this, arguments);
}

repeatUpdate();