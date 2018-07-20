"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var dashManifestContentProtections_1 = require("./dashManifestContentProtections");
var dashManifestRepresentations_1 = require("./dashManifestRepresentations");
exports.adaptationSets = function (configuration, manifestId, periodId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var typeFn = function (typeUrl) {
        var resourceDetails = function (adaptationSetId) {
            return {
                details: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId, 'adaptationsets', typeUrl, adaptationSetId);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId, 'adaptationsets', typeUrl, adaptationSetId);
                    return delete_(configuration, url);
                }
            };
        };
        var create = function (period) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId, 'adaptationsets', typeUrl);
            return post(configuration, url, period);
        };
        var list = http_1.utils.buildListCallFunction(httpClient, configuration, urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash', manifestId, 'periods', periodId, 'adaptationsets', typeUrl));
        var resource = Object.assign(resourceDetails, { create: create, list: list });
        return resource;
    };
    var fn = function (adaptationSetId) {
        return {
            representations: dashManifestRepresentations_1.default(configuration, manifestId, periodId, adaptationSetId),
            contentProtections: dashManifestContentProtections_1.default(configuration, manifestId, periodId, adaptationSetId, undefined)
        };
    };
    var audio = typeFn('audio');
    var video = typeFn('video');
    var subtitle = typeFn('subtitle');
    var custom = typeFn('custom');
    return Object.assign(fn, { audio: audio, video: video, subtitle: subtitle, custom: custom });
};
exports.default = (function (configuration, manifestId, periodId) {
    return exports.adaptationSets(configuration, manifestId, periodId, http_1.default);
});
//# sourceMappingURL=dashManifestAdaptationSets.js.map