"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Endpoint = _interopRequireDefault(require("./components/blocks/Endpoint"));

var _InputParams = _interopRequireDefault(require("./components/blocks/InputParams"));

var _Result = _interopRequireDefault(require("./components/blocks/Result"));

var _reactHookForm = require("react-hook-form");

var _useFetchApi = _interopRequireDefault(require("./hooks/useFetchApi"));

var _convertParams = _interopRequireDefault(require("./utils/convert-params"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ReactRestPlayground(props) {
  const {
    method,
    endPoint,
    headers,
    query,
    body,
    onSend
  } = props;
  const [requestData, setRequestData] = (0, _react.useState)({});
  const [responseData, setResponseData] = (0, _react.useState)({});
  const {
    register,
    handleSubmit,
    control
  } = (0, _reactHookForm.useForm)({
    defaultValues: {
      method: method,
      url: endPoint,
      queryParams: query,
      headerParams: headers,
      bodyParams: body
    }
  }); // Api call
  // store the data in a response state

  (0, _useFetchApi.default)(requestData, response => {
    setResponseData(response);
  }); // pass it to the response component as props

  const onSubmit = request => {
    request['queryParams'] = (0, _convertParams.default)(request.queryParams);
    request['headerParams'] = (0, _convertParams.default)(request.headerParams);
    request['bodyParams'] = (0, _convertParams.default)(request.bodyParams);
    onSend(request);
    setRequestData(request);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flexColumn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flexRow justifyCenter"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_Endpoint.default, {
    "data-test-id": "Endpoint",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_InputParams.default, {
    "data-test-id": "InputParams",
    register: register,
    control: control
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flexRow justifyCenter"
  }, /*#__PURE__*/_react.default.createElement(_Result.default, {
    "data-test-id": "Result",
    response: responseData
  }))));
}

var _default = ReactRestPlayground;
exports.default = _default;