"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const convertParams = data => {
  const params = {};
  data.forEach(({
    key,
    value
  }) => {
    if (key != '' && value != '') {
      params[key] = value;
    }
  });
  return params;
};

var _default = convertParams;
exports.default = _default;