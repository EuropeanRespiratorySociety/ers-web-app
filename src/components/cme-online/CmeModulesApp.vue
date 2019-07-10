<script>
const Header = () => import("./CmeHeader.vue");
const CmeModules = () => import("./CmeModules.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "cme-modules-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeModules), h(SiteFooter)];
  }
};
</script>
