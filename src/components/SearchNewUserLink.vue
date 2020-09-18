<template>
  <router-link
    class="nav-item"
    to="/"
    @click.native="setIsError(false), clearUserInfo()"
  >{{this.text}}</router-link>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "searchNewUserLink",
  props: ["text"],
  methods: {
    ...mapActions(["setIsError", "clearUserInfo"]),
  },
};
</script>

<style>
</style>