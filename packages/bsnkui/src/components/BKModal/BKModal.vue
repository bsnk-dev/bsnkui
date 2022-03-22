<template>
  <div class="bk_modal overlay">
    <div class="bk_modal modal">
      <bk-sheet>
        <slot></slot>
      </bk-sheet>
      <bk-sheet style="margin-top: 20px; padding: 5px" v-if="!actionsDisabled">
        <slot name="actions"></slot>
      </bk-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import BkSheet from '../BKSheet'
import './BKModal.scss'

export default {
  name: 'BkModal',

  components: {
    BkSheet
  },

  props: {
    actionsDisabled: {
      type: Boolean,
      default: false
    }
  },

  setup () {

  }
}
</script>
