<template>
  <v-col cols="12" md="6" class="DataCard PositiveNumberOver70Card">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数（70代以上）の推移')"
        :title-id="'positive-number-over70'"
        :chart-id="'positive-number-over70'"
        :chart-data="positiveOver70Data"
        :date="date"
        :by-date="true"
        :unit="$t('人')"
      />
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import {
  Datum as IDatum,
  // eslint-disable-next-line import/named
  PositiveOver70 as IPositiveOver70,
} from '@/libraries/auto_generated/data_converter/convertPositiveOver70'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import formatGraph, { GraphDataType } from '@/utils/formatGraph'

type Data = {}
type Methods = {}
type Computed = {
  date: string
  positiveOver70Data: GraphDataType[]
  positiveOver70: IPositiveOver70
}
type Props = {}
type DataType = {
  日付: string
  小計: number
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    TimeBarChart,
  },
  computed: {
    date() {
      return this.positiveOver70.date
    },
    positiveOver70Data() {
      const data: DataType[] = this.positiveOver70.data.map((d: IDatum) => {
        return {
          日付: convertDateToISO8601Format(d.date),
          小計: d.count,
        }
      })
      return formatGraph(data)
    },
    positiveOver70() {
      return this.$store.state.positiveOver70
    },
  },
})
</script>
