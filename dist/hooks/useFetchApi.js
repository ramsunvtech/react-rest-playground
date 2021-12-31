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
  const query = {
    params: queryParams
  };

  const body = _qs.default.stringify(bodyParams);

  if (method !== 'get' && method !== 'delete') {
    headerParams['content-type'] = 'application/x-www-form-urlencoded';
  }

  const api = _axios.default.create({
    headers: headerParams
  });

  (0, _react.useEffect)(() => {
    if (method === 'get') {
      api.get(url, query).then(function (response) {
        onComplete(response);
      }).catch(function (error) {
        onComplete(error.response);
      });
    }

    if (method === 'post') {
      api.post(url, body).then(function (response) {
        onComplete(response);
      }).catch(function (error) {
        onComplete(error.response);
      });
    }

    if (method === 'patch') {
      api.patch(url, body).then(function (response) {
        onComplete(response);
      }).catch(function (error) {
        onComplete(error.response);
      });
    }

    if (method === 'put') {
      api.put(url, body).then(function (response) {
        onComplete(response);
      }).catch(function (error) {
        onComplete(error.response);
      });
    }

    if (method === 'delete') {
      api.delete(url).then(function (response) {
        onComplete(response);
      }).catch(function (error) {
        onComplete(error.response);
      });
    }
  }, [endpointData]);
}