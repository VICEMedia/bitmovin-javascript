"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("./http");
exports.buildListUrl = function (url, limit, offset, sort, filter) {
    var filterParams = http_1.utils.buildFilterParamString(filter);
    var getParams = http_1.utils.buildGetParamString(__assign({}, filterParams, { limit: limit,
        offset: offset,
        sort: sort }));
    if (getParams.length > 0) {
        return urljoin(url, getParams);
    }
    return url;
};
//# sourceMappingURL=UrlUtils.js.map