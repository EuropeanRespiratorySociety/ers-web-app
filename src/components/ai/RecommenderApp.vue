<script>
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import Recommender from "./Recommender.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "recommender-app",

  components: { SimpleHeader, Recommender, SiteFooter },

  render(h) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h("recommender"), h(SiteFooter)]
    );
  }
};
</script>
