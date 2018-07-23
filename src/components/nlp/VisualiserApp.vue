<script>
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import Visualiser from "./Visualiser.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "visualiser-app",

  components: { SimpleHeader, Visualiser, SiteFooter },

  render(h) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h("visualiser"), h(SiteFooter)]
    );
  }
};
</script>
