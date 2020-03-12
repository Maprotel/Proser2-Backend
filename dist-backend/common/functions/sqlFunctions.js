"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateAndTimeSqlQuery = dateAndTimeSqlQuery;
exports.dateAndTimeSqlQueryRealTime = dateAndTimeSqlQueryRealTime;
exports.arrayToSqlQuery = arrayToSqlQuery;
exports.objectToSqlQuery = objectToSqlQuery;
exports.arrayToSqlQueryOr = arrayToSqlQueryOr;
exports.arrayToJsonSqlQuery = arrayToJsonSqlQuery;
exports.objectToJsonSqlQuery = objectToJsonSqlQuery;
exports.sqlIntervalSqlQuery = sqlIntervalSqlQuery;
exports.sqlIntervalGroupSqlQuery = sqlIntervalGroupSqlQuery;
exports.sqlIntervalGroupSqlQueryToIndicators = sqlIntervalGroupSqlQueryToIndicators;
exports.sqlModalView = sqlModalView;

var _dateFunctions = require("./dateFunctions");

var _moment = _interopRequireDefault(require("moment"));

function dateAndTimeSqlQuery(userSelection, datetime_init_field_name, datetime_end_field_name) {
  /*
   * returns sql where conditions related to date, time and last minutes
   */
  if (!datetime_end_field_name) {
    datetime_end_field_name = datetime_init_field_name;
  }

  var result = ""; // convert dates to string

  var start_date = (0, _dateFunctions.objectDateToTextDate)(userSelection.start_date);
  var end_date = (0, _dateFunctions.objectDateToTextDate)(userSelection.end_date); // convert times to string

  var start_time = (0, _dateFunctions.valueFromObject)(userSelection.start_time, "00:00:00");
  var end_time = (0, _dateFunctions.valueFromObject)(userSelection.end_time, "24:00:00");

  if (userSelection.last_minutes) {
    var hms = userSelection.last_minutes.value;
    var a = hms.split(":");
    var minutes = +a[0] * 60 + +a[1];
    var start_time_last_minutes = (0, _moment["default"])().subtract(minutes, "minutes").format("HH:mm:ss");
    var end_time_last_minutes = (0, _moment["default"])().format("HH:mm:ss");
    start_time = start_time_last_minutes;
    end_time = end_time_last_minutes;
  } // create sql queries


  var date = "\n  AND (\n    DATE(".concat(datetime_init_field_name, ") BETWEEN '").concat(start_date, "' AND '").concat(end_date, "'\n    OR\n    DATE(").concat(datetime_end_field_name, ") BETWEEN '").concat(start_date, "' AND '").concat(end_date, "'\n  ) ");
  var time = "AND TIME_TO_SEC(TIME(".concat(datetime_init_field_name, ")) >= TIME_TO_SEC('").concat(start_time, "')\n  AND  TIME_TO_SEC(TIME(").concat(datetime_init_field_name, ")) < TIME_TO_SEC('").concat(end_time, "')");
  result = date + "\n" + time + "\n";
  return result;
}
/******************************************************************** */


function dateAndTimeSqlQueryRealTime(userSelection, datetime_init_field_name, datetime_end_field_name) {
  /*
   * returns sql where conditions related to date, time and last minutes
   */
  if (!datetime_end_field_name) {
    datetime_end_field_name = datetime_init_field_name;
  }

  var result = ""; // convert dates to string

  var start_date = (0, _dateFunctions.objectDateToTextDate)(userSelection.current_date);
  var end_date = (0, _dateFunctions.objectDateToTextDate)(userSelection.current_date); // convert times to string

  var start_time = (0, _dateFunctions.valueFromObject)(userSelection.start_time, "00:00:00");
  var end_time = (0, _dateFunctions.valueFromObject)(userSelection.end_time, "24:00:00");

  if (userSelection.last_minutes) {
    var hms = userSelection.last_minutes.value;
    var a = hms.split(":");
    var minutes = +a[0] * 60 + +a[1];
    var start_time_last_minutes = (0, _moment["default"])().subtract(minutes, "minutes").format("HH:mm:ss");
    var end_time_last_minutes = (0, _moment["default"])().format("HH:mm:ss");
    start_time = start_time_last_minutes;
    end_time = end_time_last_minutes;
  } // create sql queries


  var date = "\n  AND (\n    DATE(".concat(datetime_init_field_name, ") BETWEEN '").concat(start_date, "' AND '").concat(end_date, "'\n    OR\n    DATE(").concat(datetime_end_field_name, ") BETWEEN '").concat(start_date, "' AND '").concat(end_date, "'\n  ) ");
  var time = "AND TIME_TO_SEC(TIME(".concat(datetime_init_field_name, ")) >= TIME_TO_SEC('").concat(start_time, "')\n  AND  TIME_TO_SEC(TIME(").concat(datetime_init_field_name, ")) < TIME_TO_SEC('").concat(end_time, "')");
  result = date + "\n" + time + "\n";
  return result;
}
/******************************************************************** */


