import { HttpClient } from '../utils/types';
export declare const webCustomPlayerBuildDomain: (configuration: any, httpClient: HttpClient) => ((domainId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (customPlayerBuildDomain: any) => Promise<{}>;
    list: import("../utils/types").List<{}>;
};
declare const _default: (configuration: any) => ((domainId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (customPlayerBuildDomain: any) => Promise<{}>;
    list: import("../utils/types").List<{}>;
};
export default _default;
