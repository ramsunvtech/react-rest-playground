"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextBox = exports.StyledDropDown = exports.StyledButton = exports.FlexRow = exports.FlexColumn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FlexColumn = _styledComponents.default.div.withConfig({
  displayName: "general__FlexColumn",
  componentId: "sc-1u19twg-0"
})(["display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;"]);

exports.FlexColumn = FlexColumn;

const FlexRow = _styledComponents.default.div.withConfig({
  displayName: "general__FlexRow",
  componentId: "sc-1u19twg-1"
})(["display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;", ";"], props => props.justify ? `justify-content: ${props.justify};` : '');

exports.FlexRow = FlexRow;

const StyledTextBox = _styledComponents.default.input.attrs(() => ({
  type: 'text'
})).withConfig({
  displayName: "general__StyledTextBox",
  componentId: "sc-1u19twg-2"
})(["padding-left:0.5rem;padding-right:0.5rem;padding-top:0.35rem;padding-bottom:0.35rem;border:solid 1px #afafaf;min-width:20rem;border-radius:3px;"]);

exports.StyledTextBox = StyledTextBox;

const StyledDropDown = _styledComponents.default.select.withConfig({
  displayName: "general__StyledDropDown",
  componentId: "sc-1u19twg-3"
})(["padding-left:0.5rem;padding-right:0.5rem;padding-top:0.35rem;padding-bottom:0.35rem;border:1px solid #afafaf;border-radius:3px;min-width:6rem;"]);

exports.StyledDropDown = StyledDropDown;

const StyledButton = _styledComponents.default.button.withConfig({
  displayName: "general__StyledButton",
  componentId: "sc-1u19twg-4"
})(["padding-top:0.35rem;padding-bottom:0.35rem;min-width:5rem;font-weight:600;background-color:#256adb;border:solid 1px #256adb;border-radius:3px;color:#fff;&:hover{background-color:#3b81f3;border-color:#3b81f3;}"]);

exports.StyledButton = StyledButton;