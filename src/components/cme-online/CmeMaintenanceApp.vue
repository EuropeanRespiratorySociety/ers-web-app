<script>
const Header = () => import("./CmeHeader.vue");
const CmeMaintenance = () => import("./CmeMaintenance.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "maintenance-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeMaintenance), h(SiteFooter)];
  }
};
</script>
