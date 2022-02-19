<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 患者の発生状況等（サマリ）
const InfectionSummaryCard = () =>
  import('@/components/index/CardsFeatured/InfectionSummary/Card.vue')
// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/index/CardsFeatured/ConfirmedCasesDetails/Card.vue')
// モニタリング項目 ※「モニタリング項目」タブ内と複数配置
const MonitoringItemsOverviewCard = () =>
  import('@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue')
// ワクチン接種数（累計）
const VaccinationCard = () =>
  import('@/components/index/CardsFeatured/Vaccination/Card.vue')
// 報告日別による陽性者数の推移
const ConfirmedCasesNumberCard = () =>
  import('@/components/index/CardsFeatured/ConfirmedCasesNumber/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [InfectionSummaryCard, ConfirmedCasesDetailsCard],
        [MonitoringItemsOverviewCard, VaccinationCard],
        [ConfirmedCasesNumberCard],
      ],
    }
  },
})
</script>
