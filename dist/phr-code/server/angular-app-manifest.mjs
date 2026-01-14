
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
    'index.csr.html': {size: 34618, hash: '13b09acddad322902941ca4641ec1de29eae12cdae87ba938bee040bf1fd60e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22956, hash: '851d25cdd635d7e55298e9d3e2d5581b93d9b970b23fbc5fc03aad5082d77e56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user-checkin/index.html': {size: 46017, hash: 'b1e07c6878a963cc0cbdd138bb62d3fd4e075d244789bb0f792ed33333bcaca2', text: () => import('./assets-chunks/user-checkin_index_html.mjs').then(m => m.default)},
    'video-call/index.html': {size: 62435, hash: '35eab21c133d1e8ddebf774c00ea834a68247aa71bd3169e6db6870257b49458', text: () => import('./assets-chunks/video-call_index_html.mjs').then(m => m.default)},
    'user-waiting/index.html': {size: 58477, hash: '871b74b7d4f2218a441d04259d823bd9e530989e1f99d476bd6d52160a71758b', text: () => import('./assets-chunks/user-waiting_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105055, hash: '2d7f9d52770afc275a46e77f8eb23cbdf43b8232a3c295302e453055f967c08b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'user-access/index.html': {size: 42161, hash: '3cb066e205a91817db34c0e3c4f3ceddd363994b07c7e7d7756df13b4be47072', text: () => import('./assets-chunks/user-access_index_html.mjs').then(m => m.default)},
    'styles-MVGYEMS6.css': {size: 295331, hash: 'HujcIDab7Ic', text: () => import('./assets-chunks/styles-MVGYEMS6_css.mjs').then(m => m.default)}
  },
};
