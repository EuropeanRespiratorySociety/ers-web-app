<script>
import SimpleHeader from "@/components/base/SimpleHeader";
import TrainingItem from "./TrainingItem";

export default {
  name: "classifier-training-app",
  functional: true,

  components: {
    SimpleHeader,
    TrainingItem
  },

  render(h) {
    return [
      // h(ParallaxContainer),
      h(SimpleHeader, { props: { title: "ERS Content Classifier" } }),
      h(TrainingItem)
    ];
  }
};
</script>
