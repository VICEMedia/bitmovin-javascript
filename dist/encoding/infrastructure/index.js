"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var aws_1 = require("./aws");
exports.infrastructure = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (type) {
        var resourceDetails = function (id) {
            return {
                status: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'status');
                    return get(configuration, url);
                },
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id);
                    return delete_(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'customData');
                    return get(configuration, url);
                }
            };
        };
        var create = function (infrastructurePayload) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type);
            return post(configuration, url, infrastructurePayload);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    var kubernetes = typeFn('kubernetes');
    var aws = aws_1.aws(configuration, http_1.default);
    return {
        kubernetes: kubernetes,
        aws: aws
    };
};
exports.default = (function (configuration) {
    return exports.infrastructure(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map