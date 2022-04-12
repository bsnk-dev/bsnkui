<template>
  <div class="bk_dropdown-container" v-click-outside="clickOff">
    <bk-text-field
      disabled
      disabled-invisible
      :value="selected"
      class="bk_dropdown-field"
      @mousedown="toggleOpen()"
      @keydown.enter="toggleOpen()"
      @keydown.down = "open = true; focusFirst()"
      tabindex="0"
      :filled="filled"
      :size="size"
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
          :class="{active: selected === item}"
          v-for="item of items"
          :key="item"
          @click="select(item)"
          @keydown.enter="select(item)"
          tabindex="0"
        >
        <span v-if="selected === item">
          <svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px; margin-left: -2px; margin-right: 0;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span style="margin-right: 21px" v-else>
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
    filled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    }
  },

  setup (props, { emit, slots }) {
    const open = ref(false)
    const selected = ref(props.value || props.items[0])
    const openTime = ref(0)

    const select = (item: string) => {
      selected.value = item
      open.value = false

      emit('change:modelValue', item)
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
