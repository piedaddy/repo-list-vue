<template>
  <div class="not-found d-flex flex-column align-items-center">
    <span class="title p-5">Oops...</span>
    <p
      class="mx-3 mx-md-5"
    >Sorry, looks like the page you're looking for doesn't really exist right now.</p>
    <button @click="returnHome" class="button btn">Lets try searching again</button>
  </div>
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
.not-found {
  .title {
    font-size: 3em;
  }
  p {
    text-align: center;

    @media (min-width: 576px) {
      font-size: 1.3em;
    }
  }
  .button {
    font-size: 1em;
  }
}
</style>