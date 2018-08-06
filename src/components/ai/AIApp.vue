<script>
import SimpleHeader from "@/components/base/SimpleHeader";
import AILandingPage from "./AILandingPage";

export default {
  name: "ai-landing-page",
  functional: true,

  components: {
    SimpleHeader,
    AILandingPage
  },

  render(h) {
    return [
      h(SimpleHeader, { props: { title: "Artificial Intelligence" } }),
      h(AILandingPage)
    ];
  }
};
</script>
