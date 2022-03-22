import { BkNavigationItem, BkNavigationSidebar, BkTitle } from '../components'

export default {
  title: 'bsnkui/BKNavigationSidebar',
  component: BkNavigationSidebar,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BkNavigationSidebar, BkNavigationItem, BkTitle },
  setup () {
    return { args }
  },
  template: `
      <bk-navigation-sidebar v-bind="args">
        <bk-title>App Navigation</bk-title>
        <bk-navigation-item>
          <div style="display: flex; align-items: center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>

            <div>Hello World</div>
          </div>
        </bk-navigation-item>
        <bk-navigation-item>
          <div style="display: flex; align-items: center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>

            <div>Hello World</div>
          </div>
        </bk-navigation-item>
      </bk-navigation-sidebar>`
})

export const Default = Template.bind({})
Default.args = {
}
