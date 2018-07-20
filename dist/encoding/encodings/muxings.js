"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var drms_1 = require("./drms");
exports.muxings = function (configuration, encodingId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (muxingId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', typeUrl, muxingId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', typeUrl, muxingId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', typeUrl, muxingId);
                    return delete_(configuration, url);
                },
                drms: drms_1.default(configuration, encodingId, typeUrl, muxingId)
            };
        };
        var add = function (muxing) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', typeUrl);
            return post(configuration, url, muxing);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings', typeUrl));
        var resource = Object.assign(resourceDetails, {
            add: add,
            list: list
        });
        return resource;
    };
    return {
        fmp4: typeFn('fmp4'),
        ts: typeFn('ts'),
        mp4: typeFn('mp4'),
        webm: typeFn('webm'),
        pwebm: typeFn('progressive-webm'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'muxings'))
    };
};
exports.default = (function (configuration, encodingId) {
    return exports.muxings(configuration, encodingId, http_1.default);
});
//# sourceMappingURL=muxings.js.map