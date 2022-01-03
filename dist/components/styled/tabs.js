"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabListItem = exports.TabList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabList = _styledComponents.default.div.withConfig({
  displayName: "tabs__TabList",
  componentId: "sc-18h7ix1-0"
})(["display:flex;margin:0;padding:0;list-style:none;&:first-child{margin-left:0;}"]);

exports.TabList = TabList;
const activeTabStyles = `
  border-bottom: 0.2rem solid #fe6c37;
  font-weight: 700;
`;

const TabListItem = _styledComponents.default.div.withConfig({
  displayName: "tabs__TabListItem",
  componentId: "sc-18h7ix1-1"
})(["margin-left:2rem;cursor:pointer;", ";"], props => props.isActive ? activeTabStyles : '');

exports.TabListItem = TabListItem;