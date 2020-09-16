<template>
  <section id="details">
    <GoBack />
    <h1>repo detail!!</h1>
    <div v-for="branch in branches" :branch="branch" :key="branch.name">
      <p>{{branch.name}}</p>
    </div>
    <div v-for="commit in commits" :commit="commit" :key="commit.commit.author.date">
      <p>{{commit.commit.author}}</p>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import GoBack from "../components/GoBack";

export default {
  props: ["repoName"],
  components: {
    GoBack,
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
  },
  mounted() {
    this.$store.dispatch("getRepoBranches", this.repoName);
    this.$store.dispatch("getRepoCommits", this.repoName);
  },
};
</script>

<style>
</style>