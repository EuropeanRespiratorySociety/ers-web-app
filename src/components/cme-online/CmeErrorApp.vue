<script>
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import CmeError from "./CmeError.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "error-app",

  components: { SimpleHeader, CmeError, SiteFooter },

  render(h) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h("cme-error")],
      h(SiteFooter)
    );
  }
};
</script>
