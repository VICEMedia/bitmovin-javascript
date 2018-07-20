import { HttpClient } from '../../../utils/types';
export declare const hlsManifestStreams: (configuration: any, manifestId: any, httpClient: HttpClient) => ((streamId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (stream: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
declare const _default: (configuration: any, manifestId: any) => ((streamId: any) => {
    details: () => Promise<{}>;
    delete: () => Promise<{}>;
}) & {
    add: (stream: any) => Promise<{}>;
    list: (limit: any, offset: any) => Promise<{}>;
};
export default _default;
