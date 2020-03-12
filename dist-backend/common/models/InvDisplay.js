"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var displayInboundIndicators = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayInboundIndicators"));

var displayInboundDailyByInterval = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayInboundDailyByInterval"));

var displayAgentsIndicators = _interopRequireWildcard(require("../queries/InvDisplay/displayAgents/displayAgentsIndicators"));

var displayAutomaticIndicators = _interopRequireWildcard(require("../queries/InvDisplay/displayAutomatic/displayAutomaticIndicators"));

var displayOutboundIndicators = _interopRequireWildcard(require("../queries/InvDisplay/displayOutbound/displayOutboundIndicators"));

var displayShow = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayShow"));

var displayMonitorByCalls = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayMonitorByCalls"));

var displayMonitorByAgents = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayMonitorByAgents"));

var displayMonitorByIndicators = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayMonitorByIndicators"));

var displayMonitorByIndicatorsHistoric = _interopRequireWildcard(require("../queries/InvDisplay/displayInbound/displayMonitorByIndicatorsHistoric"));

//MONITOR
module.exports = function (InvDisplay) {
  //**********************INBOUND INDICATORS**********************/
  InvDisplay.displayInboundIndicators =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(userSelection) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", displayInboundIndicators.displayInboundIndicators(userSelection));

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

  InvDisplay.remoteMethod("displayInboundIndicators", {
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
  }); //**********************AGENTS INDICATORS**********************/

  InvDisplay.displayAgentsIndicators =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(userSelection) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", displayAgentsIndicators.displayAgentsIndicators(userSelection));

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

  InvDisplay.remoteMethod("displayAgentsIndicators", {
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

  InvDisplay.displayAutomaticIndicators =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userSelection) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", displayAutomaticIndicators.displayAutomaticIndicators(userSelection));

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

  InvDisplay.remoteMethod("displayAutomaticIndicators", {
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
  }); //**********************OUTBOUND INDICATORS**********************/

  InvDisplay.displayOutboundIndicators =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(userSelection) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", displayOutboundIndicators.displayOutboundIndicators(userSelection));

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

  InvDisplay.remoteMethod("displayOutboundIndicators", {
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
  }); //**********************INBOUND INTERVALS **********************/

  InvDisplay.displayInboundDailyByIntervalReport =
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(userSelection) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", displayInboundDailyByInterval.displayInboundDailyByIntervalReport(userSelection));

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

  InvDisplay.remoteMethod("displayInboundDailyByIntervalReport", {
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
  }); //**********************INBOUND INTERVALS **********************/

  InvDisplay.displayShow =
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(userSelection) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", displayShow.displayShow(userSelection));

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

  InvDisplay.remoteMethod("displayShow", {
    accepts: {
      arg: "userSelection",
      type: "userSelection",
      http: {
        source: "body"
      }
    },
    returns: {
      type: "array",
      root: "true"
    },
    description: ["List of abandoned calls"]
  }); //**********************QUEUE BY CALLS**********************/

  InvDisplay.displayMonitorByCalls =
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(userSelection) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", displayMonitorByCalls.displayMonitorByCalls(userSelection));

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

  InvDisplay.remoteMethod("displayMonitorByCalls", {
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
  }); //**********************QUEUE MONITOR BY AGENTS**********************/

  InvDisplay.displayMonitorByAgents =
  /*#__PURE__*/
  function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8(userSelection) {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", displayMonitorByAgents.displayMonitorByAgents(userSelection));

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

  InvDisplay.remoteMethod("displayMonitorByAgents", {
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
  }); //**********************QUEUE MONITOR BY INDICATORS**********************/

  InvDisplay.displayMonitorByIndicators =
  /*#__PURE__*/
  function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9(userSelection) {
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", displayMonitorByIndicators.displayMonitorByIndicators(userSelection));

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

  InvDisplay.remoteMethod("displayMonitorByIndicators", {
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
  }); //**********************QUEUE MONITOR BY INDICATORS HISTORIC**********************/

  InvDisplay.displayMonitorByIndicatorsHistoric =
  /*#__PURE__*/
  function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee10(userSelection) {
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", displayMonitorByIndicatorsHistoric.displayMonitorByIndicatorsHistoric(userSelection));

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

  InvDisplay.remoteMethod("displayMonitorByIndicatorsHistoric", {
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
  });
};