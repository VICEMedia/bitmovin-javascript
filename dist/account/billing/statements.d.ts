import { HttpClient } from '../../utils/types';
export declare const statements: (configuration: any, httpClient: HttpClient) => {
    encoding: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
    player: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
    analytics: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
declare const _default: (configuration: any) => {
    encoding: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
    player: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
    analytics: {
        list: (limit: any, offset: any) => Promise<{}>;
    };
};
export default _default;
