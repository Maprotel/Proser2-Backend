"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailQuery = detailQuery;
exports.totalQuery = totalQuery;

// let input = {
//     field:[
//         "(cdr_dates_week_day_name) AS 'Dia'",
//         "(cdr_date) AS 'Fecha Desde'",
//         "MIN(cdr_dates_time) AS 'Hora inicio'",
//         "MAX(cdr_dates_time) AS 'Hora final'",
//         "SUM(cdr_call_received) AS 'Llamadas recibidas'",
//         "SUM(cdr_call_abandoned) AS 'Llamadas abandonadas'",
//         "SUM(cdr_call_atended) AS 'Llamadas atendidas'",
//         "SUM(cdr_call_short) AS 'Llamadas cortas'",
//         "SUM(cdr_call_before_time) AS 'Llamadas antes de 20'",
//         "SUM(cdr_call_before_time) AS 'Llamadas colgadas'",
//         "SUM(cdr_call_before_time)/SUM(cdr_call_received) AS 'Nivel servicios'",
//         "SUM(cdr_call_atended)/SUM(cdr_call_received) AS 'Nivel atencion'",
//         "SUM(cdr_call_abandoned)/SUM(cdr_call_received) AS 'Nivel abandono'",
//         "SUM(cdr_qlog_secs_at_operation) AS 'Segundos operacion'",
//         "SEC_TO_TIME(SUM(cdr_qlog_secs_at_operation)) AS 'Tiempo operacion'",
//         "SUM(cdr_duration_wait) AS 'Segundos espera'"
//     ],
//     table:[
//         "MainCdr"
//     ],
//     filter:[
//         "cdr_date='2018-11-23'"
//     ],
//     group:[
//         "cdr_dates_week_day_name"
//     ],
//     order:[
//     ],
//     limit:[
//     ]
// };
function detailQuery(arg) {
  var result = null;
  var field = validateField(arg) ? arg.field : "";
  var table = validateTable(arg) ? arg.table : "";
  var filter = validateFilter(arg) ? arg.filter : "";
  var staticFilter = validatedatabaseFilter(arg) ? arg.databaseFilter : "1";
  var group = validateGroup(arg) ? arg.group : "";
  var order = validateOrder(arg) ? arg.order : "";
  var limit = validateLimit(arg) ? arg.limit : "";
  var filterBy = validateFilter(arg) ? "WHERE" : "";
  var groupBy = validateGroup(arg) ? "GROUP BY" : "";
  var orderBy = validateOrder(arg) ? "ORDER BY" : "";
  var limitBy = validateLimit(arg) ? "LIMIT" : "";

  if (field && table) {
    var queryDetail = "\n    \n    SELECT \"DETAIL\" as row, ".concat(field, " FROM ").concat(table, "\n    ").concat(filterBy, " ").concat(staticFilter, " AND ").concat(filter, " ").concat(groupBy, " ").concat(group, "\n    ").concat(orderBy, " ").concat(order, " ").concat(limitBy, " ").concat(limit, "\n    ");
    result = queryDetail;
  }

  return result;
}

function totalQuery(arg1, arg2) {
  var result = null;
  var fieldTotal = arg1.total;
  var filterBy = validateFilter(arg1) ? "WHERE" : "";
  var filter = validateFilter(arg1) ? arg1.filter : "";
  var queryDetail = arg2;

  if (fieldTotal) {
    var queryTotal = "\n    \n    SELECT \"TOTAL\" as row, ".concat(fieldTotal, " FROM (").concat(queryDetail, ") as detail\n    ");
    result = queryTotal;
  }

  return result;
}

function validateField(arg) {
  var result = false;

  if (arg.field) {
    if (arg.field.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validateTable(arg) {
  var result = false;

  if (arg.table) {
    if (arg.table.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validateFilter(arg) {
  var result = false;

  if (arg.filter) {
    if (arg.filter.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validatedatabaseFilter(arg) {
  var result = false;

  if (arg.databaseFilter) {
    if (arg.databaseFilter.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validateGroup(arg) {
  var result = false;

  if (arg.group) {
    if (arg.group.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validateOrder(arg) {
  var result = false;

  if (arg.order) {
    if (arg.order.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}

function validateLimit(arg) {
  var result = false;

  if (arg.limit) {
    if (arg.limit.length > 0) {
      return true;
    } else {
      result = false;
    }
  }

  return result;
}