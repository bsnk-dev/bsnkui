<template>
    <div class="bk-radio" v-if="!card">
      <input type="radio" :id="id" :disabled="disabled" :value="selected" @input="selected = $event.value" @change="onChange" :name="name">
      <label :for="id">
        <slot name="label" v-if="hasSlot('label')"></slot>
        <template v-else>{{ label }}</template>
      </label>
    </div>
    <bk-sheet class="bk-radio-card" v-else role="radio" :aria-checked="selected" @click="selectCard" :class="{active: selected, disabled}">
      <div>
        <input type="radio" :id="id" :value="selected" :name="name" style="display: none;">
        <label :for="id">
          <slot name="label" v-if="hasSlot('label')"></slot>
          <template v-else>{{ label }}</template>

          <div class="active-content-container">
            <slot name="active-content"></slot>
          </div>
        </label>
      </div>
      <div class="selected-icon">
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="selected">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg viewBox="0 0 24 24" style="height: 24px; width: 24px" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="text-color-primary_light2" v-else>
          <path stroke-linecap="round" stroke-linejoin="round" d="M 21 12 C 21 18.928 13.5 23.258 7.5 19.794 C 4.715 18.187 3 15.215 3 12 C 3 5.072 10.5 0.742 16.5 4.206 C 19.285 5.813 21 8.785 21 12 Z"/>
        </svg>
      </div>
    </bk-sheet>
</template>

<script lang="ts">
import './BKRadio.scss'
import useHasSlot from '../../mixins/useHasSlot'
import BkSheet from '../BKSheet'
import { ref } from 'vue'

export default {
  name: 'BKRadio',
  components: {
    BkSheet
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'default_name'
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    card: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (newValue) {
      this.selected = newValue
    }
  },
  setup (props, { emit, slots }) {
    const onChange = (e: Event) => {
      emit('change', e)
    }

    const { hasSlot } = useHasSlot(slots)

    const selected = ref(Boolean(props.value))

    const selectCard = (e) => {
      if (!props.disabled) {
        selected.value = true
      }

      emit('onClick', e)
    }

    return {
      onChange,
      hasSlot,
      selected,
      selectCard
    }
  }
}
</script>
