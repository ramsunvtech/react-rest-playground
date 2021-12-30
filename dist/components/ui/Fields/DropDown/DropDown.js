"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropDown(props) {
  const {
    name,
    options,
    register
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", register(name), options.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: option.value
    }, option.text);
  })));
}

var _default = DropDown;
exports.default = _default;