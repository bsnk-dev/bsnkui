import { BKTabs, BKSheet, BKTitle, BKButton } from '../components'

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

export const CardExample = (args) => ({
  components: { BKTabs, BKSheet, BKTitle, BKButton },
  setup () {
    return { args }
  },
  template: `
    <b-k-sheet style="max-width: 400px">
      <b-k-title>
        <span>Clock Settings</span>
      </b-k-title>
      
      <b-k-tabs :tabs="['World Clock', 'Local Time', 'City Time']" style="margin-top: 10px">
      </b-k-tabs>
      
      <p>
        Clock settings are saved in the browser's local storage.
        They are not saved when you close the browser.
        
        Please refrain from using this feature for sensitive information.
      </p>
      
      <b-k-button primary size="medium">Save</b-k-button>
    </b-k-sheet>
  `
})
