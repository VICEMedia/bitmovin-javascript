"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var domains_1 = require("./domains");
exports.licenses = function (configuration, httpClient) {
    var get = httpClient.get, put = httpClient.put;
    var resourceDetails = function (licenseId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'analytics/licenses', licenseId);
                return get(configuration, url);
            },
            update: function (license) {
                var url = urljoin(configuration.apiBaseUrl, 'analytics/licenses', licenseId);
                return put(configuration, url, license);
            },
            domains: domains_1.default(configuration, licenseId)
        };
    };
    var list = function (limit, offset) {
        var url = urljoin(configuration.apiBaseUrl, 'analytics/licenses');
        var getParams = http_1.utils.buildGetParamString({
            limit: limit,
            offset: offset
        });
        if (getParams.length > 0) {
            url = urljoin(url, getParams);
        }
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { list: list });
    return resource;
};
exports.default = (function (configuration) {
    return exports.licenses(configuration, http_1.default);
});
//# sourceMappingURL=licenses.js.map