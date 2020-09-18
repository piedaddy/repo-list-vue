<template>
  <nav class="w-100 pt-3 pb-4 mr-3 mr-md-5">
    <ul class="nav d-flex flex-column align-items-end mr-3 mr-md-5">
      <li class="nav-item">
        <router-link class="nav-item" to="/about">About</router-link>
      </li>
      <li>
        <router-link
          class="nav-item"
          to="/"
          @click.native="setIsError(false), clearUserInfo"
        >Search for New User</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setIsError", "clearUserInfo"]),
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
// nav {
//   width: 100vw;
// }
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