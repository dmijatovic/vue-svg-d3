<template>
  <svg>
    <path fill="none" stroke="blue" stroke-width="3" :d="d" />
  </svg>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'Line',
  data() {
    return {
      dataset: [10, 20, 30, 40],
    }
  },
  computed: {
    lineGenerator()
  },
}
</script>

<style>
svg {
  width: 100%;
  height: 400px;
}
</style>