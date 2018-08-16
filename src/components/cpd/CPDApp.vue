<script>
import SimpleHeader from "@/components/base/SimpleHeader";
import SiteFooter from "@/components/base/SiteFooter.vue";
import Featured from "./Featured.vue";

export default {
  name: "cpd-app",
  functional: true,

  components: {
    SimpleHeader,
    SiteFooter
  },

  // render(h, c) {
  render(h) {
    return [
      // h(ParallaxContainer),
      h(SimpleHeader, {
        props: { title: "Continuing Professional Develoment" }
      }),
      h(Featured),
      h(SiteFooter)
    ];
  }
};
</script>
