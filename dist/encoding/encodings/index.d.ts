import { Create, CustomData, Delete, Details, HttpClient, InternalConfiguration, List } from '../../utils/types';
import { Muxings } from './muxings';
import { Streams } from './streams';
export declare const encodings: (configuration: InternalConfiguration, httpClient: HttpClient) => Encodings;
interface Encoding {
    cloudRegion: string;
}
interface EncodingDetail {
    details: Details<Encoding>;
    delete: Delete<{}>;
    customData: CustomData;
    liveDetails: Details<any>;
    start: Create<any>;
    stop: Details<any>;
    startLive: Create<any>;
    stopLive: Details<any>;
    status: Details<any>;
    streams: Streams;
    muxings: Muxings;
}
export interface Encodings {
    (encodingId: string): EncodingDetail;
    create: Create<Encoding>;
    list: List<Encoding>;
}
declare const _default: (configuration: InternalConfiguration) => Encodings;
export default _default;
