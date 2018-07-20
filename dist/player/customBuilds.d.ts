import { BitmovinDetails, Create, Delete, Details, HttpClient, List } from '../utils/types';
export declare type CustomPlayerBuild = BitmovinDetails & {};
export declare type CustomPlayerBuildDetails = CustomPlayerBuild & {
    id: string;
};
export declare enum CustomPlayerBuildStatusEnum {
    CREATED = "CREATED",
    FINISHED = "FINISHED",
    RUNNING = "RUNNING",
    ERROR = "ERROR"
}
export interface CustomPlayerBuildStatus {
    status: CustomPlayerBuildStatusEnum;
    progress: number;
    eta: number;
    messages: Array<{
        text: string;
        links: any[];
    }>;
    subtasks: any[];
}
export interface CustomPlayerBuildDownload {
    downloadLink: string;
    expiresAt: string;
}
export interface CustomBuildsWeb {
    (customBuildId: string): {
        details: Details<CustomPlayerBuildDetails>;
        start: () => Promise<string>;
        status: () => Promise<CustomPlayerBuildStatus>;
        download: () => Promise<CustomPlayerBuildDownload>;
        delete: Delete<string>;
    };
    add: Create<CustomPlayerBuildDetails>;
    list: List<CustomPlayerBuildDetails>;
    domains: any;
}
export interface CustomBuilds {
    web: CustomBuildsWeb;
}
export declare const customBuilds: (configuration: any, httpClient: HttpClient) => CustomBuilds;
declare const _default: (configuration: any) => CustomBuilds;
export default _default;
