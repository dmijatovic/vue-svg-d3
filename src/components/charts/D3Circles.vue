<template>
  <div>
    <svg ref="d3Svg" />
    <div class="radius-panel">
      <span v-for="item in dataset" :key="item.id">{{item.fill}} : {{item.r}}</span>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'D3Circles',
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          size: {
            height: 400,
            width: 600,
          },
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
      d3Ref: null,
    }
  },
  methods: {
    initCirlces() {
      //console.log('initCircles')
      //console.log('d3...', d3)
      this.d3Ref = d3.select(this.$refs.d3Svg)
    },
    setSize() {
      const { width, height } = this.config.size
      if (!this.d3Ref || !width || !height) return false
      this.d3Ref.attr('width', width).attr('height', height)
    },
    drawCircles() {
      //debugger
      //initalize circles with data
      const circles = this.d3Ref
        .selectAll('circle')
        .data(this.dataset, d => d.id)

      //debugger
      //update existing (we match data by id)
      circles
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', d => d.r)
        .attr('fill', d => d.fill)

      //add new circles
      circles
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', d => d.r)
        .attr('fill', d => d.fill)

      //remove old circles
      circles.exit().remove()
    },
    updateCircles() {},
  },
  mounted() {
    //console.log('D3Circles...mounted...data...', this.dataset)
    this.initCirlces()
    this.setSize()
    this.drawCircles()
  },
  updated() {
    //console.log('D3Circles...updated...data', this.dataset)
    //debugger
    this.drawCircles()
  },
}
</script>

<style scoped>
.radius-panel {
  /* display: none; */
  border: 1px solid var(--color-light-grey);
}
span {
  display: inline-block;
  padding: 1rem;
}
</style>