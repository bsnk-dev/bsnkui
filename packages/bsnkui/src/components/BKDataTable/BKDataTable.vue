<template>
  <bk-table :class="{selectable}">
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
      <tr v-for="row of sortedData" :key="row" @click="selectRow(row, $event)" :class="{active: selectable && selectedRowKeys.includes(row[rowKey]), flatTop: selectedRowExistsBefore(row), flatBottom: selectedRowExistsAfter(row)}">
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
    value: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    selectable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: true
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

  watch: {
    value: {
      immediate: true,
      handler (value: any) {
        this.selectedRows = value
      }
    }
  },

  setup (props, { emit }) {
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

    const selectedRows = ref<any[]>([...props.value])
    const selectedRowKeys = ref<string[]>(selectedRows.value.map(r => r[props.rowKey]))

    const selectRow = (row: any, event: MouseEvent) => {
      const shiftSelect = event.shiftKey && props.multiple
      const ctrlSelect = event.ctrlKey && props.multiple

      if (!props.selectable) return

      if (shiftSelect && selectedRows.value.length > 0) {
        const lastSelectedIndex = sortedData.value.findIndex(r => r === selectedRows.value[selectedRows.value.length - 1])
        const currentSelectedIndex = sortedData.value.findIndex(r => r === row)

        selectedRows.value = sortedData.value.slice(Math.min(lastSelectedIndex, currentSelectedIndex), Math.max(lastSelectedIndex, currentSelectedIndex) + 1)
      } else if (ctrlSelect) {
        selectedRows.value = selectedRows.value.includes(row)
          ? selectedRows.value.filter(r => r !== row)
          : [...selectedRows.value, row]
      } else {
        selectedRows.value = [row]
      }

      selectedRowKeys.value = selectedRows.value.map(r => r[props.rowKey])

      emit('update:modelValue', selectedRows.value)
    }

    const selectedRowExistsBefore = (row: any) => {
      if (!selectedRows.value.includes(row)) return false

      const beforeRow = sortedData.value.findIndex(r => r === row) - 1
      if (beforeRow < 0) return false

      return selectedRows.value.includes(sortedData.value[beforeRow])
    }

    const selectedRowExistsAfter = (row: any) => {
      if (!selectedRows.value.includes(row)) return false

      const afterRow = sortedData.value.findIndex(r => r === row) + 1
      if (afterRow >= sortedData.value.length) return false

      return selectedRows.value.includes(sortedData.value[afterRow])
    }

    return {
      columnSettings,
      toggleSort,
      selectRow,
      selectedRows,
      selectedRowKeys,
      sortKey,
      sortedData,
      selectedRowExistsBefore,
      selectedRowExistsAfter
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
