<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// モニタリング項目
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue')
// 下記の項目は、次回のアップデート時に更新
// const PositiveNumberByDevelopedDateCard = ()=>
// ここまで
/* eslint-enable simple-import-sort/sort */

export default Vue.extend({
  data() {
    return {
      rows: [[ConfirmedCasesDetailsCard, ConfirmedCasesByMunicipalitiesCard]],
    }
  },
})
</script>
