declare const billing: (configuration: any) => {
    statements: {
        encoding: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
        player: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
        analytics: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
    };
    invoices: {
        encoding: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
        player: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
        analytics: {
            list: (limit: any, offset: any) => Promise<{}>;
        };
    };
    contactDetails: {
        details: () => Promise<{}>;
        update: (contactDetailsPayload: any) => Promise<{}>;
    };
};
export default billing;
