"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codecConfigurations_1 = require("./codecConfigurations");
var encodings_1 = require("./encodings");
var filters_1 = require("./filters");
var infrastructure_1 = require("./infrastructure");
var inputs_1 = require("./inputs");
var manifests_1 = require("./manifests");
var outputs_1 = require("./outputs");
var statistics_1 = require("./statistics");
var encoding = function (internalConfig) { return ({
    encodings: encodings_1.default(internalConfig),
    codecConfigurations: codecConfigurations_1.default(internalConfig),
    inputs: inputs_1.default(internalConfig),
    outputs: outputs_1.default(internalConfig),
    manifests: manifests_1.default(internalConfig),
    filters: filters_1.default(internalConfig),
    statistics: statistics_1.default(internalConfig),
    infrastructure: infrastructure_1.default(internalConfig)
}); };
exports.default = encoding;
//# sourceMappingURL=index.js.map