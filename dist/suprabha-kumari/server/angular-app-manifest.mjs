
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
    'index.csr.html': {size: 2503, hash: '326567b3626d945f10285993f97ff66b143f6d0190847eac0d89c5beccca1ea1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1734, hash: '17b598795be8fff1adc78fcb4298288916d1768edfe1cb35ff6a97cb9b1decb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51922, hash: '6dfb71fbeae1356da6ce4cb4bc34c1e0d3aca43dd149d0b0074c330784c397f3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5O7ZU3VD.css': {size: 75716, hash: 'OMaQTp/5cqA', text: () => import('./assets-chunks/styles-5O7ZU3VD_css.mjs').then(m => m.default)}
  },
};
