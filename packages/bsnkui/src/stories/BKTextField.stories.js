import { BkTextField } from '../entry-lib'

export default {
  title: 'bsnkui/BKTextField',
  component: BkTextField,
  argTypes: {
    size: 'small',
    filled: false
  }
}

const Template = (args) => ({
  components: { BkTextField },
  setup () {
    return { args }
  },
  template: '<bk-text-field style="margin-top: 20px; margin-left: 20px;"></bk-text-field>'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  size: 'small',
  filled: true
}

export const WithIcon = (args) => ({
  components: { BkTextField },
  setup () {
    return { args }
  },
  template: `
    <bk-text-field style="margin-top: 20px; margin-left: 20px;">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </template>
    </bk-text-field>
  `
})
WithIcon.args = {
  filled: true
}
