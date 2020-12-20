<template>
  <component :is="cardComponent" />
</template>

<script>
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
// ---- 項目一覧
// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// 報告日別による陽性者数の推移
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
// モニタリング項目(1)新規陽性者数
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
// 発症日別による陽性者数の推移
import PositiveNumberByDevelopedDateCard from '@/components/cards/PositiveNumberByDevelopedDateCard.vue'
// 確定日別による陽性者数の推移
import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'
// 検査実施件数
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// モニタリング項目(4)検査の陽性率
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
// モニタリング項目(6)入院患者数
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
// モニタリング項目(7)重症患者数
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
/* eslint-enable simple-import-sort/sort */

import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    // ---- モニタリング項目
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    MonitoringConfirmedCasesNumberCard,
    PositiveNumberByDevelopedDateCard,
    PositiveNumberByDiagnosedDateCard,
    TestedNumberCard,
    PositiveRateCard,
    HospitalizedNumberCard,
    SevereCaseCard,
  },
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- モニタリング項目
      // 検査陽性者の状況
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
      // 報告日別による陽性者数の推移
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      // モニタリング項目(1)新規陽性者数
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        break
      // 発症日別による陽性者数の推移
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
        break
      // 確定日別による陽性者数の推移
      case 'positive-number-by-diagnosed-date':
        cardComponent = 'positive-number-by-diagnosed-date-card'
        break
      // 検査実施件数
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        break
      // モニタリング項目(4)検査の陽性率
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        break
      // モニタリング項目(6)入院患者数
      case 'number-of-hospitalized':
        cardComponent = 'hospitalized-number-card'
        break
      // モニタリング項目(7)重症患者数
      case 'positive-status-severe-case':
        cardComponent = 'severe-case-card'
    }

    return {
      cardComponent,
      title,
      updatedAt,
    }
  },
  head() {
    const url = 'https://sagamihara-covid19.netlify.app/'
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
          content: `${url}${this.$route.path}/`,
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
