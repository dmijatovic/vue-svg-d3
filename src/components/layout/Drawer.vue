<template>
  <section v-if="visible" class="drawer">
    <div class="drawer-header">
      <h1>{{ title }}</h1>
      <CloseButton @closeMe="hideMe" />
    </div>
    <nav>
      <ul>
        <router-link
          v-for="item in linkItems"
          :key="item.path"
          tag="li"
          :to="item.path"
          class="menu-item"
          active-class="active"
          exact
        >{{ item.label }}</router-link>
      </ul>
    </nav>
  </section>
</template>

<script>
import CloseButton from '@/components/primitives/CloseButton'
export default {
  name: 'Drawer',
  components: {
    CloseButton,
  },
  props: {
    visible: false,
    title: {
      type: String,
      default: 'Menu',
    },
    menuItems: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    linkItems() {
      console.log('linkItems...filter')
      return this.menuItems.filter(item => item.type === 'link')
    },
  },
  methods: {
    hideMe() {
      console.log('hideMe...emit...')
      this.$emit('hideDrawer', false)
    },
  },
}
</script>

<style>
.drawer {
  /* flex: 1; */
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0.5rem 1rem;
  /* width: 20rem; */
  display: flex;
  flex-direction: column;
  color: var(--color-yellow, 'yellow');
  background-color: var(--color-orange, 'orange');
}

.drawer-header {
  display: flex;
  padding: 1rem 0.25rem;
  border-bottom: 1px solid var(--color-light-grey, #fff);
}

.drawer-header h1 {
  font-size: 1.5rem;
  padding: 0.5rem 1rem 0rem 0rem;
  margin: 0;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  padding: 0;
}

.menu-item {
  width: 100%;
  font-size: 1rem;
  /* line-height: 2rem; */
  padding: 0.5rem 0rem;
  cursor: pointer;
  border-bottom: 1px solid var(--prim-color);
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.menu-item.active {
  border-bottom: 1px solid var(--sec-color);
  color: #fff;
  cursor: default;
}
</style>