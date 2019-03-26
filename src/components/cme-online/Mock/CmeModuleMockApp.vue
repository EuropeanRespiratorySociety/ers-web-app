<script>
// import store from '@/vuex/store'
const Header = () => import("@/components/base/SimpleHeader.vue");
const CmeModuleMock = () =>
  import("@/components/cme-online/Mock/CmeModuleMock.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "cme-module-detail-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeModuleMock), h(SiteFooter)];
  }
};
</script>
