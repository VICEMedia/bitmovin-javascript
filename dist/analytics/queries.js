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
var http_1 = require("../utils/http");
var queryBuilder_1 = require("./queryBuilder");
exports.queries = function (configuration, httpClient) {
    var post = httpClient.post;
    var baseUrl = urljoin(configuration.apiBaseUrl, 'analytics/queries');
    var queryMethods = ['count', 'sum', 'avg', 'min', 'max', 'median', 'percentile', 'stddev', 'variance'].reduce(function (obj, method) {
        var _a;
        return (__assign({}, obj, (_a = {}, _a[method] = function (query) { return post(configuration, urljoin(baseUrl, method), query); }, _a)));
    }, {});
    var fn = Object.assign(function () { return ({}); }, queryMethods);
    Object.defineProperty(fn, 'builder', {
        get: function () {
            return queryBuilder_1.default(queryMethods);
        }
    });
    return fn;
};
exports.default = (function (configuration) {
    return exports.queries(configuration, http_1.default);
});
//# sourceMappingURL=queries.js.map