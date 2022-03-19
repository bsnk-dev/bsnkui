import { BKButton } from '../entry-lib'

export default {
  title: 'bsnkui/BKButton',
  component: BKButton,
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    primary: false
  }
}

const Template = (args) => ({
  components: { BKButton },
  setup () {
    return { args }
  },
  template: '<b-k-button v-bind="args">My Button</b-k-button>'
})

export const Default = Template.bind({})
Default.args = {
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true
}

export const Danger = Template.bind({})
Danger.args = {
  danger: true
}

export const Variant = Template.bind({})
Variant.args = {
  variant: true
}

export const Link = Template.bind({})
Link.args = {
  link: true
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const AllButtons = (args) => ({
  components: { BKButton },
  setup () {
    return { args }
  },
  template: `
        <div>
            <b-k-button primary size="medium">Button</b-k-button>
            <b-k-button secondary size="medium">Button</b-k-button>
            <b-k-button danger size="medium">Button</b-k-button>
            <b-k-button variant size="medium">Button</b-k-button>
            <b-k-button size="medium">Button</b-k-button>
            <b-k-button link size="medium">Button</b-k-button>
        </div>
    `
})
