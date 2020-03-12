"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _executeHistory = require("../execute/execute-history");

var _moment = _interopRequireDefault(require("moment"));

var today = (0, _moment["default"])().format('YYYY-MM-DD');
(0, _executeHistory.loadHistory)();
/************************************************************************ */
// npx babel-node src/sync/etl/load/load_history.js