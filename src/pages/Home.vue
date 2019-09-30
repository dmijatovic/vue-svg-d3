<template>
  <section>
    <TextBlock :title="bubbleText.title" :message="bubbleText.message" />
    <div id="home-bubbles">
      <SvgBubbles :dataset="getBubbleData" />
    </div>
    <section class="home-info-section">
      <div class="home-bubbles-data">
        <h3>Data passed to SvgBubbles component</h3>
        <pre>{{ getBubbleData }}</pre>
      </div>
      <div class="home-bubbles-control">
        <h3>Change bubble radius</h3>
        <Slider
          v-for="(item, index) in bubbles"
          :key="JSON.stringify(item)"
          :value="item.r"
          :label="`Radius ${item.fill} circle`"
          min="5"
          max="100"
          @onChange="(val)=>{updateBubble(index,val)}"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { bubbleText } from '@/store/home'
import { mapGetters } from 'vuex'
import TextBlock from '@/components/primitives/TextBlock'
import SvgBubbles from '@/components/shapes/Bubbles'
import Slider from '@/components/primitives/Slider'
export default {
  name: 'HomePage',
  data() {
    //console.log("getting data...", this.$store);
    //console.log('computed...', this.computed)
    return {
      bubbles: [],
      bubbleText: bubbleText,
    }
  },
  components: {
    TextBlock,
    SvgBubbles,
    Slider,
  },
  computed: {
    ...mapGetters(['getBubbleData']),
  },
  methods: {
    updateBubble(pos, val) {
      console.log(`Update bubble ${pos} to ${val}`)
      this.$store.commit({
        type: 'updateBubbleRadius',
        payload: {
          pos,
          val,
        },
      })
    },
  },
  beforeMount() {
    console.log('beforeMounted...', this.getBubbleData)
  },
  mounted() {
    this.bubbles = this.getBubbleData
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

.home-info-section {
  display: flex;
}

.home-info-section div {
  padding: 0rem 1rem;
}

.home-bubbles-control {
  flex: 1;
  justify-content: flex-end;
}
</style>
