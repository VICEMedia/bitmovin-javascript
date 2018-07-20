"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urljoin = require("url-join");
var http_1 = require("../../utils/http");
exports.statements = function (configuration, httpClient) {
    var statementsBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'billing', 'statements');
    var get = httpClient.get;
    return {
        encoding: {
            list: function (limit, offset) {
                var url = urljoin(statementsBaseUrl, 'encoding');
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
                var url = urljoin(statementsBaseUrl, 'player');
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
                var url = urljoin(statementsBaseUrl, 'analytics');
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
    return exports.statements(configuration, http_1.default);
});
//# sourceMappingURL=statements.js.map