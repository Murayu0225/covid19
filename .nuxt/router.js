import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9b65bf2e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5935bb5a = () => interopDefault(import('..\\pages\\accessibility-results.vue' /* webpackChunkName: "pages/accessibility-results" */))
const _6e17f227 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _5bf609a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4fae6b82 = () => interopDefault(import('..\\pages\\flow.vue' /* webpackChunkName: "pages/flow" */))
const _54e4f49c = () => interopDefault(import('..\\pages\\monitoring.vue' /* webpackChunkName: "pages/monitoring" */))
const _361c95fe = () => interopDefault(import('..\\pages\\parent.vue' /* webpackChunkName: "pages/parent" */))
const _5cb12b27 = () => interopDefault(import('..\\pages\\reference.vue' /* webpackChunkName: "pages/reference" */))
const _75b096de = () => interopDefault(import('..\\pages\\sitemap.vue' /* webpackChunkName: "pages/sitemap" */))
const _2dca56d2 = () => interopDefault(import('..\\pages\\worker.vue' /* webpackChunkName: "pages/worker" */))
const _09942c77 = () => interopDefault(import('..\\pages\\print\\flow.vue' /* webpackChunkName: "pages/print/flow" */))
const _943b2a00 = () => interopDefault(import('..\\pages\\cards\\_card.vue' /* webpackChunkName: "pages/cards/_card" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _9b65bf2e,
    name: "about___ja"
  }, {
    path: "/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___ja"
  }, {
    path: "/contacts",
    component: _6e17f227,
    name: "contacts___ja"
  }, {
    path: "/en",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___en"
  }, {
    path: "/flow",
    component: _4fae6b82,
    name: "flow___ja"
  }, {
    path: "/ja-basic",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___ja-basic"
  }, {
    path: "/ko",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___ko"
  }, {
    path: "/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___ja"
  }, {
    path: "/parent",
    component: _361c95fe,
    name: "parent___ja"
  }, {
    path: "/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___ja"
  }, {
    path: "/sitemap",
    component: _75b096de,
    name: "sitemap___ja"
  }, {
    path: "/worker",
    component: _2dca56d2,
    name: "worker___ja"
  }, {
    path: "/zh-cn",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___zh-cn"
  }, {
    path: "/zh-tw",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___zh-tw"
  }, {
    path: "/en/about",
    component: _9b65bf2e,
    name: "about___en"
  }, {
    path: "/en/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___en"
  }, {
    path: "/en/contacts",
    component: _6e17f227,
    name: "contacts___en"
  }, {
    path: "/en/flow",
    component: _4fae6b82,
    name: "flow___en"
  }, {
    path: "/en/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___en"
  }, {
    path: "/en/parent",
    component: _361c95fe,
    name: "parent___en"
  }, {
    path: "/en/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___en"
  }, {
    path: "/en/sitemap",
    component: _75b096de,
    name: "sitemap___en"
  }, {
    path: "/en/worker",
    component: _2dca56d2,
    name: "worker___en"
  }, {
    path: "/ja-basic/about",
    component: _9b65bf2e,
    name: "about___ja-basic"
  }, {
    path: "/ja-basic/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___ja-basic"
  }, {
    path: "/ja-basic/contacts",
    component: _6e17f227,
    name: "contacts___ja-basic"
  }, {
    path: "/ja-basic/flow",
    component: _4fae6b82,
    name: "flow___ja-basic"
  }, {
    path: "/ja-basic/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___ja-basic"
  }, {
    path: "/ja-basic/parent",
    component: _361c95fe,
    name: "parent___ja-basic"
  }, {
    path: "/ja-basic/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___ja-basic"
  }, {
    path: "/ja-basic/sitemap",
    component: _75b096de,
    name: "sitemap___ja-basic"
  }, {
    path: "/ja-basic/worker",
    component: _2dca56d2,
    name: "worker___ja-basic"
  }, {
    path: "/ko/about",
    component: _9b65bf2e,
    name: "about___ko"
  }, {
    path: "/ko/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___ko"
  }, {
    path: "/ko/contacts",
    component: _6e17f227,
    name: "contacts___ko"
  }, {
    path: "/ko/flow",
    component: _4fae6b82,
    name: "flow___ko"
  }, {
    path: "/ko/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___ko"
  }, {
    path: "/ko/parent",
    component: _361c95fe,
    name: "parent___ko"
  }, {
    path: "/ko/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___ko"
  }, {
    path: "/ko/sitemap",
    component: _75b096de,
    name: "sitemap___ko"
  }, {
    path: "/ko/worker",
    component: _2dca56d2,
    name: "worker___ko"
  }, {
    path: "/print/flow",
    component: _09942c77,
    name: "print-flow___ja"
  }, {
    path: "/zh-cn/about",
    component: _9b65bf2e,
    name: "about___zh-cn"
  }, {
    path: "/zh-cn/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___zh-cn"
  }, {
    path: "/zh-cn/contacts",
    component: _6e17f227,
    name: "contacts___zh-cn"
  }, {
    path: "/zh-cn/flow",
    component: _4fae6b82,
    name: "flow___zh-cn"
  }, {
    path: "/zh-cn/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___zh-cn"
  }, {
    path: "/zh-cn/parent",
    component: _361c95fe,
    name: "parent___zh-cn"
  }, {
    path: "/zh-cn/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___zh-cn"
  }, {
    path: "/zh-cn/sitemap",
    component: _75b096de,
    name: "sitemap___zh-cn"
  }, {
    path: "/zh-cn/worker",
    component: _2dca56d2,
    name: "worker___zh-cn"
  }, {
    path: "/zh-tw/about",
    component: _9b65bf2e,
    name: "about___zh-tw"
  }, {
    path: "/zh-tw/accessibility-results",
    component: _5935bb5a,
    name: "accessibility-results___zh-tw"
  }, {
    path: "/zh-tw/contacts",
    component: _6e17f227,
    name: "contacts___zh-tw"
  }, {
    path: "/zh-tw/flow",
    component: _4fae6b82,
    name: "flow___zh-tw"
  }, {
    path: "/zh-tw/monitoring",
    component: _54e4f49c,
    meta: {"tabs":true},
    name: "monitoring___zh-tw"
  }, {
    path: "/zh-tw/parent",
    component: _361c95fe,
    name: "parent___zh-tw"
  }, {
    path: "/zh-tw/reference",
    component: _5cb12b27,
    meta: {"tabs":true},
    name: "reference___zh-tw"
  }, {
    path: "/zh-tw/sitemap",
    component: _75b096de,
    name: "sitemap___zh-tw"
  }, {
    path: "/zh-tw/worker",
    component: _2dca56d2,
    name: "worker___zh-tw"
  }, {
    path: "/en/print/flow",
    component: _09942c77,
    name: "print-flow___en"
  }, {
    path: "/ja-basic/print/flow",
    component: _09942c77,
    name: "print-flow___ja-basic"
  }, {
    path: "/ko/print/flow",
    component: _09942c77,
    name: "print-flow___ko"
  }, {
    path: "/zh-cn/print/flow",
    component: _09942c77,
    name: "print-flow___zh-cn"
  }, {
    path: "/zh-tw/print/flow",
    component: _09942c77,
    name: "print-flow___zh-tw"
  }, {
    path: "/en/cards/:card?",
    component: _943b2a00,
    name: "cards-card___en"
  }, {
    path: "/ja-basic/cards/:card?",
    component: _943b2a00,
    name: "cards-card___ja-basic"
  }, {
    path: "/ko/cards/:card?",
    component: _943b2a00,
    name: "cards-card___ko"
  }, {
    path: "/zh-cn/cards/:card?",
    component: _943b2a00,
    name: "cards-card___zh-cn"
  }, {
    path: "/zh-tw/cards/:card?",
    component: _943b2a00,
    name: "cards-card___zh-tw"
  }, {
    path: "/cards/:card?",
    component: _943b2a00,
    name: "cards-card___ja"
  }, {
    path: "/",
    component: _5bf609a4,
    meta: {"tabs":true},
    name: "index___ja"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
