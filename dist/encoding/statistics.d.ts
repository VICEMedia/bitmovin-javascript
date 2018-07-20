import { HttpClient } from '../utils/types';
export declare const statistics: (configuration: any, httpClient: HttpClient) => {
    overall: (from?: string | undefined, to?: string | undefined) => Promise<{}>;
    vod: {
        daily: (options?: {}) => Promise<{}>;
        list: (options?: {}) => Promise<{}>;
    };
    live: {
        daily: (options?: {}) => Promise<{}>;
        list: (options?: {}) => Promise<{}>;
    };
    daily: (options?: {}) => Promise<{}>;
    encodings: (encodingId: any) => {
        statistics: () => Promise<{}>;
        liveStatistics: () => Promise<{}>;
    };
};
declare const _default: (configuration: any) => {
    overall: (from?: string | undefined, to?: string | undefined) => Promise<{}>;
    vod: {
        daily: (options?: {}) => Promise<{}>;
        list: (options?: {}) => Promise<{}>;
    };
    live: {
        daily: (options?: {}) => Promise<{}>;
        list: (options?: {}) => Promise<{}>;
    };
    daily: (options?: {}) => Promise<{}>;
    encodings: (encodingId: any) => {
        statistics: () => Promise<{}>;
        liveStatistics: () => Promise<{}>;
    };
};
export default _default;
