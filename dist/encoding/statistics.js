"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var BitmovinError_1 = require("../utils/BitmovinError");
var DateUtils_1 = require("../utils/DateUtils");
var http_1 = require("../utils/http");
exports.statistics = function (configuration, httpClient) {
    var get = httpClient.get;
    var addOptionsToUrl = function (url, options) {
        var newUrl = url;
        var limit = options.limit, offset = options.offset;
        if (options !== {} && options.from && options.to) {
            if (!DateUtils_1.isValidApiRequestDateString(options.from) || !DateUtils_1.isValidApiRequestDateString(options.to)) {
                return Promise.reject(new BitmovinError_1.default('Wrong date format! Correct format is yyyy-MM-dd', {}));
            }
            newUrl = urljoin(newUrl, options.from, options.to);
        }
        var getParams = http_1.utils.buildGetParamString({
            limit: limit,
            offset: offset
        });
        if (getParams.length > 0) {
            newUrl = urljoin(newUrl, getParams);
        }
        return newUrl;
    };
    var daily = function (options) {
        if (options === void 0) { options = {}; }
        var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics/daily');
        var urlWithOptions = addOptionsToUrl(url, options);
        return get(configuration, urlWithOptions);
    };
    var typeFn = function (type) {
        return {
            daily: function (options) {
                if (options === void 0) { options = {}; }
                var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics/encodings/', type, '/daily');
                var urlWithOptions = addOptionsToUrl(url, options);
                return get(configuration, urlWithOptions);
            },
            list: function (options) {
                if (options === void 0) { options = {}; }
                var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics/encodings/', type);
                var urlWithOptions = addOptionsToUrl(url, options);
                return get(configuration, urlWithOptions);
            }
        };
    };
    return {
        /*
         * Gets the overall encoding statistics
         *
         * Options is a hash with optional parameters:
         * limit: Number - maximum results
         * offset: Number - skip n results
         *
         * If from and to is set only statistics between these two dates are returned
         * from: Date
         * to: Date
        */
        overall: function (from, to) {
            var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics');
            if (from && to) {
                url = urljoin(url, from, to);
            }
            return get(configuration, url);
        },
        vod: typeFn('vod'),
        live: typeFn('live'),
        daily: daily,
        encodings: function (encodingId) {
            return {
                statistics: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics/encodings', encodingId);
                    return get(configuration, url);
                },
                liveStatistics: function () {
                    var url = urljoin(configuration.apiBaseUrl, 'encoding/statistics/encodings', encodingId, 'live-statistics');
                    return get(configuration, url);
                }
            };
        }
    };
};
exports.default = (function (configuration) {
    return exports.statistics(configuration, http_1.default);
});
//# sourceMappingURL=statistics.js.map