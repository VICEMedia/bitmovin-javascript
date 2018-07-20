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
require("es6-promise/auto");
var fetch = require("isomorphic-fetch");
var urljoin = require("url-join");
var BitmovinError_1 = require("./BitmovinError");
var Logger_1 = require("./Logger");
var GET = 'GET';
var POST = 'POST';
var DELETE = 'DELETE';
var PUT = 'PUT';
var buildParams = function (method, configuration, body) {
    return {
        method: method,
        body: body,
        headers: configuration.httpHeaders,
        timeout: configuration.requestTimeout
    };
};
var request = function (configuration, method, url, fetchMethod, body) {
    if (fetchMethod === void 0) { fetchMethod = fetch; }
    Logger_1.default.log('Request: ' + method + ' ' + url + '  ...');
    if (body !== undefined) {
        Logger_1.default.log('Request Body: ' + body);
    }
    var params = buildParams(method, configuration, body);
    return fetchMethod(url, params)
        .then(function (response) {
        if (response.status > 399) {
            var errorMessage_1 = 'HTTP Request was unsuccessful: HTTP Response Code was ' + response.status + ' ' + response.statusText;
            Logger_1.default.error(errorMessage_1);
            return response.json().then(function (responseData) {
                Logger_1.default.error('Error Response Body: ' + JSON.stringify(responseData));
                throw new BitmovinError_1.default(errorMessage_1, {
                    ok: response.ok,
                    statusText: response.statusText,
                    redirected: response.redirected,
                    type: response.type,
                    status: response.status,
                    headers: response.headers,
                    responseData: responseData
                });
            });
        }
        if (response.status === 204) {
            Logger_1.default.log('Response: 204 - No Content');
            return { data: {} };
        }
        return response.json();
    })
        .then(function (responseJSON) {
        return responseJSON.data.result;
    });
};
var get = function (configuration, url, fetchMethod) {
    if (fetchMethod === void 0) { fetchMethod = fetch; }
    return request(configuration, GET, url, fetchMethod, undefined);
};
var post = function (configuration, url, object, fetchMethod) {
    if (fetchMethod === void 0) { fetchMethod = fetch; }
    Logger_1.default.log('Request payload will be: ' + JSON.stringify(object, undefined, 2));
    var body = JSON.stringify(object);
    return request(configuration, POST, url, fetchMethod, body);
};
var put = function (configuration, url, object, fetchMethod) {
    if (fetchMethod === void 0) { fetchMethod = fetch; }
    Logger_1.default.log('Request payload will be: ' + JSON.stringify(object, undefined, 2));
    var body = JSON.stringify(object);
    return request(configuration, PUT, url, fetchMethod, body);
};
// tslint:disable-next-line
var delete_ = function (configuration, url, fetchMethod) {
    if (fetchMethod === void 0) { fetchMethod = fetch; }
    return request(configuration, DELETE, url, fetchMethod, undefined);
};
var buildGetParamString = function (getParams) {
    var params = [];
    var paramsString = '';
    for (var key in getParams) {
        if (getParams.hasOwnProperty(key)) {
            var value = getParams[key];
            if (value !== undefined && value !== null && value !== '') {
                params.push(key + "=" + value);
            }
        }
    }
    for (var i = 0; i < params.length; i++) {
        var param = '';
        if (i === 0) {
            param += '?';
        }
        else {
            param += '&';
        }
        param += params[i];
        paramsString += param;
    }
    return paramsString;
};
var buildFilterParamString = function (filterParams) {
    var processedFilterParams = {};
    for (var key in filterParams) {
        if (filterParams.hasOwnProperty(key)) {
            processedFilterParams[key] = filterParams[key].join(',');
        }
    }
    return processedFilterParams;
};
var buildListCallFunction = function (httpClient, configuration, url) {
    return function (limit, offset, sort, filter) {
        var urlToCall = url;
        var filterParams = filter ? buildFilterParamString(filter) : {};
        var getParams = buildGetParamString(__assign({}, filterParams, { limit: limit,
            offset: offset,
            sort: sort }));
        if (getParams.length > 0) {
            urlToCall = urljoin(url, getParams);
        }
        return httpClient.get(configuration, urlToCall);
    };
};
var Http = {
    get: get,
    post: post,
    put: put,
    delete_: delete_
};
exports.utils = {
    buildGetParamString: buildGetParamString,
    buildFilterParamString: buildFilterParamString,
    buildListCallFunction: buildListCallFunction
};
exports.default = Http;
//# sourceMappingURL=http.js.map