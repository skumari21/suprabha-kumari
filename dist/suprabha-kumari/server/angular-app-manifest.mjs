
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://skumari21.github.io/suprabha-kumari/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/suprabha-kumari"
  },
  {
    "renderMode": 2,
    "route": "/suprabha-kumari/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2546, hash: '52a0c21f721e9f03e59931552ab79fbda78d652cd132290991e331fa80370e50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1777, hash: '5829c4f8048025d546832ab2e58212c0a0ef97377b5556b0168954be349a876c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51985, hash: 'd0136a193cd669812df3338b0dec51a02f5367e9ade44b5e926c2af587ab70d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5O7ZU3VD.css': {size: 75716, hash: 'OMaQTp/5cqA', text: () => import('./assets-chunks/styles-5O7ZU3VD_css.mjs').then(m => m.default)}
  },
};
