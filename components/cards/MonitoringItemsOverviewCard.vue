<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('モニタリング状況（集計期間：12月7日〜12月13日）')"
        title-id="monitoring-items-overview"
        :date="monitoringItemsData.date"
      >
        <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('（ ）内の数値は、前週の数値である') }}
            </li>
            <li>
              {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
            </li>
            <li>
              {{ $t('(1)～(5)は7日間移動平均で算出') }}
            </li>
            <li>
              {{ $t('(2)(4)(5)は報告日の前日時点の数値') }}
            </li>
            <li>
              {{
                $t(
                  '(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない'
                )
              }}
            </li>
          </ul>
        </template>
        <section>
          <h4>{{ $t('感染状況') }}</h4>
          <monitoring-items-overview-table-infection-status
            :aria-label="$t('感染状況')"
            :items="monitoringItems"
          />
        </section>
        <section>
          <h4>{{ $t('医療提供体制') }}</h4>
          <monitoring-items-overview-table-medical-system
            :aria-label="$t('医療提供体制')"
            :items="monitoringItems"
          />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import DataView from '@/components/DataView.vue'
import MonitoringItemsOverviewTableInfectionStatus from '@/components/MonitoringItemsOverviewTableInfectionStatus.vue'
import MonitoringItemsOverviewTableMedicalSystem from '@/components/MonitoringItemsOverviewTableMedicalSystem.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import { formatMonitoringItems } from '@/utils/formatMonitoringItems'

export default {
  components: {
    DataView,
    MonitoringItemsOverviewTableInfectionStatus,
    MonitoringItemsOverviewTableMedicalSystem,
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    return {
      monitoringItemsData,
      monitoringItems,
    }
  },
}
</script>

<style lang="scss" module>
section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}

dfn {
  font-style: normal;
  font-weight: bold;
}
</style>
