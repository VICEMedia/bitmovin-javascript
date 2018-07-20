"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var dashManifestAdaptationSets_1 = require("./dashManifestAdaptationSets");
exports.dashManifestPeriods = function (configuration, manifestId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (periodId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId);
                return delete_(configuration, url);
            },
            adaptationSets: dashManifestAdaptationSets_1.default(configuration, manifestId, periodId)
        };
    };
    var add = function (period) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods');
        return post(configuration, url, period);
    };
    var list = function (limit, offset) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods');
        var getParams = http_1.utils.buildGetParamString({
            limit: limit,
            offset: offset
        });
        if (getParams.length > 0) {
            url = urljoin(url, getParams);
        }
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, manifestId) {
    return exports.dashManifestPeriods(configuration, manifestId, http_1.default);
});
//# sourceMappingURL=dashManifestPeriods.js.map