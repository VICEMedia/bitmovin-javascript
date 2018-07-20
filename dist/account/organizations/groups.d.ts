import { HttpClient } from '../../utils/types';
export declare const groups: (configuration: any, organizationId: any, httpClient: HttpClient) => ((groupId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    permissions: ((permissionId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (permission: any) => Promise<{}>;
        list: () => Promise<{}>;
    };
    tenants: ((tenantId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (tenant: any) => Promise<{}>;
        list: () => Promise<{}>;
    };
}) & {
    add: (group: any) => Promise<{}>;
    list: () => Promise<{}>;
};
declare const _default: (configuration: any, organizationId: any) => ((groupId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
    permissions: ((permissionId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (permission: any) => Promise<{}>;
        list: () => Promise<{}>;
    };
    tenants: ((tenantId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (tenant: any) => Promise<{}>;
        list: () => Promise<{}>;
    };
}) & {
    add: (group: any) => Promise<{}>;
    list: () => Promise<{}>;
};
export default _default;
