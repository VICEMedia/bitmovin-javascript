import { HttpClient } from '../../../utils/types';
export declare const smoothManifests: (configuration: any, httpClient: HttpClient) => ((manifestId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    start: () => Promise<{}>;
    stop: () => Promise<{}>;
    status: () => Promise<{}>;
    representations: {
        mp4: ((representationId: any) => {
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            add: (representation: any) => Promise<{}>;
            list: (limit: any, offset: any) => Promise<{}>;
        };
    };
    contentProtections: ((contentProtectionId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (protection: any) => Promise<{}>;
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
    representations: {
        mp4: ((representationId: any) => {
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            add: (representation: any) => Promise<{}>;
            list: (limit: any, offset: any) => Promise<{}>;
        };
    };
    contentProtections: ((contentProtectionId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (protection: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
}) & {
    create: (manifest: any) => Promise<{}>;
    list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
};
export default _default;
