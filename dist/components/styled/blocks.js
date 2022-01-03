"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRemoveButton = exports.StyledInputField = exports.StyledAddButton = exports.ResultBlock = exports.PairFieldBlock = exports.EndpointBlock = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _general = require("./general");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EndpointBlock = _styledComponents.default.div.withConfig({
  displayName: "blocks__EndpointBlock",
  componentId: "sc-1ojhpm5-0"
})(["padding-top:2rem;padding-bottom:2rem;"]);

exports.EndpointBlock = EndpointBlock;

const ResultBlock = _styledComponents.default.div.withConfig({
  displayName: "blocks__ResultBlock",
  componentId: "sc-1ojhpm5-1"
})(["min-width:50rem;"]);

exports.ResultBlock = ResultBlock;

const PairFieldBlock = _styledComponents.default.div.withConfig({
  displayName: "blocks__PairFieldBlock",
  componentId: "sc-1ojhpm5-2"
})(["min-width:50rem;"]);

exports.PairFieldBlock = PairFieldBlock;

const StyledRemoveButton = _styledComponents.default.button.withConfig({
  displayName: "blocks__StyledRemoveButton",
  componentId: "sc-1ojhpm5-3"
})(["background-color:#cd0909;border:1px solid #cd0909;&:hover{background-color:#e71818;border:1px solid #e71818;}"]);

exports.StyledRemoveButton = StyledRemoveButton;
const StyledInputField = (0, _styledComponents.default)(_general.StyledTextBox).withConfig({
  displayName: "blocks__StyledInputField",
  componentId: "sc-1ojhpm5-4"
})(["margin-right:0.3rem;margin-bottom:0.3rem;min-width:22rem !important;"]);
exports.StyledInputField = StyledInputField;

const StyledAddButton = _styledComponents.default.button.withConfig({
  displayName: "blocks__StyledAddButton",
  componentId: "sc-1ojhpm5-5"
})(["margin-top:0.3rem;margin-bottom:0.3rem;"]);

exports.StyledAddButton = StyledAddButton;