"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DropDown(props) {
  const {
    name,
    method,
    options,
    register
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", _extends({
    value: method
  }, register(name)), options.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: option.value
    }, option.text);
  })));
}

var _default = DropDown;
exports.default = _default;