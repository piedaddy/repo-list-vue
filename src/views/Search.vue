<template>
  <section class="search-container">
    <h1 class="pt-5 pb-3">Get Git</h1>
    <p class="mx-5">Type in any Github username</p>
    <p class="mx-3">and find the latest information about what they've been up to!</p>
    <div class="search d-flex flex-column align-items-center mt-5">
      <input class="search-box" v-model="userName" type="text" placeholder="Search" />
      <button class="button btn mt-4 mt-md-5" @click="setUserName(userName); returnHome()">Let's go!</button>
    </div>
    <!-- {{this.$store.state.list.length === 0 ? "Please pick another user": "wrong" }} -->
    <!-- <div>{{this.shouldShowErrMsg ? "Please pick a correct username" : ""}}</div> -->
    <Git />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Git from "../components/Git.vue"

export default {
  methods: {
    components: {
      Git
    },
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
        return this.$router.push("/list");
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

<style scoped lang="scss">
@import "../scss/custom.scss";

h1 {
  color: $yellow;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 4em;
  text-shadow: 2px 1px $eggshell;
  // border-bottom: 2px solid $yellow;
}

p {
  text-align: center;
  font-size: 1.4em;
  font-weight: lighter;
}

.search {
  input {
    border: none;
    box-shadow: 1px 1px 2px $yellow;
  }

  ::placeholder {
    color: $warm-grey;
    font-size: 0.8em;
    text-transform: uppercase;
  }
  
  input:focus {
    outline: none;
  }
  .search-box {
    text-align: center;
    outline: none;
    background-color: $yellow;
    color: $warm-grey;
    border-radius: 0.5em;
  

    @media(min-width: 320px) {
    font-size: 1.5em;

    }
  }

  .button {
    font-size: 1em;
  }
}
// p {
//   font-size: 2em;
// }
</style>