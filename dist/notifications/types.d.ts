export declare enum EventTypes {
    LIVE_INPUT_STREAM_CHANGED = "LIVE_INPUT_STREAM_CHANGED",
    ENCODING_ERROR = "ENCODING_ERROR"
}
export declare enum ConditionMembers {
    HEIGHT = "HEIGHT",
    WIDTH = "WIDTH",
    BITRATE = "BITRATE",
    FPS = "FPS",
    ASPECTRATIO = "ASPECTRATIO",
    INPUTSTREAM = "INPUTSTREAM",
    LANGUAGE = "LANGUAGE",
    CHANNELFORMAT = "CHANNELFORMAT",
    CHANNELLAYOUT = "CHANNELLAYOUT",
    STREAMCOUNT = "STREAMCOUNT",
    AUDIOSTREAMCOUNT = "AUDIOSTREAMCOUNT",
    VIDEOSTREAMCOUNT = "VIDEOSTREAMCOUNT",
    DURATION = "DURATION"
}
export declare enum StreamConditionMembers {
    BITS_READ_AVG = "bits_read_avg",
    BITS_READ_MIN = "bits_read_min",
    BITS_READ_MAX = "bits_read_max",
    SAMPLES_READ_AVG = "samples_read_avg",
    SAMPLES_READ_MIN = "samples_read_min",
    SAMPLES_READ_MAX = "samples_read_max",
    RATE = "rate",
    CODEC = "codec",
    HEIGHT = "height",
    WIDTH = "width",
    MEDIA_TYPE = "media_type",
    STREAM_ID = "stream_id"
}
export declare enum ConditionOperators {
    LESS_THAN_OR_EQUAL = "<=",
    LESS_THAN = "<",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    EQUAL = "==",
    UNEQUAL = "!="
}
export interface UserSpecificCustomData {
    customData?: any;
}
export interface UserSpecificCustomDataDetails {
    createdAt: string;
    modifiedAt: string;
    customData: any;
}
export interface AbstractConditionConditionFirst {
    attribute: ConditionMembers;
    operator: ConditionOperators;
    value: string;
}
export interface StreamCondition {
    type: 'CONDITION';
    attribute: StreamConditionMembers;
    operator: ConditionOperators;
    value: string;
}
export interface CompoundCondition {
    type: 'AND' | 'OR';
    conditions: Condition[];
}
export declare type Condition = CompoundCondition | StreamCondition;
export declare type EmailNotification = {
    id: string;
    type: 'EMAIL';
    eventType: EventTypes;
    emails: string[];
    name?: string;
    description?: string;
    resourceId: string;
} & UserSpecificCustomData;
export declare type EmailNotificationResource = {
    id: string;
    triggeredAt?: string;
    resolvedAt?: string;
} & UserSpecificCustomDataDetails;
export declare type EmailNotificationWithConditions = {
    resolve?: boolean;
    conditions: Condition;
} & EmailNotification;
export declare type EmailNotificationWithConditionsDetails = EmailNotificationWithConditions & EmailNotificationResource;
export declare enum EncryptionType {
    AES = "AES",
    DESede = "DESede",
    Blowfish = "Blowfish",
    RSA = "RSA"
}
export declare enum SignatureType {
    HMAC = "HMAC"
}
export interface WebhookEncryptionResponse {
    type: SignatureType;
}
export interface WebhookSignatureResponse {
    type: SignatureType;
}
export declare enum WebhookHttpMethod {
    POST = "POST",
    PUT = "PUT"
}
export interface BitmovinWebhookResponse {
    url: string;
    method?: WebhookHttpMethod;
    insecureSsl?: boolean;
    signature?: WebhookSignatureResponse;
    encryption?: WebhookEncryptionResponse;
}
export interface EncodingFinishedWebhookDetails extends BitmovinWebhookResponse {
    url: string;
    id: string;
}
export interface BitmovinWebhook extends UserSpecificCustomData {
    url: string;
    method?: WebhookHttpMethod;
    insecureSsl?: boolean;
    signature?: WebhookSignatureResponse;
    encryption?: WebhookEncryptionResponse;
}
export interface EncodingFinishedWebhook extends BitmovinWebhook {
    url: string;
}
export interface EncodingErrorWebhookDetails extends BitmovinWebhookResponse {
    url: string;
    id: string;
}
export interface EncodingErrorWebhook extends BitmovinWebhook {
    url: string;
}
export interface TransferFinishedWebhookDetails extends BitmovinWebhookResponse {
    url: string;
    id: string;
}
export interface TransferFinishedWebhook extends BitmovinWebhook {
    url: string;
}
export interface WebhookDetails {
    id: string;
    createdAt: string;
    modifiedAt?: string;
    type: string;
    resourceType: string;
    eventType: string;
    resourceId?: string;
    method?: WebhookHttpMethod;
    url: string;
    insecureSsl?: boolean;
    signatureType?: string;
    encryptionType?: string;
}
