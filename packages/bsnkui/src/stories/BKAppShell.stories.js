import { BkNavigationItem, BkNavigationSidebar, BkTitle, BkAppShell, BkSheet, BkTabs, BkRichCard, BkButton } from '../components'
import { ref } from 'vue'

export default {
  title: 'bsnkui/BKAppShell',
  component: BkAppShell,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { BkNavigationSidebar, BkNavigationItem, BkTitle, BkAppShell, BkSheet, BkTabs, BkRichCard, BkButton },
  setup () {
    const showSidebar = ref(true)

    return {
      ...args,
      showSidebar
    }
  },
  template: `
      <bk-app-shell :show-side-bar="showSidebar" @toggleSidebar="showSidebar = true">
        <template #sideBar>
          <bk-navigation-sidebar @toggleSidebar="showSidebar = !showSidebar">
            <bk-title>Datex Viewer</bk-title>
            <bk-navigation-item active>
              <div style="display: flex; align-items: center">
                <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>

                <div>Data Exploration</div>
              </div>
            </bk-navigation-item>
            <bk-navigation-item>
              <div style="display: flex; align-items: center">
                <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; margin-right: 5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <div>Alliance Settings</div>
              </div>
            </bk-navigation-item>
          </bk-navigation-sidebar>
        </template>
        
        <div>
          <bk-tabs :tabs="['Alliance Viewer', 'City Explorer', 'Economy']"/>

          <div style="display: flex; flex-wrap: wrap; margin-top: 20px;">
            <bk-rich-card style="max-width: 350px; margin-top: 20px; margin-right: 20px" v-for="i in 9" :key="i">
              <template #title>
                Nation #{{ i }}
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
          </div>
        </div>
      </bk-app-shell>
      `
})

export const Default = Template.bind({})
Default.args = {
}
