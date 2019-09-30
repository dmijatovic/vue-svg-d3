<template>
  <div class="slider-input">
    <label for="slider">{{ label }}</label>
    <input type="range" name="slider" v-model="val" :min="min" :max="max" @change="onChange" />
    <div class="slider-display">{{ val }}</div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    label: {
      type: String,
      default: 'Default label',
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: String,
      default: 0,
    },
    max: {
      type: String,
      default: 10,
    },
  },
  data() {
    return {
      val: 0,
    }
  },
  computed: {
    inputValue() {
      return this.value
    },
  },
  methods: {
    onChange() {
      //console.log('onChange...', this.val)
      this.$emit('onChange', Number(this.val))
    },
  },
  mounted() {
    //console.log('mounted')
    this.val = this.value
  },
}
</script>

<style scoped>
.slider-input {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

input {
  flex: 1;
  margin: 1rem;
}
</style>