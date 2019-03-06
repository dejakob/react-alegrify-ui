import fs from "fs";

export default {
    htmlContext: {
        head: {
            raw: `<style>${fs.readFileSync(
                process.cwd() + "/node_modules/alegrify-ui/alegrify-ui.css"
            )}</style>`
        }
    },
    themeConfig: {
        showPlaygroundEditor: true
    }
};