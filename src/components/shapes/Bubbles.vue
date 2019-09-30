<template>
  <svg>
    <circle
      v-for="(item,index) in data"
      :key="index"
      :cx="item.cx"
      :cy="item.cy"
      :r="item.r"
      fill="var(--color-dark)"
      @click="()=>onClick(index)"
    ></circle>
  </svg>
</template>

<script>
export default {
  name: "Bubbles",
  props: {
    dataset: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick(i) {
      console.log("user clicked item...", i);
    }
  }
};
</script>

<style>
</style>
