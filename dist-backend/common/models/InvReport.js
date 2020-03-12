"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var agentsAuxiliar = _interopRequireWildcard(require("../queries/InvReport/agents/agentsAuxiliar"));

var agentsAssignation = _interopRequireWildcard(require("../queries/InvReport/agents/agentsAssignation"));

var agentsConnection = _interopRequireWildcard(require("../queries/InvReport/agents/agentsConnection"));

var mainAudit = _interopRequireWildcard(require("../queries/InvReport/data/mainAudit"));

var mainCdr = _interopRequireWildcard(require("../queries/InvReport/data/mainCdr"));

var mainCallEntry = _interopRequireWildcard(require("../queries/InvReport/data/mainCallEntry"));

var realCurrentAgents = _interopRequireWildcard(require("../queries/InvReport/data/realCurrentAgents"));

var realCurrentBreaks = _interopRequireWildcard(require("../queries/InvReport/data/realCurrentBreaks"));

var realCurrentCalls = _interopRequireWildcard(require("../queries/InvReport/data/realCurrentCalls"));

var callsDetail = _interopRequireWildcard(require("../queries/InvReport/calls/callsDetail"));

var callsInboundDaily = _interopRequireWildcard(require("../queries/InvReport/calls/callsInboundDaily"));

var callsInboundDailyByInterval = _interopRequireWildcard(require("../queries/InvReport/calls/callsInboundDailyByInterval"));

var callsOutboundDaily = _interopRequireWildcard(require("../queries/InvReport/calls/callsOutboundDaily"));

var callsOutboundDailyByInterval = _interopRequireWildcard(require("../queries/InvReport/calls/callsOutboundDailyByInterval"));

var callsAutomaticDaily = _interopRequireWildcard(require("../queries/InvReport/calls/callsAutomaticDaily"));

var callsAutomaticByIntervalDaily = _interopRequireWildcard(require("../queries/InvReport/calls/callsAutomaticDailyByInterval"));

var callsWaitTime = _interopRequireWildcard(require("../queries/InvReport/calls/callsWaitTime"));

var callsIndicatorsByInterval = _interopRequireWildcard(require("../queries/InvReport/calls/callsIndicatorsByInterval"));

var callsIndicatorsByQueue = _interopRequireWildcard(require("../queries/InvReport/calls/callsIndicatorsByQueue"));

var callsAbandoned = _interopRequireWildcard(require("../queries/InvReport/calls/callsAbandoned"));

var operationDetailOperation = _interopRequireWildcard(require("../queries/InvReport/operation/operationDetailOperation"));

var operationConsolidateOperation = _interopRequireWildcard(require("../queries/InvReport/operation/operationConsolidateOperation"));

var operationResume = _interopRequireWildcard(require("../queries/InvReport/operation/operationResume"));

var multipleQueries = _interopRequireWildcard(require("../queries/InvReport/operation/multipleQueries"));

var callsRecordingFile = _interopRequireWildcard(require("../queries/InvReport/calls/callsRecordingFile"));

