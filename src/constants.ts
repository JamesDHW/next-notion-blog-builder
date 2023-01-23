import { CliResult } from "./types.js";

export const AVAILABLE_PAGES = [
    "about", 
    "blog", 
    "journal", 
    "resources", 
    "tech",
] as const;
export const PACKAGE_MANAGERS = ["npm", "yarn"] as const;

const DEFAULT_PROJECT_NAME = "next-notion-blog";
export const DEFAULT_CLI_OPTIONS: CliResult = {
    appName: DEFAULT_PROJECT_NAME,
    pages: ["about", "blog", "journal", "resources", "tech"],
    packageManager: "yarn",
  };