function arrayToSqlQuery(data, field) {
  /*
   * extracts infro from json fields, returns if record is true or false
   * applies to only one type od data in json field
   */
  var result = data;
  var resultTemp;

  if (data && Array.isArray(data)) {
    resultTemp = data.map(function (x) {
      return field != undefined ? "".concat(field, " = ") + x.id : 1;
    }).join(" OR ");
    data.length > 0 ? data = "AND (" + resultTemp + ")" : "";
    result = data;
  } else {
    result = "";
  }

  return result;
}

function objectToSqlQuery(data, field) {
  /*
   * extracts infro from json fields, returns if record is true or false
   * applies to only one type od data in json field
   */
  var result = data;
  var resultTemp;

  if (data) {
    resultTemp = field != undefined ? "".concat(field, " = ") + x.id : 1;
    result = data;
  } else {
    result = "";
  }

  return result;
}
/******************************************************************** */


function arrayToSqlQueryOr(data, field) {
  /*
   * extracts infro from json fields, returns if record is true or false
   * applies to only one type od data in json field
   */
  var result = data;
  var resultTemp;

  if (data && Array.isArray(data)) {
    resultTemp = data.map(function (x) {
      return field != undefined ? "".concat(field, " = ") + x.id : 1;
    }).join(" OR ");
    data.length > 0 ? data = "OR (" + resultTemp + ")" : "";
    result = data;
  } else {
    result = "";
  }

  return result;
}
/******************************************************************** */


function arrayToJsonSqlQuery(data, field, property) {
  /*
   * extracts infro from json fields, returns if record is true or false
   * can handle several properties in the same json field
   * - property is optional
   */
  var result = data;
  var resultTemp;

  if (data && Array.isArray(data)) {
    resultTemp = data.map(function (x) {
      return field != undefined ? "JSON_CONTAINS(JSON_EXTRACT(".concat(field, ", '$.").concat(property, "[*].id'), ") + x.id + ")" : " ";
    }).join(" OR ");
    data.length > 0 ? data = "AND (" + resultTemp + ")" : "";
    result = data;
  }

  return result;
}
/******************************************************************** */


function objectToJsonSqlQuery(data, field, property) {
  /*
   * extracts infro from json fields, returns if record is true or false
   * can handle several properties in the same json field
   * - property is optional
   */
  var result = data;
  var resultTemp;

  if (data) {
    resultTemp = data.map(function (x) {
      return field != undefined ? "JSON_CONTAINS(JSON_EXTRACT(".concat(field, ", '$.").concat(property, ".id'), ") + x.id + ")" : " ";
    }).join(" OR ");
    data.length > 0 ? data = "AND (" + resultTemp + ")" : "";
    result = data;
  }

  return result;
}
/************************************************************** */


