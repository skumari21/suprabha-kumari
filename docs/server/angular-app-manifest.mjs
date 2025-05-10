
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1808, hash: 'b1935b21b37bb5df5e831d870ea74e84092e83f60c0e1c2a99f3b0b032a9c586', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: 'd361d78138a553bc454562b7a6703887a539dea9b6c9d9253c705faf8231c01f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 49003, hash: 'c1df54c04a1e6e8956d2258abdab652805073ac4ed4946d8572cb3651d6f353e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-GPDCSP4Z.css': {size: 74504, hash: 'i7g4WVtfg8w', text: () => import('./assets-chunks/styles-GPDCSP4Z_css.mjs').then(m => m.default)}
  },
};
