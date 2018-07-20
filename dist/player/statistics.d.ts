import { HttpClient } from '../utils/types';
export interface Statistics {
    impressions: (licenseKeyId: string, start: string, end: string, interval: string, offset?: number, limit?: number) => Promise<any>;
    INTERVAL: {
        DAILY: 'DAILY';
    };
}
export declare const statistics: (configuration: any, httpClient: HttpClient) => Statistics;
declare const _default: (configuration: any) => Statistics;
export default _default;
