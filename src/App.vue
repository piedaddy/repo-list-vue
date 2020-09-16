<template>
  <!-- <div id="app" class="mx-5"> -->
      <div id="app">

    <NavBar />
    <!-- <div id="nav">
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
// import RepoList from "./components/RepoList";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    // RepoList,
    NavBar,
  },
};
</script>

<style scoped lang="scss">

</style>
