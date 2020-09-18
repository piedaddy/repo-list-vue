<template>
  <section class="list">
    <div v-if="list.length !== 0 && !this.$store.state.isError">
     <List/>
    </div>
    <div v-else>
      sorry
      </div>
    <!-- {{ list.length ===0 ? "sorry":  -->
    <!-- {{this.$store.state.isError ? "error" : ""}}
    <h1 class="ml-3 ml-md-5">{{this.$store.state.userName}}'s Repository List</h1>
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
          class="detail-link"
          :to="{name:'detail', params: {repoName: item.name}}"
        >see details</router-link>
      </div>
    </div> -->
    <!-- }} -->
  </section>
</template>

<script>
import List from '../components/List';
export default {
  name: "repoList",
  components: {
    List
  },

  computed: {
    list() {
      return this.$store.state.list;
    },
    userName() {
      return this.$store.state.userName;
    },
  },
  mounted() {
    console.log('error status', this.$store.state.isError)
    this.$store.dispatch("getRepoList", this.$store.state.userName);
  },
};
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
// h1 {
//   margin-bottom: 1em;
//   color: $yellow;
//   text-transform: capitalize;
// }
// .list-container {
//   background: rgb(61, 64, 91);
//   background: linear-gradient(
//     0deg,
//     rgba(61, 64, 91, 1) 0%,
//     rgba(224, 123, 95, 0.781) 33%
//   );
// }

// .list-item {
//   border-radius: 0.2em;
//   box-shadow: 1px 1px 2px $warm-grey;

//   h3 {
//     height: 3em;
//     margin-bottom: 0;
//     overflow: scroll;
//     color: $yellow;
//   }

//   .lang {
//     margin-bottom: 0.5em;
//     font-style: italic;
//   }

//   span {
//     overflow: scroll;
//     font-weight: lighter;
//     @media (min-width: 320px) {
//       height: 5em;
//     }
//     @media (min-width: 576px) {
//       height: 7em;
//     }
//   }

//   .detail-link {
//     align-self: flex-end;
//     color: $green;
//     text-decoration: none;
//   }
//   .detail-link:hover {
//     color: $yellow;
//   }
// }
</style>