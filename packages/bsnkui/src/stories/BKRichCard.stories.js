import { BkRichCard, BkButton } from '../components'

export default {
  title: 'bsnkui/BKRichCard',
  component: BkRichCard,
  argTypes: {
    title: 'Hello World'
  }
}

const Template = (args) => ({
  components: { BkRichCard, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #title>
        {{ args.title }}
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec eget nunc eget nunc efficitur efficitur.
        Nullam euismod, nisi eget efficitur efficitur,
        nisl nisl aliquet nunc, eu aliquet nisl nisl eu nisl.
      </div>
      <template #actions>
        <div style="display: flex;">
          <bk-button variant style="margin-left: auto">
            Terminate
          </bk-button>
          <bk-button primary style="margin-left: 5px">
            Start
          </bk-button>
        </div>
      </template>
    </bk-rich-card>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Hello World'
}

export const Image = (args) => ({
  components: { BkRichCard, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #image>
        <img src="https://picsum.photos/300/200" />
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec eget nunc eget nunc efficitur efficitur.
        Nullam euismod, nisi eget efficitur efficitur,
        nisl nisl aliquet nunc, eu aliquet nisl nisl eu nisl.
      </div>
      <template #actions>
        <div style="display: flex;">
          <bk-button variant style="margin-left: auto">
            Terminate
          </bk-button>
          <bk-button primary style="margin-left: 5px">
            Start
          </bk-button>
        </div>
      </template>
    </bk-rich-card>
  `
})

export const Listing = (args) => ({
  components: { BkRichCard, BkButton },
  setup () {
    return { args }
  },
  template: `
    <bk-rich-card style="max-width: 400px; margin-top: 50px; margin-left: 50px;">
      <template #image>
        <img src="https://picsum.photos/400/200" />
      </template>
      <template #title>
        Cabin at the Freemont
      </template>
      <template #header>
        <h4 style="margin-top: -10px; align-items: center; display: flex">
          <div>Owned by John Doe</div> <div style="color: #eb2f96; margin-left: 10px">
              <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px" viewBox="0 0 20 20" fill="currentColor" v-for="i in 5" :key="i">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
          </div>
          <span style="color: #eb2f96; margin-left: 5px">
            (23)
          </span>
        </h4>
      </template>
      <div>
        This one of a kind cabin at the Freemont is a beautiful addition to your vacation.
        It is located in the heart of the city and is just a short drive from the beach.
        The cabin has a private entrance and is fully equipped with everything you need for a great stay.
      </div>
      <template #actions>
        <div style="display: flex;">
          <bk-button link style="margin-left: auto; color: #b81188">
            Explore
          </bk-button>
          <bk-button highlight="magenta" style="margin-left: 5px">
            Book
          </bk-button>
        </div>
      </template>
    </bk-rich-card>
  `
})
Listing.args = {
  title: 'Hello World'
}
