<template>
  <div class="bk_tabs">
    <template v-if="tabs.length > 0">
      <div v-for="(tab, index) in tabs" :key="tab" style="display: flex">
        <b-k-tab :active="index === activeTabState.value" @click="activeTabState = index" :size="size">
          {{ tab }}
        </b-k-tab>

        <b-k-separator v-if="index !== tabs.length - 1"></b-k-separator>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import './BKTabs.scss'
import { computed, ref } from 'vue'
import BKTab from '../BKTab'
import BKSeparator from '../BKSeparator'

export default {
  name: 'bkTabs',

  components: {
    BKTab,
    BKSeparator
  },

  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'small'
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
