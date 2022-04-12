<template>
    <div class="bk-checkbox" :class="{'bk-checkbox--disabled':disabled}">
        <input type="checkbox" class="checkbox" :id="id" :disabled="disabled" :checked="checked" @change="onChange">
        <label :for="id">
          <slot name="label" v-if="hasSlot('label')"></slot>
          <template v-else>{{ label }}</template>
        </label>
    </div>
</template>

<script lang="ts">
import useHasSlot from '../../mixins/useHasSlot'
import './BKCheckbox.scss'

export default {
  name: 'BKCheckbox',
  props: {
    id: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },

  setup (props, { slots, emit }) {
    const onChange = (e: Event) => {
      emit('change:checked', e)
    }

    const { hasSlot } = useHasSlot(slots)

    return {
      onChange,
      hasSlot
    }
  }
}
</script>
