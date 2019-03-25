<script>
//import store from "@/vuex/store";
const Header = () => import("@/components/base/SimpleHeader.vue");
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
