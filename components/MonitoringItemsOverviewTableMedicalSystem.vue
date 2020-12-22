<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('検査体制') }}</span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('陽性率') }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['陽性率'].value"
              :unit="items['陽性率'].unit"
            />
          </div>
        </li>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('陽性率（参考値）') }}</span>
                <span>{{ items['陽性率（参考値）'].value }}</span>
              </div>
            </li>
          </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('受入体制') }}</span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('入院患者数') }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['入院患者数'].value"
              :unit="items['入院患者数'].unit"
            />
          </div>
        </li>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('入院患者数（参考値）') }}</span>
                <span>{{ items['入院患者数（参考値）'].value }}</span>
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
