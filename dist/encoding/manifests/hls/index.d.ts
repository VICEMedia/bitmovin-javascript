import { HttpClient } from '../../../utils/types';
export declare const hlsManifests: (configuration: any, httpClient: HttpClient) => ((manifestId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    start: () => Promise<{}>;
    stop: () => Promise<{}>;
    status: () => Promise<{}>;
    media: {
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
    streams: ((streamId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (stream: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
}) & {
    create: (manifest: any) => Promise<{}>;
    list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
};
declare const _default: (configuration: any) => ((manifestId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    start: () => Promise<{}>;
    stop: () => Promise<{}>;
    status: () => Promise<{}>;
    media: {
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
    streams: ((streamId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (stream: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
}) & {
    create: (manifest: any) => Promise<{}>;
    list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
};
export default _default;
