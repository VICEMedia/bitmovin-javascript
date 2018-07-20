import { HttpClient } from '../utils/types';
export declare const outputs: (configuration: any, httpClient: HttpClient) => {
    s3: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    gcs: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    azure: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    ftp: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    sftp: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    genericS3: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    local: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
    getType: (outputId: any) => Promise<{}>;
};
declare const _default: (configuration: any) => {
    s3: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    gcs: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    azure: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    ftp: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    sftp: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    genericS3: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    local: ((outputId: any) => {
        details: () => Promise<{}>;
        customData: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        create: (output: any) => Promise<{}>;
        list: import("../utils/types").List<{}>;
    };
    list: import("../utils/types").List<{}>;
    getType: (outputId: any) => Promise<{}>;
};
export default _default;
