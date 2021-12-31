"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFetchApi;

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useFetchApi(endpointData, onComplete) {
  const {
    method,
    url,
    headerParams = {},
    queryParams,
    bodyParams
  } = endpointData;

  const body = _qs.default.stringify(bodyParams);

  if (method !== 'get' && method !== 'delete') {
    headerParams['content-type'] = 'application/x-www-form-urlencoded';
  }

  const api = _axios.default.create({
    headers: headerParams
  });

  (0, _react.useEffect)(() => {
    const apiMethod = api[method];

    if (!apiMethod) {
      return;
    }

    const query = {
      params: queryParams
    };
    const apiParameters = {
      get: query,
      post: body,
      patch: body,
      put: body,
      delete: undefined
    };
    const params = apiParameters[method];
    apiMethod(url, params).then(function (response) {
      onComplete(response);
    }).catch(function (error) {
      onComplete(error.response);
    });
  }, [api, method, onComplete, url, body, queryParams]);
}