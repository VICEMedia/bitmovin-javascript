import { HttpClient } from '../utils/types';
export declare const thirdPartyLicensing: (configuration: any, licenseId: any, httpClient: HttpClient) => {
    delete: () => Promise<{}>;
    get: () => Promise<{}>;
    add: (thirdPartyLicensingPayload: any) => Promise<{}>;
};
declare const _default: (configuration: any, licenseId: any) => {
    delete: () => Promise<{}>;
    get: () => Promise<{}>;
    add: (thirdPartyLicensingPayload: any) => Promise<{}>;
};
export default _default;
