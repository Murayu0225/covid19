<template>
  <div class="About">
    <page-header class="mb-3">
      {{ $t('寄付のお願い') }}
    </page-header>
    <static-card>
      {{
        $t(
          '当サイトをご覧いただきまして、ありがとうございます。予想を遥かに上回る方々にご覧いただき開発者は、とても喜んでおります。当サイトは、個人（学生）が作成したものです。作成するにあったて、ドメイン購入費など色々なサービスを利用してまいりました。'
        )
      }}
      <br />
      {{
        $t(
          '当サイトを利用していただいて役に立ったとお思いいただけましたら、ご寄付いただけるとありがたいです。当サイトを１年間持続するのにかかる費用は、たったの1500円程度（2021年1月15日現在・今後、サーバー費用が必要となった場合は、別途費用がかかります。）です。'
        )
      }}
      <br />
      {{
          $t(
              '上記の内容に理解していただけた方は、下記のメールアドレス宛にAmazonギフト券のコードを送付していただけるありがたいです！利用用途としましては、当サイトを運営するに当たって必要となる『ドメイン費用・サーバー費用（今現在は、NetlifyのCovid-19サポートを利用していることにより、無料で利用させていただいておりますが、今後の状況によってはサーバー費用を払う必要が出てくる場合があります。）・開発者のやる気』となっております。'
          )
      }}
      {{
           $t(
               '送付していただける金額に関しましては、いくらでも結構です。ご寄付いただいた方には、このページにの下部にある寄付してただいた方の一覧に名前を掲載させていただきます。'
           )
      }}
      <p>
        {{ $t('メールアドレス') }}
      </p>
    <a
        href="mailto:payment@sagamihara-stopcovid19.com?subject=寄付金&amp;body=現在テスト中の項目です"
    >paymentt@sagamihara-stopcovid19.com</a
    >
    <br />
    {{
        $t(
            '上記のメールアドレス宛に、下記の項目をご記入の上送金してください。'
        )
    }}
    <ul>
        <li>{{ $t('氏名（本名）') }}</li>
        <li>{{ $t('当サイトに表示されるご希望のお名前（ニックネームなど可）')}}
        <li>{{ $r('Amazonギフトカードコード')}}
    <br />
     {{
         $t(
             '注意：ご寄付いただいた金額を返金することはできかねます。金額をご確認いただいて上で送金してください。'
         )
     }}
    </static-card>
    <static-card>
      <h3>{{ $t('利用しているシステム') }}</h3>
      <p>
        {{ $t('当サイトは下記のシステムによって成り立っております。') }}
      </p>
      <ul>
        <li>
          <app-link
            :to="$t('https://onamae.com')"
            :icon-size="16"
          >
            {{ $t('お名前.com（ドメインを購入）') }}
          </app-link>
        </li>
        <li>
          <app-link
            :to="$t('https://netlify.com')"
            :icon-size="16"
          >
            {{ $t('Netlify（サイトホスティングとして利用）') }}
          </app-link>
        </li>
      </ul>
    </static-card>
    <static-card>
        <h3>{{ $t('寄付していただいた方々') }}</h3>
        <p>
            {{
                $t(
                    '下記の方々の寄付によって当サイトは、成り立っております。'
                )
            }}
        </p>
        <ul>
            <li>{{ $t('現在、寄付いただける方を募集中です。') }}</li>
        </ul>
        <p> {{ $t('上記の方々に感謝です！') }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): Me,
    StaticCardtaInfo {
    return {
      title: this.$t('寄付のお願い') as string,
    }
  },
})
</script>
