<template>
  <div class="bk_tabs">
    <template v-if="tabs.length > 0">
      <div v-for="(tab, index) in tabs" :key="tab" style="display: flex">
        <bk-tab :active="index === activeTabState.value" @click="activeTabState = index" @keydown="enterHandler($event, index)" :size="size">
          {{ tab }}
        </bk-tab>

        <bk-separator v-if="index !== tabs.length - 1"></bk-separator>
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
import BkTab from '../BKTab'
import BkSeparator from '../BKSeparator'

export default {
  name: 'bkTabs',

  components: {
    BkTab,
    BkSeparator
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

    const enterHandler = (e: KeyboardEvent, index: number) => {
      if (e.key === 'Enter') {
        activeTabState.value = index
      }
    }

    return {
      activeTabState,
      enterHandler
    }
  }
}
</script>
