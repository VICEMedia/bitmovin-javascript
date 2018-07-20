"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.permissions = function (configuration, organizationId, groupId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var permissionsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'organizations', organizationId, 'groups', groupId, 'permissions');
    var resourceDetails = function (permissionId) {
        return {
            details: function () {
                var url = urljoin(permissionsBaseUrl, permissionId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(permissionsBaseUrl, permissionId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (permission) {
        var url = urljoin(permissionsBaseUrl);
        return post(configuration, url, permission);
    };
    var list = function () {
        var url = urljoin(permissionsBaseUrl);
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, organizationId, groupId) {
    return exports.permissions(configuration, organizationId, groupId, http_1.default);
});
//# sourceMappingURL=permissions.js.map