"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./Header"));

var _Response = _interopRequireDefault(require("./Response"));

var _ResultModule = _interopRequireDefault(require("../../../styles/Result.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Result(props) {
  const {
    response = {}
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _ResultModule.default.result
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    response: response
  }), /*#__PURE__*/_react.default.createElement(_Response.default, {
    response: response
  })));
}

var _default = Result;
exports.default = _default;