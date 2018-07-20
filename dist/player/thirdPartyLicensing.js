"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
exports.thirdPartyLicensing = function (configuration, licenseId, httpClient) {
    var get = httpClient.get, post = httpClient.post, delete_ = httpClient.delete_;
    return {
        delete: function () {
            var url = urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'third-party-licensing');
            return delete_(configuration, url);
        },
        get: function () {
            var url = urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'third-party-licensing');
            return get(configuration, url);
        },
        add: function (thirdPartyLicensingPayload) {
            var url = urljoin(configuration.apiBaseUrl, 'player/licenses', licenseId, 'third-party-licensing');
            return post(configuration, url, thirdPartyLicensingPayload);
        }
    };
};
exports.default = (function (configuration, licenseId) {
    return exports.thirdPartyLicensing(configuration, licenseId, http_1.default);
});
//# sourceMappingURL=thirdPartyLicensing.js.map