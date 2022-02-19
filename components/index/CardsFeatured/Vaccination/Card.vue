<template>
  <v-col cols="12" md="6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種件数')"
        title-id="vaccination"
        :info-titles="[$t('接種件数（３回目)')]"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :periods="vaccinationLabels"
        :data-labels="chartLabels"
        :last-period="vaccinationData.lastPeriod"
        :unit="$t(' 件')"
      >
        <template #description>
          <span>{{ $t('対象者 614,960人') }}</span>
          <br />
          <span>
            {{
              $t('3回目の接種割合は、{p3}％', {
                p3: p3,
              })
            }}
          </span>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('１週間おきに更新する') }}
            </li>
            <li>
              {{ $t('接種実績は、ワクチン接種記録システム(VRS)に基づく') }}
            </li>
            <li>
              {{
                $t(
                  '接種率は、国の算出方法による人口（総務省公表「住民基本台帳に基づく人口、人口動態及び世帯数」（令和3年）を基に作成）を分母にして算出している'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  'RSのデータは、登録にタイムラグがあるため、同じ日の接種実績でも抽出時点によって数値が異なることから、他機関の発表する数値と異なる場合がある'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '医療従事者等及び高齢者施設等の入所者等については、初回接種の完了から8か月以上の経過を待たずに追加接種を行う場合がある'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '接種時期の前倒しに伴い、やむを得ず接種券の発行を待たずに接種を行う場合は、VRSへの登録が遅れるため、接種実績への反映が遅れることがある'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Vue from 'vue'

import {
  Dataset as IVaccinationDataset,
  Period as IVaccinationPeriod,
  Vaccination as IVaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccination'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'
import Chart from '~/components/index/CardsFeatured/Vaccination/Chart.vue'

dayjs.extend(duration) // eslint-disable-line import/no-named-as-default-member

type Data = {
  chartLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekEndLabel: (end: Date) => string
}
type Computed = {
  date: string
  p3: number
  vaccinationLabels: string[]
  vaccinationDatasets: IVaccinationDataset[]
  vaccinationData: {
    lastPeriod: IVaccinationPeriod
    labels: Date[]
    chartData: number[][]
  }
  vaccination: IVaccination
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const chartLabels = [this.$t('接種件数（３回目）') as string]

    const getFormatter = () => {
      return getNumberToLocaleStringFunction()
    }

    return {
      chartLabels,
      getFormatter,
    }
  },
  computed: {
    date() {
      return this.vaccination.date
    },
    vaccinationLabels() {
      return this.vaccinationDatasets.map((dataset) => {
        const { period } = dataset
        const { end } = period
        return this.getWeekEndLabel(end)
      })
    },
    vaccinationDatasets() {
      return this.vaccination.datasets
    },
    p3() {
      return this.vaccination.p3
    },
    vaccinationData() {
      const datasets = this.vaccination.datasets
      const lastPeriod = datasets.slice(-1)[0].period
      const labels = datasets.map((d: IVaccinationDataset) => d.period.end)
      const cumulative3RdDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.cumulative3RdDose
      )
      const chartData: number[][] = [cumulative3RdDose]

      return {
        lastPeriod,
        labels,
        chartData,
      }
    },
    vaccination() {
      return this.$store.state.vaccination
    },
  },
  methods: {
    /**
     * 表の横軸に表示する、「~MM/DD」形式のラベルを取得する
     */
    getWeekEndLabel(end: Date) {
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `~${to}`
    },
  },
})
</script>
