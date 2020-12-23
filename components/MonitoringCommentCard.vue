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
            '当サイトは、毎日18時から22時までの間に更新を行なっております。更新されているかを確認する場合には、上記に表示されている最終更新時間を参考にしてください。'
          )
        }}
      </p>
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
}
</style>
