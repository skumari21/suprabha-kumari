
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://skumari21.github.io/suprabha-kumari',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/suprabha-kumari/home",
    "route": "/suprabha-kumari"
  },
  {
    "renderMode": 2,
    "route": "/suprabha-kumari/home"
  },
  {
    "renderMode": 2,
    "route": "/suprabha-kumari/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1850, hash: 'b51b2d95ac81885d8f68c69c35ca50ed1ecc169455891d5d7ba24d20cd40d96f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1179, hash: '7997abf17bd23a18a9b8ad61ac3617e828c9d8dc56e6a7006a15f7fb796d7ce5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 49045, hash: '65800119837ee27a16e95bc134a732d4a3fc8a2f62afc9e093cf33282a984aa0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-GPDCSP4Z.css': {size: 74504, hash: 'i7g4WVtfg8w', text: () => import('./assets-chunks/styles-GPDCSP4Z_css.mjs').then(m => m.default)}
  },
};
