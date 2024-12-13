import { defineComponent, ref } from "vue";
import HeaderNormal from '../components/HeaderNormal'

export default defineComponent({
  setup() {
    const message = ref("BRING THEM HOME.");
    return () => (
      <v-container>
        <HeaderNormal message="bring-them-home"/>
        <p>{message.value}</p>
        <router-link to="Page2">Page2</router-link>
      </v-container>
    );
  },
});