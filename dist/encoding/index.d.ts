import { Encodings } from './encodings';
export interface Encoding {
    encodings: Encodings;
    codecConfigurations: any;
    inputs: any;
    outputs: any;
    manifests: any;
    filters: any;
    statistics: any;
    infrastructure: any;
}
declare const encoding: (internalConfig: any) => {
    encodings: Encodings;
    codecConfigurations: {
        h264: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        h265: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        aac: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        vp9: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        ac3: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        eac3: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        vorbis: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        opus: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        mp2: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        mp3: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        vp8: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        mjpeg: ((codecConfigId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (codecConfig: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        list: import("../utils/types").List<{}>;
        getType: (configurationId: any) => Promise<{}>;
    };
    inputs: {
        aspera: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        azure: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        ftp: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        gcs: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        http: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        https: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        rtmp: ((inputId: any) => {
            details: () => Promise<{}>;
        }) & {
            list: import("../utils/types").List<{}>;
        };
        s3: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        genericS3: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        sftp: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        local: ((inputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (input: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        list: import("../utils/types").List<{}>;
        getType: (inputId: any) => Promise<{}>;
    };
    outputs: {
        s3: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        gcs: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        azure: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        ftp: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        sftp: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        genericS3: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        local: ((outputId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (output: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        list: import("../utils/types").List<{}>;
        getType: (outputId: any) => Promise<{}>;
    };
    manifests: {
        list: import("../utils/types").List<{}>;
        dash: ((manifestId: any) => {
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
            start: () => Promise<{}>;
            stop: () => Promise<{}>;
            status: () => Promise<{}>;
            periods: ((periodId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
                adaptationSets: ((adaptationSetId: any) => {
                    representations: {
                        fmp4: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        drmFmp4: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        sidecar: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        vtt: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        mp4: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        drmMp4: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                        webm: ((representationId: any) => {
                            details: () => Promise<{}>;
                            delete: () => Promise<{}>;
                            contentProtections: ((contentProtectionId: any) => {
                                details: () => Promise<{}>;
                                delete: () => Promise<{}>;
                            }) & {
                                add: (contentProtection: any) => Promise<{}>;
                                list: (limit: any, offset: any) => Promise<{}>;
                            };
                        }) & {
                            add: (representation: any) => Promise<{}>;
                            list: (limit: any, offset: any) => Promise<{}>;
                        };
                    };
                    contentProtections: ((contentProtectionId: any) => {
                        details: () => Promise<{}>;
                        delete: () => Promise<{}>;
                    }) & {
                        add: (contentProtection: any) => Promise<{}>;
                        list: (limit: any, offset: any) => Promise<{}>;
                    };
                }) & {
                    audio: ((adaptationSetId: any) => {
                        details: () => Promise<{}>;
                        delete: () => Promise<{}>;
                    }) & {
                        create: (period: any) => Promise<{}>;
                        list: import("../utils/types").List<{}>;
                    };
                    video: ((adaptationSetId: any) => {
                        details: () => Promise<{}>;
                        delete: () => Promise<{}>;
                    }) & {
                        create: (period: any) => Promise<{}>;
                        list: import("../utils/types").List<{}>;
                    };
                    subtitle: ((adaptationSetId: any) => {
                        details: () => Promise<{}>;
                        delete: () => Promise<{}>;
                    }) & {
                        create: (period: any) => Promise<{}>;
                        list: import("../utils/types").List<{}>;
                    };
                    custom: ((adaptationSetId: any) => {
                        details: () => Promise<{}>;
                        delete: () => Promise<{}>;
                    }) & {
                        create: (period: any) => Promise<{}>;
                        list: import("../utils/types").List<{}>;
                    };
                };
            }) & {
                add: (period: any) => Promise<{}>;
                list: (limit: any, offset: any) => Promise<{}>;
            };
        }) & {
            create: (manifest: any) => Promise<{}>;
            list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
        };
        hls: ((manifestId: any) => {
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
            start: () => Promise<{}>;
            stop: () => Promise<{}>;
            status: () => Promise<{}>;
            media: {
                video: ((mediaId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (media: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
                audio: ((mediaId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (media: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
                subtitles: ((mediaId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (media: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
                closedCaptions: ((mediaId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (media: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
                vtt: ((mediaId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (media: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
            };
            streams: ((streamId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                add: (stream: any) => Promise<{}>;
                list: (limit: any, offset: any) => Promise<{}>;
            };
        }) & {
            create: (manifest: any) => Promise<{}>;
            list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
        };
        smooth: ((manifestId: any) => {
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
            start: () => Promise<{}>;
            stop: () => Promise<{}>;
            status: () => Promise<{}>;
            representations: {
                mp4: ((representationId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    add: (representation: any) => Promise<{}>;
                    list: (limit: any, offset: any) => Promise<{}>;
                };
            };
            contentProtections: ((contentProtectionId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                add: (protection: any) => Promise<{}>;
                list: (limit: any, offset: any) => Promise<{}>;
            };
        }) & {
            create: (manifest: any) => Promise<{}>;
            list: (limit: any, offset: any, encodingId: any) => Promise<{}>;
        };
    };
    filters: {
        crop: ((filterId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (filter: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        deinterlace: ((filterId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (filter: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        rotate: ((filterId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (filter: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        watermark: ((filterId: any) => {
            details: () => Promise<{}>;
            customData: () => Promise<{}>;
            delete: () => Promise<{}>;
        }) & {
            create: (filter: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        list: import("../utils/types").List<{}>;
    };
    statistics: {
        overall: (from?: string | undefined, to?: string | undefined) => Promise<{}>;
        vod: {
            daily: (options?: {}) => Promise<{}>;
            list: (options?: {}) => Promise<{}>;
        };
        live: {
            daily: (options?: {}) => Promise<{}>;
            list: (options?: {}) => Promise<{}>;
        };
        daily: (options?: {}) => Promise<{}>;
        encodings: (encodingId: any) => {
            statistics: () => Promise<{}>;
            liveStatistics: () => Promise<{}>;
        };
    };
    infrastructure: {
        kubernetes: ((id: any) => {
            status: () => Promise<{}>;
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
            customData: () => Promise<{}>;
        }) & {
            create: (infrastructurePayload: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
        aws: ((id: any) => {
            status: () => Promise<{}>;
            details: () => Promise<{}>;
            delete: () => Promise<{}>;
            regions: ((regionName: any) => {
                add: (region: any) => Promise<{}>;
                delete: () => Promise<{}>;
                details: () => Promise<{}>;
            }) & {
                list: import("../utils/types").List<{}>;
            };
        }) & {
            create: (infrastructure: any) => Promise<{}>;
            list: import("../utils/types").List<{}>;
        };
    };
};
export default encoding;
