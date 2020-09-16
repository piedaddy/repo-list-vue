<template>
  <section class="details">
    <ReturnHome />
    <h3>
      {{this.repoName}}'s
      <small>details</small>
    </h3>
    <section class="details__branch">
      <h5>Branches</h5>
      <div v-for="branch in branches" :branch="branch" :key="branch.name">
        <p>{{branch.name}}</p>
      </div>
    </section>
    <section class="details__commit">
      <h5>Commit History</h5>
      <ol>
        <li v-for="commit in commits" :commit="commit" :key="commit.commit.author.date">
          <p>{{commit.commit.message}}</p>
          <p>{{commit.commit.author.name}}</p>
          <p>{{getDate(commit.commit.author.date)}}</p>
        </li>
      </ol>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import ReturnHome from "../components/ReturnHome";
import moment from "moment";

export default {
  props: ["repoName"],
  components: {
    ReturnHome,
  },
  computed: {
    branches() {
      return this.$store.state.branches;
    },
    commits() {
      return this.$store.state.commits;
    },
  },
  methods: {
    ...mapActions(["getRepoBranches", "getRepoCommits"]),
    getDate: function (date) {
      return moment(date).format("MMMM Do YYYY [at] h:mm:ss a");
    },
  },
  mounted() {
    this.$store.dispatch("getRepoBranches", this.repoName);
    this.$store.dispatch("getRepoCommits", this.repoName);
  },
  // filters: {
  //   moment: function(date) {
  //   return moment(date).format('MMMM Do YYYY, h:mm:ss a');

  //   }
  // }
};
</script>

<style scoped lang="scss">
h5 {
  text-transform: uppercase;
}
</style>