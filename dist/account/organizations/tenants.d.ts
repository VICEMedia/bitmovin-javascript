import { HttpClient } from '../../utils/types';
export declare const tenants: (configuration: any, organizationId: any, groupId: any, httpClient: HttpClient) => ((tenantId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (tenant: any) => Promise<{}>;
    list: () => Promise<{}>;
};
declare const _default: (configuration: any, organizationId: any, groupId: any) => ((tenantId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (tenant: any) => Promise<{}>;
    list: () => Promise<{}>;
};
export default _default;
