import { HttpClient } from '../../utils/types';
export declare const contactDetails: (configuration: any, httpClient: HttpClient) => {
    details: () => Promise<{}>;
    update: (contactDetailsPayload: any) => Promise<{}>;
};
declare const _default: (configuration: any) => {
    details: () => Promise<{}>;
    update: (contactDetailsPayload: any) => Promise<{}>;
};
export default _default;
