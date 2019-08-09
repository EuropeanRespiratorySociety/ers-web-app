<script>
const CmeModule = () => import("./CmeModule.vue");

export default {
  name: "cme-module-detail-app",
  functional: true,
  render(h) {
    return [h(CmeModule)];
  }
};
</script>
