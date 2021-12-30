"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputText = _interopRequireDefault(require("@/ui/Fields/InputText"));

var _ActionButtons = _interopRequireDefault(require("@/ui/Fields/ActionButtons"));

var _DropDown = _interopRequireDefault(require("@/ui/Fields/DropDown"));

var _httpMethods = require("@/utils/http-methods");

var _reactHookForm = require("react-hook-form");

var _BodyParams = _interopRequireDefault(require("@/blocks/InputParams/BodyParams"));

var _HeaderParams = _interopRequireDefault(require("@/blocks/InputParams/HeaderParams"));

var _QueryParams = _interopRequireDefault(require("@/blocks/InputParams/QueryParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Endpoint(props) {
  const {
    onSubmit
  } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = (0, _reactHookForm.useForm)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    name: "method",
    register: register,
    options: _httpMethods.methods
  }), /*#__PURE__*/_react.default.createElement(_InputText.default, {
    placeholder: "ex: http://localhost:3000/api/users",
    name: 'url',
    register: register
  }), /*#__PURE__*/_react.default.createElement(_ActionButtons.default, null, "Submit"), /*#__PURE__*/_react.default.createElement("div", null, "Query Params"), /*#__PURE__*/_react.default.createElement(_QueryParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, "Header Params"), /*#__PURE__*/_react.default.createElement(_HeaderParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, "Body Params"), /*#__PURE__*/_react.default.createElement(_BodyParams.default, {
    register: register,
    control: control
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null)));
}

var _default = Endpoint;
exports.default = _default;