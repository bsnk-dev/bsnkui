<template>
  <b-k-tab class="bk_navigation_item">
    <slot></slot>
  </b-k-tab>
</template>

<script lang="ts">
import './BKNavigationItem.scss'
import BKTab from '../BKTab'

export default {
  name: 'bkNavigationItem',

  components: {
    BKTab
  }
}
</script>
