<template>
  <section class="about-container">
    <h2 class="mx-3 mx-md-5 text-center">About the app</h2>
    <div class="about d-flex flex-column align-items-center">
      <GitSVG />
      <div class="words ml-3 mr-2 mx-md-5 text-center">
        <p
          class="words"
        >This application was created by me, Gabrielle Wildfeuer, with the help of some articles and tutorials from strangers on the internet.</p>
        <p class="words">Vuex, VueRouter, and Moment.js also helped!</p>
      </div>
      <ReturnHome class="return bg-transparent pt-5" />
    </div>
  </section>
</template>

<script>
import ReturnHome from "../components/ReturnHome";
import GitSVG from "../components/GitSVG";

export default {
  components: {
    ReturnHome,
    GitSVG,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

.about-container {
  background-color: $warm-grey;
}
h2 {
  margin-bottom: 0.5em;
  color: $yellow;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 2.5em;
  }
}
.about {
  height: 100vh;
  background-color: $yellow;
  img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin-top: 1em;
  }
  .words {
    background-color: transparent;
    color: $warm-grey;

    @media (min-width: 768px) {
      font-size: 1.1em;
    }
  }
  .return {
    font-size: 1.2em;
  }
}
</style>