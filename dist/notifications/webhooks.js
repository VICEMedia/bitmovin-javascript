"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var webhooks = function (configuration, http) {
    if (http === void 0) { http = http_1.default; }
    var webhooksBaseUrl = urljoin(configuration.apiBaseUrl, 'notifications', 'webhooks');
    var encodingBaseUrl = urljoin(webhooksBaseUrl, 'encoding');
    var encodingsBaseUrl = urljoin(encodingBaseUrl, 'encodings');
    var transfersBaseUrl = urljoin(encodingBaseUrl, 'transfers');
    var encodings = function (encodingId) {
        var url = urljoin(encodingsBaseUrl, encodingId);
        return {
            finished: createMethods(url, 'finished', configuration, http),
            error: createMethods(url, 'error', configuration, http)
        };
    };
    var encodingsResource = Object.assign(encodings, {
        finished: createMethods(encodingsBaseUrl, 'finished', configuration, http),
        error: createMethods(encodingsBaseUrl, 'error', configuration, http)
    });
    var transfers = function (transferId) {
        var url = urljoin(transfersBaseUrl, transferId);
        return {
            finished: createMethods(url, 'finished', configuration, http),
            error: createMethods(url, 'error', configuration, http)
        };
    };
    var transfersResource = Object.assign(transfers, {
        finished: createMethods(transfersBaseUrl, 'finished', configuration, http),
        error: createMethods(transfersBaseUrl, 'error', configuration, http)
    });
    var list = http_1.utils.buildListCallFunction(http, configuration, webhooksBaseUrl);
    return {
        encoding: {
            encodings: encodingsResource,
            transfers: transfersResource
        },
        list: list
    };
};
var createMethods = function (baseUrl, notificationType, configuration, http) {
    var typeBaseUrl = urljoin(baseUrl, notificationType);
    var finished = function (notificationId) {
        var url = urljoin(typeBaseUrl, notificationId);
        return {
            details: function () { return http.get(configuration, url); },
            delete: function () { return http.delete_(configuration, url); },
            customData: function () { return http.get(configuration, url); }
        };
    };
    var create = function (webhookNotification) {
        return http.post(configuration, typeBaseUrl, webhookNotification);
    };
    var resource = Object.assign(finished, {
        create: create,
        list: http_1.utils.buildListCallFunction(http, configuration, typeBaseUrl)
    });
    return resource;
};
exports.default = webhooks;
//# sourceMappingURL=webhooks.js.map