import type { NuxtConfig } from '@nuxt/types'
import type { DateTimeFormat } from 'vue-i18n'

const dateTimeFormatsCommon: DateTimeFormat = {
  dateTime: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  },
  date: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  dateWithoutYear: {
    month: 'long',
    day: 'numeric',
  },
  dateWithoutDay: {
    year: 'numeric',
    month: 'short',
  },
  dateWithDayOfWeek: {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  },
}

const options: NuxtConfig['i18n'] = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: false,
  defaultLocale: 'ja',

  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true,
    dateTimeFormats: {
      ja: dateTimeFormatsCommon,
      en: dateTimeFormatsCommon,
      'zh-cn': dateTimeFormatsCommon,
      'zh-tw': dateTimeFormatsCommon,
      ko: dateTimeFormatsCommon,
      'pt-BR': dateTimeFormatsCommon,
    },
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese',
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English',
    },
    {
      code: 'zh-cn',
      name: '简体中文',
      iso: 'zh-CN',
      file: 'zh_CN.json',
      description: 'Simplified Chinese',
    },
    {
      code: 'zh-tw',
      name: '繁體中文',
      iso: 'zh-TW',
      file: 'zh_TW.json',
      description: 'Traditional Chinese',
    },
    {
      code: 'ko',
      name: '한국어',
      iso: 'ko-KR',
      file: 'ko.json',
      description: 'Korean',
    },
    {
      code: 'pt-br',
      name: 'Portuguese',
      iso: 'pt-BR',
      file: 'pt_BR.json',
      description: 'Portuguese',
    },
  ],
}

export default options
