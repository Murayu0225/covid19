<template>
  <div class="Emargency">
    <div class="Emargency-heading">
      <h3 class="Emargency-title">
        {{ $t('緊急事態宣言について') }}
      </h3>
    </div>
    <div class="Emargency-description">
      <p>
        {{
          $t('現在、緊急事態宣言が発令中です。感染拡大防止にご協力ください。')
        }}
      </p>
      <ul>
        <li>
          {{ $t('生活に必要な場合を除いて、徹底して外出を自粛してください。') }}
        </li>
        <li>
          {{
            $t(
              '慌てて買いだめなどはせず、代表者が一名で買い物に行くようにしてください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '流水、石けんによるこまめな手洗い、マスクの着用、定期的な換気など、感染予防対策を徹底してください。'
            )
          }}
        </li>
      </ul>
      <p>
        {{
          $t(
            '自覚なく感染を広めてしまう可能性があることを意識し、行動をお願いいたします。'
          )
        }}
      </p>
      <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
      <app-link to="https://www.city.sagamihara.kanagawa.jp/mayor/1022467.html">
        {{
          $t(
            '新型コロナウイルス感染症に係る緊急事態宣言の発令に対する市長コメント（1月7日掲載）'
          )
        }}
      </app-link>
    </div>
    <div class="Emargency-comments">
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <h4>{{ $t('緊急事態宣言') }}</h4>
          <monitoring-comment-frame
            :comment="commentMonitoring('緊急事態宣言')"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'
import MonitoringCommentFrame from '@/components/MonitoringCommentFrame.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import {
  formatMonitoringComment,
  MonitoringComment,
} from '@/utils/formatMonitoringItems'
type CommentKey = {
  [key: string]: MonitoringComment
}
export default Vue.extend({
  components: {
    AppLink,
    MonitoringCommentFrame,
  },
  data() {
    const monitoringComment: CommentKey = formatMonitoringComment(
      monitoringItemsData.data
    )
    return {
      monitoringComment,
      mdiChevronRight,
    }
  },
  methods: {
    commentMonitoring(item: string) {
      return ['ja', 'ja-basic'].includes(this.$root.$i18n.locale)
        ? this.monitoringComment[item].display['@ja']
        : this.monitoringComment[item].display['@en']
    },
  },
})
</script>

<style lang="scss">
.Emargency {
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
  .Emargency-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .Emargency-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
    }
  }
  .Emargency-description {
    padding: 12px;
    @include font-size(14);
    > a {
      text-decoration: none;
      @include text-link();
    }
  }
  .Emargency-comments {
    h4 {
      margin-bottom: 10px;
      color: $gray-3;
      font-weight: normal;
      @include font-size(14);
    }
    margin: 0 10px;
  }
}
</style>
