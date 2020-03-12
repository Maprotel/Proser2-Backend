"use strict";

function removeRowDataPacket(myResult) {
  var result = myResult;

  if (myResult) {
    result = JSON.parse(JSON.stringify(myResult));
  }

  return result;
}

function removeRowDataPacketArray(myResult) {
  var result = myResult;

  if (myResult) {
    result = myResult.map(function (x) {
      return x.RowDataPacket;
    });
  }

  return result;
}

module.exports = {
  removeRowDataPacket: removeRowDataPacket,
  removeRowDataPacketArray: removeRowDataPacketArray
};