<template>
  <div
      tabindex="0"
      class="bk_button button_bold"
      :class="`${classString} ${highlight ? 'bk_button_highlight_variant ' + highlight : ''}`"
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
    icon: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    }
  },

  setup (props) {
    const { primary, secondary, variant, danger, link, icon, size } = props

    const classes = {
      primary: primary,
      medium: size === 'medium',
      large: size === 'large',
      secondary: secondary,
      danger: danger,
      variant: variant,
      icon: icon,
      link: link
    }

    const classString = Object.keys(classes).filter(key => classes[key]).join(' ')

    return {
      classString
    }
  }
}
</script>
