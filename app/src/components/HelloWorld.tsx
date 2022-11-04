import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const message = ref("HelloWorldです");
    return () => (
      <v-container>
        {message.value}
        <router-link to="page1">page1</router-link>
      </v-container>
    );
  }
})