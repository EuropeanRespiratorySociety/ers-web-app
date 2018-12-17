<script>
// import store from '@/vuex/store'
const Header = () => import("@/components/base/SimpleHeader.vue");
const CmeModuleDetail = () => import("./CmeModuleDetail.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "cme-module-detail-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeModuleDetail), h(SiteFooter)];
  }
};
</script>
