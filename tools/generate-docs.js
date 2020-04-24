const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { MDXProvider, mdx: createElement } = require('@mdx-js/react')
const babel = require('@babel/core');
const mdx = require('@mdx-js/mdx');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const DOMAINS = [
  'localhost',
  'dejakob.com'
];

async function generateIndex(file, options = {}) {
  const importPath = options.importPath || `../docs/${file}.mdx`;
  const exportPath = options.exportPath || `../docs-build/${file}.html`;
  const fileName = path.join(__dirname, importPath);
  const mdxContent = (await readFile(fileName)).toString();
  const jsx = await mdx(mdxContent);
  const { code } = babel.transform(jsx, { presets: ["@babel/preset-env", "@babel/preset-react"] });

  await writeFile(path.join(__dirname, exportPath), await renderWithReact(code));
}

async function renderWithReact(code) {
  const scope = {
    mdx: createElement,
    require: mdRequire
  };
  const fn = new Function(
    'React',
    ...Object.keys(scope),
    `const exports = {}; ${code}; return React.createElement(MDXContent)`
  )
  const element = fn(React, ...Object.values(scope))
  const components = {
    h1: ({children, ...props}) => React.createElement('h1', { className: 'alegrify-h1', ...props }, children),
    h2: ({children, ...props}) => React.createElement('h2', { className: 'alegrify-h2', ...props }, children),
    h3: ({children, ...props}) => React.createElement('h3', { className: 'alegrify-h3', ...props }, children),
    p: ({children, ...props}) => React.createElement('p', { className: 'alegrify-p', ...props }, children),
    a: ({children, ...props}) => React.createElement('a', {
      className: 'alegrify-a',
      ...(isExternalPath(props.href) ? {
        target: '_blank',
        rel: 'noreferrer noopener'
      }: {}),
      ...props
    }, children),
    ul: ({children, ...props}) => React.createElement('ul', { className: 'alegrify-ul', ...props }, children),
    li: ({children, ...props}) => React.createElement('li', { className: 'alegrify-ul__li', ...props }, children),
    pre: ({children, ...props}) => React.createElement('pre', { className: 'alegrify-space--large', ...props }, children),
  }
  const elementWithProvider = React.createElement(
    MDXProvider,
    { components },
    element
  )

  return `
<!DOCTYPE html>
<html>
  <head>
    <title>React Alegrify UI</title>
    <link rel="stylesheet" href="https://dejakob.com/alegrify-ui/alegrify-ui.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism.min.css" />
    <style>
      .preview {
        display: block;
        background-color: rgba(78, 75, 193, 0.1);
        height: 100%;
        width: 100%;
      }
      .preview > div {
        padding: 16px;
      }
      pre[class*=language-].preview__pre {
        margin: 0;
      }
    </style>
  </head>
  <body class="alegrify-body">
    <main class="alegrify-main">
      <a href="https://dejakob.com/react-alegrify-ui" style="color: #ffffff; display: block; text-align: center; text-decoration: none;" class="alegrify-a" title="React Alegrify UI">
        <h1 class="alegrify-h1 alegrify-h1--thin">
          React Alegrify UI
        </h1>
      </a>
      <section class="alegrify-section" data-component>      
        ${renderToString(elementWithProvider)}
      </section>
    </main>
    <script src="../dist/docs.bundle.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/components/prism-jsx.min.js"></script>
  </body>
</html>
  `.trim();
}

function mdRequire(module) {
  return require(module);
}

function isExternalPath(url) {
  if (!['http://', 'https://', '//'].some(prefix => url.indexOf(prefix) === 0)) {
    return false;
  }

  const domain = url.replace('http://','').replace('https://','').split('/')[0];
  return DOMAINS.indexOf(domain) === -1;
}
  
generateIndex('index', { importPath: '../README.md', exportPath: '../index.html' });
generateIndex('button');
generateIndex('card');
generateIndex('checkbox');
generateIndex('dialog');
generateIndex('dl');
generateIndex('drawer');
generateIndex('dropdown');
generateIndex('footer');
generateIndex('grid');
generateIndex('input');
generateIndex('label');
generateIndex('notification');
generateIndex('radio');
generateIndex('range-input');
generateIndex('section');
generateIndex('stepper');
generateIndex('typography');

generateIndex('spacing');
