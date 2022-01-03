"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputText = _interopRequireDefault(require("../../ui/fields/InputText"));

var _ActionButtons = _interopRequireDefault(require("../../ui/fields/ActionButtons"));

var _DropDown = _interopRequireDefault(require("../../ui/fields/DropDown"));

var _blocks = require("../../styled/blocks");

var _httpMethods = require("../../../utils/http-methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Endpoint(props) {
  const {
    register
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_blocks.EndpointBlock, null, /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    "data-test-id": "EndpointDropDown",
    name: "method",
    register: register,
    options: _httpMethods.methods
  }), /*#__PURE__*/_react.default.createElement(_InputText.default, {
    "data-test-id": "EndpointInputText",
    placeholder: "ex: http://localhost:3000/api/users",
    name: "url",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_ActionButtons.default, null, "Submit")));
}

var _default = Endpoint;
exports.default = _default;