<template>
  <section id="list">
    <h1>Repository List</h1>
    <div v-for="item in list" :item="item" :key="item.id">
      <p>{{item.id}}</p>
      <p>{{item.description}}</p>
      <div>{{ item.language ? `Written in ${item.language}` : null}}</div>
      <router-link :to="{name:'detail', params: {repoName: item.name}}">see detail</router-link>
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

<style scoped>
</style>