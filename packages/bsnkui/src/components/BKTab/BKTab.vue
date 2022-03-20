<template>
  <b-k-button class="bk_tab" link :size="size" :class="{active: active}">
    <slot></slot>
  </b-k-button>
</template>

<script>
import './BKTab.scss'
import BKButton from '../BKButton'

export default {
  components: {
    BKButton
  },

  name: 'bkTab',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    }
  }
}
</script>
