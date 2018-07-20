import { HttpClient } from '../../../utils/types';
export declare const representations: (configuration: any, manifestId: any, httpClient: HttpClient) => {
    mp4: ((representationId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (representation: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
declare const _default: (configuration: any, manifestId: any) => {
    mp4: ((representationId: any) => {
        details: () => Promise<{}>;
        delete: () => Promise<{}>;
    }) & {
        add: (representation: any) => Promise<{}>;
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
export default _default;
