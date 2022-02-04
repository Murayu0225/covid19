import { log } from './gtm.utils'

const _layer = 'dataLayer'
const _id = ''

function gtmClient(ctx, initialized) {
  return {
    init(id = _id) {
      if (initialized[id] || !window._gtm_inject) {
        return
      }
      window._gtm_inject(id)
      initialized[id] = true
      log('init', id)
    },
    push(obj) {
      if (!window[_layer]) {
        window[_layer] = []
      }
      window[_layer].push(obj)
      log('push', obj)
    }
  }
}

function gtmServer(ctx, initialized) {
  const events = []
  const inits = []

  ctx.beforeNuxtRender(() => {
    if (!inits.length && !events.length) {
      return
    }

    const gtmScript = ctx.app.head.script.find(s => s.hid == 'gtm-script')
    gtmScript.innerHTML = `window['${_layer}']=${JSON.stringify(events)};${gtmScript.innerHTML}`

    if (inits.length) {
      gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})`
    }

    const gtmIframe = ctx.app.head.noscript.find(s => s.hid == 'gtm-noscript')
    const renderIframe = id => `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`
    if (inits.length) {
      gtmIframe.innerHTML += inits.map(renderIframe)
    }
  })

  return {
    init(id = _id) {
      if (initialized[id]) {
        return
      }
      inits.push(id)
      initialized[id] = true
      log('init', id)
    },
    push(obj) {
      events.push(obj)
      log('push', JSON.stringify(obj))
    }
  }
}

function startPageTracking(ctx) {
  ctx.app.router.afterEach((to) => {
    setTimeout(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: '' + to.fullPath,
        pageTitle: (typeof document !== 'undefined' && document.title) || '',
        event: 'nuxtRoute'
      })
    }, 250)
  })
}

export default function (ctx, inject) {
  const runtimeConfig = (ctx.$config && ctx.$config.gtm) || {}
  const autoInit = true
  const id = ''
  const runtimeId = runtimeConfig.id
  const initialized = autoInit && id ? {[id]: true} : {}
  const $gtm = process.client ? gtmClient(ctx, initialized) : gtmServer(ctx, initialized)
  if (autoInit && runtimeId && runtimeId !== id) {
    $gtm.init(runtimeId)
  }
  ctx.$gtm = $gtm
  inject('gtm', ctx.$gtm)
  if (process.client) { startPageTracking(ctx); }
}
