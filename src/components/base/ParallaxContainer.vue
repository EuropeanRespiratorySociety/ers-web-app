<script>
import ParallaxHeader from "./ParallaxHeader.vue";
import ParallaxImage from "./ParallaxImage.vue";

export default {
  name: "parallax-container",
  functional: true,
  render(h) {
    return [h(ParallaxHeader), h(ParallaxImage)];
  }
};
</script>
