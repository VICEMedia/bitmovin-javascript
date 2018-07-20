import 'es6-promise/auto';
import { HttpClient, InternalConfiguration, List } from './types';
declare const Http: HttpClient;
export declare const utils: {
    buildGetParamString: (getParams: any) => string;
    buildFilterParamString: (filterParams: any) => {};
    buildListCallFunction: <T>(httpClient: HttpClient, configuration: InternalConfiguration, url: string) => List<T>;
};
export default Http;
