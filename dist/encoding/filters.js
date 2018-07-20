"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.filters = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (filterId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/filters', typeUrl, filterId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/filters', typeUrl, filterId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/filters', typeUrl, filterId);
                    return delete_(configuration, url);
                }
            };
        };
        var create = function (filter) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/filters', typeUrl);
            return post(configuration, url, filter);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/filters', typeUrl));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    return {
        crop: typeFn('crop'),
        deinterlace: typeFn('deinterlace'),
        rotate: typeFn('rotate'),
        watermark: typeFn('watermark'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/filters'))
    };
};
exports.default = (function (configuration) {
    return exports.filters(configuration, http_1.default);
});
//# sourceMappingURL=filters.js.map