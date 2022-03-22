<template>
  <div class="bk_navigation_sidebar">
    <slot name="topActions">
      <b-k-button icon size="large" @click="$emit('toggleSidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      </b-k-button>
    </slot>
    <div style="margin-bottom: 20px"></div>
    <slot></slot>
  </div>
</template>

<script>
import './BKNavigationSidebar.scss'
import BKButton from '../BKButton'

export default {
  name: 'bk-navigation-sidebar',
  components: {
    BKButton
  }
}
</script>
