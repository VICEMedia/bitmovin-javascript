"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var groups_1 = require("./groups");
exports.organizations = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_, put = httpClient.put;
    var organizationsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'organizations');
    var resourceDetails = function (organizationId) {
        return {
            details: function () {
                var url = urljoin(organizationsBaseUrl, organizationId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(organizationsBaseUrl, organizationId);
                return delete_(configuration, url);
            },
            update: function (organization) {
                var url = urljoin(organizationsBaseUrl, organizationId);
                return put(configuration, url, organization);
            },
            groups: groups_1.default(configuration, organizationId)
        };
    };
    var add = function (organization) {
        var url = urljoin(organizationsBaseUrl);
        return post(configuration, url, organization);
    };
    var list = function () {
        var url = urljoin(organizationsBaseUrl);
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration) {
    return exports.organizations(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map