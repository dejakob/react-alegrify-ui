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
            `
        }
    },
    themeConfig: {
        showPlaygroundEditor: true
    },
    hashRouter: true,
    files: '**/*.{md,markdown,mdx}',
    base: '/react-alegrify-ui'
};