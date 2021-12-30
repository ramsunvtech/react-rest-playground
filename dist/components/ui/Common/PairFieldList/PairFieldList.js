"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PairFieldList(props) {
  const {
    name,
    type,
    control,
    register
  } = props;
  const {
    fields,
    append,
    remove
  } = (0, _reactHookForm.useFieldArray)({
    control,
    name: name
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fields.map(({
    id,
    key,
    value
  }, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: id
    }, /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "text",
      defaultValue: key
    }, register(`${name}[${index}].key`))), /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "text",
      defaultValue: value
    }, register(`${name}[${index}].value`))), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: () => remove(index)
    }, "Remove"));
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: () => append({})
  }, "Add ", type));
}

var _default = PairFieldList;
exports.default = _default;