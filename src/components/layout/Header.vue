<template>
  <header>
    <h1>App header</h1>
    <MenuButton v-if="showMenuBtn" @showMenu="showMenu" />
  </header>
</template>

<script>
import MenuButton from '@/components/primitives/MenuButton'
export default {
  name: 'Header',
  props: {
    showMenuBtn: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    MenuButton,
  },
  methods: {
    showMenu() {
      this.$emit('showMenu', true)
    },
  },
}
</script>

<style>
header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-dark-green, #333);
  color: var(--color-light-grey, #fff);
}
h1 {
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
