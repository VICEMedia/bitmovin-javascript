"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.invoices = function (configuration, httpClient) {
    var invoicesBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'billing', 'invoices');
    var get = httpClient.get;
    return {
        encoding: {
            list: function (limit, offset) {
                var url = urljoin(invoicesBaseUrl, 'encoding');
                var getParams = http_1.utils.buildGetParamString({
                    limit: limit,
                    offset: offset
                });
                if (getParams.length > 0) {
                    url = urljoin(url, getParams);
                }
                return get(configuration, url);
            }
        },
        player: {
            list: function (limit, offset) {
                var url = urljoin(invoicesBaseUrl, 'player');
                var getParams = http_1.utils.buildGetParamString({
                    limit: limit,
                    offset: offset
                });
                if (getParams.length > 0) {
                    url = urljoin(url, getParams);
                }
                return get(configuration, url);
            }
        },
        analytics: {
            list: function (limit, offset) {
                var url = urljoin(invoicesBaseUrl, 'analytics');
                var getParams = http_1.utils.buildGetParamString({
                    limit: limit,
                    offset: offset
                });
                if (getParams.length > 0) {
                    url = urljoin(url, getParams);
                }
                return get(configuration, url);
            }
        }
    };
};
exports.default = (function (configuration) {
    return exports.invoices(configuration, http_1.default);
});
//# sourceMappingURL=invoices.js.map