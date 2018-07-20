import { HttpClient } from '../../utils/types';
export declare const drms: (configuration: any, encodingId: any, muxingTypeUrl: any, muxingId: any, httpClient: HttpClient) => {
    aes: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    cenc: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    clearKey: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    fairPlay: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    marlin: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    playReady: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    primeTime: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    widevine: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    list: import("../../utils/types").List<{}>;
};
declare const _default: (configuration: any, encodingId: any, muxingTypeUrl: any, muxingId: any) => {
    aes: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    cenc: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    clearKey: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    fairPlay: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    marlin: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    playReady: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    primeTime: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    widevine: ((drmId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (drm: any) => Promise<{}>;
        list: import("../../utils/types").List<{}>;
    };
    list: import("../../utils/types").List<{}>;
};
export default _default;
