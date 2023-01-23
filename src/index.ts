#!/usr/bin/env node

import { runCliForProjectSpec } from "./cli/index.js";
import { 
    copyOverBaseTemplate,
    copyOverPageTemplates,
    getRootDirectories, 
    installDependencies, 
    log,
    logError,
    logHighlight,
    logSuccess,
} from "./utils.js";
import { pathExistsSync } from "fs-extra/esm";



const main = async () => {
    const { appName, pages, packageManager } = await runCliForProjectSpec();
    const { templateRootDir, targetRootDir } = getRootDirectories(appName);

    if (pathExistsSync(targetRootDir))
        throw new Error(`${appName} directory already exists!`)

    log(
        `\nGreat! Generating ${
            logHighlight(appName)
        } for you with the pages: ${
            logHighlight(pages.join(', '))
        }!\n`
    );

    copyOverBaseTemplate(templateRootDir, targetRootDir);
    copyOverPageTemplates(templateRootDir, targetRootDir, pages);

    log(`\nPages generated. Installing dependencies...\n`);

    await installDependencies(targetRootDir, packageManager)
    
    logSuccess(`\nDone! Enjoy your blog - complete the setup by following the readme.\n`);
}

main().catch(err => {
    logError("\nOops, something went wrong:");
    logError(`${err}\n`)
    console.error(err)
})