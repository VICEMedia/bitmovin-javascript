"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
var permissions_1 = require("./permissions");
var tenants_1 = require("./tenants");
exports.groups = function (configuration, organizationId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var groupsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'organizations', organizationId, 'groups');
    var resourceDetails = function (groupId) {
        return {
            details: function () {
                var url = urljoin(groupsBaseUrl, groupId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(groupsBaseUrl, groupId);
                return delete_(configuration, url);
            },
            permissions: permissions_1.default(configuration, organizationId, groupId),
            tenants: tenants_1.default(configuration, organizationId, groupId)
        };
    };
    var add = function (group) {
        var url = urljoin(groupsBaseUrl);
        return post(configuration, url, group);
    };
    var list = function () {
        var url = urljoin(groupsBaseUrl);
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, organizationId) {
    return exports.groups(configuration, organizationId, http_1.default);
});
//# sourceMappingURL=groups.js.map