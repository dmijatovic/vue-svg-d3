<template>
  <section>
    <TextBlock :title="page.title" :message="page.message" />
    <div ref="svgWrapper" class="d3-svg-chart">
      <D3BarChart :dataset="getD3BarChartDataSet" />
    </div>
  </section>
</template>

<script>
import TextBlock from '@/components/primitives/TextBlock'
import { d3barchartText } from '@/store/comments'
import D3BarChart from '@/components/charts/D3BarChart'
import getElementSize from '@/utils/getElementSize'
import { mapGetters, mapState } from 'vuex'
import Slider from '@/components/primitives/Slider'
export default {
  name: 'D3BarChartPage',
  components: {
    TextBlock,
    D3BarChart,
    Slider,
  },
  data() {
    return {
      page: {
        ...d3barchartText,
      },
      svg: {
        width: 300,
        height: 300,
      },
      dataset: [],
    }
  },
  computed: {
    ...mapGetters([
      'getD3BarChartConfig',
      'getD3BarChartDataSet',
    ]),
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
    console.log('D3BarChartPage...mounted')
  },
}
</script>

<style scoped>
.d3-svg-chart {
  min-height: 400px;
}
</style>