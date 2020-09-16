<template>
  <section class="list">
    <h1 class="ml-xs-1 ml-md-5">Repository List</h1>
    <div class="list-container d-flex flex-wrap justify-content-center">
      <div
        class="list-item d-flex flex-column justify-content-between mb-4 mx-2 p-3 col-sm-5 col-lg-3"
        v-for="item in list"
        :item="item"
        :key="item.id"
      >
        <h3>{{item.name}}</h3>
        <span>{{item.description}}</span>
        <p>
          <em>{{ item.language ? `Written in ${item.language}`: null}}</em>
        </p>
        <router-link
          class="detail-link"
          :to="{name:'detail', params: {repoName: item.name}}"
        >see detail</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "repoList",
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  mounted() {
    this.$store.dispatch("getRepoList");
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
h1 {
  margin-bottom: 1em;
}

.list-item {
  background-color: lightblue;

  h3 {
    height: 3em;
    overflow: scroll;
  }

  p {
    margin-bottom: 0.5em;
  }

  span {
    overflow: scroll;
    @media (min-width: 320px) {
      height: 5em;
    }
    @media (min-width: 576px) {
      height: 7em;
    }
  }

  .detail-link {
    align-self: flex-end;
    color: $primary;
  }
}
</style>