import { HttpClient } from '../../utils/types';
export declare const permissions: (configuration: any, organizationId: any, groupId: any, httpClient: HttpClient) => ((permissionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (permission: any) => Promise<{}>;
    list: () => Promise<{}>;
};
declare const _default: (configuration: any, organizationId: any, groupId: any) => ((permissionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (permission: any) => Promise<{}>;
    list: () => Promise<{}>;
};
export default _default;
