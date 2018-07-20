"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.aws = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (type) {
        var resourceDetails = function (id) {
            var regionDetails = function (regionName) {
                return {
                    add: function (region) {
                        var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'regions', regionName);
                        return post(configuration, url, region);
                    },
                    delete: function () {
                        var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'regions', regionName);
                        return delete_(configuration, url);
                    },
                    details: function () {
                        var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'regions', regionName);
                        return get(configuration, url);
                    }
                };
            };
            var listRegions = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'regions'));
            var regions = Object.assign(regionDetails, {
                list: listRegions
            });
            return {
                status: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id, 'status');
                    return get(configuration, url);
                },
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type, id);
                    return delete_(configuration, url);
                },
                regions: regions
            };
        };
        var create = function (infrastructure) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type);
            return post(configuration, url, infrastructure);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/infrastructure', type));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    return typeFn('aws');
};
exports.default = (function (configuration) {
    return exports.aws(configuration, http_1.default);
});
//# sourceMappingURL=aws.js.map