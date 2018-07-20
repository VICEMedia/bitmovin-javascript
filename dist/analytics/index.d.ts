export interface Analytics {
    licenses: any;
    statistics: any;
    impressions: any;
    queries: any;
}
declare const analytics: (internalConfig: any) => {
    licenses: ((licenseId: any) => {
        details: () => Promise<{}>;
        update: (license: any) => Promise<{}>;
        domains: ((domainId: any) => {
            delete: () => Promise<{}>;
        }) & {
            add: (domain: string) => Promise<{}>;
            list: (limit: any, offset: any) => Promise<{}>;
        };
    }) & {
        list: (limit: any, offset: any) => Promise<{}>;
    };
    queries: () => {};
    impressions: (impressionId: any, licenseKey: any) => Promise<{}>;
    statistics: {
        impressions: (licenseKeyId: any, start: any, end: any, interval: any, offset: any, limit: any) => Promise<{}>;
        INTERVAL: {
            DAILY: string;
        };
    };
};
export default analytics;
