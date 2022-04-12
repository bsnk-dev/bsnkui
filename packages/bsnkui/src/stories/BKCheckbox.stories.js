import { BkCheckbox } from '../entry-lib'

export default {
  title: 'bsnkui/BKCheckbox',
  component: BkCheckbox,
  argTypes: {
    label: 'Hello world!'
  }
}

const Template = (args) => ({
  components: { BkCheckbox },
  setup () {
    return { args }
  },
  template: '<bk-checkbox v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  label: 'I agree to the terms and conditions'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'I agree to the terms and conditions',
  disabled: true
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'I agree to the terms and conditions',
  checked: true
}

export const CustomContent = (args) => ({
  components: { BkCheckbox },
  setup () {
    return { args }
  },
  template: `<bk-checkbox v-bind="args">
  <template #label>Custom content</template>
  </bk-checkbox>`
})
