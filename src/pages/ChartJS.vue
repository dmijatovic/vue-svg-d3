<template>
  <section>
    <TextBlock :title="page.title" :message="page.message" />
    <div class="my-chartjs-sample">
      <ChartJS :config="getChartJSBarChartDemoConfig" />
    </div>
  </section>
</template>

<script>
import ChartJS from '@/components/charts/ChartJS'
import TextBlock from '@/components/primitives/TextBlock'
import { chartjsText } from '@/store/comments'
import { mapGetters } from 'vuex'

export default {
  name: 'ChartJSPage',
  components: {
    ChartJS,
    TextBlock,
  },
  data() {
    return {
      page: {
        ...chartjsText,
      },
    }
  },
  computed: {
    ...mapGetters(['getChartJSBarChartDemoConfig']),
  },
  mounted() {},
}
</script>

<style>
.my-chartjs-sample {
  position: relative;
  padding: 1rem;
  /* min-height: 300px; */
  box-sizing: border-box;
}
</style>