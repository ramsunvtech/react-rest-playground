"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("../Header"));

var _CodeEditor = _interopRequireDefault(require("../../../ui/Common/CodeEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Response(props) {
  const {
    response = {}
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, {
    response: response
  }), /*#__PURE__*/_react.default.createElement(_CodeEditor.default, {
    name: 'responseEditor',
    data: response.data,
    readOnly: true,
    height: '300px'
  }));
}

var _default = Response;
exports.default = _default;