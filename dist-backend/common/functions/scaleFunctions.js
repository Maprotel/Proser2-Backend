"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onColorForPercentage = onColorForPercentage;
exports.onColorForCallsOnQueue = onColorForCallsOnQueue;

function onColorForPercentage(inputNumber, scale) {
  var result = "gray";
  var base = 1;

  if (inputNumber && scale && base) {
    var red = scale.inv_scale_red;
    var yellow = scale.inv_scale_yellow;
    var green = scale.inv_scale_green;
    var blue = scale.inv_scale_blue;
    var dir = "asc";
    var info = inputNumber / base * 100;
    var newColor = "gray";
    info > blue ? newColor = "blue" : info > green ? newColor = "green" : info > yellow ? newColor = "yellow" : info > red ? newColor = "red" : info === 0 ? newColor = "white" : newColor = "gray";
    result = "".concat(newColor);
  }

  return result;
}

function onColorForCallsOnQueue(inputNumber, waitTime) {
  var result = "white";
  var newColor = "red";
  typeof inputNumber !== "number" || inputNumber === 0 || inputNumber === null || inputNumber === undefined ? newColor = "white" : inputNumber > waitTime ? newColor = "red" : inputNumber > waitTime * 0.5 && inputNumber <= waitTime ? newColor = "yellow" : inputNumber > waitTime * 0 && inputNumber <= waitTime * 0.5 ? newColor = "green" : "white";
  result = "".concat(newColor);
  return result;
}