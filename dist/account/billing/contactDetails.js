"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.contactDetails = function (configuration, httpClient) {
    var contactDetailsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'billing', 'contact-details');
    var get = httpClient.get, put = httpClient.put;
    return {
        details: function () {
            return get(configuration, contactDetailsBaseUrl);
        },
        update: function (contactDetailsPayload) {
            return put(configuration, contactDetailsBaseUrl, contactDetailsPayload);
        }
    };
};
exports.default = (function (configuration) {
    return exports.contactDetails(configuration, http_1.default);
});
//# sourceMappingURL=contactDetails.js.map