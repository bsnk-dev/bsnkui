import { BKNavigationItem, BKNavigationSidebar, BKTitle } from '../components'

export default {
  title: 'bsnkui/BKNavigationSidebar',
  component: BKNavigationSidebar,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BKNavigationSidebar, BKNavigationItem, BKTitle },
  setup () {
    return { args }
  },
  template: `
      <b-k-navigation-sidebar v-bind="args" style="max-width: 400px">
        <b-k-title>App Navigation</b-k-title>
        <b-k-navigation-item>
          Hello World
        </b-k-navigation-item>
        <b-k-navigation-item>
          Hello World
        </b-k-navigation-item>
      </b-k-navigation-sidebar>`
})

export const Default = Template.bind({})
Default.args = {
}
