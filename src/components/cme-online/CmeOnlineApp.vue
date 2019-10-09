<script>
const Header = () => import("./CmeHeader.vue");
const CmeLandingCarousel = () => import("./CmeLandingCarousel.vue");
const CmeLandingPage = () => import("./CmeLandingPage.vue");

export default {
  name: "cme-app",
  functional: true,
  render(h) {
    return [h(Header), h(CmeLandingCarousel), h(CmeLandingPage)];
  }
};
</script>
