<template>
  <div class="bk_sheet" :class="{'less-padding': lessPadding}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import './BKSheet.scss'

export default {
  name: 'bkSheet',

  props: {
    lessPadding: {
      type: Boolean,
      default: false
    }
  },

  setup () {

  }
}
</script>
