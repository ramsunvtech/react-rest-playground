"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAce = _interopRequireDefault(require("react-ace"));

require("ace-builds/src-noconflict/mode-json");

require("ace-builds/src-noconflict/theme-github");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeEditor(props) {
  const {
    name,
    onChange,
    readOnly,
    data,
    height
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactAce.default, {
    mode: "json",
    theme: "github",
    name: name,
    defaultValue: '',
    readOnly: readOnly,
    onChange: onChange,
    width: '100%',
    height: height,
    value: JSON.stringify(data, null, 2),
    fontSize: 12,
    showPrintMargin: false,
    showGutter: true,
    highlightActiveLine: true,
    setOptions: {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2
    }
  }));
}

var _default = CodeEditor;
exports.default = _default;