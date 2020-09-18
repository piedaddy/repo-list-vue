<template>
  <section class="list">
    <div v-if="list.length !== 0 && !this.$store.state.isError">
      <List />
    </div>
    <div v-else class="d-flex flex-column align-items-center mt-5">
      <h3 class="text-center my-3 px-2">Sorry, looks like that isn't a correct Github username.</h3>
      <h4>
        <SearchNewUserLink class="search" text="Try again?" />
      </h4>
    </div>
  </section>
</template>

<script>
import List from "../components/List";
import SearchNewUserLink from "../components/SearchNewUserLink";

export default {
  name: "repoList",
  components: {
    List,
    SearchNewUserLink,
  },

  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  mounted() {
    this.$store.dispatch("getRepoList", this.$store.state.userName);
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
.list {
  background-color: $warm-grey;

  .search {
    color: $yellow;
  }

  .search:hover {
    color: $green;
    text-decoration: none;
  }
}
</style>