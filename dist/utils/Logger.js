"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(logging) {
        this.setLogging(logging);
    }
    Logger.prototype.setLogging = function (logging) {
        this.logging = logging;
    };
    Logger.prototype.enableLogging = function () {
        this.setLogging(true);
    };
    Logger.prototype.disableLogging = function () {
        this.setLogging(false);
    };
    Logger.prototype.log = function (message) {
        if (!this.logging) {
            return;
        }
        // tslint:disable-next-line
        console.log(message);
    };
    Logger.prototype.error = function (message) {
        if (!this.logging) {
            return;
        }
        // tslint:disable-next-line
        console.error(message);
    };
    return Logger;
}());
var logger = new Logger(false);
exports.default = logger;
//# sourceMappingURL=Logger.js.map