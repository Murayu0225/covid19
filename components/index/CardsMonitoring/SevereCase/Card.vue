<template>
  <v-col cols="12" md="6" class="DataCard SevereCaseCard">
    <client-only>
      <chart
        :title="$t('重症患者数')"
        title-id="positive-status-severe-case"
        chart-id="time-bar-chart-positive-status-severe-case"
        :chart-data="graphData"
        :date="date"
        :unit="$t('人')"
      />
    </client-only>
  </v-col>
</template>

<script>
import Chart from '@/components/index/CardsMonitoring/SevereCase/Chart.vue'
import Data from '@/data/positive_status.json'
import { convertDateToISO8601Format } from '@/utils/formatDate.ts'

export default {
  components: {
    Chart,
  },
  data() {
    const { date } = Data
    const graphData = Data.data
      .filter((d) => new Date(d.date) > new Date('2020-04-26'))
      .filter((d) => !isNaN(d.severe_case))
      .map((d) => ({
        label: convertDateToISO8601Format(d.date),
        transition: d.severe_case,
      }))
    return {
      graphData,
      date,
    }
  },
}
</script>
