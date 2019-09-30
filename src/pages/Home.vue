<template>
  <section>
    <h1>Home page</h1>

    <TextBlock :title="bubbleText.title" :message="bubbleText.message"/>

    <div id="home-bubbles">
      <SvgBubbles />
    </div>

    <div>{{bubbles}}</div>
    <div>{{bubbleText}}</div>
  </section>
</template>

<script>
import { bubbleText } from "@/store/home";
import { mapGetters } from "vuex";
import TextBlock from "@/components/primitives/TextBlock";
import SvgBubbles from "@/components/shapes/Bubbles";
export default {
  name: "HomePage",
  data() {
    //console.log("getting data...", this.$store);
    return {
      bubbles: this.$store.state.home.bubbles,
      bubbleText: bubbleText
    };
  },
  components: {
    TextBlock,
    SvgBubbles
  },
  calculated: {
    ...mapGetters(["getBubbleData"])
  }
};
</script>

<style>
section {
  flex: 1;
  padding: 0.5rem 1rem;
}
</style>
