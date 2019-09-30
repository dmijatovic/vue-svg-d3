<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    enable-background="new 0 0 1000 1000"
    xml:space="preserve"
    @click="closeMenu"
  >
    <metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
    <g>
      <g>
        <path
          d="M163.6,143.7C-33.2,329.4-42.1,639.5,143.7,836.3c3.3,3.5,6.6,6.9,10,10.2c191.3,191.3,501.5,191.3,692.9,0c191.3-191.3,191.3-501.5,0-692.9C659.1-33.9,356.4-38.4,163.6,143.7z M257.6,354.6l97-97l145.5,145.5l145.5-145.5l97,97L597.1,500.1l145.5,145.4l-97,97L500.1,597.1L354.6,742.6l-97-97l145.5-145.4L257.6,354.6z"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
    closeMenu() {
      this.$emit('closeMe', true)
    },
  },
}
</script>

<style scoped>
svg {
  width: 3rem;
  height: 3rem;
  fill: #fff;
  cursor: pointer;
}
</style>