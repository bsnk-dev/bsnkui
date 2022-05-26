import { BkRadio, BkButton, BkRichCard } from '../entry-lib'
import { ref } from 'vue'

export default {
  title: 'bsnkui/BKRadio',
  component: BkRadio,
  argTypes: {
    label: 'Hello world!',
    card: false
  }
}

const Template = (args) => ({
  components: { BkRadio, BkButton },
  setup () {
    return { args }
  },
  template: `
    <form>
      <div>
        <bk-radio v-bind="args" id="1"/>
        <bk-radio v-bind="args" id="2"/>
        <bk-radio v-bind="args" id="3"/>
      </div>
      
      <bk-button submit primary>Submit</bk-button>
    </form>
  `
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

export const CustomContent = (args) => ({
  components: { BkRadio },
  setup () {
    return { args }
  },
  template: `<bk-radio v-bind="args">
  <template #label>Custom content</template>
  </bk-radio>`
})

export const Card = () => ({
  components: { BkRadio },
  setup () {
    const selected = ref(0)

    return {
      selected
    }
  },
  template: `<bk-radio card name="1" :value="selected === 1" @click="selected = 1">
  <template #label>Custom content</template>
  </bk-radio>
  <bk-radio card name="2" :value="selected === 2" @click="selected = 2">
  <template #label>Custom content</template>
  <template #active-content>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </template>
  </bk-radio>`
})

export const ExampleCard = () => ({
  components: { BkRadio, BkRichCard, BkButton },
  setup () {
    const selected = ref(0)

    return {
      selected
    }
  },
  template: `
    <bk-rich-card style="max-width: 500px">
      <template #title>
        Manage your Subscription
      </template>
      
      <p class="text-color-primary_light" style="margin-bottom: 35px">
        Keep the fun going by choosing the right subscription for you.
        Get up to 10x more web traffic and 20x more metaverse transactions by
        upgrading your plan.
      </p>
      
      <form>
        <bk-radio card name="startup_subscription" :value="selected === 1" @click="selected = 1">
          <template #label>
            <h2>Startup</h2>
            <h3>$24.99/mo</h3>
          </template>
        </bk-radio>
        <bk-radio card name="corporate_subscription" :value="selected === 2" @click="selected = 2">
          <template #label>
            <h2>Corporation</h2>
            <h3>$99.99/mo</h3>
          </template>
          <template #active-content>
            <p>
              In addition to all the features you'd normally get, you receive:
            </p>
            <ol>
              <li>20 Dedicated Armored Vehicles</li>
              <li>Onsite Blast Doors</li>
              <li>Never-down Servers</li>
            </ol>
          </template>
        </bk-radio>
      </form>
      <template #actions>
        <bk-button primary size="medium" submit style="margin-left: auto">Subscribe</bk-button>
      </template>
    </bk-rich-card>
  `
})
