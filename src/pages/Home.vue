<template>
  <section>
    <TextBlock :title="bubbleText.title" :message="bubbleText.message" />
    <div id="home-bubbles">
      <SvgCircles :dataset="getCircleData" />
    </div>
    <section class="home-info-section">
      <div class="home-bubbles-data">
        <h3>Data passed to SvgBubbles component</h3>
        <pre>{{ getCircleData }}</pre>
      </div>
      <div class="home-bubbles-control">
        <h3>Change bubble radius</h3>
        <Slider
          v-for="(item, index) in getInitData"
          :key="JSON.stringify(item)"
          :value="item.r"
          :label="`Radius ${item.fill} circle`"
          min="5"
          max="100"
          @onInput="(val)=>{updateCircle(index,val)}"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { homeText } from '@/store/comments'
import { mapGetters } from 'vuex'
import TextBlock from '@/components/primitives/TextBlock'
import SvgCircles from '@/components/shapes/Circles'
import Slider from '@/components/primitives/Slider'
export default {
  name: 'HomePage',
  data() {
    //console.log("getting data...", this.$store);
    return {
      bubbleText: homeText,
    }
  },
  components: {
    TextBlock,
    SvgCircles,
    Slider,
  },
  computed: {
    ...mapGetters(['getInitData', 'getCircleData']),
  },
  methods: {
    updateCircle(pos, val) {
      console.log(`Update bubble ${pos} to ${val}`)
      this.$store.commit({
        type: 'updateCircleRadius',
        payload: {
          pos,
          val,
        },
      })
    },
  },
  // beforeMount() {
  //   console.log('beforeMounted...', this.getBubbleData)
  // },
  mounted() {
    console.log('Home...mounted')
    if (this.getCircleData.length === 0) {
      console.log('No circles')
      this.$store.commit({
        type: 'initCircles',
        payload: [
          ...this.getInitData.map(item => {
            return {
              ...item,
            }
          }),
        ],
      })
    }
    //this.sliders = [...this.getBubbleData]
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
