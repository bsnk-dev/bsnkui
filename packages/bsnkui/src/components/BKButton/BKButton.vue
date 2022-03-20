<template>
  <div
      tabindex="0"
      class="bk_button semibold"
      :class="{
          primary: primary,
          medium: size === 'medium',
          large: size === 'large',
          secondary: secondary,
          danger: danger,
          variant: variant,
          link: link
  }"
  >
    <slot></slot>
  </div>
</template>

<script>
import './BKButton.scss'
import '../../styles/typography.scss'

export default {
  name: 'BkButton',

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
    link: {
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
