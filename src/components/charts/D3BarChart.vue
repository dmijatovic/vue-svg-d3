<template>
  <svg ref="d3Svg" />
</template>

<script>
import * as d3 from 'd3'
import * as d3bar from '@/utils/d3BarChart'
export default {
  name: 'D3BarChart',
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          size: {
            height: 400,
            width: 600,
          },
          //use css placing top,left, bottom, right
          margin: [40, 40, 40, 40],
        }
      },
    },
    dataset: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      svg: null,
      graph: null,
      xAxis: null,
      yAxis: null,
      xScale: null,
      yScale: null,
      graphWidth: null,
      graphHeight: null,
    }
  },
  methods: {
    initChart() {
      //load reference to svg element
      this.svg = d3.select(this.$refs.d3Svg)
      //set chart size
      this.setChartSize()
      //calculate graphArea
      this.setGraphSize()
      //create group to hold bars
      this.createChartGroup()
      //create scales
      this.createScales()
      //create bars
      this.createBars()
    },
    setChartSize() {
      this.svg
        .attr('width', this.config.size.width)
        .attr('height', this.config.size.height)
    },
    setGraphSize() {
      //calculate graph area
      this.graphHeight = d3bar.getChartHeight(this.config)
      this.graphWidth = d3bar.getChartWidth(this.config)
    },
    createChartGroup() {
      const { margin } = this.config
      if (this.svg !== null) {
        this.graph = this.svg
          .append('g')
          .attr('x', d3bar.getChartLeft(margin))
          .attr('y', d3bar.getChartTop(margin))
          .attr('width', this.graphWidth)
          .attr('height', this.graphHeight)
      }
    },
    createScales() {
      const { dataset, graphWidth, graphHeight } = this
      const max = d3.max(dataset, d => d.val)

      //yScale is linear scale for barchart
      //range is inverted because svg coordinate system (0,0) starts at top-left
      this.yScale = d3
        .scaleLinear()
        .domain([0, max])
        .range([graphHeight, 0])

      //domain for x scale (categories) is extracted based on labels
      const categories = this.dataset.map(item => item.label)
      //xScale is band scale - categories
      this.xScale = d3
        .scaleBand()
        .domain(categories)
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2)
    },
    createBars() {
      debugger
      const { dataset } = this
      //join data and create shapes
      const bars = this.graph.selectAll('rect').data(dataset)

      //remove uneeded bars
      bars.exit().remove()

      //update current bars
      this.defineBarAttr(bars)

      //set attr to new elements
      this.defineBarAttr(bars.enter().append('rect'))
    },
    defineBarAttr(el) {
      const { graphHeight, xScale, yScale } = this
      el.attr('width', xScale.bandwidth)
        .attr('height', d => graphHeight - yScale(d.val))
        .attr('fill', 'orange')
        .attr('x', d => xScale(d.label))
        .attr('y', d => yScale(d.val))
    },
    updateChart() {},
  },
  computed: {},
  mounted() {
    console.log('D3barChart...mounted')
    if (this.svg === null) {
      this.initChart()
    }
  },
}
</script>

<style>
</style>