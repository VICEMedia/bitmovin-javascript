import { HttpClient } from '../../utils/types';
export declare const aws: (configuration: any, httpClient: HttpClient) => ((id: any) => {
    status: () => Promise<{}>;
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    regions: ((regionName: any) => {
        add: (region: any) => Promise<{}>;
        delete: () => Promise<{}>;
        details: () => Promise<{}>;
    }) & {
        list: import("../../utils/types").List<{}>;
    };
}) & {
    create: (infrastructure: any) => Promise<{}>;
    list: import("../../utils/types").List<{}>;
};
declare const _default: (configuration: any) => ((id: any) => {
    status: () => Promise<{}>;
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    regions: ((regionName: any) => {
        add: (region: any) => Promise<{}>;
        delete: () => Promise<{}>;
        details: () => Promise<{}>;
    }) & {
        list: import("../../utils/types").List<{}>;
    };
}) & {
    create: (infrastructure: any) => Promise<{}>;
    list: import("../../utils/types").List<{}>;
};
export default _default;
