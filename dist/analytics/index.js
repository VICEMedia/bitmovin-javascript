"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var impressions_1 = require("./impressions");
var licenses_1 = require("./licenses");
var queries_1 = require("./queries");
var statistics_1 = require("./statistics");
var analytics = function (internalConfig) { return ({
    licenses: licenses_1.default(internalConfig),
    queries: queries_1.default(internalConfig),
    impressions: impressions_1.default(internalConfig),
    statistics: statistics_1.default(internalConfig)
}); };
exports.default = analytics;
//# sourceMappingURL=index.js.map