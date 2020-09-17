<template>
  <section class="about-container">
    <div class="row">
      <ReturnHome />
      <h3 class="mx-3 mx-md-5">Learn a little bit more about the app</h3>
    </div>

    <div class="about d-flex flex-column align-items-center">
      <img src="../assests/D4Y_portrait.jpg" alt="portrait" />
      <div class="words ml-3 mr-2 mx-md-5">
        <p
          class="words"
        >This application was created by me, Gabrielle Wildfeuer, with the help of some articles and tutorials from strangers on the internet.</p>
        <p class="words">Vuex, VueRouter, and Moment.js also helped!</p>
      </div>
    </div>
  </section>
</template>

<script>
import ReturnHome from "../components/ReturnHome";

export default {
  components: {
    ReturnHome,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

h3 {
  margin-bottom: 0.5em;
  color: $yellow;
}
.about {
  width: 100vw;
  height: 100vh;
  // background-color: rgba(224, 122, 95, 0.671306);
  background-color: $yellow;
  //   background: rgb(129,178,154);
  // background: linear-gradient(0deg, rgba(61,64,91,1) 0%, rgba(129,178,154,1) 71%);

  img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin-top: 1em;
  }
  .words {
    background-color: transparent;
    color: $warm-grey;
  }
}
</style>