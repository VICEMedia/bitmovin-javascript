declare class Logger {
    logging: boolean;
    constructor(logging: any);
    setLogging(logging: any): void;
    enableLogging(): void;
    disableLogging(): void;
    log(message: any): void;
    error(message: any): void;
}
declare const logger: Logger;
export default logger;
