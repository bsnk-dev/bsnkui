<template>
  <button
      class="bk_button semibold"
      :class="{
          primary: primary,
          medium: size === 'medium',
          large: size === 'large',
          secondary: secondary,
          danger: danger,
          variant: variant,
  }"
  >
    <slot></slot>
  </button>
</template>

<script>
import './BKButton.scss'
import '../../styles/typography.scss'
import {toRefs} from "vue";

export default {
  name: 'bk-button',

  props: {
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    variant: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    }
  },

  setup(props) {
    const { primary, size, secondary, variant, danger } = toRefs(props)

    return { primary, size, secondary, variant, danger }
  }
}
</script>
