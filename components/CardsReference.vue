<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 陽性者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
// モニタリング状況
const MonitoringItemsOverviewCard = () =>
  import('@/components/cards/MonitoringItemsOverviewCard.vue')
/* eslint-enable simple-import-sort/sort */ export default Vue.extend({
  data() {
    return {
      rows: [[ConfirmedCasesAttributesCard, MonitoringItemsOverviewCard]],
    }
  },
})
</script>
