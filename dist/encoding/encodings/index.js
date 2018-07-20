"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var muxings_1 = require("./muxings");
var streams_1 = require("./streams");
exports.encodings = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (encodingId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId);
                return get(configuration, url);
            },
            liveDetails: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'live');
                return get(configuration, url);
            },
            customData: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'customData');
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId);
                return delete_(configuration, url);
            },
            start: function (startConfiguration) {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'start');
                return post(configuration, url, startConfiguration);
            },
            stop: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'stop');
                return post(configuration, url);
            },
            startLive: function (startLiveConfiguration) {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'live', 'start');
                return post(configuration, url, startLiveConfiguration);
            },
            stopLive: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'live', 'stop');
                return post(configuration, url);
            },
            status: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'status');
                return get(configuration, url);
            },
            streams: streams_1.default(configuration, encodingId),
            muxings: muxings_1.default(configuration, encodingId)
        };
    };
    var create = function (encoding) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings');
        return post(configuration, url, encoding);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings'));
    var resource = Object.assign(resourceDetails, {
        create: create,
        list: list
    });
    return resource;
};
exports.default = (function (configuration) {
    return exports.encodings(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map