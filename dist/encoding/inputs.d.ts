import { HttpClient } from '../utils/types';
export declare const inputs: (configuration: any, httpClient: HttpClient) => {
    aspera: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    azure: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    ftp: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    gcs: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    http: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    https: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    rtmp: ((inputId: any) => {
        details: () => Promise<{}>;
    }) & {
        list: import("../utils/types").List<{}>;
    };
    s3: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    genericS3: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    sftp: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    local: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
    getType: (inputId: any) => Promise<{}>;
};
declare const _default: (configuration: any) => {
    aspera: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    azure: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    ftp: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    gcs: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    http: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    https: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    rtmp: ((inputId: any) => {
        details: () => Promise<{}>;
    }) & {
        list: import("../utils/types").List<{}>;
    };
    s3: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    genericS3: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    sftp: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    local: ((inputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (input: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
    getType: (inputId: any) => Promise<{}>;
};
export default _default;
