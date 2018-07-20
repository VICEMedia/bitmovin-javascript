"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.impressions = function (configuration, httpClient) {
    var post = httpClient.post;
    var impressionBaseUrl = urljoin(configuration.apiBaseUrl, 'analytics', 'impressions');
    var fn = function (impressionId, licenseKey) {
        var url = urljoin(impressionBaseUrl, impressionId);
        return post(configuration, url, { licenseKey: licenseKey });
    };
    return fn;
};
exports.default = (function (configuration) {
    return exports.impressions(configuration, http_1.default);
});
//# sourceMappingURL=impressions.js.map