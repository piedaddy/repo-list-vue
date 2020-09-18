<template>
  <div>
    <h1 class="ml-3 ml-md-5">{{userName}}'s Repository List</h1>
    <div class="list-container d-flex flex-wrap justify-content-center">
      <div
        class="list-item d-flex flex-column justify-content-between mb-2 mt-3 mx-2 p-3 col-sm-5 col-lg-3"
        v-for="item in list"
        :item="item"
        :key="item.id"
      >
        <h3>{{item.name}}</h3>
        <span>{{item.description}}</span>
        <p class="lang">{{ item.language ? `Written in ${item.language}`: null}}</p>
        <router-link
          class="detail-link align-self-end"
          :to="{name:'detail', params: {repoName: item.name}}"
        >see details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  computed: {
    list() {
      return this.$store.state.list;
    },
    userName() {
      return this.$store.state.userName;
    },
  },
  mounted() {
    this.$store.dispatch("getRepoList", this.$store.state.userName);
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
h1 {
  margin-bottom: 1em;
  color: $yellow;
  text-transform: capitalize;
}
.list-container {
  background: rgb(61, 64, 91);
  background: linear-gradient(
    0deg,
    rgba(61, 64, 91, 1) 0%,
    rgba(224, 123, 95, 0.781) 33%
  );
}

.list-item {
  border-radius: 0.2em;
  box-shadow: 1px 1px 2px $warm-grey;
  background-color: $warm-grey;

  h3 {
    height: 3em;
    margin-bottom: 0;
    overflow: scroll;
    color: $yellow;
  }

  .lang {
    margin-bottom: 0.5em;
    font-style: italic;
  }

  span {
    overflow: scroll;
    font-weight: lighter;
    @media (min-width: 320px) {
      height: 5em;
    }
    @media (min-width: 576px) {
      height: 7em;
    }
  }

  .detail-link {
    color: $green;
    text-decoration: none;
  }
  .detail-link:hover {
    color: $yellow;
  }
}
</style>