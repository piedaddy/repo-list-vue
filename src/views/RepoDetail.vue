<template>
  <section class="ml-md-5">
    <ReturnHome />
    <h3 class="mx-3 pb-3 mt-3 mt-md-0">
      {{this.repoName}}'s
      <small>details</small>
    </h3>
    <!-- <div class="details d-flex justify-content-around"> -->
    <div class="details mx-3">
      <section class="details__branches">
        <h5>Branches</h5>
        <div class="branch mt-2" v-for="branch in branches" :branch="branch" :key="branch.name">
          <img src="../assests/git-branch.png" alt="git branch" />
          <p>{{branch.name}}</p>
        </div>
      </section>
      <section class="details__commits">
        <h5>Commit History</h5>
        <ol>
          <li v-for="commit in commits" :commit="commit" :key="commit.commit.author.date">
            <span>{{commit.commit.message}}</span>
            <p class="name">
              <span>Authored by</span>
              {{commit.commit.author.name}}
            </p>
            <p class="date">Last updated on {{getDate(commit.commit.author.date)}}</p>
          </li>
        </ol>
      </section>
    </div>
    <ReturnHome />
  </section>
</template>

<script>
// import { mapActions } from "vuex";
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
    userName() {
      return this.$store.state.userName;
    }
  },
  methods: {
    // ...mapActions(["getRepoBranches", "getRepoCommits"]), why is this here lol
    getDate: function (date) {
      return moment(date).format("MMMM Do YYYY [at] h:mm:ss a");
    },
  },
  mounted() {
    const payload = {repoName: this.repoName, userName: this.userName}
    this.$store.dispatch("getRepoBranches", payload)
    this.$store.dispatch("getRepoCommits", payload);
    console.log('username', this.userName)
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
// body {
//   background: rgb(129,178,154);
// background: linear-gradient(0deg, rgba(129,178,154,1) 0%, rgba(61,64,91,1) 32%);
// }

h3 {
  color: $yellow;
}

h5 {
  color: $green;
  border-bottom: 2px solid $green;
  text-transform: uppercase;
  margin-bottom: 0.8em;
  // border-bottom: 0.5em solid $pink;
}

.details {
  ol {
    margin-left: 1em;
  }
  // height: 100vh;
  // width: 100vw;
  // background: rgb(61, 64, 91);
  // background: linear-gradient(
  //   0deg,
  //   rgba(61, 64, 91, 1) 0%,
  //   rgba(224, 122, 95, 0.6713060224089635) 33%
  // );
  section {
    margin-bottom: 2em;
  }

  &__branches {
    // width: 100vw;
    // height: 100vh;
    // background: rgb(61, 64, 91);
    // background: linear-gradient(
    //   0deg,
    //   rgba(61, 64, 91, 1) 0%,
    //   rgba(224, 122, 95, 0.6713060224089635) 33%
    // );
    .branch {
      display: flex;
    }
    img {
      width: 2em;
      height: 2em;
    }
  }

  &__commits {
    // width: 100vw;
    // height: 100vh;
    // background: rgb(61, 64, 91);
    // background: linear-gradient(
    //   0deg,
    //   rgba(61, 64, 91, 1) 0%,
    //   rgba(224, 122, 95, 0.6713060224089635) 33%
    // );

    span {
      font-weight: bold;
    }
    li {
      margin-bottom: 2em;
      line-height: 1.6em;
    }
    span,
    li {
      color: $yellow;
    }
    .name {
      text-transform: uppercase;
      margin-bottom: 0;

      span {
        text-transform: none;
        font-weight: normal;
        color: $eggshell;
      }
    }
    .date {
      font-style: italic;
    }
  }
}
</style>