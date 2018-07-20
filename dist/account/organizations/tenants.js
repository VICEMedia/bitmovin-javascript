"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.tenants = function (configuration, organizationId, groupId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var tenantsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'organizations', organizationId, 'groups', groupId, 'tenants');
    var resourceDetails = function (tenantId) {
        return {
            details: function () {
                var url = urljoin(tenantsBaseUrl, tenantId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(tenantsBaseUrl, tenantId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (tenant) {
        var url = urljoin(tenantsBaseUrl);
        return post(configuration, url, tenant);
    };
    var list = function () {
        var url = urljoin(tenantsBaseUrl);
        return get(configuration, url);
    };
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, organizationId, groupId) {
    return exports.tenants(configuration, organizationId, groupId, http_1.default);
});
//# sourceMappingURL=tenants.js.map