"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyParams = _interopRequireDefault(require("./BodyParams"));

var _HeaderParams = _interopRequireDefault(require("./HeaderParams"));

var _QueryParams = _interopRequireDefault(require("./QueryParams"));

var _Tabs = _interopRequireDefault(require("../../ui/common/Tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputParams(props) {
  const {
    register,
    control
  } = props;
  return /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    "data-test-id": "Tabs",
    id: "Tabs"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.default.Item, {
    "data-test-id": "query",
    id: "query",
    title: "Query Params"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Query Params"), /*#__PURE__*/_react.default.createElement(_QueryParams.default, {
    register: register,
    control: control
  })), /*#__PURE__*/_react.default.createElement(_Tabs.default.Item, {
    "data-test-id": "header",
    id: "header",
    title: "Headers"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Header Params"), /*#__PURE__*/_react.default.createElement(_HeaderParams.default, {
    register: register,
    control: control
  })), /*#__PURE__*/_react.default.createElement(_Tabs.default.Item, {
    "data-test-id": "body",
    id: "body",
    title: "Body"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Body Params"), /*#__PURE__*/_react.default.createElement(_BodyParams.default, {
    register: register,
    control: control
  })));
}

var _default = InputParams;
exports.default = _default;