<template>
  <bk-tab class="bk_navigation_item" :class="{active}">
    <slot></slot>
  </bk-tab>
</template>

<script lang="ts">
import './BKNavigationItem.scss'
import BkTab from '../BKTab'

export default {
  name: 'bkNavigationItem',

  components: {
    BkTab
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
