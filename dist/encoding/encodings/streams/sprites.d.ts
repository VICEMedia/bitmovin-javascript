import { HttpClient } from '../../../utils/types';
export declare const sprites: (configuration: any, encodingId: any, streamId: any, httpClient: HttpClient) => ((spriteId: any) => {
    details: () => Promise<{}>;
    customData: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (sprite: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
};
declare const _default: (configuration: any, encodingId: any, streamId: any) => ((spriteId: any) => {
    details: () => Promise<{}>;
    customData: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (sprite: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
};
export default _default;
