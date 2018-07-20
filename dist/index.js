"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var account_1 = require("./account");
var analytics_1 = require("./analytics");
var encoding_1 = require("./encoding");
var player_1 = require("./player");
var notifications_1 = require("./notifications");
var Logger_1 = require("./utils/Logger");
var Utils_1 = require("./utils/Utils");
var checkAuthorizationInConfiguration = function (configuration) {
    if (Utils_1.default.isNoEmptyString(configuration.apiKey)) {
        return;
    }
    Logger_1.default.log('No apiKey provided in configuration.');
};
var setupConfiguration = function (configuration) {
    var internalConfig = __assign({}, configuration);
    if (configuration.debug && configuration.debug === true) {
        Logger_1.default.enableLogging();
    }
    if (internalConfig.protocol === undefined) {
        internalConfig.protocol = 'https';
    }
    if (internalConfig.host === undefined) {
        internalConfig.host = 'api.bitmovin.com';
    }
    if (internalConfig.basePath === undefined) {
        internalConfig.basePath = '/v1';
    }
    if (internalConfig.requestTimeout === undefined) {
        internalConfig.requestTimeout = 30000;
    }
    if (internalConfig.xApiClient === undefined) {
        internalConfig.xApiClient = 'bitmovin-javascript';
    }
    if (internalConfig.additionalHeaders === undefined) {
        internalConfig.additionalHeaders = {};
    }
    internalConfig.apiBaseUrl = urljoin(internalConfig.protocol + '://' + internalConfig.host, internalConfig.basePath);
    internalConfig.httpHeaders = __assign({ 'Content-Type': 'application/json', 'X-Api-Key': internalConfig.apiKey, 'X-Api-Client': internalConfig.xApiClient, 'X-Api-Client-Version': "" + '2.4.0' }, internalConfig.additionalHeaders);
    if (internalConfig.tenantOrgId !== undefined) {
        internalConfig.httpHeaders['X-Tenant-Org-Id'] = internalConfig.tenantOrgId;
    }
    return internalConfig;
};
var Bitmovin = function (configuration) {
    checkAuthorizationInConfiguration(configuration);
    var internalConfig = setupConfiguration(configuration);
    var bitmovin = {
        encoding: encoding_1.default(internalConfig),
        player: player_1.default(internalConfig),
        analytics: analytics_1.default(internalConfig),
        account: account_1.default(internalConfig),
        notifications: notifications_1.default(internalConfig)
    };
    return bitmovin;
};
exports.default = Bitmovin;
//# sourceMappingURL=index.js.map