import { BkModal, BkButton, BkTitle } from '../components'

export default {
  title: 'bsnkui/BKModal',
  component: BkModal,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BkModal, BkButton, BkTitle },
  setup () {
    return { args }
  },
  template: `<bk-modal v-bind="args">
    <bk-title style="margin-top: 20px">Hello World</bk-title>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>
  
    <template #actions>
      <bk-button primary size="medium">
        Confirm
      </bk-button>
      <bk-button link size="medium">
        Cancel
      </bk-button>
    </template>
  </bk-modal>`
})

export const Default = Template.bind({})
Default.args = {
}
