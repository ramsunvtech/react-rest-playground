"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyParams = _interopRequireDefault(require("./BodyParams"));

var _HeaderParams = _interopRequireDefault(require("./HeaderParams"));

var _QueryParams = _interopRequireDefault(require("./QueryParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputParams(props) {
  const {
    register,
    control
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "Query Params"), /*#__PURE__*/_react.default.createElement(_QueryParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, "Header Params"), /*#__PURE__*/_react.default.createElement(_HeaderParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, "Body Params"), /*#__PURE__*/_react.default.createElement(_BodyParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null));
}

var _default = InputParams;
exports.default = _default;