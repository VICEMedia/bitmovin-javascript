import { HttpClient } from '../../../utils/types';
export declare const contentProtection: (configuration: any, manifestId: any, httpClient: HttpClient) => ((contentProtectionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (protection: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
declare const _default: (configuration: any, manifestId: any) => ((contentProtectionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (protection: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
export default _default;
