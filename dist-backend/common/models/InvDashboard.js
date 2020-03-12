"use strict"; // INBOUND

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var dashboardInboundIndicators = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboardInboundIndicators"));

var dashboardInboundIndicatorsRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboardInboundIndicatorsRealTime"));

var dashboardInboundDailyByInterval = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboardInboundDailyByInterval"));

var dashboardInboundGroups = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboardInboundGroups"));

var dashboardInboundList = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboardInboundList"));

var dashboardInboundListCallEntry = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-callentry"));

var dashboardInboundListCurrentCalls = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentCalls"));

var dashboardInboundListCurrentAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentAgents"));

var dashboardInboundListCurrentBreaks = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentBreaks"));

var dashboardInboundListAuditAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditAgents"));

var dashboardInboundListAuditBreaks = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditBreaks"));

var dashboardInboundListPlanAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-planAgents"));

var dashboardInboundListCallEntryRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-callentryRealTime"));

var dashboardInboundListCurrentCallsRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentCallsRealTime"));

var dashboardInboundListCurrentAgentsRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentAgentsRealTime"));

var dashboardInboundListCurrentBreaksRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentBreaksRealTime"));

var dashboardInboundListAuditAgentsRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditAgentsRealTime"));

var dashboardInboundListAuditBreaksRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditBreaksRealTime"));

var dashboardAgentsIndicators = _interopRequireWildcard(require("../queries/InvDashboard/dashboardAgents/dashboardAgentsIndicators"));

var dashboardAgentsList = _interopRequireWildcard(require("../queries/InvDashboard/dashboardAgents/dashboardAgentsList"));

var dashboardOutboundIndicators = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboardOutboundindicators"));

var dashboardOutboundIndicatorsRealTime = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboardOutboundindicatorsRealTime"));

var dashboardOutboundDailyByInterval = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboardOutboundDailyByInterval"));

var dashboardOutboundListCdr = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-cdr"));

var dashboardOutboundListCurrentCalls = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentCalls"));

var dashboardOutboundListCurrentAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentAgents"));

var dashboardOutboundListCurrentBreaks = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentBreaks"));

var dashboardOutboundListAuditAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-auditAgents"));

var dashboardOutboundListAuditBreaks = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-auditBreaks"));

var dashboardOutboundListPlanAgents = _interopRequireWildcard(require("../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-planAgents"));

var automaticsIndicators = _interopRequireWildcard(require("../queries/InvDashboard/automatics/automaticsIndicators"));

