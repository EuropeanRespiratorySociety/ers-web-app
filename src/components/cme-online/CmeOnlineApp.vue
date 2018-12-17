<script>
// import store from '@/vuex/store'
const Header = () => import("@/components/base/SimpleHeader.vue");
const CmeLandingCarousel = () => import("./CmeLandingCarousel.vue");
const CmeLandingPage = () => import("./CmeLandingPage.vue");
const SiteFooter = () => import("@/components/base/SiteFooter.vue");

export default {
  name: "cme-app",
  functional: true,
  render(h) {
    return [
      h(Header, { props: { title: "ERS CME Online" } }),
      h(CmeLandingCarousel),
      h(CmeLandingPage),
      h(SiteFooter)
    ];
  }
};
</script>
