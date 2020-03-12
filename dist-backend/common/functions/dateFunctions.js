"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textDateToObjectDate = textDateToObjectDate;
exports.objectDateToTextDate = objectDateToTextDate;
exports.valueFromObject = valueFromObject;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _moment = _interopRequireDefault(require("moment"));

function textDateToObjectDate(inputDate) {
  /*
   *  convert text date 'YYY-MM-DD' to format:  {year: 2018, month: 10, day: 3}
   *  It receives an input, checks for valid format
   *  On error return the same input
   */
  var result = inputDate; // check for valid date in format 'YYYY-MM-DD'

  if (typeof inputDate === "string" && inputDate.match(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)) {
    result = {
      year: parseInt((0, _moment["default"])(inputDate).format("YYYY")),
      month: parseInt((0, _moment["default"])(inputDate).format("MM")),
      day: parseInt((0, _moment["default"])(inputDate).format("DD"))
    };
  }

  return result;
}
/********************************************************************* */


function objectDateToTextDate(inputDate) {
  // convert object in format  {year: 2018, month: 10, day: 3} to text date 'YYYY-MM-DD'
  var date;
  var result;

  if (typeof inputDate === "string") {
    try {
      date = JSON.parse(inputDate);
      inputDate = date;
    } catch (error) {
      // console.error("ERROR string");
      result = inputDate;
    }
  }

  if ((0, _typeof2["default"])(inputDate) === "object") {
    try {
      result = "".concat(inputDate.year, "-").concat(pad(inputDate.month, 2), "-").concat(pad(inputDate.day, 2));
    } catch (error) {
      console.error("ERROR object");
      result = inputDate;
    }
  }

  return result;
}

function valueFromObject(inputField, defaultValue) {
  var result = defaultValue;

  if (inputField) {
    result = inputField.value;
  }

  return result;
}

function pad(num, size) {
  var s = num + "";

  while (s.length < size) {
    s = "0" + s;
  }

  return s;
}