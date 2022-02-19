<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByMunicipalitiesCard">
    <client-only>
      <confirmed-cases-by-municipalities-table
        :title="$t('陽性者数（区別）')"
        :title-id="'number-of-confirmed-cases-by-municipalities'"
        :chart-data="municipalitiesTable"
        :date="date"
        :info="info"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('１週間おきに更新する') }}
            </li>
            <li>
              {{
                $t(
                  '毎日の発生数等によっては、個人が特定されるおそれがあるため、区別の陽性患者数については週報とする'
                )
              }}
            </li>
          </ul>
        </template>
      </confirmed-cases-by-municipalities-table>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

// table タグとの衝突を避けるため ConfirmedCasesByMunicipalitiesTable とする
import ConfirmedCasesByMunicipalitiesTable from '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Table.vue'
import Data from '@/data/patient.json'
import { getCommaSeparatedNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    ConfirmedCasesByMunicipalitiesTable,
  },
  data() {
    const { datasets, date } = Data

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 区市町村ごとの陽性者数
    const municipalitiesTable = {
      headers: [],
      datasets: [],
    }

    municipalitiesTable.headers = [
      { text: this.$t('区'), value: 'label' },
      { text: this.$t('陽性者数'), value: 'count', align: 'end' },
    ]

    // データをソート
    const labelOrder = ['緑区', '中央区', '南区', '市外']
    datasets.data.sort((a, b) => {
      // '特別区' -> '多摩地域' -> '島しょ地域' -> その他 の順にソート
      return labelOrder.indexOf(a.label) - labelOrder.indexOf(b.label)
    })

    // データを追加
    municipalitiesTable.datasets = datasets.data
      .filter((d) => d.label !== '小計')
      .map((d) => {
        const label = this.$t(d.label)
        const count = countFormatter(d.count)

        return { label, count }
      })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(datasets.date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      municipalitiesTable,
      info,
    }
  },
}
</script>
