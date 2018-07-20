"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contactDetails_1 = require("./contactDetails");
var invoices_1 = require("./invoices");
var statements_1 = require("./statements");
var billing = function (configuration) {
    return {
        statements: statements_1.default(configuration),
        invoices: invoices_1.default(configuration),
        contactDetails: contactDetails_1.default(configuration)
    };
};
exports.default = billing;
//# sourceMappingURL=index.js.map