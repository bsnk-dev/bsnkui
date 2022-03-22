<template>
  <bk-sheet>
    <div class="bk-rich-card">
      <div class="bk_rich_card-image full" v-if="hasSlot('image')">
        <slot name="image"></slot>
      </div>
      <div class="bk_rich_card-header">
        <bk-title class="bk_rich_card-header" v-if="hasSlot('title')">
          <slot name="title"></slot>
        </bk-title>
        <slot name="header"></slot>
      </div>
      <div class="bk_rich_card-body">
        <slot></slot>
      </div>
      <div class="bk_rich_card-actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </bk-sheet>
</template>

<script lang="ts">
import useHasSlot from '../../mixins/useHasSlot'
import BkSheet from '../BKSheet'
import BkTitle from '../BKTitle'
import './BKRichCard.scss'

export default {
  name: 'BKRichCard',

  components: {
    BkSheet,
    BkTitle
  },

  setup (props, { slots }) {
    const { hasSlot } = useHasSlot(slots)

    return {
      hasSlot
    }
  }
}
</script>
