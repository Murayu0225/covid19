<template>
  <div class="InfectionMedicalcareprovisionStatus">
    <div class="InfectionMedicalcareprovisionStatus-heading">
      <h3 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('検査数・陽性者の詳細') }}
        {{ date }}時点
      </h3>
      <h4 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('このデータは、平日のみ更新') }}
      </h4>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1020286.html"
        >
          {{ $t('PCR検査実績') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('1日当たりの検査人数')
        }}<span
          >{{ statuses.data['1日当たりの検査人数'].toLocaleString() }}人</span
        >、{{ $t('累計検査人数')
        }}<span>{{ statuses.data['累計検査人数'].toLocaleString() }}人</span>、
        {{ $t('1日当たりの検査件数')
        }}<span
          >{{ statuses.data['1日当たりの検査件数'].toLocaleString() }}件</span
        >、{{ $t('累計検査件数')
        }}<span>{{ statuses.data['累計検査件数'].toLocaleString() }}件</span>
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1020286.html"
        >
          {{ $t('性別・年齢別(累計)') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('男性')
        }}<span>{{ statuses.data['男性'].toLocaleString() }}人</span>、
        {{ $t('女性')
        }}<span>{{ statuses.data['女性'].toLocaleString() }}人</span>、
        {{ $t('累計陽性者数')
        }}<span>{{ statuses.data['累計陽性者数'].toLocaleString() }}人</span
        ><br />
        {{ $t('10歳未満：')
        }}<span>{{ statuses.data['10歳未満'].toLocaleString() }}人</span>、
        {{ $t('10代：')
        }}<span>{{ statuses.data['10代'].toLocaleString() }}人</span>、
        {{ $t('20代：')
        }}<span>{{ statuses.data['20代'].toLocaleString() }}人</span>、
        {{ $t('30代：')
        }}<span>{{ statuses.data['30代'].toLocaleString() }}人</span>、
        {{ $t('40代：')
        }}<span>{{ statuses.data['40代'].toLocaleString() }}人</span>、
        {{ $t('50代：')
        }}<span>{{ statuses.data['50代'].toLocaleString() }}人</span>、
        {{ $t('60代：')
        }}<span>{{ statuses.data['60代'].toLocaleString() }}人</span>、
        {{ $t('70代：')
        }}<span>{{ statuses.data['70代'].toLocaleString() }}人</span>、
        {{ $t('80代：')
        }}<span>{{ statuses.data['80代'].toLocaleString() }}人</span>、
        {{ $t('90代：')
        }}<span>{{ statuses.data['90代'].toLocaleString() }}人</span>、
        {{ $t('100歳以上：')
        }}<span>{{ statuses.data['100歳以上'].toLocaleString() }}人</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'

import InfectionMedicalcareprovisionStatus from '@/data/infection_medicalcareprovision_status.json'

export default Vue.extend({
  data() {
    return {
      statuses: InfectionMedicalcareprovisionStatus,
      date: dayjs(InfectionMedicalcareprovisionStatus.date).format(
        'YYYY年MM月DD日'
      ),
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
