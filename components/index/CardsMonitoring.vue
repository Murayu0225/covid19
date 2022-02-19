<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// モニタリング項目
const MonitoringItemsOverviewCard = () =>
  import('@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue')
// このグラフにはバグが存在しているため一時的に非公開にしている。
// パス経由でのみアクセスのみできるようにしている。
// モニタリング項目(1)新規陽性者数
// const MonitoringConfirmedCasesNumberCard = () =>
// import(
// '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
// )
// モニタリング項目(3)新規陽性者における接触歴等不明者数
const UntrackedRateCard = () =>
  import('@/components/index/CardsMonitoring/UntrackedRate/Card.vue')
// モニタリング項目(7)重症患者数
const SevereCaseCard = () =>
  import('@/components/index/CardsMonitoring/SevereCase/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [MonitoringItemsOverviewCard, UntrackedRateCard],
        [SevereCaseCard],
      ],
    }
  },
})
</script>
