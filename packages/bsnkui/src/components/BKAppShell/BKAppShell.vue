<template>
  <div class="bk_app_shell">
    <div v-show="showSideBar">
      <slot name="sideBar"></slot>
    </div>
    <div v-if="!showSideBar && hasSlot('sideBar')" class="show_sidebar_container">
      <bk-button icon size="large" @click="$emit('toggleSidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </bk-button>
    </div>
    <div class="app_container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './BKAppShell.scss'
import BkButton from '../BKButton'
import useHasSlot from '../../mixins/useHasSlot'

export default {
  name: 'BkAppShell',

  components: {
    BkButton
  },

  props: {
    showSideBar: {
      type: Boolean,
      default: true
    }
  },

  setup (props, { slots }) {
    const { hasSlot } = useHasSlot(slots)
    return { hasSlot }
  },

  emits: ['toggleSidebar']
}
</script>
