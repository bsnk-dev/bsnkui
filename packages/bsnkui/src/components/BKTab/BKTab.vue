<template>
  <bk-button class="bk_tab" link :size="size" :class="{active: active}">
    <slot></slot>
  </bk-button>
</template>

<script>
import './BKTab.scss'
import BkButton from '../BKButton'

export default {
  components: {
    BkButton
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
