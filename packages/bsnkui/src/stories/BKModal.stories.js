import { BKModal, BKButton, BKTitle } from '../components'

export default {
  title: 'bsnkui/BKModal',
  component: BKModal,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BKModal, BKButton, BKTitle },
  setup () {
    return { args }
  },
  template: `<b-k-modal v-bind="args">
    <b-k-title style="margin-top: 20px">Hello World</b-k-title>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>
  
    <template #actions>
      <b-k-button primary size="medium">
        Confirm
      </b-k-button>
      <b-k-button link size="medium">
        Cancel
      </b-k-button>
    </template>
  </b-k-modal>`
})

export const Default = Template.bind({})
Default.args = {
}
