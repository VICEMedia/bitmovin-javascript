"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../../utils/http");
var dashManifestContentProtections_1 = require("./dashManifestContentProtections");
exports.representations = function (configuration, manifestId, periodId, adaptationSetId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    var dashManifestsBaseUrl = urljoin(configuration.apiBaseUrl, 'encoding/manifests/dash');
    var typeFn = function (typeUrl) {
        var resourceDetails = function (representationId) {
            return {
                details: function () {
                    var url = urljoin(dashManifestsBaseUrl, manifestId, 'periods', periodId, 'adaptationsets', adaptationSetId, 'representations', typeUrl, representationId);
                    return get(configuration, url);
                },
                delete: function () {
                    var url = urljoin(dashManifestsBaseUrl, manifestId, 'periods', periodId, 'adaptationsets', adaptationSetId, 'representations', typeUrl, representationId);
                    return delete_(configuration, url);
                },
                contentProtections: dashManifestContentProtections_1.default(configuration, manifestId, periodId, adaptationSetId, {
                    type: typeUrl,
                    id: representationId
                })
            };
        };
        var add = function (representation) {
            var url = urljoin(dashManifestsBaseUrl, manifestId, 'periods', periodId, 'adaptationsets', adaptationSetId, 'representations', typeUrl);
            return post(configuration, url, representation);
        };
        var list = function (limit, offset) {
            var url = urljoin(dashManifestsBaseUrl, manifestId, 'periods', periodId, 'adaptationsets', adaptationSetId, 'representations', typeUrl);
            var getParams = http_1.utils.buildGetParamString({
                limit: limit,
                offset: offset
            });
            if (getParams.length > 0) {
                url = urljoin(url, getParams);
            }
            return get(configuration, url);
        };
        var resource = Object.assign(resourceDetails, { add: add, list: list });
        return resource;
    };
    return {
        fmp4: typeFn('fmp4'),
        drmFmp4: typeFn('fmp4/drm'),
        sidecar: typeFn('sidecar'),
        vtt: typeFn('vtt'),
        mp4: typeFn('mp4'),
        drmMp4: typeFn('mp4/drm'),
        webm: typeFn('webm')
    };
};
exports.default = (function (configuration, manifestId, periodId, adaptationSetId) {
    return exports.representations(configuration, manifestId, periodId, adaptationSetId, http_1.default);
});
//# sourceMappingURL=dashManifestRepresentations.js.map