function sqlIntervalSqlQuery(userSelection, datetime_field_name) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = "1";
  var interval = userSelection.interval !== null ? userSelection.interval.minute : "";

  if (userSelection && datetime_field_name && interval) {
    return "\n    (ROUND(ROUND(TIME_TO_SEC(TIME(".concat(datetime_field_name, ")) /60, 0)/").concat(interval, ", 0) - 1) AS interval_init\n    ,(ROUND(ROUND(TIME_TO_SEC(TIME(").concat(datetime_field_name, ")) /60, 0)/").concat(interval, ", 0)) AS interval_finish\n\n    ,SEC_TO_TIME((ROUND(ROUND(TIME_TO_SEC(TIME(").concat(datetime_field_name, ")) /60, 0)/").concat(interval, ", 0) - 1) *").concat(interval, " *60) AS interval_start\n    ,SEC_TO_TIME((ROUND(ROUND(TIME_TO_SEC(TIME(").concat(datetime_field_name, ")) /60, 0)/").concat(interval, ", 0)) *").concat(interval, " *60) AS interval_end\n    ");
  }

  return result;
}
/**************************************************** */


function sqlIntervalGroupSqlQuery(userSelection) {
  /*
   * Send the group string if interval applies
   */
  var result = "";
  var interval_text = userSelection.interval !== null ? "GROUP BY interval_init" : "";
  result = interval_text;
  return result;
}
/**************************************************** */


function sqlIntervalGroupSqlQueryToIndicators(userSelection) {
  /*
   * Send the group string if interval applies
   */
  var result = "";
  var interval_text = userSelection.interval !== null ? ",interval_init" : "";
  result = interval_text;
  return result;
}
/************************************************************** */


function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statment when interval applies
   */
  var result = null;

  if (modalView === 'recibida') {
    return "\n    (callentry_status = 'abandonada' OR callentry_status = 'terminada')\n    ";
  } else if (modalView === 'atendida') {
    return "\n    callentry_status = 'terminada'\n    ";
  } else if (modalView === 'abandonada') {
    return "\n    callentry_status = 'abandonada'\n    ";
  } else if (modalView === 'corta') {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec <= ".concat(process.env.CDR_SHORTCALL_TIME, "\n    ");
  } else if (modalView === 'antes tiempo ideal') {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec_wait <= ".concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n    ");
  } else if (modalView === 'despues tiempo ideal') {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_duration_sec_wait > ".concat(process.env.CDR_SERVICE_IDEAL_TIME, "\n    ");
  } else if (modalView === 'colgada por agente') {
    return "\n    (callentry_status = 'terminada')\n    AND\n    callentry_hung_agent = 1\n    ";
  } else if (modalView === 'activa') {
    return "\n    rcc_callentry_status = 'activa'\n    ";
  } else if (modalView === 'en-cola') {
    return "\n    rcc_callentry_status = 'en-cola'\n    ";
  } else if (modalView === 'conectado') {
    return "\n    rca_agent_status = 'Logueado'\n    ";
  } else if (modalView === 'efectivo') {
    return "\n    rca_agent_status = 'Logueado'\n    AND\n    (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado')\n    ";
  } else if (modalView === 'ocupado') {
    return "\n    rca_agent_status = 'Logueado'\n    AND\n    (rca_group_name = 'Ocupado')\n    ";
  } else if (modalView === 'disponible') {
    return "\n    rca_agent_status = 'Logueado'\n    AND\n    (rca_group_name = 'Disponible')\n    ";
  } else if (modalView === 'asignado') {
    return "\n    rcb_break_productivity = 1\n    ";
  } else if (modalView === 'auxiliar') {
    return "\n    rcb_break_productivity = 0\n    ";
  } else if (modalView === 'auxiliar-historico') {
    return "\n    inv_break_productivity = 0\n    AND\n    audit_break_id is not null\n    ";
  } else if (modalView === 'asignado-historico') {
    return "\n    inv_break_productivity = 1\n    AND\n    audit_break_id is not null\n    ";
  } else if (modalView === 'saliente-realizada') {
    return "\n    cdr_call_made = 1\n    ";
  } else if (modalView === 'saliente-fallida') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_fail = 1\n    ";
  } else if (modalView === 'saliente-contestada') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_answered = 1\n    ";
  } else if (modalView === 'saliente-efectiva') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_efective = 1\n    ";
  } else if (modalView === 'saliente-colgada') {
    return "\n    cdr_call_made = 1\n    AND\n    cdr_call_hungout = 1\n    ";
  } else if (modalView === null) {
    return "1";
  }

  return result;
}