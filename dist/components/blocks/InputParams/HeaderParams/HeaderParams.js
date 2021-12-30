"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PairFieldList = _interopRequireDefault(require("@/ui/common/PairFieldList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderParams(props) {
  const {
    control,
    register
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PairFieldList.default, {
    name: 'headerParams',
    type: 'header',
    register: register,
    control: control
  }));
}

var _default = HeaderParams;
exports.default = _default;