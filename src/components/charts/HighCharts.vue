<template>
  <div ref="hcChart"></div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'HighCharts',
  props: {
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
    this.chartRef = Highcharts.chart(
      this.$refs.hcChart,
      this.config
    )
  },
  beforeDestroy() {
    //remove chart from Highcharts collection
    this.chartRef.destroy()
  },
}
</script>
<style>
</style>