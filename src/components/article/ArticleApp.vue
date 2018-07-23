<script>
import Highlights from "./Article.vue";
import ParallaxContainer from "@/components/base/ParallaxContainer.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "feed-app",
  functional: true,
  render(h) {
    return [h(ParallaxContainer), h(Highlights), h(SiteFooter)];
  }
};
</script>
