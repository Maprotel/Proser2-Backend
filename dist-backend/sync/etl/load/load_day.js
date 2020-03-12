"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _executeDate = require("../execute/execute-date");

var _moment = _interopRequireDefault(require("moment"));

var today = (0, _moment["default"])().format('YYYY-MM-DD');
(0, _executeDate.loadOneDay)(today);
/************************************************************************ */
// npx babel-node src/sync/etl/load/load_day.js