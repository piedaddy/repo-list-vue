import axios from "axios";
const repoListURL = "https://api.github.com/users/Inza/repos";

export default sample = {
  // namespaced: true,
  state: {
    repositories: [],
  },

  mutations: {},

  actions: {
    // getRepoList = async () => {
    //   const response = await fetch(repoListURL);
    //   const data = await response.json();
    //   console.log('response', response, 'data', data)
    // }
    getRepoList() {
      axios.get(repoListURL).then((response) => {
        console.log("response", response.json());
        // commit('SET_REPO_LIST', response.json())
      });
    },

    // isATest () {
    //   console.log('test working!')
    // }
  },

  getters: {
    getterTest() {
      console.log("getter");
    },
  },
};
