import { HttpClient, InternalConfiguration } from '../../../utils/types';
export declare const adaptationSets: (configuration: InternalConfiguration, manifestId: any, periodId: any, httpClient: HttpClient) => ((adaptationSetId: any) => {
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
declare const _default: (configuration: any, manifestId: any, periodId: any) => ((adaptationSetId: any) => {
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
export default _default;
