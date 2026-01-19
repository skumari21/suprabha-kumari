
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2503, hash: '541bbd028f72c006b7ed18b4296bac3485ff847852b7b54ffeebffa8ce1bac4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1734, hash: '4cf128e51b120028f0aec05defea92170f7d93720210e3febeb543876c5fb192', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51942, hash: 'f0ce22dd7dccc3a67fef9fc9b68325c2a916631a18012b5e9a97cbb4c233b018', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5O7ZU3VD.css': {size: 75716, hash: 'OMaQTp/5cqA', text: () => import('./assets-chunks/styles-5O7ZU3VD_css.mjs').then(m => m.default)}
  },
};
