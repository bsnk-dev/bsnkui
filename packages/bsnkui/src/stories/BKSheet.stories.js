import { BKSheet, BKButton } from '../components'

export default {
  title: 'bsnkui/BKSheet',
  component: BKSheet,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BKSheet },
  setup () {
    return { args }
  },
  template: `<b-k-sheet v-bind="args" style="max-width: 400px">
    <h1 style="margin: 0">Hello World</h1>
  
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>
  </b-k-sheet>`
})

export const Default = Template.bind({})
Default.args = {
}

export const Card = (args) => ({
  components: { BKSheet, BKButton },
  setup () {
    return { args }
  },
  template: `
    <b-k-sheet v-bind="args" style="max-width: 400px">
    <h1 style="margin: 0">Hello World</h1>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries
    </p>

    <div style="margin-left: auto">
      <b-k-button variant size="medium">
        Cancel
      </b-k-button>
      <b-k-button primary size="medium" style="margin-left: 5px">
        Done
      </b-k-button>
    </div>
    </b-k-sheet>`
})
