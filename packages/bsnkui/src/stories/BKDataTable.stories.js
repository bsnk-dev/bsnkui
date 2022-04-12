import { BkRichCard, BkButton, BkDataTable } from '../components'
import { ref } from 'vue'

export default {
  title: 'bsnkui/BKDataTable',
  component: BkDataTable,
  argTypes: {
    onChange: {}
  }
}

const Template = (args) => ({
  components: { BkRichCard, BkButton, BkDataTable },
  setup () {
    const data = [
      {
        id: 1,
        name: 'John',
        age: '20'
      },
      {
        id: 2,
        name: 'Jane',
        age: '30'
      },
      {
        id: 3,
        name: 'Jack',
        age: '40'
      },
      {
        id: 4,
        name: 'Jill',
        age: '50'
      }
    ]

    const selected = ref([data[0]])

    return { ...args, data, selected }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #title>
        Personnel Directory
      </template>
      <div>
        <div>
          Selected: {{ selected.map(r => r.name).join(', ') }}
        </div>
        
        <bk-data-table 
          v-bind="args"
          v-model="selected"
          :data="data"
          :columns="[
              {
                key: 'name',
                label: 'Name',
                sortable: true
              },
              {
                key: 'age',
                label: 'Age',
                sortable: true
              }
          ]"
        />
      </div>
    </bk-rich-card>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Hello World'
}
