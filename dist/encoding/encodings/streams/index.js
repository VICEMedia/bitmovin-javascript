"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var filters_1 = require("./filters");
var sprites_1 = require("./sprites");
var thumbnails_1 = require("./thumbnails");
exports.streams = function (configuration, encodingId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (streamId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId);
                return get(configuration, url);
            },
            customData: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'customData');
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId);
                return delete_(configuration, url);
            },
            inputDetails: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'input');
                return get(configuration, url);
            },
            filters: filters_1.filters(configuration, encodingId, streamId, httpClient),
            thumbnails: thumbnails_1.thumbnails(configuration, encodingId, streamId, httpClient),
            sprites: sprites_1.sprites(configuration, encodingId, streamId, httpClient)
        };
    };
    var add = function (stream) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams');
        return post(configuration, url, stream);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams'));
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, encodingId) {
    return exports.streams(configuration, encodingId, http_1.default);
});
//# sourceMappingURL=index.js.map