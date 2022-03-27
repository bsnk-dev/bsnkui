import { BkRichCard, BkButton, BkDataTable } from '../components'

export default {
  title: 'bsnkui/BKDataTable',
  component: BkDataTable,
  argTypes: {
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

    return { ...args, data }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #title>
        Personnel Directory
      </template>
      <div>
        <bk-data-table
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
