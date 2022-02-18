<template>
  <div>
    <cards-lazy-row :rows="rows" />
    <cards-lazy-row :rows="hideRows" hide-cards />
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 陽性者数（区市町村別）
const ConfirmedCasesByMunicipalitiesCard = () =>
  import(
    '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
  )
// 報告日別による陽性者数（65歳以上）の推移
const PositiveNumberOver70Card = () =>
  import('@/components/index/CardsReference/PositiveNumberOver70/Card.vue')
// 発症日別による陽性者数の推移
const PositiveNumberByDevelopedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
  )
// 確定日別による陽性者数の推移
const PositiveNumberByDiagnosedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
  )
// 死亡日別による死亡者数の推移
const DeathsByDeathDateCard = () =>
  import('@/components/index/CardsReference/DeathsByDeathDate/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesByMunicipalitiesCard, PositiveNumberOver70Card],
        [DeathsByDeathDateCard],
      ],
      hideRows: [
        [PositiveNumberByDevelopedDateCard, PositiveNumberByDiagnosedDateCard],
      ],
    }
  },
})
</script>
