import { HttpClient, InternalConfiguration, List } from '../../utils/types';
export declare const muxings: (configuration: InternalConfiguration, encodingId: string, httpClient: HttpClient) => Muxings;
interface Muxing {
}
export interface Muxings {
    list: List<Muxing>;
    fmp4: any;
    ts: any;
    mp4: any;
    webm: any;
    pwebm: any;
}
declare const _default: (configuration: InternalConfiguration, encodingId: string) => Muxings;
export default _default;
