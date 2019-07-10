<script>
const Header = () => import("./CmeHeader.vue");
const CmeModule = () => import("./CmeModule.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "cme-module-detail-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeModule), h(SiteFooter)];
  }
};
</script>
