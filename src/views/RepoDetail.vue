<template>
  <section class=" ml-md-5">
    <ReturnHome />
    <h3 class="mx-3 pb-3 mt-3 mt-md-0">
      {{this.repoName}}'s
      <small>details</small>
    </h3>
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
        <ol class="ml-3">
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
    getDate: function (date) {
      return moment(date).format("MMMM Do YYYY [at] h:mm:ss a");
    }
  },
  mounted() {
    const payload = { repoName: this.repoName, userName: this.userName };
    this.$store.dispatch("getRepoBranches", payload);
    this.$store.dispatch("getRepoCommits", payload);
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";

h3 {
  color: $yellow;
}

h5 {
  color: $green;
  border-bottom: 2px solid $green;
  text-transform: uppercase;
  margin-bottom: 0.8em;
}

.details {

  section {
    margin-bottom: 2em;
  }

  &__branches {
    .branch {
      display: flex;
    }
    img {
      width: 2em;
      height: 2em;
    }
  }

  &__commits {
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