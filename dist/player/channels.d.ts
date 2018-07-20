import { Details, HttpClient, List } from '../utils/types';
export declare enum Channel {
    Developer = "developer",
    Beta = "beta",
    Staging = "staging",
    Stable = "stable"
}
export interface PlayerVersion {
    version: string;
    playerUrl: string;
}
export interface Channels {
    (channelName: string): {
        versions: {
            list: List<PlayerVersion>;
            latest: Details<PlayerVersion>;
        };
    };
    list: List<Channel>;
}
export declare const channels: (configuration: any, httpClient: HttpClient) => Channels;
declare const _default: (configuration: any) => Channels;
export default _default;
