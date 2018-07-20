"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.thumbnails = function (configuration, encodingId, streamId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var details = function (thumbnailId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'thumbnails', thumbnailId);
                return get(configuration, url);
            },
            customData: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'thumbnails', thumbnailId, 'customData');
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'thumbnails', thumbnailId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (thumbnail) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'thumbnails');
        return post(configuration, url, thumbnail);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'thumbnails'));
    var resourceDetails = Object.assign(details, {
        add: add,
        list: list
    });
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, encodingId, streamId) {
    return exports.thumbnails(configuration, encodingId, streamId, http_1.default);
});
//# sourceMappingURL=thumbnails.js.map