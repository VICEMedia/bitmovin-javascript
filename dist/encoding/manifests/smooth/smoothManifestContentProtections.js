"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.contentProtection = function (configuration, manifestId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var baseUrl = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId, 'contentprotection');
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
    var add = function (protection) {
        return post(configuration, baseUrl, protection);
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
exports.default = (function (configuration, manifestId) {
    return exports.contentProtection(configuration, manifestId, http_1.default);
});
//# sourceMappingURL=smoothManifestContentProtections.js.map