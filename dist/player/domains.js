"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.domains = function (configuration, licenseId, httpClient) {
    var post = httpClient.post, delete_ = httpClient.delete_;
    var resourceDetails = function (domainId) {
        return {
            delete: function () {
                var url = urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'domains', domainId);
                return delete_(configuration, url);
            }
        };
    };
    var add = function (domain) {
        var url = urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'domains');
        return post(configuration, url, domain);
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'domains'));
    var resource = Object.assign(resourceDetails, { add: add, list: list });
    return resource;
};
exports.default = (function (configuration, licenseId) {
    return exports.domains(configuration, licenseId, http_1.default);
});
//# sourceMappingURL=domains.js.map