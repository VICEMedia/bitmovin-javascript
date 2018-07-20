"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var UrlUtils_1 = require("../utils/UrlUtils");
var http_1 = require("../utils/http");
var emails = function (configuration, http) {
    if (http === void 0) { http = http_1.default; }
    var emailsBaseUrl = urljoin(configuration.apiBaseUrl, 'notifications', 'emails');
    var encodingBaseUrl = urljoin(emailsBaseUrl, 'encoding');
    var encodingsBaseUrl = urljoin(encodingBaseUrl, 'encodings');
    var listEncoding = function (limit, offset, sort, filter) {
        var url = UrlUtils_1.buildListUrl(encodingBaseUrl, limit, offset, sort, filter);
        return http.get(configuration, url);
    };
    var encodings = function (encodingId) {
        var url = urljoin(encodingsBaseUrl, encodingId);
        return {
            liveInputStreamChanged: createLiveInputStreamChangedMethods(url, configuration, http),
            error: createErrorMethods(url, configuration, http),
            list: http_1.utils.buildListCallFunction(http, configuration, url)
        };
    };
    var encodingsResource = Object.assign(encodings, {
        liveInputStreamChanged: createLiveInputStreamChangedMethods(encodingsBaseUrl, configuration, http),
        error: createErrorMethods(encodingsBaseUrl, configuration, http)
    });
    return {
        list: http_1.utils.buildListCallFunction(http, configuration, emailsBaseUrl),
        encoding: {
            list: listEncoding,
            encodings: encodingsResource
        }
    };
};
var createLiveInputStreamChangedMethods = function (encodingsBaseUrl, configuration, http) {
    var typeBaseUrl = urljoin(encodingsBaseUrl, 'live-input-stream-changed');
    return createMethods(typeBaseUrl, configuration, http);
};
var createErrorMethods = function (encodingsBaseUrl, configuration, http) {
    var typeBaseUrl = urljoin(encodingsBaseUrl, 'error');
    return createMethods(typeBaseUrl, configuration, http);
};
var createMethods = function (typeBaseUrl, configuration, http) {
    var specificResource = function (notificationId) {
        var url = urljoin(typeBaseUrl, notificationId);
        return {
            replace: function (emailNotification) {
                return http.put(configuration, url, emailNotification);
            }
        };
    };
    var create = function (emailNotification) {
        return http.post(configuration, typeBaseUrl, emailNotification);
    };
    var resource = Object.assign(specificResource, {
        create: create
    });
    return resource;
};
exports.default = emails;
//# sourceMappingURL=emails.js.map