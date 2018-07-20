"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.representations = function (configuration, manifestId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var baseUrl = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId, 'representations', typeUrl);
        var resourceDetails = function (representationId) {
            return {
                details: function () {
                    var url = urljoin(baseUrl, representationId);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(baseUrl, representationId);
                    return delete_(configuration, url);
                }
            };
        };
        var add = function (representation) {
            return post(configuration, baseUrl, representation);
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
    return {
        mp4: typeFn('mp4')
    };
};
exports.default = (function (configuration, manifestId) {
    return exports.representations(configuration, manifestId, http_1.default);
});
//# sourceMappingURL=smoothManifestRepresentations.js.map