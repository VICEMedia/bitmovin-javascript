"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.hlsManifestStreams = function (configuration, manifestId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (streamId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'streams', streamId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'streams', streamId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (stream) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'streams');
        return post(configuration, url, stream);
    };
    var list = function (limit, offset) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'streams');
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
    return exports.hlsManifestStreams(configuration, manifestId, http_1.default);
});
//# sourceMappingURL=hlsManifestStreams.js.map