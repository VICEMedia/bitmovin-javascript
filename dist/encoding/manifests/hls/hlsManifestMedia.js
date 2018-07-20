"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.hlsManifestMedia = function (configuration, manifestId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (mediaId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'media', typeUrl, mediaId);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'media', typeUrl, mediaId);
                    return delete_(configuration, url);
                }
            };
        };
        var add = function (media) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'media', typeUrl);
            return post(configuration, url, media);
        };
        var list = function (limit, offset) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/hls', manifestId, 'media', typeUrl);
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
        video: typeFn('video'),
        audio: typeFn('audio'),
        subtitles: typeFn('subtitles'),
        closedCaptions: typeFn('closed-captions'),
        vtt: typeFn('vtt')
    };
};
exports.default = (function (configuration, manifestId) {
    return exports.hlsManifestMedia(configuration, manifestId, http_1.default);
});
//# sourceMappingURL=hlsManifestMedia.js.map