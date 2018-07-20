"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channels_1 = require("./channels");
var customBuilds_1 = require("./customBuilds");
var licenses_1 = require("./licenses");
var statistics_1 = require("./statistics");
var player = function (internalConfig) { return ({
    channels: channels_1.default(internalConfig),
    licenses: licenses_1.default(internalConfig),
    statistics: statistics_1.default(internalConfig),
    customBuilds: customBuilds_1.default(internalConfig)
}); };
exports.default = player;
//# sourceMappingURL=index.js.map