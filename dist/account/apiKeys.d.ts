import { HttpClient } from '../utils/types';
declare const apiKeys: (configuration: any, httpClient: HttpClient) => ((apiKeyId: any) => Promise<{}>) & {
    delete: (apiKeyId: any) => Promise<{}>;
    create: () => Promise<{}>;
    list: import("../utils/types").List<{}>;
};
export default apiKeys;
