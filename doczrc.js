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
        showPlaygroundEditor: true,
        colors: {
            primary: '#4e4cc1',
            secondary: '#953495',
            action: '#ffffff',
            error: '#900505',
            nav: '#333333'
        },
        styles: {
            h1: {},
        },
    },
    hashRouter: true,
    base: '/react-alegrify-ui',
    title: 'Alegrify UI (React)'
};