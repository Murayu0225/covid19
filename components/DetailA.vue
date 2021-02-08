<template>
  <div class="InfectionMedicalcareprovisionStatus">
    <div class="InfectionMedicalcareprovisionStatus-heading">
      <h3 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('本日の感染状況') }}
        {{ date }}時点
      </h3>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('新規陽性者')
        }}<span>{{ statuses.data['新規陽性者'].toLocaleString() }}人</span>（
        {{ $t('濃厚接触者・接触者')
        }}<span
          >{{ statuses.data['濃厚接触者・接触者'].toLocaleString() }}人</span
        >、{{ $t('海外渡航歴あり')
        }}<span>{{ statuses.data['海外渡航歴あり'].toLocaleString() }}人</span
        >、{{ $t('不明')
        }}<span>{{ statuses.data['不明'].toLocaleString() }}人</span>、
        {{ $t('調査中')
        }}<span>{{ statuses.data['調査中'].toLocaleString() }}人</span>）、
        {{ $t('死亡者数')
        }}<span>{{ statuses.data['死亡者数'].toLocaleString() }}人</span>
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('症状') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('無症状')
        }}<span>{{ statuses.data['無症状'].toLocaleString() }}人</span>、
        {{ $t('軽症')
        }}<span>{{ statuses.data['軽症'].toLocaleString() }}人</span>、
        {{ $t('中症')
        }}<span>{{ statuses.data['中症'].toLocaleString() }}人</span>、
        {{ $t('重症')
        }}<span>{{ statuses.data['重症'].toLocaleString() }}人</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'

import Data from '@/data/data.json'

export default Vue.extend({
  data() {
    return {
      statuses: Data,
      date: dayjs(Data.lastUpdate).format('YYYY年MM月DD日'),
    }
  },
})
</script>

<style lang="scss">
.InfectionMedicalcareprovisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalcareprovisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalcareprovisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalcareprovisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalcareprovisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: $gray-3;

      @include font-size(12);
    }

    .InfectionMedicalcareprovisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > span {
        color: #053c47;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
