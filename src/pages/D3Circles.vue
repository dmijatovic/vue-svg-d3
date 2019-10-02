<template>
  <section>
    <TextBlock :title="page.title" :message="page.message" />
    <div ref="svgWrapper" class="d3-svg-chart">
      <D3Circles :dataset="getCircleData" />
    </div>
    <section class="d3-test-panel">
      <!-- <div class="d3-circles-data">
        <h3>Data passed to D3Circles component</h3>
        <pre>{{ getCircleData }}</pre>
      </div>-->
      <div class="sliders">
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
import TextBlock from '@/components/primitives/TextBlock'
import { d3circlesText } from '@/store/comments'
import D3Circles from '@/components/charts/D3Circles'
import getElementSize from '@/utils/getElementSize'
import { mapGetters } from 'vuex'
import Slider from '@/components/primitives/Slider'
export default {
  name: 'D3CirclesPage',
  components: {
    TextBlock,
    D3Circles,
    Slider,
  },
  data() {
    return {
      page: {
        ...d3circlesText,
      },
      svg: {
        width: 300,
        height: 300,
      },
      dataset: [],
    }
  },
  computed: {
    ...mapGetters(['getInitData', 'getCircleData']),
  },
  methods: {
    updateCircle(pos, val) {
      //console.log(`Update bubble ${pos} to ${val}`)
      this.$store.commit({
        type: 'updateCircleRadius',
        payload: {
          pos,
          val,
        },
      })
    },
  },
  mounted() {
    console.log('D3CirclePage...mounted')
    //console.log('Home...mounted')
    if (this.getCircleData.length === 0) {
      //console.log('No circles')
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
  },
}
</script>

<style scoped>
.d3-svg-chart {
  min-height: 400px;
}
.d3-test-panel {
  display: flex;
  width: 100%;
}
.d3-test-panel div {
  flex: 1;
  padding: 1rem;
}
</style>