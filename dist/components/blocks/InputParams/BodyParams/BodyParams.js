"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PairFieldList = _interopRequireDefault(require("../../../ui/common/PairFieldList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BodyParams(props) {
  const {
    control,
    register
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PairFieldList.default, {
    "data-test-id": "BodyPairFieldList",
    name: 'bodyParams',
    type: 'body',
    register: register,
    control: control
  }));
}

var _default = BodyParams;
exports.default = _default;