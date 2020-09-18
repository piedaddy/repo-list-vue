<template>
  <nav class="w-100 pt-3 pb-4 mr-3 mr-md-5">
    <ul class="nav d-flex flex-column align-items-end mr-3 mr-md-5">
      <li class="nav-item">
        <router-link class="nav-item" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <SearchNewUserLink text="Search for new user" />
      </li>
    </ul>
  </nav>
</template>

<script>
import SearchNewUserLink from "./SearchNewUserLink";

export default {
  components: {
    SearchNewUserLink,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
.nav-item {
  color: $green;
  font-weight: lighter;
  @media(min-width: 768px) {
    font-size: 1.1em;
  }
}

.nav-item:hover {
  color: $yellow;
  text-decoration: none;
  font-weight: normal;
}
</style>