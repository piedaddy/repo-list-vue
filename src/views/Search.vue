<template>
  <div>
    <div>Search</div>
    <input v-model="userName" type="text" placeholder="Search" />
    <button @click="setUserName(userName); returnHome()">Search user's repositories</button>
    <!-- {{this.$store.state.list.length === 0 ? "Please pick another user": "wrong" }} -->
    <!-- <div>{{this.shouldShowErrMsg ? "Please pick a correct username" : ""}}</div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // computed: {
    //   userName() {
    //     return this.$store.state.userName;
    //   },
    //  },
    // data: {
    //   shouldShowErrMsg: false,
    // },
    ...mapActions(["setUserName"]),
    returnHome() {
      if (!this.$store.state.userName) {
        console.log("pick a user");
      }
  
      // else if (this.$store.state.userName && this.$store.state.list.length === 0) {
      //   this.correctName();
      // }
      else {
        // this.shouldShowErrMsg = false;
        return this.$router.push("/");
      }
    },
    checkUserName() {
      this.$store.state.list.length === 0
        ? "Please pick another user"
        : "wrong";
    },
    correctName() {
      //this.shouldShowErrMsg = true;
      console.log("correctName working");
    },
  },
  mounted() {
    console.log(this.userName);
  },
};
</script>

<style>
</style>