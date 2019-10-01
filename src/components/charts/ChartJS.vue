<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'ChartJSDemo',
  props: {
    //CharJS configuration object incl. data and options
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartRef: {},
    }
  },
  mounted() {
    //debugger
    this.chartRef = new Chart(this.$refs.canvas, this.config)
  },
  beforeDestroy() {
    //remove chart from Chart.js collection
    this.chartRef.destroy()
  },
}
</script>

<style>
canvas {
  flex: 1;
  min-height: 300px;
  min-width: 300px;
}
</style>