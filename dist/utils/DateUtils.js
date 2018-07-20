"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
exports.getFirstDayOfMonthFromDate = function (date) {
    if (date === void 0) { date = new Date(); }
    return moment
        .utc(date)
        .startOf('month')
        .toDate();
};
exports.getLastDayOfMonthFromDate = function (date) {
    if (date === void 0) { date = new Date(); }
    return moment
        .utc(date)
        .endOf('month')
        .toDate();
};
exports.getFirstDayOfTheWeekFromDate = function (date) {
    if (date === void 0) { date = new Date(); }
    return moment
        .utc(date)
        .startOf('isoWeek')
        .toDate();
};
exports.getLastDayOfWeekFromDate = function (date) {
    if (date === void 0) { date = new Date(); }
    return moment
        .utc(date)
        .endOf('isoWeek')
        .toDate();
};
exports.dateToApiRequestString = function (date) {
    return moment(date)
        .format('YYYY-MM-DD')
        .toString();
};
exports.isValidApiRequestDateString = function (dateString) {
    if (typeof dateString !== 'string') {
        return false;
    }
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regex) !== null;
};
//# sourceMappingURL=DateUtils.js.map