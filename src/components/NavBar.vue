<template>
  <nav class="mt-5 mr-3 mr-md-5">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="about" to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

.about {
  color: $green;
}

.about:hover {
  color: $yellow;
  text-decoration: none;
}
</style>