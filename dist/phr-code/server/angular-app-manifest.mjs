
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/video-call"
  },
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/user-checkin"
  },
  {
    "renderMode": 2,
    "route": "/user-access"
  },
  {
    "renderMode": 2,
    "route": "/user-waiting"
  }
],
  assets: {
    'index.csr.html': {size: 34618, hash: 'c69955ff07141e6611b8ef9eb9bdccdf10d88f195456f4e4a2f2ff9334051e06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22956, hash: '6b2b1c282416c8e5c0ffab94cd819f457c69b52245f1c2ee225bf49050d91d2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user-access/index.html': {size: 42161, hash: '5047d48523bbaed84dbafe546de277a5f2e223a347108f7d654d683404bd680a', text: () => import('./assets-chunks/user-access_index_html.mjs').then(m => m.default)},
    'user-checkin/index.html': {size: 46017, hash: '1060c5aea927fcfcc9328be8c406bc0a0da7f28d9a3a708d414336e31515d37f', text: () => import('./assets-chunks/user-checkin_index_html.mjs').then(m => m.default)},
    'user-waiting/index.html': {size: 55536, hash: 'c7deda827762044dc9159d8ec26c5e5e0837571cc97180e2bbb32c0758020f7c', text: () => import('./assets-chunks/user-waiting_index_html.mjs').then(m => m.default)},
    'index.html': {size: 98108, hash: '928ffc3a2ab7a712a0d112d6af993ca018552ee0966ead4eb34bc6392aa3a077', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'video-call/index.html': {size: 59494, hash: 'a2ed483ddda9380c42e28d700ec34af7ecf6c933b136a64e5093225dd3e84e6f', text: () => import('./assets-chunks/video-call_index_html.mjs').then(m => m.default)},
    'styles-MVGYEMS6.css': {size: 295331, hash: 'HujcIDab7Ic', text: () => import('./assets-chunks/styles-MVGYEMS6_css.mjs').then(m => m.default)}
  },
};
