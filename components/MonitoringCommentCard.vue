<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('当サイトについて') }}
      </h3>
    </div>
    <div class="MonitoringComment-description">
      <p>
        {{
          $t(
            '当サイトは、相模原市における新型コロナウイルス情報をグラフ化して、提供しております。個人が下記のリンクを参考にして作成しております。また、相模原市非公式となっております。当サイトの更新時間は、毎日18時〜22時です。'
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

export default Vue.extend({
  components: {
    AppLink,
  },
  data() {
    return {
      mdiChevronRight,
    }
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
