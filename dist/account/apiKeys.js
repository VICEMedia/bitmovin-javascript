"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var apiKeys = function (configuration, httpClient) {
    var apiKeysBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'api-keys');
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (apiKeyId) {
        var url = urljoin(apiKeysBaseUrl, apiKeyId);
        return get(configuration, url);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, apiKeysBaseUrl);
    var create = function () {
        var url = apiKeysBaseUrl;
        return post(configuration, url);
    };
    var deleteApiKey = function (apiKeyId) {
        var url = urljoin(apiKeysBaseUrl, apiKeyId);
        return delete_(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { delete: deleteApiKey, create: create, list: list });
    return resource;
};
exports.default = apiKeys;
//# sourceMappingURL=apiKeys.js.map