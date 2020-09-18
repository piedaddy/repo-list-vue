<template>
  <section id="search-container">
    <h1 class="pt-5 pb-3">Get Git</h1>
    <p class="mx-5">Type in any Github username</p>
    <p class="mx-3">and find the latest information about what they've been up to!</p>
    <div class="search d-flex flex-column align-items-center mt-5">
      <input
        class="search-box"
        v-model="username"
        @input="handleErrChange"
        type="text"
        placeholder="Search"
      />
      <button
        class="button btn mt-4 mt-md-5"
        @click="setUserName(username); checkForError()"
      >Let's go!</button>
    </div>
    <p
      class="error-text text-center mt-2"
    >{{this.shouldShowErrMsg ? "Please write a username!" : ""}}</p>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      username: "",
      shouldShowErrMsg: false,
      isError: this.$store.state.isError,
      list: this.$store.state.list,
    };
  },
  methods: {
    ...mapActions(["setUserName", "setIsError"]),

    checkForError() {
      if (this.username.length === 0) {
        this.shouldShowErrMsg = true;
        return;
      } else {
        this.returnHome();
      }
    },
    returnHome() {
      return this.$router.push("/list");
    },
    handleErrChange() {
      this.shouldShowErrMsg = false;
    },
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

    @media (min-width: 320px) {
      font-size: 1.5em;
    }
  }

  .button {
    font-size: 1em;
  }
}
.error-text {
  color: $green;
  font-weight: bold;
  font-size: 0.8em;
}
</style>