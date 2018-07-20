"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.drms = function (configuration, encodingId, muxingTypeUrl, muxingId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (drmId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm', typeUrl, drmId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm', typeUrl, drmId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm', typeUrl, drmId);
                    return delete_(configuration, url);
                }
            };
        };
        var add = function (drm) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm', typeUrl);
            return post(configuration, url, drm);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm', typeUrl));
        var resource = Object.assign(resourceDetails, { add: add, list: list });
        return resource;
    };
    return {
        aes: typeFn('aes'),
        cenc: typeFn('cenc'),
        clearKey: typeFn('clearkey'),
        fairPlay: typeFn('fairplay'),
        marlin: typeFn('marlin'),
        playReady: typeFn('playready'),
        primeTime: typeFn('primetime'),
        widevine: typeFn('widevine'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', muxingTypeUrl, muxingId, 'drm'))
    };
};
exports.default = (function (configuration, encodingId, muxingTypeUrl, muxingId) {
    return exports.drms(configuration, encodingId, muxingTypeUrl, muxingId, http_1.default);
});
//# sourceMappingURL=drms.js.map