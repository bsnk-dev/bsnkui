<template>
  <div
      tabindex="0"
      class="bk_button button_bold"
      :class="`${classString} ${highlight ? 'bk_button_highlight_variant ' + highlight : ''}`"
      @click="onClick"
  >
    <slot></slot>
    <button style="display: none" type="submit" ref="submit" v-if="submit"></button>
  </div>
</template>

<script>
import './BKButton.scss'
import '../../styles/typography.scss'
import { ref } from 'vue'

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
    },
    submit: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { emit }) {
    const classes = {
      primary: props.primary,
      medium: props.size === 'medium',
      large: props.size === 'large',
      secondary: props.secondary,
      danger: props.danger,
      variant: props.variant,
      icon: props.icon,
      link: props.link
    }

    const submit = ref(null)

    const onClick = (event) => {
      if (props.submit === true) {
        submit.value.click()
      }
      emit('onclick', event)
    }

    const classString = Object.keys(classes).filter(key => classes[key]).join(' ')

    return {
      classString,
      onClick
    }
  }
}
</script>
