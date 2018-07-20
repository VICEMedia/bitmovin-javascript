import { HttpClient } from '../utils/types';
export declare const licenses: (configuration: any, httpClient: HttpClient) => ((licenseId: any) => {
    details: () => Promise<{}>;
    update: (license: any) => Promise<{}>;
    domains: ((domainId: any) => {
        delete: () => Promise<{}>;
    }) & {
        add: (domain: string) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
}) & {
    list: (limit: any, offset: any) => Promise<{}>;
};
declare const _default: (configuration: any) => ((licenseId: any) => {
    details: () => Promise<{}>;
    update: (license: any) => Promise<{}>;
    domains: ((domainId: any) => {
        delete: () => Promise<{}>;
    }) & {
        add: (domain: string) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
}) & {
    list: (limit: any, offset: any) => Promise<{}>;
};
export default _default;
