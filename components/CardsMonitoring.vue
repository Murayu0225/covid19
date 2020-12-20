<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
// 報告日別による陽性者数の推移
const ConfirmedCasesNumberCard = () =>
  import('@/components/cards/ConfirmedCasesNumberCard.vue')
// モニタリング項目(1)新規陽性者数
const MonitoringConfirmedCasesNumberCard = () =>
  import('@/components/cards/MonitoringConfirmedCasesNumberCard.vue')
// 陽性者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
// 発症日別による陽性者数の推移
const PositiveNumberByDevelopedDateCard = () =>
  import('@/components/cards/PositiveNumberByDevelopedDateCard.vue')
// 確定日別による陽性者数の推移
const PositiveNumberByDiagnosedDateCard = () =>
  import('@/components/cards/PositiveNumberByDiagnosedDateCard.vue')
// 検査実施件数
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
// モニタリング項目(4)検査の陽性率
const PositiveRateCard = () => import('@/components/cards/PositiveRateCard.vue')
// モニタリング項目(6)入院患者数
const HospitalizedNumberCard = () =>
  import('@/components/cards/HospitalizedNumberCard.vue')
// モニタリング項目(7)重症患者数
const SevereCaseCard = () => import('@/components/cards/SevereCaseCard.vue')
/* eslint-enable simple-import-sort/sort */

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, ConfirmedCasesNumberCard],
        [MonitoringConfirmedCasesNumberCard, ConfirmedCasesAttributesCard],
        [PositiveNumberByDevelopedDateCard, PositiveNumberByDiagnosedDateCard],
        [TestedNumberCard, PositiveRateCard],
        [HospitalizedNumberCard, SevereCaseCard],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
