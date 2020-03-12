'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var myPool = require('../../connectors/pool.js');

var poolDat = myPool.poolDat;

module.exports = function (InvClient) {
  InvClient.client_list =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(source) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", sql(source));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  InvClient.remoteMethod('client_list', {
    accepts: {
      arg: 'data',
      type: 'object',
      http: {
        source: 'body'
      }
    },
    returns: {
      arg: 'list',
      type: 'object'
    }
  });
};

function sql(_x2) {
  return _sql.apply(this, arguments);
}

function _sql() {
  _sql = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(source) {
    var arg, querySQL, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arg = source.inv_client_status;
            querySQL = "\n    SELECT *\n    FROM InvClient\n    ";
            _context2.prev = 2;
            _context2.next = 5;
            return poolDat.query(querySQL);

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _sql.apply(this, arguments);
}