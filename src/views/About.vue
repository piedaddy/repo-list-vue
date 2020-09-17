<template>
  <section class="about-container">
    <h2 class="mx-3 mx-md-5 text-center">About the app</h2>
    <div class="about d-flex flex-column align-items-center">
      <!-- <img src="../assests/D4Y_portrait.jpg" alt="portrait" /> -->
      <Git />
      <div class="words ml-3 mr-2 mx-md-5 text-center">
        <p
          class="words "
        >This application was created by me, Gabrielle Wildfeuer, with the help of some articles and tutorials from strangers on the internet.</p>
        <p class="words">Vuex, VueRouter, and Moment.js also helped!</p>
      </div>
      <ReturnHome class="return bg-transparent pt-5"/>
    </div>
  </section>
</template>

<script>
import ReturnHome from "../components/ReturnHome";
import Git from "../components/Git";

export default {
  components: {
    ReturnHome,
    Git,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

h2 {
  margin-bottom: 0.5em;
  color: $yellow;
  text-transform: uppercase;
   @media(min-width: 768px) {
      font-size: 2.5em;

    }
}
.about {
  // width: 100vw;
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

    @media(min-width: 768px) {
      font-size: 1.1em;

    }
  }
  .return {
    font-size: 1.2em;
  }
}
</style>