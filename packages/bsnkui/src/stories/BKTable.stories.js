import { BkRichCard, BkButton, BkTable } from '../components'

export default {
  title: 'bsnkui/BKTable',
  component: BkTable,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BkRichCard, BkButton, BkTable },
  setup () {
    return { args }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #title>
        Personnel Directory
      </template>
      <div>
        <bk-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>24</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>24</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>24</td>
            </tr>
          </tbody>
        </bk-table>
      </div>
    </bk-rich-card>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Hello World'
}
