declare class Builder {
    private queryObj;
    private aggregations;
    private percentile;
    constructor(aggregations: any, query?: any);
    between(start: any, end: any): Builder;
    interval(interval: any): Builder;
    filter(name: any, operator: any, value: any): Builder;
    groupBy(dimension: any): Builder;
    orderBy(name: any, order: any): Builder;
    percentile_(percentile: any): Builder;
    licenseKey(licenseKey: any): Builder;
    limit(limit: any): Builder;
    offset(offset: any): Builder;
    extendQuery_(extensions: any): Builder;
    query(): any;
}
declare const _default: (aggregations: any) => Builder;
export default _default;