// import * as auditBreak from '../queries/InvReport/agents/auditBreak';
// import * as auditBreakDetail from '../queries/InvReport/agents/auditBeakDetail';
module.exports = function (InvReport) {
  //*****************************AGENTS REPORT*******************************/
  //************************************************************************/
  //**********************REMOTE METHOD AUXILIAR REPORT**********************/
  InvReport.agentsAuxiliarReport =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", agentsAuxiliar.agentsAuxiliarReport(userSelection));

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

  InvReport.remoteMethod("agentsAuxiliarReport", {
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
    description: ["Returns values of auxiliar report"]
  }); //**********************REMOTE METHOD ASIGNATION REPORT**********************/

  InvReport.agentsAssignationReport =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(userSelection) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", agentsAssignation.agentsAssignationReport(userSelection));

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

  InvReport.remoteMethod("agentsAssignationReport", {
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
    description: ["Returns values of assignation report"]
  }); //**********************REMOTE METHOD CONNECTION & DISCONNECTION**********************/

  InvReport.agentsConnectionReport =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userSelection) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", agentsConnection.agentsConnectionReport(userSelection));

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

  InvReport.remoteMethod("agentsConnectionReport", {
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
    description: ["Returns values of connected and disconnected report"]
  }); //**********************REMOTE METHOD AUDIT REPORT**********************/

  InvReport.mainAuditReport =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(userSelection) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", mainAudit.mainAuditReport(userSelection));

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

  InvReport.remoteMethod("mainAuditReport", {
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
    description: ["Returns values of audit report"]
  }); //**********************REMOTE METHOD CDR REPORT**********************/

  InvReport.mainCdrReport =
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(userSelection) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", mainCdr.mainCdrReport(userSelection));

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

  InvReport.remoteMethod("mainCdrReport", {
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
    description: ["Returns values of cdr report"]
  }); //**********************REMOTE METHOD CALLENTRY REPORT**********************/

  InvReport.mainCallEntryReport =
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(userSelection) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", mainCallEntry.mainCallEntryReport(userSelection));

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

  InvReport.remoteMethod("mainCallEntryReport", {
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
    description: ["Returns values of callentry report"]
  }); //**********************REMOTE METHOD CALLENTRY REPORT**********************/

  InvReport.realCurrentAgentsReport =
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(userSelection) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", realCurrentAgents.realCurrentAgentsReport(userSelection));

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

  InvReport.remoteMethod("realCurrentAgentsReport", {
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
    description: ["Returns values of callentry report"]
  }); //**********************REMOTE METHOD CALLENTRY REPORT**********************/

  InvReport.realCurrentBreaksReport =
  /*#__PURE__*/
  function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8(userSelection) {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", realCurrentBreaks.realCurrentBreaksReport(userSelection));

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

  InvReport.remoteMethod("realCurrentBreaksReport", {
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
    description: ["Returns values of callentry report"]
  }); //**********************REMOTE METHOD CALLENTRY REPORT**********************/

  InvReport.realCurrentCallsReport =
  /*#__PURE__*/
  function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9(userSelection) {
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", realCurrentCalls.realCurrentCallsReport(userSelection));

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

  InvReport.remoteMethod("realCurrentCallsReport", {
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
    description: ["Returns values of callentry report"]
  }); //*****************************CALLS REPORT*******************************/
  //************************************************************************/
  //**********************REMOTE METHOD DETAIL CALLS REPORT**********************/

  InvReport.callsDetailReport =
  /*#__PURE__*/
  function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee10(userSelection) {
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", callsDetail.callsDetailReport(userSelection));

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

  InvReport.remoteMethod("callsDetailReport", {
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
    description: ["Returns values of audit report"]
  }); //**********************REMOTE METHOD INBOUND DAILY REPORT**********************/

  InvReport.callsInboundDailyReport =
  /*#__PURE__*/
  function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee11(userSelection) {
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", callsInboundDaily.callsInboundDailyReport(userSelection));

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

  InvReport.remoteMethod("callsInboundDailyReport", {
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
    description: ["Returns values of inbound daily report"]
  }); //**********************REMOTE METHOD INBOUND DAILY BY INTERVAL REPORT**********************/

  InvReport.callsInboundDailyByIntervalReport =
  /*#__PURE__*/
  function () {
    var _ref12 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee12(userSelection) {
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", callsInboundDailyByInterval.callsInboundDailyByIntervalReport(userSelection));

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

  InvReport.remoteMethod("callsInboundDailyByIntervalReport", {
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
    description: ["Returns values of inbound daily by interval report"]
  }); //**********************REMOTE METHOD INBOUND DAILY BY QUEUE REPORT**********************/

  InvReport.callsInboundDailyByQueueReport =
  /*#__PURE__*/
  function () {
    var _ref13 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee13(userSelection) {
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", callsInboundDailyByQueue.callsInboundDailyByQueueReport(userSelection));

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

  InvReport.remoteMethod("callsInboundDailyByQueueReport", {
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
    description: ["Returns values of inbound daily by queue report"]
  }); //**********************REMOTE METHOD OUTBOUND DAILY REPORT**********************/

  InvReport.callsOutboundDailyReport =
  /*#__PURE__*/
  function () {
    var _ref14 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee14(userSelection) {
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", callsOutboundDaily.callsOutboundDailyReport(userSelection));

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

  InvReport.remoteMethod("callsOutboundDailyReport", {
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
    description: ["Returns values of audit report"]
  }); //**********************REMOTE METHOD OUTBOUND DAILY BY INTERVAL REPORT**********************/

  InvReport.callsOutboundDailyByIntervalReport =
  /*#__PURE__*/
  function () {
    var _ref15 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee15(userSelection) {
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", callsOutboundDailyByInterval.callsOutboundDailyByIntervalReport(userSelection));

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

  InvReport.remoteMethod("callsOutboundDailyByIntervalReport", {
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
    description: ["Returns values of audit report"]
  }); //**********************REMOTE METHOD AUTOMATIC DAILY REPORT**********************/

  InvReport.callsAutomaticDailyReport =
  /*#__PURE__*/
  function () {
    var _ref16 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee16(userSelection) {
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", callsAutomaticDaily.callsAutomaticDailyReport(userSelection));

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

  InvReport.remoteMethod("callsAutomaticDailyReport", {
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
    description: ["Returns values of calls automatic report"]
  }); //**********************REMOTE METHOD AUTOMATIC DAILY BY INTERVAL REPORT**********************/

  InvReport.callsAutomaticByIntervalDailyReport =
  /*#__PURE__*/
  function () {
    var _ref17 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee17(userSelection) {
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", callsAutomaticByIntervalDaily.callsAutomaticByIntervalDailyReport(userSelection));

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

  InvReport.remoteMethod("callsAutomaticByIntervalDailyReport", {
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
    description: ["Returns values of calls automatic by interval report"]
  }); //**********************REMOTE METHOD CALLS ABANDONED REPORT**********************/

  InvReport.callsAbandonedReport =
  /*#__PURE__*/
  function () {
    var _ref18 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee18(userSelection) {
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", callsAbandoned.callsAbandonedReport(userSelection));

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

  InvReport.remoteMethod("callsAbandonedReport", {
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
    description: ["Returns values of calls abandoned report"]
  }); //**********************REMOTE METHOD CALLS WAIT TIME REPORT**********************/

  InvReport.callsWaitTimeReport =
  /*#__PURE__*/
  function () {
    var _ref19 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee19(userSelection) {
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", callsWaitTime.callsWaitTimeReport(userSelection));

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

  InvReport.remoteMethod("callsWaitTimeReport", {
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
    description: ["Returns values of calls wait time report"]
  }); //**********************REMOTE METHOD CALLS INDICATORS BY INTERVAL**********************/

  InvReport.callsIndicatorsByIntervalReport =
  /*#__PURE__*/
  function () {
    var _ref20 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee20(userSelection) {
      return _regenerator["default"].wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", callsIndicatorsByInterval.callsIndicatorsByIntervalReport(userSelection));

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

  InvReport.remoteMethod("callsIndicatorsByIntervalReport", {
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
    description: ["Returns values of calls indicators by interval"]
  }); //**********************REMOTE METHOD CALLS INDICATORS BY QUEUE**********************/

  InvReport.callsIndicatorsByQueueReport =
  /*#__PURE__*/
  function () {
    var _ref21 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee21(userSelection) {
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", callsIndicatorsByQueue.callsIndicatorsByQueueReport(userSelection));

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

  InvReport.remoteMethod("callsIndicatorsByQueueReport", {
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
    description: ["Returns values of calls indicators by queue"]
  }); //*****************************OPERATION REPORT*******************************/
  //************************************************************************/
  //**********************REMOTE METHOD DETAIL OPERATION REPORT**********************/

  InvReport.operationDetailOperationReport =
  /*#__PURE__*/
  function () {
    var _ref22 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee22(userSelection) {
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", operationDetailOperation.operationDetailOperationReport(userSelection));

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

  InvReport.remoteMethod("operationDetailOperationReport", {
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
    description: ["Returns values of detail operation report"]
  }); //**********************REMOTE METHOD CONSOLIDATE OPERATION REPORT**********************/

  InvReport.operationConsolidateOperationReport =
  /*#__PURE__*/
  function () {
    var _ref23 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee23(userSelection) {
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              return _context23.abrupt("return", operationConsolidateOperation.operationConsolidateOperationReport(userSelection));

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

  InvReport.remoteMethod("operationConsolidateOperationReport", {
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
    description: ["Returns values of detail operation report"]
  }); //**********************REMOTE METHOD RESUME REPORT**********************/

  InvReport.operationResumeReport =
  /*#__PURE__*/
  function () {
    var _ref24 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee24(userSelection) {
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              return _context24.abrupt("return", operationResume.operationResumeReport(userSelection));

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

  InvReport.remoteMethod("operationResumeReport", {
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
    description: ["Returns values of Resume report"]
  }); //***************************INBOUND GROUP REPORT - REMOTE METHOD*********************************/

  InvReport.inboundGroup =
  /*#__PURE__*/
  function () {
    var _ref25 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee25(filtro) {
      return _regenerator["default"].wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt("return", inboundGroup(filtro));

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

  InvReport.remoteMethod("inboundGroup", {
    accepts: {
      arg: "filtro",
      type: "object",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["Show statitics by group"]
  });

  function inboundGroup(_x26) {
    return _inboundGroup.apply(this, arguments);
  } //**********************REMOTE METHOD AUDIT BREAKS**********************/


  function _inboundGroup() {
    _inboundGroup = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee32(filtro) {
      var queryInboundGroup, resultInboundGroup;
      return _regenerator["default"].wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              queryInboundGroup = "\n    SELECT\n    cdr_type_queue as numero_cola,\n      inv_queue_name as nombre_cola,\n      SUM(cdr_call_received) as llamadas_recibidas,\n      SUM(cdr_call_atended) as llamadas_atendidas,\n      SUM(cdr_call_abandoned) as llamadas_abandonadas,\n      SUM(cdr_call_short) as llamadas_cortas,\n      SUM(cdr_call_before_time) as llamadas_antes_de,\n      SUM(cdr_hung_agent) as colgado_agente,\n      SUM(cdr_call_before_time)/SUM(cdr_call_received) as nivel_servicio,\n      SUM(cdr_call_atended)/SUM(cdr_call_received) as nivel_atencion,\n      SUM(cdr_call_abandoned)/SUM(cdr_call_received) as nivel_abandono,\n      SUM(duration)/SUM(cdr_call_received) as tmo,\n      sum(cdr_duration_wait)/SUM(cdr_call_atended) as asa\n\n      FROM MainCdr\n      LEFT OUTER JOIN InvQueue\n      ON cdr_type_queue = inv_queue_number\n\n      WHERE cdr_date = '2018-11-23'\n      \n      GROUP BY cdr_type_queue\n      ";
              _context32.prev = 1;
              _context32.next = 4;
              return poolDat.query(queryInboundGroup);

            case 4:
              resultInboundGroup = _context32.sent;
              return _context32.abrupt("return", resultInboundGroup);

            case 8:
              _context32.prev = 8;
              _context32.t0 = _context32["catch"](1);
              console.error("Server error", _context32.t0);
              return _context32.abrupt("return", _context32.t0);

            case 12:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, null, [[1, 8]]);
    }));
    return _inboundGroup.apply(this, arguments);
  }

  InvReport.reportAuditBreak =
  /*#__PURE__*/
  function () {
    var _ref26 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee26(userSelection) {
      return _regenerator["default"].wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              return _context26.abrupt("return", auditBreak.reportAuditBreak(userSelection));

            case 1:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }));

    return function (_x27) {
      return _ref26.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("reportAuditBreak", {
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
    description: ["Returns values of audit break report"]
  }); //**********************REMOTE METHOD AUDIT BREAKS DETAIL**********************/

  InvReport.reportAuditBreakDetail =
  /*#__PURE__*/
  function () {
    var _ref27 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee27(userSelection) {
      return _regenerator["default"].wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              return _context27.abrupt("return", auditBreakDetail.reportAuditBreakDetail(userSelection));

            case 1:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }));

    return function (_x28) {
      return _ref27.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("reportAuditBreakDetail", {
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
    description: ["Returns values of breaks for each selected agent"]
  }); //**********************MULTIPLE QUERIES **********************/

  InvReport.multipleQueries =
  /*#__PURE__*/
  function () {
    var _ref28 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee28(userSelection) {
      return _regenerator["default"].wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              return _context28.abrupt("return", multipleQueries.multipleQueries(userSelection));

            case 1:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }));

    return function (_x29) {
      return _ref28.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("multipleQueries", {
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
    description: ["Returns values of breaks for each selected agent"]
  }); //**********************EXTRACT RECORDING FILE**********************/

  InvReport.callsGetRecordingFile =
  /*#__PURE__*/
  function () {
    var _ref29 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee29(RecordSelection) {
      return _regenerator["default"].wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              return _context29.abrupt("return", callsRecordingFile.callsGetRecordingFile(RecordSelection));

            case 1:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }));

    return function (_x30) {
      return _ref29.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("callsGetRecordingFile", {
    accepts: {
      arg: "RecordSelection",
      type: "RecordSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "string",
      root: "true"
    },
    description: ["Returns recording file path"]
  }); //**********************DELETE RECORDING FILE**********************/

  InvReport.deleteRecordingFile =
  /*#__PURE__*/
  function () {
    var _ref30 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee30(RecordSelection) {
      return _regenerator["default"].wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              return _context30.abrupt("return", callsRecordingFile.deleteRecordingFile(RecordSelection));

            case 1:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }));

    return function (_x31) {
      return _ref30.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("deleteRecordingFile", {
    accepts: {
      arg: "RecordSelection",
      type: "RecordSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "string",
      root: "true"
    },
    description: ["Returns values of auxiliar report"]
  }); //**********************DELETE RECORDING FILE**********************/

  InvReport.deleteAllRecordingFile =
  /*#__PURE__*/
  function () {
    var _ref31 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee31(userSelection) {
      return _regenerator["default"].wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              return _context31.abrupt("return", callsRecordingFile.deleteAllRecordingFile(userSelection));

            case 1:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));

    return function (_x32) {
      return _ref31.apply(this, arguments);
    };
  }();

  InvReport.remoteMethod("deleteAllRecordingFile", {
    accepts: {
      arg: "RecordSelection",
      type: "RecordSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "string",
      root: "true"
    },
    description: ["Returns values of auxiliar report"]
  });
};