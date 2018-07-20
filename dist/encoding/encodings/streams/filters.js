"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
exports.filters = function (configuration, encodingId, streamId, httpClient) {
    var post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (filterId) {
        return {
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'filters', filterId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (filter) {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'filters');
        return post(configuration, url, filter);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'filters'));
    var deleteAll = function () {
        var url = urljoin(configuration.apiBaseUrl, 'encoding/encodings', encodingId, 'streams', streamId, 'filters');
        return delete_(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list, deleteAll: deleteAll });
    return resource;
};
exports.default = (function (configuration, encodingId, streamId) {
    return exports.filters(configuration, encodingId, streamId, http_1.default);
});
//# sourceMappingURL=filters.js.map