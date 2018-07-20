"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var Channel;
(function (Channel) {
    Channel["Developer"] = "developer";
    Channel["Beta"] = "beta";
    Channel["Staging"] = "staging";
    Channel["Stable"] = "stable";
})(Channel = exports.Channel || (exports.Channel = {}));
exports.channels = function (configuration, httpClient) {
    var get = httpClient.get;
    var resourceDetails = function (channelName) {
        var versions = {
            list: http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'player/channels', channelName, 'versions')),
            latest: function () {
                var url = urljoin(configuration.apiBaseUrl, 'player/channels', channelName, 'versions', 'latest');
                return get(configuration, url);
            }
        };
        return {
            versions: versions
        };
    };
    var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'player/channels'));
    var resource = Object.assign(resourceDetails, { list: list });
    return resource;
};
exports.default = (function (configuration) {
    return exports.channels(configuration, http_1.default);
});
//# sourceMappingURL=channels.js.map