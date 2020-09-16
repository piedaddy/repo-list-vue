<template>
  <section class="about-container">
    <ReturnHome />
    <h3 class="ml-5">A little bit about the app!</h3>
    <div class="about">

        <img src alt="portrait" />
        <p></p>
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

.about {
  width: 100vw;
  height: 100vh;
  // background-color: rgba(224, 122, 95, 0.671306);
  background-color:$pink;
}
</style>