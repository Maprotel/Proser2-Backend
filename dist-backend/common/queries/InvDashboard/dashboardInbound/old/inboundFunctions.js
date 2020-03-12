"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqlDateQueries = sqlDateQueries;
exports.sqlIntervalFields = sqlIntervalFields;

function sqlDateQueries(filter, field) {
  var result = filter;

  if (filter && filter.last_minutes !== '') {
    result = "\n        AND\n        -- FILTER BY DATE\n        DATE(".concat(field, ") between '").concat(filter.start_date, "' AND '").concat(filter.end_date, "'\n        -- FILTER BY TIME OF THE DAY\n        AND\n        TIME(").concat(field, ") between '").concat(filter.start_time, "' AND '").concat(filter.end_time, "'\n        -- FILTER BY LAST MINUTES\n        AND\n        TIME(").concat(field, ") between SUBTIME(NOW(), '").concat(filter.last_minutes, "' ) AND NOW()");
  } else {
    result = "\n        AND\n        -- FILTER BY DATE\n        DATE(".concat(field, ") between '").concat(filter.start_date, "' AND '").concat(filter.end_date, "'\n        -- FILTER BY TIME OF THE DAY\n        AND\n        TIME(").concat(field, ") between '").concat(filter.start_time, "' AND '").concat(filter.end_time, "'");
  }

  return result;
}

function sqlIntervalFields(filter, field, interval) {
  var result = ",1";

  if (filter && field && interval) {
    return "\n    ,(ROUND(ROUND(TIME_TO_SEC(TIME(audit_datetime_init)) /60, 0)/".concat(interval, ", 0) - 1) AS interval_init\n    ,(ROUND(ROUND(TIME_TO_SEC(TIME(audit_datetime_init)) /60, 0)/").concat(interval, ", 0)) AS interval_finish\n\n    ,SEC_TO_TIME((ROUND(ROUND(TIME_TO_SEC(TIME(audit_datetime_init)) /60, 0)/").concat(interval, ", 0) - 1) *").concat(interval, " *60) AS interval_start\n    ,SEC_TO_TIME((ROUND(ROUND(TIME_TO_SEC(TIME(audit_datetime_init)) /60, 0)/").concat(interval, ", 0)) *").concat(interval, " *60) AS interval_end\n    ");
  }

  return result;
}