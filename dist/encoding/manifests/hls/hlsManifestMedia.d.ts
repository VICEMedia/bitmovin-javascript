import { HttpClient } from '../../../utils/types';
export declare const hlsManifestMedia: (configuration: any, manifestId: any, httpClient: HttpClient) => {
    video: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    audio: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    subtitles: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    closedCaptions: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    vtt: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
declare const _default: (configuration: any, manifestId: any) => {
    video: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    audio: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    subtitles: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    closedCaptions: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
    vtt: ((mediaId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (media: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
export default _default;
