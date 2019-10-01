<template>
  <article>
    <section>
      <Header @showMenu="toggleDrawer" :showMenuBtn="!showDrawer" />
      <router-view class="main-body"></router-view>
      <Footer />
    </section>
    <aside>
      <Drawer :menuItems="routes" :visible="showDrawer" @hideDrawer="toggleDrawer" />
    </aside>
  </article>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Drawer from './Drawer'

import { routes } from '@/routes'

export default {
  name: 'Layout',
  components: {
    Drawer,
    Header,
    Footer,
  },
  data() {
    return {
      routes: routes,
      showDrawer: false,
    }
  },
  methods: {
    toggleDrawer(visible) {
      console.log('toggleMenu....', visible)
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>
<style scoped>
article {
  display: flex;
  position: relative;
  /* flex-direction: column; */
  width: 100%;
  min-height: 100vh;
}
section {
  flex: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
}
aside {
  display: flex;
  /* border: 1px solid red; */
}
.main-body {
  flex: 1;
  padding: 0rem 1rem;
}
</style>
