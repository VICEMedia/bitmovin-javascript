import { HttpClient } from '../../../utils/types';
export declare const representations: (configuration: any, manifestId: any, periodId: any, adaptationSetId: any, httpClient: HttpClient) => {
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
declare const _default: (configuration: any, manifestId: any, periodId: any, adaptationSetId: any) => {
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
export default _default;
