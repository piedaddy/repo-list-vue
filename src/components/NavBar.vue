<template>
  <nav class="pt-3 pb-4 mr-3 mr-md-5">
    <ul class="nav d-flex flex-column align-items-end mr-3 mr-md-5 ">
      <li class="nav-item">
        <router-link class="nav-item" to="/about">About</router-link>
      </li>
      <li>
        <router-link class="nav-item" to="/">Search for New User</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
nav {
  width: 100vw;
 // height: 10vw;
  // background-color: $yellow;
}
.nav-item {
  color: $green;
  font-weight: lighter;
}

.nav-item:hover {
  color: $yellow;
  text-decoration: none;
  font-weight: normal;
}
</style>