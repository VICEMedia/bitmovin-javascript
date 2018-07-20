"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var dash_1 = require("./dash");
var hls_1 = require("./hls");
var smooth_1 = require("./smooth");
exports.manifests = function (configuration, httpClient) {
    return {
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/manifests')),
        dash: dash_1.default(configuration),
        hls: hls_1.default(configuration),
        smooth: smooth_1.default(configuration)
    };
};
exports.default = (function (configuration) {
    return exports.manifests(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map