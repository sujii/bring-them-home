import { defineComponent, reactive } from "vue";
import styled from "vue-styled-components";

// Create an <StyledInput> component that'll render an <input> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

interface linkProps {
  label: string,
  assetPath: string,
  href: string
}

interface messageProps {
  value: string
}

export default defineComponent({
  setup() {
    const message: messageProps = reactive({
      value: "bring-them-home",
    })

    const link: linkProps = reactive(
      [
        {
          label: "Page1",
          assetPath: null,
          href: "page1"
        },
        {
          label: "Page2",
          assetPath: null,
          href: "page2"
        }
      ]
    )

    return () => (
      <wrapper>
        <v-container>
          <styled-title>{message.value}</styled-title>
          <router-link to="link[0].href">{link[0].label}</router-link>
          <router-link to="link[1].href">{link[1].label}</router-link>
        </v-container>
      </wrapper>
    );
  }
})