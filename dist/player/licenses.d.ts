import { ApiResource, BitmovinDetails, Details, HttpClient, List } from '../utils/types';
export interface DomainDetails {
    id: string;
    url: string;
}
export declare type PlayerLicense = BitmovinDetails & {
    id: string;
    name: string;
    licenseKey: string;
    impressions: number;
    maxImpressions: number;
    thirdPartyLicensingEnabled: boolean;
    domains: DomainDetails[];
};
export declare type PlayerLicenseListObject = BitmovinDetails & {
    id: string;
    name: string;
    licenseKey: string;
    impressions: number;
    maxImpressions: number;
    thirdPartyLicensingEnabled: boolean;
};
export interface Licenses {
    (licenseId: string): {
        details: Details<PlayerLicense>;
        update: (license: PlayerLicense) => Promise<ApiResource<PlayerLicense>>;
    };
    list: List<PlayerLicenseListObject>;
}
export declare const licenses: (configuration: any, httpClient: HttpClient) => Licenses;
declare const _default: (configuration: any) => Licenses;
export default _default;
