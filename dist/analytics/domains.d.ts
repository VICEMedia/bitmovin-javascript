import { HttpClient } from '../utils/types';
export declare const domains: (configuration: any, licenseId: any, httpClient: HttpClient) => ((domainId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (domain: string) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
declare const _default: (configuration: any, licenseId: any) => ((domainId: any) => {
    delete: () => Promise<{}>;
}) & {
    add: (domain: string) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
export default _default;
