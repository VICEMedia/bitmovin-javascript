"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var webCustomPlayerBuildDomain_1 = require("./webCustomPlayerBuildDomain");
var CustomPlayerBuildStatusEnum;
(function (CustomPlayerBuildStatusEnum) {
    CustomPlayerBuildStatusEnum["CREATED"] = "CREATED";
    CustomPlayerBuildStatusEnum["FINISHED"] = "FINISHED";
    CustomPlayerBuildStatusEnum["RUNNING"] = "RUNNING";
    CustomPlayerBuildStatusEnum["ERROR"] = "ERROR";
})(CustomPlayerBuildStatusEnum = exports.CustomPlayerBuildStatusEnum || (exports.CustomPlayerBuildStatusEnum = {}));
exports.customBuilds = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var web = function () {
        var resourceDetails = function (customBuildId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web', customBuildId);
                    return get(configuration, url);
                },
                start: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web', customBuildId, 'start');
                    return post(configuration, url, {});
                },
                status: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web', customBuildId, 'status');
                    return get(configuration, url);
                },
                download: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web', customBuildId, 'download');
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web', customBuildId);
                    return delete_(configuration, url);
                }
            };
        };
        var add = function (customBuild) {
            var url = urljoin(configuration.apiBaseUrl, 'player/custom-builds/web');
            return post(configuration, url, customBuild);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'player/custom-builds/web'));
        var domains = webCustomPlayerBuildDomain_1.webCustomPlayerBuildDomain(configuration, httpClient);
        var resource = Object.assign(resourceDetails, { add: add, domains: domains, list: list });
        return resource;
    };
    return {
        web: web()
    };
};
exports.default = (function (configuration) {
    return exports.customBuilds(configuration, http_1.default);
});
//# sourceMappingURL=customBuilds.js.map