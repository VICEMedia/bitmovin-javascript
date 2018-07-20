"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.inputs = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (inputId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl, inputId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl, inputId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl, inputId);
                    return delete_(configuration, url);
                }
            };
        };
        var create = function (input) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl);
            return post(configuration, url, input);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    var rtmpTypeFn = function (typeUrl) {
        var rtmpDetails = function (inputId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl, inputId);
                    return get(configuration, url);
                }
            };
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/inputs', typeUrl));
        var rtmp = Object.assign(rtmpDetails, {
            list: list
        });
        return rtmp;
    };
    return {
        aspera: typeFn('aspera'),
        azure: typeFn('azure'),
        ftp: typeFn('ftp'),
        gcs: typeFn('gcs'),
        http: typeFn('http'),
        https: typeFn('https'),
        rtmp: rtmpTypeFn('rtmp'),
        s3: typeFn('s3'),
        genericS3: typeFn('generic-s3'),
        sftp: typeFn('sftp'),
        local: typeFn('local'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/inputs')),
        getType: function (inputId) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/inputs', inputId, 'type');
            return get(configuration, url);
        }
    };
};
exports.default = (function (configuration) {
    return exports.inputs(configuration, http_1.default);
});
//# sourceMappingURL=inputs.js.map