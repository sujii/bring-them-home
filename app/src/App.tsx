import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <v-app>
        <v-main>
          {/* パスとマッチしたページが表示される ref: https://v3.router.vuejs.org/api/#router-view */}
          <router-view></router-view>
          <router-link to="/page2">Page2</router-link>
        </v-main>
      </v-app>
    )
  }
});