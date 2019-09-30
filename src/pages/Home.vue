<template>
  <section>
    <TextBlock :title="bubbleText.title" :message="bubbleText.message" />
    <div id="home-bubbles">
      <SvgBubbles :dataset="bubbles" />
    </div>
    <div class="home-bubbles-data">
      <h3>Data passed to SvgBubbles component</h3>
      <pre>{{bubbles}}</pre>
    </div>
  </section>
</template>

<script>
import { bubbleText } from '@/store/home'
import { mapGetters } from 'vuex'
import TextBlock from '@/components/primitives/TextBlock'
import SvgBubbles from '@/components/shapes/Bubbles'
export default {
  name: 'HomePage',
  data() {
    //console.log("getting data...", this.$store);
    return {
      bubbles: this.$store.state.home.bubbles,
      bubbleText: bubbleText,
    }
  },
  components: {
    TextBlock,
    SvgBubbles,
  },
  calculated: {
    ...mapGetters(['getBubbleData']),
  },
}
</script>

<style scoped>
section {
  flex: 1;
  padding: 0.5rem 1rem;
}

#home-bubbles {
  min-height: 400px;
  border: 1px solid var(--color-light-grey, #efefef);
  margin-bottom: 1rem;
}
</style>
