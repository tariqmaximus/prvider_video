
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
    'index.csr.html': {size: 34618, hash: '31b29b98083e761885f50ffea07aa1e4c32957b6793a288f7e86f2bf91320264', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22956, hash: '0df193c100d8806cfa7e251d4cacff90610f0521d63bb45f65c692dae4aa674d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user-checkin/index.html': {size: 46017, hash: '950d7c0c030e1c17aa9570063f54f3cd6a6796fbfc06fd9f302fe1e5d5af5d18', text: () => import('./assets-chunks/user-checkin_index_html.mjs').then(m => m.default)},
    'video-call/index.html': {size: 59494, hash: '5ab6ceb7681e1c606cc3a1e9202bead75d504196c1856e2a493b0fc0a7be41f7', text: () => import('./assets-chunks/video-call_index_html.mjs').then(m => m.default)},
    'user-waiting/index.html': {size: 55536, hash: '2066c1f56f81170d37f23ff50dbedc224912fdd7de6b648ff1ab179496fb7ff3', text: () => import('./assets-chunks/user-waiting_index_html.mjs').then(m => m.default)},
    'index.html': {size: 98604, hash: '1829190d78b918fe4d2a0aaf6481846b538455efbb06ba6c6278af4e2a92316f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'user-access/index.html': {size: 42161, hash: '03fb537a3c75aeb1c6a9e54c8820b6cdf5c2a1c08e515d7644b306fe97fa8914', text: () => import('./assets-chunks/user-access_index_html.mjs').then(m => m.default)},
    'styles-MVGYEMS6.css': {size: 295331, hash: 'HujcIDab7Ic', text: () => import('./assets-chunks/styles-MVGYEMS6_css.mjs').then(m => m.default)}
  },
};
