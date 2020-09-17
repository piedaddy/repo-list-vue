<template>
  <span class="return d-flex w-100 justify-content-end pr-3 pr-md-5 mt-2">
    <button class="btn btn-secondary" @click="returnHome">Return to main listing</button>
  </span>
</template>

<script>
export default {
  methods: {
    returnHome() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

.return {
  // display: flex;
  // width: 100%;

  button {
    background-color: $green;
    color: $warm-grey;
    font-size: 0.7em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  button:hover {
    background-color: $yellow;
    color: $warm-grey;
  }
}
</style>