import { ApiResource, Details, HttpClient, InternalConfiguration } from '../utils/types';
export declare const account: (configuration: InternalConfiguration, httpClient: HttpClient) => Account;
export interface Account {
    information: Details<any>;
    login: (eMail: string, password: string) => Promise<ApiResource<any>>;
    changePassword: (eMail: string, currentPassword: string, newPassword: string) => Promise<ApiResource<any>>;
    billing: any;
    organizations: any;
    apiKeys: any;
}
declare const _default: (configuration: any) => Account;
export default _default;
