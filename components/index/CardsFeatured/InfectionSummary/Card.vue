<template>
  <v-col cols="12" md="6" class="DataCard InfectionSummaryCard">
    <client-only>
      <data-view
        :title="
          $t(`{date}の患者の発生状況等`, { date: formatDate(publicationDate) })
        "
        title-id="infection-summary"
        :date="date"
      >
        <section :class="$style.section">
          <infection-status
            :aria-label="$t('患者の発生状況等')"
            :items="statuses"
          />
        </section>
        <section :class="$style.section">
          <h4>{{ $t('ワクチン接種状況（累計）') }}</h4>
          <vaccination-status
            :aria-label="$t('ワクチン接種状況（累計）')"
            :items="statuses"
          />
        </section>
        <div :class="$style.link">
          <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
          <app-link
            to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
          >
            {{
              $t(
                '新型コロナウイルス感染症に関する相模原市発表資料（発生状況等）'
              )
            }}
          </app-link>
        </div>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  'ワクチン接種状況については、土曜日・日曜日・祝日は更新しない'
                )
              }}
            </li>
            <li>
              {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
            </li>
            <li>
              {{
                $t(
                  'ワクチン接種状況における1回目・2回目の接種状況は、2022年１月30日時点のものである'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '全対象者の接種率は、令和3年1月1日住民基本台帳年齢階級別人口（総務省公表）をもとに、12歳以上の人口(652,528人)を分母として算出'
                )
              }}
            </li>
          </ul>
        </template>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsFeatured/InfectionSummary/Table/InfectionStatus.vue'
import VaccinationStatus from '@/components/index/CardsFeatured/InfectionSummary/Table/VaccinationStatus.vue'
import {
  Data as IInfectionMedicalCareSummaryData,
  InfectionMedicalcareSummary as IInfectionMedicalCareSummary,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareSummary'

type Data = {
  mdiChevronRight: string
}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareSummaryData
  date: string
  publicationDate: string
  infectionMedicalCareSummary: IInfectionMedicalCareSummary
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
    DataView,
    InfectionStatus,
    VaccinationStatus,
  },
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareSummary.data
    },
    date() {
      return this.infectionMedicalCareSummary.date as string
    },
    publicationDate() {
      return this.infectionMedicalCareSummary.data['日付'] as unknown as string
    },
    infectionMedicalCareSummary() {
      return this.$store.state.infectionMedicalCareSummary
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(new Date(date), 'date') as string
    },
  },
})
</script>

<style lang="scss" module>
.section {
  margin: 10px 0 20px;

  h4 {
    color: $gray-2;
    margin: 5px 0 10px;
    font-weight: normal;

    @include font-size(16);
  }
}

.frame {
  margin-bottom: 20px;
}

.link {
  display: flex;
  margin: 16px 0;

  @include font-size(14);
}
</style>
