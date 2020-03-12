"use strict";

var moment = require("moment");

function pad(num, size) {
  var s = num + ''; // eslint-disable-next-line no-const-assign

  while (s.length < size) {
    s = '0' + s;
  }

  return s;
}

module.exports = {
  pad: pad
};