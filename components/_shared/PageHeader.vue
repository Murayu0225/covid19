<template>
  <div class="PageHeader mb-3">
    <h2 class="PageTitle">
      <v-icon v-if="iconPath" size="4rem" class="mr-2">
        {{ iconPath }}
      </v-icon>
      {{ title }}
    </h2>
    <div v-if="updatedAt" class="UpdatedAt">
      <span>{{ $t('最終更新') }}</span>
      <time :datetime="convertDate(updatedAt)">{{
        formatDate(updatedAtAsDate)
      }}</time>
    </div>
    <div v-show="!['ja'].includes($i18n.locale)" class="Annotation">
      <span>{{ $t('注釈') }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

type Data = {}
type Methods = {
  formatDate(date: Date): string
  convertDate(dateAsString: string): string
}
type Computed = {
  updatedAtAsDate: Date
}
type Props = {
  iconPath: string
  title: string
  updatedAt: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  props: {
    iconPath: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    updatedAt: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    updatedAtAsDate() {
      return new Date(this.updatedAt)
    },
  },
  methods: {
    formatDate(date) {
      return `${this.$d(date, 'dateTime')} JST`
    },
    convertDate(dateAsString) {
      return convertDatetimeToISO8601Format(dateAsString)
    },
  },
})
</script>

<style lang="scss" scoped>
.PageHeader {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  @include lessThan($small) {
    flex-direction: column;
    align-items: baseline;
  }

  .PageTitle {
    @include font-size(30);

    color: $gray-2;
    display: flex;
    align-items: center;
    line-height: 1.35;
    font-weight: normal;

    @include lessThan($small) {
      @include font-size(20);
    }

    @include largerThan($small) {
      margin-right: 0.5em;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;

    @include largerThan($small) {
      margin-bottom: 0.2em;
    }
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    margin: 0.2em 0 0 auto;
  }
}
</style>
