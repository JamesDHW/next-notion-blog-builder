import inquirer from "inquirer";
import { validateAppName } from './validation.js';
import { AVAILABLE_PAGES, DEFAULT_CLI_OPTIONS, PACKAGE_MANAGERS } from '../constants.js';
import { AvailablePages, CliResult, PackageManager } from '../types.js';


export const runCliForProjectSpec = async (): Promise<CliResult> => {
  const appName = await promptAppName()
  const pages = await promptPages()
  const packageManager = await promptPackageManager()

  return {
    appName: appName ?? DEFAULT_CLI_OPTIONS.appName,
    pages: pages ?? DEFAULT_CLI_OPTIONS.pages,
    packageManager: packageManager ?? DEFAULT_CLI_OPTIONS.packageManager,
  }
}

const promptAppName = async (): Promise<string> => {
  const { appName } = await inquirer.prompt<Pick<CliResult, "appName">>({
    name: "appName",
    type: "input",
    message: "Name your project:",
    default: DEFAULT_CLI_OPTIONS.appName,
    validate: validateAppName,
    transformer: (input: string) => {
      return input.trim();
    },
  });

  return appName;
};

const promptPages = async (): Promise<AvailablePages[]> => {
  const { pages } = await inquirer.prompt<Pick<CliResult, "pages">>({
    name: "pages",
    type: "checkbox",
    message: "Which pages would you like to enable?",
    choices: AVAILABLE_PAGES
      .map((name) => ({ name, checked: true })),
  });

  return pages;
};

const promptPackageManager = async (): Promise<PackageManager> => {
  const { packageManager } = await inquirer.prompt<Pick<CliResult, "packageManager">>({
    name: "pages",
    type: "list",
    message: "Which package manager should we use?",
    choices: PACKAGE_MANAGERS,
  });

  return packageManager;
};
