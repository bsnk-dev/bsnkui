import { BkTabs, BkSheet, BkTitle, BkButton } from '../components'

export default {
  title: 'bsnkui/BKTabs',
  component: BkTabs,
  argTypes: {
    tabs: ['One', 'Two', 'Three']
  }
}

const Template = (args) => ({
  components: { BkTabs },
  setup () {
    return { args }
  },
  template: `<bk-tabs v-bind="args" style="max-width: 400px">
  </bk-tabs>`
})

export const Default = Template.bind({})
Default.args = {
  tabs: ['One', 'Two', 'Three']
}

export const CardExample = (args) => ({
  components: { BkTabs, BkSheet, BkTitle, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-sheet style="max-width: 400px">
      <bk-title style="margin-top: 20px">
        <span>Clock Settings</span>
      </bk-title>
      
      <bk-tabs :tabs="['World Clock', 'Local Time', 'City Time']" style="margin-top: 10px">
      </bk-tabs>
      
      <bk-sheet style="margin: 5px 0">
        Clock settings are saved in the browser's local storage.
        They are not saved when you close the browser.
        
        Please refrain from using this feature for sensitive information.
      </bk-sheet>
      
      <div style="margin-left: auto">
        <bk-button link size="medium">Cancel</bk-button>
        <bk-button primary size="medium">Save</bk-button>
      </div>
    </bk-sheet>
  `
})

export const CustomContent = (args) => ({
  components: { BkTabs, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-tabs>
      <bk-button secondary size="medium">
        1
      </bk-button>
    </bk-tabs>
  `
})
