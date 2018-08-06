<script>
// import store from '@/vuex/store'
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import NotAuthorized from "./NotAuthorized.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "error-app",

  components: { SimpleHeader, NotAuthorized, SiteFooter },

  render(h) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h("not-authorized")],
      h(SiteFooter)
    );
  }
};
</script>
