<template>
  <div class="About">
    <page-header class="mb-3">
      {{ $t('貢献者一覧') }}
    </page-header>
    <static-card>
      {{
        $t(
          '当サイトは下記の方々の支援によって成り立っております。'
        )
      }}<br />
      <ul>
          <li>
              {{ $t('○○　○○ 様') }}
          </li>
          <li>
              {{ $t('×× 様') }}
          </li>
          <li>
              {{ $t('△△ 様') }}
          </li>
          <li>
              {{ $t('○○　○○ 様') }}
          </li>
      <br />
      {{ $t('上記の方々に感謝です！') }}
    </static-card>
    <static-card>
      <h3>{{ $t('貢献者について') }}</h3>
      <p>
        {{
            $t(
                '貢献者とは、下記のサイトにて募った当サイトを今後も運営していくための支援金をいただいた方々です。'
            )
        }}
      </p>
      <p>
          <app-link
            :to="$t('https://google.com')"
            :icon-size="16"
          >
            {{
              $t(
                    '相模原市 新型コロナウイルス感染症対策サイト 支援金募集サイト（CAMPFIRE）'
                )
            }}
          </app-link>
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('注意') }}</h3>
      <p>
        {{
          $t(
            'この画面は、開発中のものであり実際の画面と異なる場合があります。'
            )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    AppLink,
    StaticCard,
  },
  head(): MetaInfo {
    return {
      title: this.$t('貢献者の方々') as string,
    }
  },
})
</script>
