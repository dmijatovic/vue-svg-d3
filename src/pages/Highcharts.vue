<template>
  <section>
    <TextBlock :title="page.title" :message="page.message" />
    <HighChart :config="getHighchartsLineDemoConfig" />
  </section>
</template>

<script>
import TextBlock from '@/components/primitives/TextBlock'
import HighChart from '@/components/charts/HighCharts'
import { highchartsText } from '@/store/comments'
import { mapGetters } from 'vuex'

export default {
  name: 'HighchartsDemo',
  components: {
    HighChart,
    TextBlock,
  },
  data() {
    return {
      page: {
        ...highchartsText,
      },
    }
  },
  computed: {
    ...mapGetters(['getHighchartsLineDemoConfig']),
  },
}
</script>

<style>
</style>