"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.isNoEmptyString = function (value) {
        return typeof value === 'string' && value.length > 0;
    };
    return Utils;
}());
var utils = new Utils();
exports.default = utils;
//# sourceMappingURL=Utils.js.map