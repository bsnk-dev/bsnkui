<template>
  <div>
    <div class="bk_text-field-label label" v-if="label">
      {{ label }}
    </div>
    <div class="bk_text-field" :class="additionalClassString">
      <div v-if="hasSlot('icon')" class="icon">
        <slot name="icon"></slot>
      </div>
      <input type="text"/>
    </div>
  </div>
</template>

<script>
import useHasSlot from '../../mixins/useHasSlot'
import './BKTextField.scss'
import '../../styles/typography.scss'

export default {
  name: 'BKTextField',

  props: {
    label: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: 'small'
    },

    filled: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { slots }) {
    const { size, filled } = props

    const { hasSlot } = useHasSlot(slots)

    const additionalClasses = {
      has_icon: hasSlot('icon'),
      medium: size === 'medium',
      large: size === 'large',
      filled
    }

    const additionalClassString = Object.keys(additionalClasses)
      .filter(key => additionalClasses[key])
      .join(' ')

    return {
      hasSlot,
      additionalClassString
    }
  }
}
</script>
