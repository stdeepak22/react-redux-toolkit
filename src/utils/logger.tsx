/* eslint-disable no-console */
class Logger {
    private static instance: Logger;

    private constructor() {
        // Intentionally empty
    }

    private static getConfig(): { [key: string]: boolean } {
        const config = localStorage.getItem('logger-config');
        return config ? JSON.parse(config) : {};
    }

    private static isLevelEnabled(level: string): boolean {
        const config = Logger.getConfig();
        return config[level] === true;
    }

    private static isDebugMode(): boolean {
        return Logger.isLevelEnabled('debug');
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(...messages: unknown[]): void {
        if (Logger.isDebugMode() || Logger.isLevelEnabled('log')) {
            console.log(...messages);
        }
    }

    warn(...messages: unknown[]): void {
        if (Logger.isDebugMode() || Logger.isLevelEnabled('warn')) {
            console.warn(...messages);
        }
    }

    error(...messages: unknown[]): void {
        if (Logger.isDebugMode() || Logger.isLevelEnabled('error')) {
            console.error(...messages);
        }
    }

    info(...messages: unknown[]): void {
        if (Logger.isDebugMode() || Logger.isLevelEnabled('info')) {
            console.info(...messages);
        }
    }
}
/* eslint-enable no-console */

const loggerInstance = Logger.getInstance();
export default loggerInstance;