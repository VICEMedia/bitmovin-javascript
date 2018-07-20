"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.contentProtections = function (configuration, manifestId, periodId, adaptationSetId, representationInfo, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var baseUrl = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId, 'adaptationsets', adaptationSetId);
    if (representationInfo !== null && representationInfo !== undefined) {
        baseUrl = urljoin(baseUrl, 'representations', representationInfo.type, representationInfo.id);
    }
    baseUrl = urljoin(baseUrl, 'contentprotection');
    var resourceDetails = function (contentProtectionId) {
        return {
            details: function () {
                var url = urljoin(baseUrl, contentProtectionId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(baseUrl, contentProtectionId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (contentProtection) {
        var url = baseUrl;
        return post(configuration, url, contentProtection);
    };
    var list = function (limit, offset) {
        var url = baseUrl;
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
exports.default = (function (configuration, manifestId, periodId, adaptationSetId, representationInfo) {
    return exports.contentProtections(configuration, manifestId, periodId, adaptationSetId, representationInfo, http_1.default);
});
//# sourceMappingURL=dashManifestContentProtections.js.map