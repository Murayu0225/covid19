<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('（１）人口10万人当たりの累積陽性者数') }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['人口10万人当たりの累積陽性者数'].value"
          :unit="items['人口10万人当たりの累積陽性者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('人口10万人当たりの累積陽性者数（参考値）') }}</span>
            <span>{{
              items['人口10万人当たりの累積陽性者数（参考値）'].value
            }}</span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('（２）陽性患者増加比') }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['陽性患者増加比'].value"
          :unit="items['陽性患者増加比'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('陽性患者増加比（参考値）') }}</span>
            <span>{{ items['陽性患者増加比（参考値）'].value }}</span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('（３）感染経路不明者の割合') }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['感染経路不明者の割合'].value"
          :unit="items['感染経路不明者の割合'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('感染経路不明者の割合（参考値）') }}</span>
            <span>{{ items['感染経路不明者の割合（参考値）'].value }}</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import MonitoringItemsOverviewTableValueWithTranslatableUnit from '@/components/MonitoringItemsOverviewTableValueWithTranslatableUnit.vue'
import { MonitoringItems } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  components: {
    MonitoringItemsOverviewTableValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
