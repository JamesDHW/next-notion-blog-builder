import { AVAILABLE_PAGES, PACKAGE_MANAGERS } from "./constants.js";

export type AvailablePages = typeof AVAILABLE_PAGES[number];
export type PackageManager = typeof PACKAGE_MANAGERS[number];

export interface CliResult {
    appName: string;
    pages: AvailablePages[];
    packageManager: PackageManager;
}