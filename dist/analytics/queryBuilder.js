"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Builder = /** @class */ (function () {
    function Builder(aggregations, query) {
        var _this = this;
        this.aggregations = aggregations;
        this.queryObj =
            query ||
                Object.freeze({
                    filters: [],
                    groupBy: [],
                    orderBy: []
                });
        Object.keys(aggregations).forEach(function (key) {
            _this[key] = function (dimension) { return _this.extendQuery_({ target: aggregations[key], dimension: dimension }); };
        });
        var defaultPercentile = this.percentile;
        this.percentile = function (dimension, percentile) { return defaultPercentile(dimension).percentile_(percentile); };
    }
    Builder.prototype.between = function (start, end) {
        return this.extendQuery_({ start: start, end: end });
    };
    Builder.prototype.interval = function (interval) {
        return this.extendQuery_({ interval: interval });
    };
    Builder.prototype.filter = function (name, operator, value) {
        var filter = Object.freeze({ name: name, operator: operator, value: value });
        return this.extendQuery_({ filters: Object.freeze(this.queryObj.filters.concat([filter])) });
    };
    Builder.prototype.groupBy = function (dimension) {
        return this.extendQuery_({ groupBy: Object.freeze(this.queryObj.groupBy.concat([dimension])) });
    };
    Builder.prototype.orderBy = function (name, order) {
        var newOrder = Object.freeze({ name: name, order: order });
        return this.extendQuery_({ orderBy: Object.freeze(this.queryObj.orderBy.concat([newOrder])) });
    };
    Builder.prototype.percentile_ = function (percentile) {
        return this.extendQuery_({ percentile: percentile });
    };
    Builder.prototype.licenseKey = function (licenseKey) {
        return this.extendQuery_({ licenseKey: licenseKey });
    };
    Builder.prototype.limit = function (limit) {
        return this.extendQuery_({ limit: limit });
    };
    Builder.prototype.offset = function (offset) {
        return this.extendQuery_({ offset: offset });
    };
    Builder.prototype.extendQuery_ = function (extensions) {
        return new Builder(this.aggregations, Object.freeze(__assign({}, this.queryObj, extensions)));
    };
    Builder.prototype.query = function () {
        var _a = this.queryObj, target = _a.target, queryAttrs = __rest(_a, ["target"]);
        return target(queryAttrs);
    };
    return Builder;
}());
exports.default = (function (aggregations) { return new Builder(aggregations); });
//# sourceMappingURL=queryBuilder.js.map