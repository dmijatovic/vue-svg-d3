<template>
  <svg>
    <circle
      v-for="(item,index) in dataset"
      :key="index"
      :cx="item.cx"
      :cy="item.cy"
      :r="item.r"
      :fill="item.fill"
      @click="()=>onClick(index)"
    />
  </svg>
</template>

<script>
export default {
  name: 'Circles',
  props: {
    dataset: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick(i) {
      console.log('user clicked circle...', i)
    },
  },
}
</script>

<style scoped>
svg {
  width: 100%;
  min-height: 400px;
}
</style>
