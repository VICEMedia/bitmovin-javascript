"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.outputs = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (outputId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/outputs', typeUrl, outputId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/outputs', typeUrl, outputId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/outputs', typeUrl, outputId);
                    return delete_(configuration, url);
                }
            };
        };
        var create = function (output) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/outputs', typeUrl);
            return post(configuration, url, output);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/outputs', typeUrl));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    return {
        s3: typeFn('s3'),
        gcs: typeFn('gcs'),
        azure: typeFn('azure'),
        ftp: typeFn('ftp'),
        sftp: typeFn('sftp'),
        genericS3: typeFn('generic-s3'),
        local: typeFn('local'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/outputs')),
        getType: function (outputId) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/outputs', outputId, 'type');
            return get(configuration, url);
        }
    };
};
exports.default = (function (configuration) {
    return exports.outputs(configuration, http_1.default);
});
//# sourceMappingURL=outputs.js.map