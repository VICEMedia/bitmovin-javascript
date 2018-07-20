"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.codecConfigurations = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (codecConfigId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/configurations', typeUrl, codecConfigId);
                    return get(configuration, url);
                },
                customData: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/configurations', typeUrl, codecConfigId, 'customData');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/configurations', typeUrl, codecConfigId);
                    return delete_(configuration, url);
                }
            };
        };
        var create = function (codecConfig) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/configurations', typeUrl);
            return post(configuration, url, codecConfig);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/configurations', typeUrl));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    return {
        h264: typeFn('video/h264'),
        h265: typeFn('video/h265'),
        aac: typeFn('audio/aac'),
        vp9: typeFn('video/vp9'),
        ac3: typeFn('audio/ac3'),
        eac3: typeFn('audio/eac3'),
        vorbis: typeFn('audio/vorbis'),
        opus: typeFn('audio/opus'),
        mp2: typeFn('audio/mp2'),
        mp3: typeFn('audio/mp3'),
        vp8: typeFn('video/vp8'),
        mjpeg: typeFn('video/mjpeg'),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/configurations')),
        getType: function (configurationId) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/configurations', configurationId, 'type');
            return get(configuration, url);
        }
    };
};
exports.default = (function (configuration) {
    return exports.codecConfigurations(configuration, http_1.default);
});
//# sourceMappingURL=codecConfigurations.js.map