"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../utils/http");
var apiKeys_1 = require("./apiKeys");
var billing_1 = require("./billing");
var organizations_1 = require("./organizations");
exports.account = function (configuration, httpClient) {
    var get = httpClient.get, post = httpClient.post;
    var accountBaseUrl = urljoin(configuration.apiBaseUrl, 'account');
    var information = function () {
        var url = urljoin(accountBaseUrl, '/information');
        return get(configuration, url);
    };
    var login = function (eMail, password) {
        var url = urljoin(accountBaseUrl, '/login');
        var loginRequestPayload = {
            eMail: eMail,
            password: password
        };
        return post(configuration, url, loginRequestPayload);
    };
    var changePassword = function (eMail, currentPassword, newPassword) {
        var url = urljoin(accountBaseUrl, '/password/change');
        var changePasswordPayload = {
            eMail: eMail,
            currentPassword: currentPassword,
            newPassword: newPassword
        };
        return post(configuration, url, changePasswordPayload);
    };
    return {
        information: information,
        login: login,
        changePassword: changePassword,
        billing: billing_1.default(configuration),
        organizations: organizations_1.default(configuration),
        apiKeys: apiKeys_1.default(configuration, httpClient)
    };
};
exports.default = (function (configuration) {
    return exports.account(configuration, http_1.default);
});
//# sourceMappingURL=index.js.map