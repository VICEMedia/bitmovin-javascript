import { HttpClient } from '../../utils/types';
export declare const manifests: (configuration: any, httpClient: HttpClient) => {
    list: import("../../utils/types").List<{}>;
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
                    list: import("../../utils/types").List<{}>;
                };
                video: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
                };
                subtitle: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
                };
                custom: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
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
declare const _default: (configuration: any) => {
    list: import("../../utils/types").List<{}>;
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
                    list: import("../../utils/types").List<{}>;
                };
                video: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
                };
                subtitle: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
                };
                custom: ((adaptationSetId: any) => {
                    details: () => Promise<{}>;
                    delete: () => Promise<{}>;
                }) & {
                    create: (period: any) => Promise<{}>;
                    list: import("../../utils/types").List<{}>;
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
export default _default;
