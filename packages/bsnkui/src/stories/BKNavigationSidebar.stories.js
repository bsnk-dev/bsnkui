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
      <b-k-navigation-sidebar v-bind="args">
        <b-k-title>App Navigation</b-k-title>
        <b-k-navigation-item>
          <div style="display: flex; align-items: center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>

            <div>Hello World</div>
          </div>
        </b-k-navigation-item>
        <b-k-navigation-item>
          <div style="display: flex; align-items: center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>

            <div>Hello World</div>
          </div>
        </b-k-navigation-item>
      </b-k-navigation-sidebar>`
})

export const Default = Template.bind({})
Default.args = {
}
