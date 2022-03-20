import { BKTabs } from '../components'

export default {
  title: 'bsnkui/BKTabs',
  component: BKTabs,
  argTypes: {
    tabs: ['One', 'Two', 'Three']
  }
}

const Template = (args) => ({
  components: { BKTabs },
  setup () {
    return { args }
  },
  template: `<b-k-tabs v-bind="args" style="max-width: 400px">
  </b-k-tabs>`
})

export const Default = Template.bind({})
Default.args = {
  tabs: ['One', 'Two', 'Three']
}
