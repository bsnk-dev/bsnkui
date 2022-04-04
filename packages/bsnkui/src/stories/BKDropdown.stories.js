import { BkDropdown, BkTabs, BkRichCard, BkButton, BkTextField, BkSheet } from '../entry-lib'

export default {
  title: 'bsnkui/BKDropdown',
  component: BkDropdown,
  argTypes: {
    size: 'small',
    filled: false
  }
}

const Template = (args) => ({
  components: { BkDropdown },
  setup () {
    return { args }
  },
  template: '<bk-dropdown style="margin-top: 20px; margin-left: 20px;" v-bind="args"></bk-dropdown>'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  size: 'small',
  filled: true,
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4'
  ]
}

export const CardExample = () => ({
  components: { BkTabs, BkRichCard, BkButton, BkDropdown, BkTextField, BkSheet },
  template: `
    <bk-rich-card style="max-width: 600px; margin: 30px">
      <template #title>
        Security Settings
      </template>
      
      <div>
        <bk-tabs :tabs="['General', 'NeuralView', 'Turrets']"/>
        
        <div style="margin-top: 20px">
          <h4>
            General Preferences
          </h4>
          
          <bk-sheet style="display: block">
            Pre-arm charges at Defcon status:
  
            <bk-dropdown
                style="display: inline-block"
                :items="[
              'Defcon 1',
              'Defcon 2',
              'Defcon 3',
              'Defcon 4',
              'Defcon 5',
            ]"
                filled
            ></bk-dropdown>
            
            <div style="margin-top: 20px;">
              Automatically unlock doors for <bk-dropdown
                  style="display: inline-block"
                  :items="[
                'Admins',
                'Members',
                'Guests',
                'Anyone'
              ]"
                  filled
              ></bk-dropdown>
            </div>
  
            <div style="margin-top: 20px;">
              Unauthorized users get a warning lasting 
              <bk-text-field label="Seconds" :value="30" filled style="display: inline-block">
              30
            </bk-text-field>
            </div>
          </bk-sheet>
        </div>
      </div>
    
      <template #actions>
        <div style="display: flex">
          <bk-button link class="red" style="margin-left: auto">
            Discard
          </bk-button>
          <bk-button primary style="margin-left: 5px">
            Save
          </bk-button>
        </div>
      </template>
    </bk-rich-card>
  `
})
