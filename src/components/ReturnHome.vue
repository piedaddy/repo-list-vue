<template>
  <span class="return d-flex w-100 justify-content-end pr-3 pr-md-5 mt-2">
    <button class="button btn btn-secondary" @click="returnHome">Return to main listing</button>
  </span>
</template>

<script>
export default {
  methods: {
    returnHome() {
      return this.$router.push("/list");
    },
  },
};
</script>

<style  lang="scss">
@import "../scss/custom.scss";


</style>