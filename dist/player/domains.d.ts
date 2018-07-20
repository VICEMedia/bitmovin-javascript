import { HttpClient } from '../utils/types';
export declare const domains: (configuration: any, licenseId: any, httpClient: HttpClient) => ((domainId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (domain: any) => Promise<{}>;
    list: import("../utils/types").List<{}>;
};
declare const _default: (configuration: any, licenseId: any) => ((domainId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (domain: any) => Promise<{}>;
    list: import("../utils/types").List<{}>;
};
export default _default;
