<template>
  <div class="bk_modal overlay">
    <div class="bk_modal modal">
      <b-k-sheet>
        <slot></slot>
      </b-k-sheet>
      <b-k-sheet style="margin-top: 20px; padding: 5px">
        <slot name="actions"></slot>
      </b-k-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import BKSheet from '../BKSheet'
import './BKModal.scss'

export default {
  name: 'BkModal',

  components: {
    BKSheet
  },

  setup () {

  }
}
</script>
