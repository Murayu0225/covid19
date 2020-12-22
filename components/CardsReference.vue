<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 陽性者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
/* eslint-enable simple-import-sort/sort */ 

export default Vue.extend({
  data() {
    return {
      rows: [[ConfirmedCasesAttributesCard]],
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