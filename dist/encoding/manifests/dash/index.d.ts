import { HttpClient } from '../../../utils/types';
export declare const dashManifests: (configuration: any, httpClient: HttpClient) => ((manifestId: any) => {
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
                list: import("../../../utils/types").List<{}>;
            };
            video: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
            };
            subtitle: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
            };
            custom: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
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
declare const _default: (configuration: any) => ((manifestId: any) => {
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
                list: import("../../../utils/types").List<{}>;
            };
            video: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
            };
            subtitle: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
            };
            custom: ((adaptationSetId: any) => {
                details: () => Promise<{}>;
                delete: () => Promise<{}>;
            }) & {
                create: (period: any) => Promise<{}>;
                list: import("../../../utils/types").List<{}>;
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
export default _default;
