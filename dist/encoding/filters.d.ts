import { HttpClient } from '../utils/types';
export declare const filters: (configuration: any, httpClient: HttpClient) => {
    crop: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    deinterlace: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    rotate: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    watermark: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
};
declare const _default: (configuration: any) => {
    crop: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    deinterlace: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    rotate: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    watermark: ((filterId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (filter: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
};
export default _default;
