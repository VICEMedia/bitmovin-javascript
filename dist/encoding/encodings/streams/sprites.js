"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.sprites = function (configuration, encodingId, streamId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (spriteId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'sprites', spriteId);
                return get(configuration, url);
            },
            customData: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'sprites', spriteId, 'customData');
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'sprites', spriteId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (sprite) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'sprites');
        return post(configuration, url, sprite);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'sprites'));
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, encodingId, streamId) {
    return exports.sprites(configuration, encodingId, streamId, http_1.default);
});
//# sourceMappingURL=sprites.js.map