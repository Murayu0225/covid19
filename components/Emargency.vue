<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('緊急事態宣言の発令について') }}
      </h3>
    </div>
    <div class="MonitoringComment-description">
      <p>
        {{
          $t(
            '現在、緊急事態宣言が発令されています。感染拡大防止にご協力ください。'
          )
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
      <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
      <app-link
        to="https://www.city.sagamihara.kanagawa.jp/shisei/seisaku/1022474.html"
      >
        {{ $t('緊急事態宣言に伴う本市の対応について') }}
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
  border-color: red;

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
