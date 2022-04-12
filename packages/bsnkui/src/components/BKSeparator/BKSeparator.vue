<template>
  <div :class="(horizontal) ? 'bk_horizontal_separator' : 'bk_vertical_separator'"></div>
</template>

<script>
import './BKSeparator.scss'
export default {
  name: 'bkSeparator',

  props: {
    horizontal: {
      type: Boolean,
      default: true
    }
  }
}
</script>
