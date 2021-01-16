<template>
  <component :is="cardComponent" />
</template>

<script>
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
// ---- 項目一覧
// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard'
import MonitoringItemsOverviewCard from '@/components/cards/MonitoringItemsOverviewCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import PositiveNumberByDevelopedDateCard from '@/components/cards/PositiveNumberByDevelopedDateCard.vue'
import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'
/* eslint-enable simple-import-sort/sort */

import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    MonitoringItemsOverviewCard,
    ConfirmedCasesByMunicipalitiesCard,
    PositiveNumberByDevelopedDateCard,
    PositiveNumberByDiagnosedDateCard,
  },
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- 項目一覧
      // 検査陽性者の状況
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      // モニタリング状況
      case 'monitoring-items-overview':
        cardComponent = 'monitoring-items-overview-card'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
        break
      case 'positive-number-by-diagnosed-date':
        cardComponent = 'positive-number-by-diagnosed-date-card'
    }

    return {
      cardComponent,
      title,
      updatedAt,
    }
  },
  head() {
    const url = 'https://sagamihara-stopcovid19.com/'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものを相模原市向けに改変したものです。'
    )}`
    const defaultTitle = `${this.$t('相模原市')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`

    return {
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      link: [
        ...getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}/`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          template: (title) =>
            title !== ''
              ? `${this.title || title} | ${defaultTitle}`
              : `${defaultTitle}`,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage,
        },
      ],
    }
  },
}
</script>
