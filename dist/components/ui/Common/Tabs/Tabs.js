"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _tabs = require("../../../styled/tabs");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Tabs(props) {
  const {
    children,
    defaultTabIndex = 0
  } = props;
  const [activeTabIndex, setActiveTab] = (0, _react.useState)(defaultTabIndex);

  function onChangeTabEvent(tabIndex) {
    setActiveTab(tabIndex);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "tabs"
  }, /*#__PURE__*/_react.default.createElement(_tabs.TabList, null, children.map(({
    props: {
      id,
      title
    }
  }, tabIndex) => /*#__PURE__*/_react.default.createElement(_tabs.TabListItem, {
    key: id,
    id: id,
    isActive: tabIndex === activeTabIndex,
    onClick: () => {
      onChangeTabEvent(tabIndex);
    }
  }, title))), /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "tab-content"
  }, children.length > 0 && children[activeTabIndex]));
}

const TabsItem = ({
  children
}) => children;

Tabs.Item = TabsItem;
var _default = Tabs;
exports.default = _default;