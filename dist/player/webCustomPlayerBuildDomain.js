"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.webCustomPlayerBuildDomain = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (domainId) {
        return {
            details: function () {
                var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web/domains', domainId);
                return get(configuration, url);
            },
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web/domains', domainId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (customPlayerBuildDomain) {
        var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web/domains');
        return post(configuration, url, customPlayerBuildDomain);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'player/custom-builds/web/domains'));
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration) {
    return exports.webCustomPlayerBuildDomain(configuration, http_1.default);
});
//# sourceMappingURL=webCustomPlayerBuildDomain.js.map