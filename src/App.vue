<template>
  <!-- <div id="app" class="mx-5"> -->
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style  lang="scss">
@import "./scss/custom.scss";

// #app {
//   width: 100vw;
//   height: 100vh;
// }
</style>
