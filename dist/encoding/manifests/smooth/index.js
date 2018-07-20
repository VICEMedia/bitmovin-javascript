"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var smoothManifestContentProtections_1 = require("./smoothManifestContentProtections");
var smoothManifestRepresentations_1 = require("./smoothManifestRepresentations");
exports.smoothManifests = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (manifestId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId);
                return delete_(configuration, url);
            },
            start: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId, 'start');
                return post(configuration, url);
            },
            stop: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId, 'stop');
                return post(configuration, url);
            },
            status: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth', manifestId, 'status');
                return get(configuration, url);
            },
            representations: smoothManifestRepresentations_1.default(configuration, manifestId),
            contentProtections: smoothManifestContentProtections_1.default(configuration, manifestId)
        };
    };
    var create = function (manifest) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth');
        return post(configuration, url, manifest);
    };
    var list = function (limit, offset, encodingId) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/smooth');
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
    return exports.smoothManifests(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map