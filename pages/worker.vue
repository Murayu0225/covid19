<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1019826/index.html"
          :icon-size="24"
          >{{ $t('相模原市 新型コロナウイルス感染症 事業者支援情報') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '相模原市及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1021369/index.html" :icon-size="24"
          >{{
            $t('サンキューさがみはら！最大25％戻ってくるキャンペーン')
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '市内の消費喚起を図り「非接触型」の決済による「新しい生活様式」の普及を促すことを目的に行う、スマートフォン決済によるポイント還元キャンペーン'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1003291/1020100.html"
          :icon-size="24"
          >{{
            $t('【飲食店の皆様へ】市内のテイクアウト・デリバリーができる飲食店の募集')
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '有志による飲食店応援サイト及びテイクアウト・デリバリー実施店舗を市ホームページで紹介します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1021242/index.html" :icon-size="24"
          >{{ $t('新型コロナウイルス感染症に強い店づくり家づくり応援助成金') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症拡大防止のため、店舗等や住宅を「新しい生活様式」に対応させるために実施する工事にかかる経費の一部を助成します。'
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
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
