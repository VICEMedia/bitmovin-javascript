import { HttpClient } from '../utils/types';
export declare const statistics: (configuration: any, httpClient: HttpClient) => {
    impressions: (licenseKeyId: any, start: any, end: any, interval: any, offset: any, limit: any) => Promise<{}>;
    INTERVAL: {
        DAILY: string;
    };
};
declare const _default: (configuration: any) => {
    impressions: (licenseKeyId: any, start: any, end: any, interval: any, offset: any, limit: any) => Promise<{}>;
    INTERVAL: {
        DAILY: string;
    };
};
export default _default;