// AGENTS
// OUTBOUND
// AUTOMATIC
// import * as inboundTest from '../queries/InvDashboard/inbound/inboundTest';
module.exports = function (InvDashboard) {
  //******************************************************************************************************* */
  //******************************************************************************************************* */
  //**********************INBOUND INDICATORS**********************/
  InvDashboard.dashboardInboundIndicators =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", dashboardInboundIndicators.dashboardInboundIndicators(userSelection));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND INDICATORS REAL TIME**********************/

  InvDashboard.dashboardInboundIndicatorsRealTime =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(userSelection) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", dashboardInboundIndicatorsRealTime.dashboardInboundIndicatorsRealTime(userSelection));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundIndicatorsRealTime", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND INTERVAL**********************/

  InvDashboard.dashboardInboundDailyByIntervalReport =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userSelection) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", dashboardInboundDailyByInterval.dashboardInboundDailyByIntervalReport(userSelection));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundDailyByIntervalReport", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND GROUPS**********************/

  InvDashboard.dashboardInboundGroupsReport =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(userSelection) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", dashboardInboundGroups.dashboardInboundGroupsReport(userSelection));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundGroupsReport", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST**********************/

  InvDashboard.dashboardInboundList =
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(userSelection) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", dashboardInboundList.dashboardInboundList(userSelection));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundList", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CALL ENTRY **********************/

  InvDashboard.dashboardInboundListCallEntry =
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", dashboardInboundListCallEntry.dashboardInboundListCallEntry(dashboardSelection));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCallEntry", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST AUDIT-AGENTS**********************/

  InvDashboard.dashboardInboundListAuditAgents =
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", dashboardInboundListAuditAgents.dashboardInboundListAuditAgents(dashboardSelection));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListAuditAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST AUDIT-BREAKS**********************/

  InvDashboard.dashboardInboundListAuditBreaks =
  /*#__PURE__*/
  function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", dashboardInboundListAuditBreaks.dashboardInboundListAuditBreaks(dashboardSelection));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListAuditBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST PLAN-AGENTS**********************/

  InvDashboard.dashboardInboundListPlanAgents =
  /*#__PURE__*/
  function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9(userSelection) {
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", dashboardInboundListPlanAgents.dashboardInboundListPlanAgents(userSelection));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListPlanAgents", {
    accepts: {
      arg: "userSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT CALLS**********************/

  InvDashboard.dashboardInboundListCurrentCalls =
  /*#__PURE__*/
  function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee10(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", dashboardInboundListCurrentCalls.dashboardInboundListCurrentCalls(dashboardSelection));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentCalls", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT AGENTS**********************/

  InvDashboard.dashboardInboundListCurrentAgents =
  /*#__PURE__*/
  function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee11(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", dashboardInboundListCurrentAgents.dashboardInboundListCurrentAgents(dashboardSelection));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT BREAKS**********************/

  InvDashboard.dashboardInboundListCurrentBreaks =
  /*#__PURE__*/
  function () {
    var _ref12 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee12(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", dashboardInboundListCurrentBreaks.dashboardInboundListCurrentBreaks(dashboardSelection));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x12) {
      return _ref12.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CALL ENTRY REAL TIME **********************/

  InvDashboard.dashboardInboundListCallEntryRealTime =
  /*#__PURE__*/
  function () {
    var _ref13 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee13(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", dashboardInboundListCallEntryRealTime.dashboardInboundListCallEntryRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x13) {
      return _ref13.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCallEntryRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST AUDIT-AGENTS REAL TIME**********************/

  InvDashboard.dashboardInboundListAuditAgentsRealTime =
  /*#__PURE__*/
  function () {
    var _ref14 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee14(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", dashboardInboundListAuditAgentsRealTime.dashboardInboundListAuditAgentsRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x14) {
      return _ref14.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListAuditAgentsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST AUDIT-BREAKS REAL TIME**********************/

  InvDashboard.dashboardInboundListAuditBreaksRealTime =
  /*#__PURE__*/
  function () {
    var _ref15 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee15(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", dashboardInboundListAuditBreaksRealTime.dashboardInboundListAuditBreaksRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function (_x15) {
      return _ref15.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListAuditBreaksRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT CALLS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentCallsRealTime =
  /*#__PURE__*/
  function () {
    var _ref16 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee16(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", dashboardInboundListCurrentCallsRealTime.dashboardInboundListCurrentCallsRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x16) {
      return _ref16.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentCallsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT AGENTS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentCallsRealTime =
  /*#__PURE__*/
  function () {
    var _ref17 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee17(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", dashboardInboundListCurrentCallsRealTime.dashboardInboundListCurrentCallsRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x17) {
      return _ref17.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentCallsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************INBOUND LIST CURRENT BREAKS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentBreaksRealTime =
  /*#__PURE__*/
  function () {
    var _ref18 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee18(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", dashboardInboundListCurrentBreaksRealTime.dashboardInboundListCurrentBreaksRealTime(dashboardSelection));

            case 1:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function (_x18) {
      return _ref18.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardInboundListCurrentBreaksRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //******************************************************************************************************* */
  //******************************************************************************************************* */
  //**********************AGENTS INDICATORS**********************/

  InvDashboard.dashboardAgentsIndicators =
  /*#__PURE__*/
  function () {
    var _ref19 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee19(userSelection) {
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", dashboardAgentsIndicators.dashboardAgentsIndicators(userSelection));

            case 1:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function (_x19) {
      return _ref19.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardAgentsIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************AGENTS LIST**********************/

  InvDashboard.dashboardAgentsList =
  /*#__PURE__*/
  function () {
    var _ref20 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee20(userSelection) {
      return _regenerator["default"].wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", dashboardAgentsList.dashboardAgentsList(userSelection));

            case 1:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));

    return function (_x20) {
      return _ref20.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardAgentsList", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************AUTOMATIC INDICATORS**********************/

  InvDashboard.dashboardAutomaticIndicators =
  /*#__PURE__*/
  function () {
    var _ref21 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee21(userSelection) {
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", dashboardAutomaticIndicators.dashboardAutomaticIndicators(userSelection));

            case 1:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }));

    return function (_x21) {
      return _ref21.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardAutomaticIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //******************************************************************************************************* */
  //******************************************************************************************************* */
  //**********************OUTBOUND INDICATORS**********************/

  InvDashboard.dashboardOutboundIndicators =
  /*#__PURE__*/
  function () {
    var _ref22 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee22(userSelection) {
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", dashboardOutboundIndicators.dashboardOutboundIndicators(userSelection));

            case 1:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }));

    return function (_x22) {
      return _ref22.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND INDICATORS REAL TIME**********************/

  InvDashboard.dashboardOutboundIndicatorsRealTime =
  /*#__PURE__*/
  function () {
    var _ref23 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee23(userSelection) {
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              return _context23.abrupt("return", dashboardOutboundIndicatorsRealTime.dashboardOutboundIndicatorsRealTime(userSelection));

            case 1:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    }));

    return function (_x23) {
      return _ref23.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundIndicatorsRealTime", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST CDR **********************/

  InvDashboard.dashboardOutboundListCdr =
  /*#__PURE__*/
  function () {
    var _ref24 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee24(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              return _context24.abrupt("return", dashboardOutboundListCdr.dashboardOutboundListCdrFunction(dashboardSelection));

            case 1:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }));

    return function (_x24) {
      return _ref24.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListCdr", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST CURRENT CALLS**********************/

  InvDashboard.dashboardOutboundListCurrentCalls =
  /*#__PURE__*/
  function () {
    var _ref25 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee25(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt("return", dashboardOutboundListCurrentCalls.dashboardOutboundListCurrentCallsFunction(dashboardSelection));

            case 1:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25);
    }));

    return function (_x25) {
      return _ref25.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListCurrentCalls", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of current calls"]
  }); //**********************OUTBOUND LIST CURRENT AGENTS**********************/

  InvDashboard.dashboardOutboundListCurrentAgents =
  /*#__PURE__*/
  function () {
    var _ref26 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee26(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              return _context26.abrupt("return", dashboardOutboundListCurrentAgents.dashboardOutboundListCurrentAgentsFunction(dashboardSelection));

            case 1:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }));

    return function (_x26) {
      return _ref26.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListCurrentAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST CURRENT BREAKS**********************/

  InvDashboard.dashboardOutboundListCurrentBreaks =
  /*#__PURE__*/
  function () {
    var _ref27 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee27(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              return _context27.abrupt("return", dashboardOutboundListCurrentBreaks.dashboardOutboundListCurrentBreaksFunction(dashboardSelection));

            case 1:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }));

    return function (_x27) {
      return _ref27.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListCurrentBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST AUDIT-AGENTS**********************/

  InvDashboard.dashboardOutboundListAuditAgents =
  /*#__PURE__*/
  function () {
    var _ref28 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee28(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              return _context28.abrupt("return", dashboardOutboundListAuditAgents.dashboardOutboundListAuditAgents(dashboardSelection));

            case 1:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }));

    return function (_x28) {
      return _ref28.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListAuditAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST AUDIT-BREAKS**********************/

  InvDashboard.dashboardOutboundListAuditBreaks =
  /*#__PURE__*/
  function () {
    var _ref29 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee29(dashboardSelection) {
      return _regenerator["default"].wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              return _context29.abrupt("return", dashboardOutboundListAuditBreaks.dashboardOutboundListAuditBreaks(dashboardSelection));

            case 1:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }));

    return function (_x29) {
      return _ref29.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListAuditBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND LIST PLAN-AGENTS**********************/

  InvDashboard.dashboardOutboundListPlanAgents =
  /*#__PURE__*/
  function () {
    var _ref30 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee30(userSelection) {
      return _regenerator["default"].wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              return _context30.abrupt("return", dashboardOutboundListPlanAgents.dashboardOutboundListPlanAgents(userSelection));

            case 1:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }));

    return function (_x30) {
      return _ref30.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundListPlanAgents", {
    accepts: {
      arg: "userSelection",
      type: "any",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************OUTBOUND INTERVAL**********************/

  InvDashboard.dashboardOutboundDailyByInterval =
  /*#__PURE__*/
  function () {
    var _ref31 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee31(userSelection) {
      return _regenerator["default"].wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              return _context31.abrupt("return", dashboardOutboundDailyByInterval.dashboardOutboundDailyByInterval(userSelection));

            case 1:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));

    return function (_x31) {
      return _ref31.apply(this, arguments);
    };
  }();

  InvDashboard.remoteMethod("dashboardOutboundDailyByInterval", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //*****************************************************************************************************
};