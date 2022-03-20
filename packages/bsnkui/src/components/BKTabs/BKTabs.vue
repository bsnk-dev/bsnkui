<template>
  <div class="bk_tabs">
    <div v-for="(tab, index) in tabs" :key="tab" style="display: flex">
      <b-k-tab :active="index === activeTabState.value" @click="activeTabState = index">
        {{ tab }}
      </b-k-tab>

      <div v-if="index !== tabs.length - 1" class="bk_vertical_separator"></div>
    </div>
  </div>
</template>

<script lang="ts">
import './BKTabs.scss'
import { computed, ref } from 'vue'
import BKTab from '../BKTab'

export default {
  name: 'bkTabs',

  components: {
    BKTab
  },

  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },

  setup (props, { emit }) {
    const activeTabValue = ref(props.activeTab)

    const activeTabState = computed({
      get: () => activeTabValue,
      set: (value) => {
        activeTabValue.value = value
        emit('update:activeTab', value)
      }
    })

    if (activeTabState.value === undefined) {
      activeTabState.value = 0
    }

    return {
      activeTabState
    }
  }
}
</script>
