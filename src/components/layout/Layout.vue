<template>
  <article>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </article>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
article {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
