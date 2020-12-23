<template>
  <div class="WhatsNewKanagawa">
    <div class="WhatsNewKanagawa-heading">
      <h3 class="WhatsNewKanagawa-title">
        <v-icon size="2.4rem" class="WhatsNewKanagawa-title-icon">
          {{ mdiInformation }}
        </v-icon>
        {{ $t('神奈川県からの最新のお知らせ') }}
      </h3>
      <div class="WhatsNewKanagawa-linkGroup">
        <lazy-link-to-information-about-emergency-measure v-if="isEmergency" />
      </div>
    </div>
    <ul class="WhatsNewKanagawa-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNewKanagawa-list-item">
        <app-link :to="item.url" class="WhatsNewKanagawa-list-item-anchor">
          <time
            class="WhatsNewKanagawa-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ formattedDateForDisplay(item.date) }}
          </time>
          <span class="WhatsNewKanagawa-list-item-anchor-link">
            {{ item.text }}
          </span>
        </app-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mdiInformation } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    AppLink,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isEmergency: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      mdiInformation,
    }
  },
  methods: {
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    },
    formattedDateForDisplay(dateString: string) {
      return this.$d(new Date(dateString), 'date')
    },
  },
})
</script>

<style lang="scss">
.WhatsNewKanagawa {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .WhatsNewKanagawa-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .WhatsNewKanagawa-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .WhatsNewKanagawa-linkGroup {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .WhatsNewKanagawa-list {
    padding-left: 0;
    list-style-type: none;

    &-item {
      &-anchor {
        text-decoration: none;
        margin: 5px;
        @include font-size(14);

        @include lessThan($medium) {
          display: flex;
          flex-wrap: wrap;
        }

        &-time {
          flex: 0 0 90px;

          @include lessThan($medium) {
            flex: 0 0 100%;
          }

          color: $gray-1;
        }

        &-link {
          flex: 0 1 auto;

          @include text-link();

          @include lessThan($medium) {
            padding-left: 8px;
          }
        }

        &-ExternalLinkIcon {
          margin-left: 2px;
          color: $gray-3 !important;
        }
      }
    }
  }
}
</style>
