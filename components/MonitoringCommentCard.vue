<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('当サイトの更新時間について') }}
      </h3>
    </div>
    <div class="MonitoringComment-description">
      <p>
        {{
          $t(
            '当サイトは、毎日18時〜22時の間に更新しています。更新日時を確認する場合には、上の最新更新時間を確認してください。下記リンクの方が、情報更新が速いことがありますのでそちらもご確認ください。'
          )
        }}
      </p>
      <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
      <app-link
        to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/index.html"
      >
        {{ $t('新型コロナウイルス対策ページ（相模原市公式サイト）') }}
      </app-link>
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
.MonitoringComment {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .MonitoringComment-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .MonitoringComment-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
    }
  }

  .MonitoringComment-description {
    padding: 12px;

    @include font-size(14);
    > a {
      text-decoration: none;
      @include text-link();
    }
  }

  .MonitoringComment-comments {
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
