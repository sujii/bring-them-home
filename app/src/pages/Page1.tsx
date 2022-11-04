import { defineComponent, ref } from "vue";
import HeaderNormal from '../components/HeaderNormal'

export default defineComponent({
  setup() {
    const message = ref("PAGE1");
    return () => (
      <v-container>
        <HeaderNormal message="bring-them-home"/>
        <p>{message.value}</p>
        <router-link to="Home">Home</router-link>
      </v-container>
    );
  },
});