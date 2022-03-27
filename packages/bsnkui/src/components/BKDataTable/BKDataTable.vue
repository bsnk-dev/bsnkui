<template>
  <bk-table>
    <thead>
      <tr>
        <th v-for="column of columnSettings" :key="column">
          <div style="display: flex; align-items: center">
            {{ column.label }}

            <bk-button icon style="margin-left: 5px" @click="toggleSort(column)" v-if="column.sortable" :class="column.key !== sortKey ? 'bk_sort-inactive' : ''">
              <svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="column.sortDirection === 'asc'">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-else-if="column.sortDirection === 'desc'">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-else>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </bk-button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row of sortedData" :key="row">
        <td v-for="column of columnSettings" :key="column">
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </bk-table>
</template>

<script lang="ts">
import BkTable from '../BKTable'
import BkButton from '../BKButton'
import { Ref, ref } from 'vue'

interface SortableColumn {
  key: string
  label: string
  sortDirection?: 'asc' | 'desc'
  sortable?: boolean
}

export default {
  name: 'BKDataTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },

  components: {
    BkTable,
    BkButton
  },

  setup (props) {
    const columnSettings: Ref<SortableColumn[]> = ref(props.columns)
    const sortedData = ref(JSON.parse(JSON.stringify(props.data)))

    const sortKey = ref('')

    const sortData = () => {
      sortedData.value = sortedData.value.sort((a, b) => {
        const direction = columnSettings.value.find(column => column.key === sortKey.value)?.sortDirection ?? 'asc'

        if (a[sortKey.value] < b[sortKey.value]) {
          return direction === 'asc' ? -1 : 1
        } else if (a[sortKey.value] > b[sortKey.value]) {
          return direction === 'asc' ? 1 : -1
        } else {
          return 0
        }
      })
    }

    const toggleSort = (column: SortableColumn) => {
      if (column.sortDirection === 'asc') {
        column.sortDirection = 'desc'
      } else {
        column.sortDirection = 'asc'
      }

      sortKey.value = column.key

      columnSettings.value = columnSettings.value.map(c => {
        if (c.key === column.key) {
          return column
        }

        return {
          ...c,
          sortDirection: undefined
        }
      })

      sortData()
    }

    return {
      columnSettings,
      toggleSort,
      sortKey,
      sortedData
    }
  }
}
</script>

<style lang="scss">
  @use '../../styles/colors.scss';

  .bk_sort-inactive {
    color: colors.$primary !important;
  }
</style>
