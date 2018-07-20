"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var hlsManifestMedia_1 = require("./hlsManifestMedia");
var hlsManifestStreams_1 = require("./hlsManifestStreams");
exports.hlsManifests = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (manifestId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId);
                return delete_(configuration, url);
            },
            start: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'start');
                return post(configuration, url);
            },
            stop: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'stop');
                return post(configuration, url);
            },
            status: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'status');
                return get(configuration, url);
            },
            media: hlsManifestMedia_1.default(configuration, manifestId),
            streams: hlsManifestStreams_1.default(configuration, manifestId)
        };
    };
    var create = function (manifest) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls');
        return post(configuration, url, manifest);
    };
    var list = function (limit, offset, encodingId) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls');
        var getParams = http_1.utils.buildGetParamString({
            limit: limit,
            offset: offset,
            encodingId: encodingId
        });
        if (getParams.length > 0) {
            url = urljoin(url, getParams);
        }
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { create: create, list: list });
    return resource;
};
exports.default = (function (configuration) {
    return exports.hlsManifests(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map