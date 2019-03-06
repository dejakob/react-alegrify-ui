export const imports = {
  'docs/alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-alert" */ 'docs/alert.mdx'),
  'docs/article.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-article" */ 'docs/article.mdx'),
  'docs/aside.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-aside" */ 'docs/aside.mdx'),
  'docs/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button" */ 'docs/button.mdx'),
  'docs/card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-card" */ 'docs/card.mdx'),
  'docs/checkbox.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-checkbox" */ 'docs/checkbox.mdx'),
  'docs/date-indicator.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-date-indicator" */ 'docs/date-indicator.mdx'),
  'docs/dialog.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-dialog" */ 'docs/dialog.mdx'),
}
