"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// email notifications
var EventTypes;
(function (EventTypes) {
    EventTypes["LIVE_INPUT_STREAM_CHANGED"] = "LIVE_INPUT_STREAM_CHANGED";
    EventTypes["ENCODING_ERROR"] = "ENCODING_ERROR";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var ConditionMembers;
(function (ConditionMembers) {
    ConditionMembers["HEIGHT"] = "HEIGHT";
    ConditionMembers["WIDTH"] = "WIDTH";
    ConditionMembers["BITRATE"] = "BITRATE";
    ConditionMembers["FPS"] = "FPS";
    ConditionMembers["ASPECTRATIO"] = "ASPECTRATIO";
    ConditionMembers["INPUTSTREAM"] = "INPUTSTREAM";
    ConditionMembers["LANGUAGE"] = "LANGUAGE";
    ConditionMembers["CHANNELFORMAT"] = "CHANNELFORMAT";
    ConditionMembers["CHANNELLAYOUT"] = "CHANNELLAYOUT";
    ConditionMembers["STREAMCOUNT"] = "STREAMCOUNT";
    ConditionMembers["AUDIOSTREAMCOUNT"] = "AUDIOSTREAMCOUNT";
    ConditionMembers["VIDEOSTREAMCOUNT"] = "VIDEOSTREAMCOUNT";
    ConditionMembers["DURATION"] = "DURATION";
})(ConditionMembers = exports.ConditionMembers || (exports.ConditionMembers = {}));
var StreamConditionMembers;
(function (StreamConditionMembers) {
    StreamConditionMembers["BITS_READ_AVG"] = "bits_read_avg";
    StreamConditionMembers["BITS_READ_MIN"] = "bits_read_min";
    StreamConditionMembers["BITS_READ_MAX"] = "bits_read_max";
    StreamConditionMembers["SAMPLES_READ_AVG"] = "samples_read_avg";
    StreamConditionMembers["SAMPLES_READ_MIN"] = "samples_read_min";
    StreamConditionMembers["SAMPLES_READ_MAX"] = "samples_read_max";
    StreamConditionMembers["RATE"] = "rate";
    StreamConditionMembers["CODEC"] = "codec";
    StreamConditionMembers["HEIGHT"] = "height";
    StreamConditionMembers["WIDTH"] = "width";
    StreamConditionMembers["MEDIA_TYPE"] = "media_type";
    StreamConditionMembers["STREAM_ID"] = "stream_id";
})(StreamConditionMembers = exports.StreamConditionMembers || (exports.StreamConditionMembers = {}));
var ConditionOperators;
(function (ConditionOperators) {
    ConditionOperators["LESS_THAN_OR_EQUAL"] = "<=";
    ConditionOperators["LESS_THAN"] = "<";
    ConditionOperators["GREATER_THAN"] = ">";
    ConditionOperators["GREATER_THAN_OR_EQUAL"] = ">=";
    ConditionOperators["EQUAL"] = "==";
    ConditionOperators["UNEQUAL"] = "!=";
})(ConditionOperators = exports.ConditionOperators || (exports.ConditionOperators = {}));
// webhook notifications
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["AES"] = "AES";
    EncryptionType["DESede"] = "DESede";
    EncryptionType["Blowfish"] = "Blowfish";
    EncryptionType["RSA"] = "RSA";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var SignatureType;
(function (SignatureType) {
    SignatureType["HMAC"] = "HMAC";
})(SignatureType = exports.SignatureType || (exports.SignatureType = {}));
var WebhookHttpMethod;
(function (WebhookHttpMethod) {
    WebhookHttpMethod["POST"] = "POST";
    WebhookHttpMethod["PUT"] = "PUT";
})(WebhookHttpMethod = exports.WebhookHttpMethod || (exports.WebhookHttpMethod = {}));
//# sourceMappingURL=types.js.map