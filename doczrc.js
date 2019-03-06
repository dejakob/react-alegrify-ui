import fs from "fs";

export default {
    htmlContext: {
        head: {
            raw: `<style>
            ${fs.readFileSync(
                process.cwd() + "/node_modules/alegrify-ui/alegrify-ui.css"
            )}
                .react-live-preview { background-color: #ddd; }
            </style>`
        }
    },
    themeConfig: {
        showPlaygroundEditor: true
    }
};