import { Create, CustomData, Delete, Details, HttpClient, InternalConfiguration, List } from '../../../utils/types';
export declare const streams: (configuration: InternalConfiguration, encodingId: string, httpClient: HttpClient) => Streams;
interface Stream {
}
interface StreamInput {
}
interface StreamDetail {
    details: Details<Stream>;
    inputDetails: Details<StreamInput>;
    delete: Delete<{}>;
    customData: CustomData;
    filters: any;
    thumbnails: any;
    sprites: any;
}
export interface Streams {
    (id: string): StreamDetail;
    list: List<Stream>;
    add: Create<Stream>;
}
declare const _default: (configuration: InternalConfiguration, encodingId: string) => Streams;
export default _default;
