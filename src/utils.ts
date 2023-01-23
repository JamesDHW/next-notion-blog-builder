import chalk from "chalk";
import path from "path";

import { fileURLToPath } from "url";
import { copySync } from 'fs-extra/esm'
import { CliResult, PackageManager } from "./types.js";
import { execa } from "execa";

export const log = (msg: string) => 
    console.log(chalk.blue(msg));

export const logSuccess = (msg: string) => 
    console.log(chalk.greenBright(msg));

export const logError = (msg: string) => 
    console.error(chalk.redBright(msg));

export const logHighlight: Function = chalk.red.bold;


export const getRootDirectories = (appName: string) => {
    const __filename = fileURLToPath(import.meta.url);
    const PKG_ROOT = path.dirname(__filename);
    const templateRootDir = path.join(PKG_ROOT, "templates");

    const CURR_DIR = process.cwd();
    const targetRootDir = path.join(CURR_DIR, appName);

    return { templateRootDir, targetRootDir }
}

export const copyOverBaseTemplate = (
    templateRootDir: string, 
    targetRootDir: string
) => {
    log(`Generating base template`)
    const baseTemplateDir = path.join(templateRootDir, "base")
    copySync(baseTemplateDir, targetRootDir, { overwrite: false })
}

export const copyOverPageTemplates = (
    templateRootDir: string, 
    targetRootDir: string,
    pages: CliResult["pages"],
) => {
    pages.forEach(page => {
        copyOverPageTemplate(templateRootDir, targetRootDir, page)
    })
}

export const copyOverPageTemplate = (
    templateRootDir: string, 
    targetRootDir: string,
    page: CliResult["pages"][number],
) => {
    log(`Generating ${logHighlight(page)} page...`)
    const templatePageDir = path.join(templateRootDir, "extra-pages", page)
    const pageAppTemplateDir = path.join(templatePageDir, "app")
    const pageComponentsTemplateDir = path.join(templatePageDir, "components")
    
    const targetAppDir = path.join(targetRootDir, "app", page)
    const targetComponentDir = path.join(targetRootDir, "components", page)

    copySync(pageAppTemplateDir, targetAppDir)
    copySync(pageComponentsTemplateDir, targetComponentDir)
}

export const installDependencies = async (
    targetDir: string, 
    packageManager: PackageManager
) => {
    if (packageManager === "yarn") {
        await execa(packageManager, [], { cwd: targetDir });
      } else {
        await execa(packageManager, ["install"], { cwd: targetDir });
      }
}
