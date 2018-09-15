<script>
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import Classifier from "./Classifier.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "recommender-app",

  components: { SimpleHeader, Classifier, SiteFooter },

  render(h) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h("classifier"), h(SiteFooter)]
    );
  }
};
</script>
