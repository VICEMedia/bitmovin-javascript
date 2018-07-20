"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var BitmovinError_1 = require("../utils/BitmovinError");
var http_1 = require("../utils/http");
exports.statistics = function (configuration, httpClient) {
    var get = httpClient.get;
    return {
        impressions: function (licenseKeyId, start, end, interval, offset, limit) {
            if (!start || !end) {
                return Promise.reject(new BitmovinError_1.default('Not all required params given.', undefined));
            }
            var analyticsStatisticsBaseUrl = urljoin(configuration.apiBaseUrl, '/analytics/statistics/impressions');
            var getParams = http_1.utils.buildGetParamString({
                licenseKeyId: licenseKeyId,
                start: start,
                end: end,
                interval: interval,
                offset: offset,
                limit: limit
            });
            var url = urljoin(analyticsStatisticsBaseUrl, getParams);
            return get(configuration, url);
        },
        INTERVAL: {
            DAILY: 'DAILY'
        }
    };
};
exports.default = (function (configuration) {
    return exports.statistics(configuration, http_1.default);
});
//# sourceMappingURL=statistics.js.map