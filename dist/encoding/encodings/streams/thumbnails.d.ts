import { HttpClient } from '../../../utils/types';
export declare const thumbnails: (configuration: any, encodingId: any, streamId: any, httpClient: HttpClient) => ((thumbnailId: any) => {
    details: () => Promise<{}>;
    customData: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (thumbnail: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
} & {
    add: (thumbnail: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
};
declare const _default: (configuration: any, encodingId: any, streamId: any) => ((thumbnailId: any) => {
    details: () => Promise<{}>;
    customData: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (thumbnail: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
} & {
    add: (thumbnail: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
};
export default _default;
