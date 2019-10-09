<script>
const CmeModules = () => import("./CmeModules.vue");

export default {
  name: "cme-modules-app",
  functional: true,
  render(h) {
    return [h(CmeModules)];
  }
};
</script>
