<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
      >
        <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('在日米陸軍関係者は、含めない') }}
            </li>
          </ul>
        </template>
        <div>
          <app-link
            :class="$style.button"
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
          >
            {{ $t('最新のモニタリング項目の分析・総括コメントについて') }}
          </app-link>
        </div>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import AppLink from '@/components/AppLink.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
    AppLink,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const date = Data.patients_summary.date

    return {
      patientsGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
