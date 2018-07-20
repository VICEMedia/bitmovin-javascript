"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var emails_1 = require("./emails");
var webhooks_1 = require("./webhooks");
exports.notifications = function (configuration, httpClient) {
    if (httpClient === void 0) { httpClient = http_1.default; }
    var list = function (notificationId) {
        var url = urljoin(configuration.apiBaseUrl, 'notifications', notificationId);
        return {
            details: function () { return httpClient.get(configuration, url); },
            delete: function () { return httpClient.delete_(configuration, url); }
        };
    };
    var api = Object.assign(list, {
        emails: emails_1.default(configuration, httpClient),
        webhooks: webhooks_1.default(configuration, httpClient),
        list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'notifications'))
    });
    return api;
};
exports.default = exports.notifications;
//# sourceMappingURL=index.js.map