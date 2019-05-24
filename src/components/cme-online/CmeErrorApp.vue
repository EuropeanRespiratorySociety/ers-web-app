<script>
const Header = () => import("./CmeHeader.vue");
const CmeError = () => import("./CmeError.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "error-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeError), h(SiteFooter)];
  }
};
</script>
