<template>
  <div class="bk_dropdown-container" v-click-outside="clickOff">
    <bk-text-field
      disabled
      :disabled-invisible="!disabled"
      :value="selected.length === 1 ? selected[0] : selected.join(', ')"
      class="bk_dropdown-field"
      @mousedown="toggleOpen()"
      @keydown.enter="toggleOpen()"
      @keydown.down = "open = true; focusFirst()"
      tabindex="0"
      :filled="filled"
      :size="size"
      :label="label"
    >
      <template #icon v-if="hasSlot('icon')">
        <slot name="icon"></slot>
      </template>
      <template #icon-after>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </template>
    </bk-text-field>

    <bk-sheet class="bk_dropdown-menu" style="padding: 4px" v-if="open" @keydown.down="arrowNavigate('down')" @keydown.up="arrowNavigate('up')">
      <bk-button
          link
          class="bk_dropdown-entry"
          :class="{active: selected.includes(item)}"
          v-for="item of items"
          :key="item"
          @click="select(item)"
          @keydown.enter="select(item)"
          tabindex="0"
        >
        <span v-if="selected.includes(item)">
          <svg
               v-if="!multiple"
               xmlns="http://www.w3.org/2000/svg"
               style="height: 18px; width: 18px; margin-left: -2px; margin-right: 2px;"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <svg
               v-else
               xmlns="http://www.w3.org/2000/svg"
               style="height: 18px; width: 18px; margin-left: -2px; margin-right: 2px;"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </span>
        <span v-else-if="multiple">
          <svg viewBox="0 0 24 24" style="height: 18px; width: 18px; margin-left: -2px; margin-right: 2px;" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="text-color-primary_light2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M 21 12 C 21 18.928 13.5 23.258 7.5 19.794 C 4.715 18.187 3 15.215 3 12 C 3 5.072 10.5 0.742 16.5 4.206 C 19.285 5.813 21 8.785 21 12 Z"/>
          </svg>
        </span>
        <span style="margin-right: 18px" v-else>
        </span>
        {{ item }}
      </bk-button>
    </bk-sheet>
  </div>
</template>

<script lang="ts">
import './BKDropdown.scss'
import BKTextField from '../BKTextField'
import BKSheet from '../BKSheet'
import BKButton from '../BKButton'
import { directive as clickOutside } from '../../directives/BKClickOutside'
import useHasSlot from '../../mixins/useHasSlot'
import { ref } from 'vue'

export default {
  components: {
    BkTextField: BKTextField,
    BkSheet: BKSheet,
    BkButton: BKButton
  },

  directives: {
    clickOutside
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    label: {
      type: String,
      default: ''
    }
  },

  setup (props, { emit, slots }) {
    const open = ref(false)
    const selected = ref([props.value || props.items[0]])
    const openTime = ref(0)

    const select = (item: string) => {
      if (props.multiple) {
        if (selected.value.includes(item)) {
          selected.value = selected.value.filter(i => i !== item)
        } else {
          selected.value.push(item)
        }
      } else {
        selected.value = [item]
      }

      if (!props.multiple) open.value = false

      emit('change:modelValue', selected)
    }

    const toggleOpen = () => {
      if (props.disabled) {
        return
      }

      open.value = !open.value
      openTime.value = Date.now()
    }

    const clickOff = () => {
      if ((Date.now() - openTime.value) > 100) {
        open.value = false
      }
    }

    const { hasSlot } = useHasSlot(slots)

    const arrowNavigate = (direction: string) => {
      const items = Array.from(document.querySelectorAll('.bk_dropdown-entry').values())

      // find currently selected item
      const selectedItem = document.activeElement

      if (items.includes(selectedItem)) {
        const sibling = ((direction === 'down')
          ? selectedItem.nextElementSibling
          : selectedItem.previousElementSibling) as HTMLElement

        if (sibling) sibling.focus()
      }
    }

    const focusFirst = () => {
      (document.querySelectorAll('.bk_dropdown-entry')[0] as HTMLElement)?.focus()
    }

    return {
      open,
      selected,
      select,
      toggleOpen,
      clickOff,
      hasSlot,
      arrowNavigate,
      focusFirst
    }
  }
}
</script>
