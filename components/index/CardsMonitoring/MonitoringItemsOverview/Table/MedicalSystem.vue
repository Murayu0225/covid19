<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('検査体制') }}</span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('（４）陽性率') }}</span>
            <value-with-translatable-unit
              :value="items['陽性率'].value"
              :unit="items['陽性率'].unit"
            />
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('陽性率（参考値）') }}</span>
                <span>{{ items['陽性率（参考値）'].value }}</span>
              </div>
            </li>
          </ul>
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
            <span>{{ $t('（５）病床の逼迫具合') }}</span>
            <value-with-translatable-unit
              :value="items['病床の逼迫具合'].value"
              :unit="items['病床の逼迫具合'].unit"
            />
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('病床の逼迫具合（参考値）') }}</span>
                <span>{{ items['病床の逼迫具合（参考値）'].value }}</span>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('（６）重症者用病床の逼迫具合') }}</span>
            <value-with-translatable-unit
              :value="items['重症者用病床の逼迫具合'].value"
              :unit="items['重症者用病床の逼迫具合'].unit"
            />
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('重症者用病床の逼迫具合（参考値）') }}</span>
                <span>{{
                  items['重症者用病床の逼迫具合（参考値）'].value
                }}</span>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('（７）人口10万人当たりの療養者数') }}</span>
            <value-with-translatable-unit
              :value="items['人口10万人当たりの療養者数'].value"
              :unit="items['人口10万人当たりの療養者数'].unit"
            />
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('人口10万人当たりの療養者数（参考値）') }}</span>
                <span>{{
                  items['人口10万人当たりの療養者数（参考値）'].value
                }}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { MonitoringItems } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
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
