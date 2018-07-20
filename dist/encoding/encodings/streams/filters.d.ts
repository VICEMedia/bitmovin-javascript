import { HttpClient, InternalConfiguration } from '../../../utils/types';
export declare const filters: (configuration: InternalConfiguration, encodingId: string, streamId: string, httpClient: HttpClient) => ((filterId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (filter: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
    deleteAll: () => Promise<{}>;
};
declare const _default: (configuration: any, encodingId: any, streamId: any) => ((filterId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (filter: any) => Promise<{}>;
    list: import("../../../utils/types").List<{}>;
    deleteAll: () => Promise<{}>;
};
export default _default;
