import localeba2612ee from '../..\\assets\\locales\\ja.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"ja","formatFallbackMessages":true,"dateTimeFormats":{"ja":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}},"en":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}},"zh-cn":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}},"zh-tw":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}},"ko":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}},"ja-basic":{"dateTime":{"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric","hour12":false},"date":{"year":"numeric","month":"short","day":"numeric"},"dateWithoutYear":{"month":"long","day":"numeric"},"dateWithoutDay":{"year":"numeric","month":"short"},"dateWithDayOfWeek":{"weekday":"short","month":"short","day":"numeric"}}}},
  vueI18nLoader: false,
  locales: [{"code":"ja","name":"日本語","iso":"ja-JP","file":"ja.json","description":"Japanese"},{"code":"en","name":"English","iso":"en-US","file":"en.json","description":"English"},{"code":"zh-cn","name":"简体中文","iso":"zh-CN","file":"zh_CN.json","description":"Simplified Chinese"},{"code":"zh-tw","name":"繁體中文","iso":"zh-TW","file":"zh_TW.json","description":"Traditional Chinese"},{"code":"ko","name":"한국어","iso":"ko-KR","file":"ko.json","description":"Korean"},{"code":"ja-basic","name":"やさしい にほんご","iso":"ja-JP","file":"ja-Hira.json","description":"Easy Japanese"}],
  defaultLocale: "ja",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\Yu\\Desktop\\covid19\\assets\\locales",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ja","name":"日本語","iso":"ja-JP","file":"ja.json","description":"Japanese"},{"code":"en","name":"English","iso":"en-US","file":"en.json","description":"English"},{"code":"zh-cn","name":"简体中文","iso":"zh-CN","file":"zh_CN.json","description":"Simplified Chinese"},{"code":"zh-tw","name":"繁體中文","iso":"zh-TW","file":"zh_TW.json","description":"Traditional Chinese"},{"code":"ko","name":"한국어","iso":"ko-KR","file":"ko.json","description":"Korean"},{"code":"ja-basic","name":"やさしい にほんご","iso":"ja-JP","file":"ja-Hira.json","description":"Easy Japanese"}],
  localeCodes: ["ja","en","zh-cn","zh-tw","ko","ja-basic"],
  additionalMessages: [],
}

export const localeMessages = {
  'ja.json': () => Promise.resolve(localeba2612ee),
  'en.json': () => import('../..\\assets\\locales\\en.json' /* webpackChunkName: "lang-en.json" */),
  'zh_CN.json': () => import('../..\\assets\\locales\\zh_CN.json' /* webpackChunkName: "lang-zh_CN.json" */),
  'zh_TW.json': () => import('../..\\assets\\locales\\zh_TW.json' /* webpackChunkName: "lang-zh_TW.json" */),
  'ko.json': () => import('../..\\assets\\locales\\ko.json' /* webpackChunkName: "lang-ko.json" */),
  'ja-Hira.json': () => import('../..\\assets\\locales\\ja-Hira.json' /* webpackChunkName: "lang-ja-Hira.json" */),
}
