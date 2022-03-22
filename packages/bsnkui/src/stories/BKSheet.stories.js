import { BkSheet, BkButton } from '../components'

export default {
  title: 'bsnkui/BKSheet',
  component: BkSheet,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BkSheet },
  setup () {
    return { args }
  },
  template: `<bk-sheet v-bind="args" style="max-width: 400px">
    <h1 style="margin: 0">Hello World</h1>
  
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>
  </bk-sheet>`
})

export const Default = Template.bind({})
Default.args = {
}

export const Card = (args) => ({
  components: { BkSheet, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-sheet v-bind="args" style="max-width: 400px">
    <h1 style="margin: 0">Hello World</h1>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries
    </p>

    <div style="margin-left: auto">
      <bk-button variant size="medium">
        Cancel
      </bk-button>
      <bk-button primary size="medium" style="margin-left: 5px">
        Done
      </bk-button>
    </div>
    </bk-sheet>`
})
