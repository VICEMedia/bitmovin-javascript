import { HttpClient } from '../../../utils/types';
export declare const contentProtections: (configuration: any, manifestId: any, periodId: any, adaptationSetId: any, representationInfo: any, httpClient: HttpClient) => ((contentProtectionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (contentProtection: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
declare const _default: (configuration: any, manifestId: any, periodId: any, adaptationSetId: any, representationInfo: any) => ((contentProtectionId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (contentProtection: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
export default _default;
