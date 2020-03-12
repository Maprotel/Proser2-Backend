"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSelectionMenu = userSelectionMenu;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = _interopRequireWildcard(require("../../../../connectors/pool"));

var _moment = _interopRequireDefault(require("moment"));

var _dateFunctions = require("../../../functions/dateFunctions");

function userSelectionMenu(_x) {
  return _userSelectionMenu.apply(this, arguments);
}

function _userSelectionMenu() {
  _userSelectionMenu = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee28(userSelection) {
    var resumeError, resultFinal, title_Menu, _title_Menu, entity_selection_Menu, _entity_selection_Menu, options_Menu, _options_Menu, legend_Menu, _legend_Menu, mode_Menu, _mode_Menu, type_Menu, _type_Menu, start_date_Menu, _start_date_Menu, end_date_Menu, _end_date_Menu, start_time_Menu, _start_time_Menu, end_time_Menu, _end_time_Menu, login_Menu, _login_Menu, auxiliar_Menu, _auxiliar_Menu, asignation_Menu, _asignation_Menu, client_Menu, _client_Menu, queue_Menu, _queue_Menu, service_Menu, _service_Menu, campaign_Menu, _campaign_Menu, supervisor_Menu, _supervisor_Menu, agent_Menu, _agent_Menu, role_Menu, _role_Menu, schedule_Menu, _schedule_Menu, last_minutes_Menu, _last_minutes_Menu, interval_Menu, _interval_Menu, groupBy_Menu, _groupBy_Menu, orderBy_Menu, _orderBy_Menu, limitBy_Menu, _limitBy_Menu, sample_Menu, _sample_Menu, title, entity_selection, options, legend, mode, type, start_date, end_date, start_time, end_time, login, auxiliar, assignation, client, queue, service, campaign, supervisor, agent, role, schedule, last_minutes, interval, status, groupBy, orderBy, limitBy;

    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _sample_Menu = function _ref54() {
              _sample_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee27(userSelection) {
                var internalFunctionName, query, functionResult;
                return _regenerator["default"].wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        internalFunctionName = "sample_Menu";
                        query = "\n    SELECT\n    inv_agent_id as id, inv_agent_name as name\n    FROM\n    ".concat(mainTable, "\n\n        ");
                        _context27.prev = 2;
                        _context27.next = 5;
                        return pool.destinyInventory.query(query);

                      case 5:
                        functionResult = _context27.sent;
                        return _context27.abrupt("return", functionResult);

                      case 9:
                        _context27.prev = 9;
                        _context27.t0 = _context27["catch"](2);
                        resumeError = true;
                        return _context27.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context27.t0
                        });

                      case 13:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27, null, [[2, 9]]);
              }));
              return _sample_Menu.apply(this, arguments);
            };

            sample_Menu = function _ref53(_x28) {
              return _sample_Menu.apply(this, arguments);
            };

            _limitBy_Menu = function _ref52() {
              _limitBy_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee26(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee26$(_context26) {
                  while (1) {
                    switch (_context26.prev = _context26.next) {
                      case 0:
                        internalFunctionName = "limitBy_Menu";
                        _context26.prev = 1;
                        functionResult = userSelection.limitBy;
                        return _context26.abrupt("return", functionResult);

                      case 6:
                        _context26.prev = 6;
                        _context26.t0 = _context26["catch"](1);
                        resumeError = true;
                        return _context26.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context26.t0
                        });

                      case 10:
                      case "end":
                        return _context26.stop();
                    }
                  }
                }, _callee26, null, [[1, 6]]);
              }));
              return _limitBy_Menu.apply(this, arguments);
            };

            limitBy_Menu = function _ref51(_x27) {
              return _limitBy_Menu.apply(this, arguments);
            };

            _orderBy_Menu = function _ref50() {
              _orderBy_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee25(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        internalFunctionName = "orderBy_Menu";
                        _context25.prev = 1;
                        functionResult = userSelection.orderBy;
                        return _context25.abrupt("return", functionResult);

                      case 6:
                        _context25.prev = 6;
                        _context25.t0 = _context25["catch"](1);
                        resumeError = true;
                        return _context25.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context25.t0
                        });

                      case 10:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25, null, [[1, 6]]);
              }));
              return _orderBy_Menu.apply(this, arguments);
            };

            orderBy_Menu = function _ref49(_x26) {
              return _orderBy_Menu.apply(this, arguments);
            };

            _groupBy_Menu = function _ref48() {
              _groupBy_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee24(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        internalFunctionName = "groupBy_Menu";
                        _context24.prev = 1;
                        functionResult = userSelection.groupBy;
                        return _context24.abrupt("return", functionResult);

                      case 6:
                        _context24.prev = 6;
                        _context24.t0 = _context24["catch"](1);
                        resumeError = true;
                        return _context24.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context24.t0
                        });

                      case 10:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24, null, [[1, 6]]);
              }));
              return _groupBy_Menu.apply(this, arguments);
            };

            groupBy_Menu = function _ref47(_x25) {
              return _groupBy_Menu.apply(this, arguments);
            };

            _interval_Menu = function _ref46() {
              _interval_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee23(userSelection) {
                var internalFunctionName, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        internalFunctionName = "interval_Menu";
                        query = "\n    SELECT\n    JSON_OBJECT(\"id\", aux_interval_id, \"name\", aux_interval_name, \"value\", aux_interval_value, \"minute\", aux_interval_minutes ) as data_interval\n    FROM\n    AuxInterval\n    \n        ";
                        _context23.prev = 2;
                        _context23.next = 5;
                        return pool.destinyInventory.query(query);

                      case 5:
                        functionResultTemp = _context23.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.data_interval);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name,
                            value: x.value,
                            minute: x.minute
                          };
                        });
                        return _context23.abrupt("return", functionResult);

                      case 10:
                        _context23.prev = 10;
                        _context23.t0 = _context23["catch"](2);
                        resumeError = true;
                        return _context23.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context23.t0
                        });

                      case 14:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, null, [[2, 10]]);
              }));
              return _interval_Menu.apply(this, arguments);
            };

            interval_Menu = function _ref45(_x24) {
              return _interval_Menu.apply(this, arguments);
            };

            _last_minutes_Menu = function _ref44() {
              _last_minutes_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee22(userSelection) {
                var internalFunctionName, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        internalFunctionName = "last_minutes_Menu";
                        query = "\n      SELECT\n      JSON_OBJECT(\"id\", aux_interval_id, \"name\", aux_interval_name, \"value\", aux_interval_value) as last_minutes\n      FROM\n      AuxInterval\n      \n          ";
                        _context22.prev = 2;
                        _context22.next = 5;
                        return pool.destinyInventory.query(query);

                      case 5:
                        functionResultTemp = _context22.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.last_minutes);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name,
                            value: x.value
                          };
                        });
                        return _context22.abrupt("return", functionResult);

                      case 10:
                        _context22.prev = 10;
                        _context22.t0 = _context22["catch"](2);
                        resumeError = true;
                        return _context22.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context22.t0
                        });

                      case 14:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, null, [[2, 10]]);
              }));
              return _last_minutes_Menu.apply(this, arguments);
            };

            last_minutes_Menu = function _ref43(_x23) {
              return _last_minutes_Menu.apply(this, arguments);
            };

            _schedule_Menu = function _ref42() {
              _schedule_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee21(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        internalFunctionName = "schedule_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_schedule_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n    JSON_OBJECT(\"id\", inv_schedule_id, \"name\", inv_schedule_name) as schedule\n      \n    FROM\n      InvSchedule\n         \n    WHERE 1\n    ".concat(status_field, "\n            \n      GROUP BY schedule\n\n          ");
                        _context21.prev = 4;
                        _context21.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context21.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.schedule);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context21.abrupt("return", functionResult);

                      case 12:
                        _context21.prev = 12;
                        _context21.t0 = _context21["catch"](4);
                        resumeError = true;
                        return _context21.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context21.t0
                        });

                      case 16:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21, null, [[4, 12]]);
              }));
              return _schedule_Menu.apply(this, arguments);
            };

            schedule_Menu = function _ref41(_x22) {
              return _schedule_Menu.apply(this, arguments);
            };

            _role_Menu = function _ref40() {
              _role_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee20(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        internalFunctionName = "role_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_agentrole_status = '".concat(statusParse.status.value, "'");
                        query = "\n      SELECT\n      \n      JSON_OBJECT(\"id\", inv_agentrole_id, \"name\", inv_agentrole_name) as role\n      \n      FROM\n      InvAgentRole\n\n      WHERE 1\n      ".concat(status_field, "\n          ");
                        _context20.prev = 4;
                        _context20.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context20.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.role);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context20.abrupt("return", functionResult);

                      case 12:
                        _context20.prev = 12;
                        _context20.t0 = _context20["catch"](4);
                        resumeError = true;
                        return _context20.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context20.t0
                        });

                      case 16:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20, null, [[4, 12]]);
              }));
              return _role_Menu.apply(this, arguments);
            };

            role_Menu = function _ref39(_x21) {
              return _role_Menu.apply(this, arguments);
            };

            _agent_Menu = function _ref38() {
              _agent_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee19(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        internalFunctionName = "agent_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_agent_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n    \n    JSON_OBJECT(\"id\", inv_agent_id, \"name\", inv_agent_name) as agent\n    \n    FROM\n      InvAgent\n\n    WHERE 1\n    ".concat(status_field, "\n          \n    GROUP BY agent\n\n          ");
                        _context19.prev = 4;
                        _context19.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context19.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.agent);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context19.abrupt("return", functionResult);

                      case 12:
                        _context19.prev = 12;
                        _context19.t0 = _context19["catch"](4);
                        resumeError = true;
                        return _context19.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context19.t0
                        });

                      case 16:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, null, [[4, 12]]);
              }));
              return _agent_Menu.apply(this, arguments);
            };

            agent_Menu = function _ref37(_x20) {
              return _agent_Menu.apply(this, arguments);
            };

            _supervisor_Menu = function _ref36() {
              _supervisor_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee18(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        internalFunctionName = "supervisor_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_supervisor_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n    JSON_OBJECT(\"id\", inv_supervisor_id, \"name\", inv_supervisor_name) as supervisor\n    \n    FROM\n      InvSupervisor\n    \n\n    WHERE 1\n    ".concat(status_field, "\n          \n    GROUP BY supervisor\n        ");
                        _context18.prev = 4;
                        _context18.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context18.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.supervisor);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context18.abrupt("return", functionResult);

                      case 12:
                        _context18.prev = 12;
                        _context18.t0 = _context18["catch"](4);
                        resumeError = true;
                        return _context18.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context18.t0
                        });

                      case 16:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, null, [[4, 12]]);
              }));
              return _supervisor_Menu.apply(this, arguments);
            };

            supervisor_Menu = function _ref35(_x19) {
              return _supervisor_Menu.apply(this, arguments);
            };

            _campaign_Menu = function _ref34() {
              _campaign_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee17(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        internalFunctionName = "campaign_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_campaign_status = '".concat(statusParse.status.value, "'");
                        query = "\n      SELECT\n        JSON_OBJECT(\"id\", inv_campaign_id, \"name\", inv_campaign_name) as campaign\n      \n      FROM\n        InvCampaign\n\n      \n      WHERE 1\n      ".concat(status_field, "\n      \n      GROUP BY campaign\n          ");
                        _context17.prev = 4;
                        _context17.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context17.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.campaign);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context17.abrupt("return", functionResult);

                      case 12:
                        _context17.prev = 12;
                        _context17.t0 = _context17["catch"](4);
                        resumeError = true;
                        return _context17.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context17.t0
                        });

                      case 16:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, null, [[4, 12]]);
              }));
              return _campaign_Menu.apply(this, arguments);
            };

            campaign_Menu = function _ref33(_x18) {
              return _campaign_Menu.apply(this, arguments);
            };

            _service_Menu = function _ref32() {
              _service_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee16(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        internalFunctionName = "service_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_service_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n      JSON_OBJECT(\"id\", inv_service_id, \"name\", inv_service_name) as service\n    \n    FROM\n      InvService\n            \n    WHERE 1\n    ".concat(status_field, "\n            \n      GROUP BY service\n\n          ");
                        _context16.prev = 4;
                        _context16.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context16.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.service);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context16.abrupt("return", functionResult);

                      case 12:
                        _context16.prev = 12;
                        _context16.t0 = _context16["catch"](4);
                        resumeError = true;
                        return _context16.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context16.t0
                        });

                      case 16:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, null, [[4, 12]]);
              }));
              return _service_Menu.apply(this, arguments);
            };

            service_Menu = function _ref31(_x17) {
              return _service_Menu.apply(this, arguments);
            };

            _queue_Menu = function _ref30() {
              _queue_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee15(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        internalFunctionName = "queue_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_queue_status = '".concat(statusParse.status.value, "'");
                        query = "\n      SELECT\n        JSON_OBJECT(\"id\", inv_queue_id, \"name\", CONCAT(inv_queue_number, \"-\", inv_queue_name)) as queue\n      \n      FROM\n        InvQueue\n      \n      WHERE 1\n      ".concat(status_field, "\n      \n      GROUP BY queue\n\n          ");
                        _context15.prev = 4;
                        _context15.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context15.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.queue);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context15.abrupt("return", functionResult);

                      case 12:
                        _context15.prev = 12;
                        _context15.t0 = _context15["catch"](4);
                        resumeError = true;
                        return _context15.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context15.t0
                        });

                      case 16:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, null, [[4, 12]]);
              }));
              return _queue_Menu.apply(this, arguments);
            };

            queue_Menu = function _ref29(_x16) {
              return _queue_Menu.apply(this, arguments);
            };

            _client_Menu = function _ref28() {
              _client_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee14(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        internalFunctionName = "client_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_client_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n      JSON_OBJECT(\"id\", inv_client_id, \"name\", inv_client_name) as client\n      \n    FROM\n      InvClient\n               \n    WHERE 1\n      ".concat(status_field, "  \n    \n      GROUP BY client\n          ");
                        _context14.prev = 4;
                        _context14.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResultTemp = _context14.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.client);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name
                          };
                        });
                        return _context14.abrupt("return", functionResult);

                      case 12:
                        _context14.prev = 12;
                        _context14.t0 = _context14["catch"](4);
                        resumeError = true;
                        return _context14.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context14.t0
                        });

                      case 16:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, null, [[4, 12]]);
              }));
              return _client_Menu.apply(this, arguments);
            };

            client_Menu = function _ref27(_x15) {
              return _client_Menu.apply(this, arguments);
            };

            _asignation_Menu = function _ref26() {
              _asignation_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee13(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResult;
                return _regenerator["default"].wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        internalFunctionName = "asignation_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_break_status = '".concat(statusParse.status.value, "'");
                        query = "\n    SELECT\n    inv_break_id as id, inv_break_name as name\n    FROM\n    InvBreak\n    \n    WHERE 1\n    AND\n    inv_break_productivity = 1\n    AND\n    (inv_break_id is not null OR inv_break_id <> 0)\n    ".concat(status_field, "\n\n          ");
                        _context13.prev = 4;
                        _context13.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResult = _context13.sent;
                        return _context13.abrupt("return", functionResult);

                      case 11:
                        _context13.prev = 11;
                        _context13.t0 = _context13["catch"](4);
                        resumeError = true;
                        return _context13.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context13.t0
                        });

                      case 15:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, null, [[4, 11]]);
              }));
              return _asignation_Menu.apply(this, arguments);
            };

            asignation_Menu = function _ref25(_x14) {
              return _asignation_Menu.apply(this, arguments);
            };

            _auxiliar_Menu = function _ref24() {
              _auxiliar_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee12(userSelection) {
                var internalFunctionName, statusParse, status_field, query, functionResult;
                return _regenerator["default"].wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        internalFunctionName = "auxiliar_Menu";
                        statusParse = JSON.parse(JSON.stringify(userSelection));
                        status_field = statusParse.status.value === "All" || statusParse.status.value === "" ? "AND 1" : "AND inv_break_status = '".concat(statusParse.status.value, "'");
                        query = "\n      SELECT\n      inv_break_id as id, inv_break_name as name\n      FROM\n      InvBreak\n      \n      WHERE 1\n      AND\n      inv_break_productivity = 0\n      AND\n      (inv_break_id is not null OR inv_break_id <> 0)\n      ".concat(status_field, "\n\n          ");
                        _context12.prev = 4;
                        _context12.next = 7;
                        return pool.destinyInventory.query(query);

                      case 7:
                        functionResult = _context12.sent;
                        return _context12.abrupt("return", functionResult);

                      case 11:
                        _context12.prev = 11;
                        _context12.t0 = _context12["catch"](4);
                        resumeError = true;
                        return _context12.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context12.t0
                        });

                      case 15:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[4, 11]]);
              }));
              return _auxiliar_Menu.apply(this, arguments);
            };

            auxiliar_Menu = function _ref23(_x13) {
              return _auxiliar_Menu.apply(this, arguments);
            };

            _login_Menu = function _ref22() {
              _login_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        internalFunctionName = "login_Menu";
                        _context11.prev = 1;
                        functionResult = userSelection.login;
                        return _context11.abrupt("return", functionResult);

                      case 6:
                        _context11.prev = 6;
                        _context11.t0 = _context11["catch"](1);
                        resumeError = true;
                        return _context11.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context11.t0
                        });

                      case 10:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[1, 6]]);
              }));
              return _login_Menu.apply(this, arguments);
            };

            login_Menu = function _ref21(_x12) {
              return _login_Menu.apply(this, arguments);
            };

            _end_time_Menu = function _ref20() {
              _end_time_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee10(userSelection) {
                var internalFunctionName, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        internalFunctionName = "end_time_Menu";
                        query = "\n    SELECT\n    JSON_OBJECT(\"id\", aux_hour_id, \"name\", aux_hour_name, \"value\", aux_hour_value) as end_time\n    FROM\n    AuxHour\n        ";
                        _context10.prev = 2;
                        _context10.next = 5;
                        return pool.destinyInventory.query(query);

                      case 5:
                        functionResultTemp = _context10.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.end_time);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name,
                            value: x.value
                          };
                        });
                        return _context10.abrupt("return", functionResult);

                      case 10:
                        _context10.prev = 10;
                        _context10.t0 = _context10["catch"](2);
                        resumeError = true;
                        return _context10.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context10.t0
                        });

                      case 14:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[2, 10]]);
              }));
              return _end_time_Menu.apply(this, arguments);
            };

            end_time_Menu = function _ref19(_x11) {
              return _end_time_Menu.apply(this, arguments);
            };

            _start_time_Menu = function _ref18() {
              _start_time_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(userSelection) {
                var internalFunctionName, query, functionResultTemp, functionResult;
                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        internalFunctionName = "start_time_Menu";
                        query = "\n    SELECT\n    JSON_OBJECT(\"id\", aux_hour_id, \"name\", aux_hour_name, \"value\", aux_hour_value) as start_time\n    FROM\n    AuxHour\n        ";
                        _context9.prev = 2;
                        _context9.next = 5;
                        return pool.destinyInventory.query(query);

                      case 5:
                        functionResultTemp = _context9.sent;
                        functionResult = functionResultTemp.map(function (x) {
                          return JSON.parse(x.start_time);
                        }).map(function (x) {
                          return {
                            id: x.id,
                            name: x.name,
                            value: x.value
                          };
                        });
                        return _context9.abrupt("return", functionResult);

                      case 10:
                        _context9.prev = 10;
                        _context9.t0 = _context9["catch"](2);
                        resumeError = true;
                        return _context9.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context9.t0
                        });

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[2, 10]]);
              }));
              return _start_time_Menu.apply(this, arguments);
            };

            start_time_Menu = function _ref17(_x10) {
              return _start_time_Menu.apply(this, arguments);
            };

            _end_date_Menu = function _ref16() {
              _end_date_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee8(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        internalFunctionName = "end_date_Menu";
                        _context8.prev = 1;
                        functionResult = userSelection.end_date;
                        return _context8.abrupt("return", functionResult);

                      case 6:
                        _context8.prev = 6;
                        _context8.t0 = _context8["catch"](1);
                        resumeError = true;
                        return _context8.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context8.t0
                        });

                      case 10:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[1, 6]]);
              }));
              return _end_date_Menu.apply(this, arguments);
            };

            end_date_Menu = function _ref15(_x9) {
              return _end_date_Menu.apply(this, arguments);
            };

            _start_date_Menu = function _ref14() {
              _start_date_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee7(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        internalFunctionName = "start_date_Menu";
                        _context7.prev = 1;
                        functionResult = (0, _dateFunctions.objectDateToTextDate)(userSelection.start_date);
                        return _context7.abrupt("return", functionResult);

                      case 6:
                        _context7.prev = 6;
                        _context7.t0 = _context7["catch"](1);
                        resumeError = true;
                        return _context7.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context7.t0
                        });

                      case 10:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 6]]);
              }));
              return _start_date_Menu.apply(this, arguments);
            };

            start_date_Menu = function _ref13(_x8) {
              return _start_date_Menu.apply(this, arguments);
            };

            _type_Menu = function _ref12() {
              _type_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee6(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        internalFunctionName = "type_Menu";
                        _context6.prev = 1;
                        functionResult = userSelection.type;
                        return _context6.abrupt("return", functionResult);

                      case 6:
                        _context6.prev = 6;
                        _context6.t0 = _context6["catch"](1);
                        resumeError = true;
                        return _context6.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context6.t0
                        });

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[1, 6]]);
              }));
              return _type_Menu.apply(this, arguments);
            };

            type_Menu = function _ref11(_x7) {
              return _type_Menu.apply(this, arguments);
            };

            _mode_Menu = function _ref10() {
              _mode_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(userSelection) {
                var internalFunctionName, mode, functionResult;
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        internalFunctionName = "mode_Menu";
                        mode = [{
                          id: 0,
                          name: "Actual",
                          value: true
                        }, {
                          id: 0,
                          name: "Histórico",
                          value: false
                        }];
                        _context5.prev = 2;
                        functionResult = mode;
                        return _context5.abrupt("return", functionResult);

                      case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5["catch"](2);
                        resumeError = true;
                        return _context5.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context5.t0
                        });

                      case 11:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[2, 7]]);
              }));
              return _mode_Menu.apply(this, arguments);
            };

            mode_Menu = function _ref9(_x6) {
              return _mode_Menu.apply(this, arguments);
            };

            _legend_Menu = function _ref8() {
              _legend_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee4(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        internalFunctionName = "legend_Menu";
                        _context4.prev = 1;
                        functionResult = userSelection.legend;
                        return _context4.abrupt("return", functionResult);

                      case 6:
                        _context4.prev = 6;
                        _context4.t0 = _context4["catch"](1);
                        resumeError = true;
                        return _context4.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context4.t0
                        });

                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 6]]);
              }));
              return _legend_Menu.apply(this, arguments);
            };

            legend_Menu = function _ref7(_x5) {
              return _legend_Menu.apply(this, arguments);
            };

            _options_Menu = function _ref6() {
              _options_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        internalFunctionName = "options_Menu";
                        _context3.prev = 1;
                        functionResult = userSelection.options;
                        return _context3.abrupt("return", functionResult);

                      case 6:
                        _context3.prev = 6;
                        _context3.t0 = _context3["catch"](1);
                        resumeError = true;
                        return _context3.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context3.t0
                        });

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1, 6]]);
              }));
              return _options_Menu.apply(this, arguments);
            };

            options_Menu = function _ref5(_x4) {
              return _options_Menu.apply(this, arguments);
            };

            _entity_selection_Menu = function _ref4() {
              _entity_selection_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        internalFunctionName = "entity_selection_Menu";
                        _context2.prev = 1;
                        functionResult = userSelection.entity_selection;
                        return _context2.abrupt("return", functionResult);

                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](1);
                        resumeError = true;
                        return _context2.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context2.t0
                        });

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 6]]);
              }));
              return _entity_selection_Menu.apply(this, arguments);
            };

            entity_selection_Menu = function _ref3(_x3) {
              return _entity_selection_Menu.apply(this, arguments);
            };

            _title_Menu = function _ref2() {
              _title_Menu = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(userSelection) {
                var internalFunctionName, functionResult;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        internalFunctionName = "title_Menu";
                        _context.prev = 1;
                        functionResult = userSelection.title;
                        return _context.abrupt("return", functionResult);

                      case 6:
                        _context.prev = 6;
                        _context.t0 = _context["catch"](1);
                        resumeError = true;
                        return _context.abrupt("return", {
                          error: "userSelection_Menu - ".concat(internalFunctionName, ": ") + _context.t0
                        });

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 6]]);
              }));
              return _title_Menu.apply(this, arguments);
            };

            title_Menu = function _ref(_x2) {
              return _title_Menu.apply(this, arguments);
            };

            resumeError = null;
            resultFinal = userSelection;

            /**************** */

            /********************************************************************************* */
            title = userSelection.title;
            entity_selection = userSelection.title;
            options = userSelection.options;
            legend = userSelection.legend;
            _context28.next = 62;
            return mode_Menu(userSelection);

          case 62:
            mode = _context28.sent;
            _context28.next = 65;
            return type_Menu(userSelection);

          case 65:
            type = _context28.sent;
            _context28.next = 68;
            return start_date_Menu(userSelection);

          case 68:
            start_date = _context28.sent;
            _context28.next = 71;
            return end_date_Menu(userSelection);

          case 71:
            end_date = _context28.sent;
            _context28.next = 74;
            return start_time_Menu(userSelection);

          case 74:
            start_time = _context28.sent;
            _context28.next = 77;
            return end_time_Menu(userSelection);

          case 77:
            end_time = _context28.sent;
            _context28.next = 80;
            return login_Menu(userSelection);

          case 80:
            login = _context28.sent;
            _context28.next = 83;
            return auxiliar_Menu(userSelection);

          case 83:
            auxiliar = _context28.sent;
            _context28.next = 86;
            return asignation_Menu(userSelection);

          case 86:
            assignation = _context28.sent;
            _context28.next = 89;
            return client_Menu(userSelection);

          case 89:
            client = _context28.sent;
            _context28.next = 92;
            return queue_Menu(userSelection);

          case 92:
            queue = _context28.sent;
            _context28.next = 95;
            return service_Menu(userSelection);

          case 95:
            service = _context28.sent;
            _context28.next = 98;
            return campaign_Menu(userSelection);

          case 98:
            campaign = _context28.sent;
            _context28.next = 101;
            return supervisor_Menu(userSelection);

          case 101:
            supervisor = _context28.sent;
            _context28.next = 104;
            return agent_Menu(userSelection);

          case 104:
            agent = _context28.sent;
            _context28.next = 107;
            return role_Menu(userSelection);

          case 107:
            role = _context28.sent;
            _context28.next = 110;
            return schedule_Menu(userSelection);

          case 110:
            schedule = _context28.sent;
            _context28.next = 113;
            return last_minutes_Menu(userSelection);

          case 113:
            last_minutes = _context28.sent;
            _context28.next = 116;
            return interval_Menu(userSelection);

          case 116:
            interval = _context28.sent;
            status = [{
              id: 0,
              name: "Activo",
              value: "A"
            }, {
              id: 1,
              name: "Inactivo",
              value: "I"
            }, {
              id: 2,
              name: "Todos",
              value: "All"
            }];
            groupBy = userSelection.groupBy;
            orderBy = userSelection.groupBy;
            limitBy = userSelection.groupBy;
            resultFinal = {
              title: title,
              entity_selection: entity_selection,
              options: options,
              legend: legend,
              mode: mode,
              type: type,
              start_date: start_date,
              end_date: end_date,
              start_time: start_time,
              end_time: end_time,
              login: login,
              auxiliar: auxiliar,
              assignation: assignation,
              client: client,
              queue: queue,
              service: service,
              campaign: campaign,
              supervisor: supervisor,
              agent: agent,
              role: role,
              schedule: schedule,
              last_minutes: last_minutes,
              interval: interval,
              groupBy: groupBy,
              orderBy: orderBy,
              limitBy: limitBy,
              status: status
            };

            if (resumeError) {
              _context28.next = 126;
              break;
            }

            return _context28.abrupt("return", resultFinal);

          case 126:
            return _context28.abrupt("return", {
              error: resultFinal
            });

          case 127:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  return _userSelectionMenu.apply(this, arguments);
}