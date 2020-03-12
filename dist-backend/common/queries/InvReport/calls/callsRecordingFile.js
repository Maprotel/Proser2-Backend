"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callsGetRecordingFile = callsGetRecordingFile;
exports.deleteRecordingFile = deleteRecordingFile;
exports.deleteAllRecordingFile = deleteAllRecordingFile;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var shell = require("shelljs");

require("dotenv").config();

var path = require("path");

function callsGetRecordingFile(_x) {
  return _callsGetRecordingFile.apply(this, arguments);
}

function _callsGetRecordingFile() {
  _callsGetRecordingFile = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(RecordSelection) {
    var mp3Name, passwordFile, originFilePath, originFileName, destinyFilePath, destinyFileName, getFile, convertFile, result, resultGetfile, temp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mp3Name = "".concat(RecordSelection.call_type, "-").concat(RecordSelection.agent_name, "-").concat(RecordSelection.start_date, "-").concat(RecordSelection.start_time, ".mp3");
            passwordFile = ".hostInfo";
            originFilePath = "root@".concat(process.env.ORIGIN_DB_HOST, ":");
            originFileName = RecordSelection.record;
            destinyFilePath = process.env.DESTINY_FILE_PATH;
            destinyFileName = path.basename(RecordSelection.record);
            getFile = "scp ".concat(originFilePath).concat(originFileName, " ").concat(destinyFilePath).concat(destinyFileName);
            convertFile = "sox ".concat(destinyFilePath).concat(destinyFileName, " ").concat(destinyFilePath).concat(destinyFileName, ".mp3");
            _context.prev = 8;
            _context.next = 11;
            return execShellCommand(getFile);

          case 11:
            resultGetfile = _context.sent;
            _context.next = 14;
            return execShellCommand(convertFile);

          case 14:
            temp = _context.sent;
            // setTimeout(await execShellCommand(convertFile), 30000);
            result = "Finished";
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](8);
            console.error("error", _context.t0);

          case 21:
            return _context.abrupt("return", result);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 18]]);
  }));
  return _callsGetRecordingFile.apply(this, arguments);
}

function deleteRecordingFile(_x2) {
  return _deleteRecordingFile.apply(this, arguments);
}

function _deleteRecordingFile() {
  _deleteRecordingFile = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(RecordSelection) {
    var result, temp, mp3Name, destinyFilePath, destinyFileName, deleteMp3File, deleteGsmFile, resultDeleteMp3File, resultDeleteGsmFile;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            temp = global.__basedir;
            mp3Name = "".concat(RecordSelection.call_type, "-").concat(RecordSelection.agent_name, "-").concat(RecordSelection.start_date, "-").concat(RecordSelection.start_time, ".mp3");
            destinyFilePath = process.env.DESTINY_FILE_PATH;
            destinyFileName = path.basename(RecordSelection.record);
            deleteMp3File = "rm ".concat(destinyFilePath).concat(destinyFileName, ".mp3");
            deleteGsmFile = "rm ".concat(destinyFilePath).concat(destinyFileName);
            _context2.prev = 6;
            _context2.next = 9;
            return execShellCommand(deleteMp3File);

          case 9:
            resultDeleteMp3File = _context2.sent;
            _context2.next = 12;
            return execShellCommand(deleteGsmFile);

          case 12:
            resultDeleteGsmFile = _context2.sent;
            result = "Finished";
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](6);
            console.error("error", _context2.t0);

          case 19:
            return _context2.abrupt("return", result);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 16]]);
  }));
  return _deleteRecordingFile.apply(this, arguments);
}

function deleteAllRecordingFile(_x3) {
  return _deleteAllRecordingFile.apply(this, arguments);
}
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */


function _deleteAllRecordingFile() {
  _deleteAllRecordingFile = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(RecordSelection) {
    var result, destinyFilePath, deleteAll, deleteAllFile;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            destinyFilePath = process.env.DESTINY_FILE_PATH;
            deleteAll = "rm ".concat(destinyFilePath, "*");
            _context3.prev = 2;
            _context3.next = 5;
            return execShellCommand(deleteAll);

          case 5:
            deleteAllFile = _context3.sent;
            result = "Finished";
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.error("error", _context3.t0);

          case 12:
            return _context3.abrupt("return", result);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _deleteAllRecordingFile.apply(this, arguments);
}

function execShellCommand(cmd) {
  var exec = require("child_process").exec;

  return new Promise(function (resolve, reject) {
    exec(cmd, function (error, stdout, stderr) {
      if (error) {
        console.warn(error);
      }

      resolve(stdout ? stdout : stderr);
    });
  });
}