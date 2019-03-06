import fs from "fs";

export default {
    htmlContext: {
        head: {
            raw: `<style>
            ${fs.readFileSync(
                process.cwd() + "/node_modules/alegrify-ui/alegrify-ui.css"
            )}
                .react-live-preview { background-color: #ddd; }
            </style>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <base href="https://dejakob.github.io/react-alegrify-ui" />
            `
        }
    },
    themeConfig: {
        showPlaygroundEditor: true
    },
    hashRouter: true
};