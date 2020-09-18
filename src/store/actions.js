import axios from "axios";
const repoListURL = "https://api.github.com/users/";
const repoDetailURL = "https://api.github.com/repos/";
const limit = 10;

export const getRepoList = ({ commit }, userName) => {
  commit("SET_IS_ERROR", false);
  axios
    .get(`${repoListURL}${userName}/repos`)
    .then((response) => {
      commit("SET_REPO_LIST", response.data);
    })
    .catch((err) => {
      if (err.response.status) {
        commit("SET_IS_ERROR", true);
        console.log("err status", err.response.status);
      }
    });
};

export const getRepoBranches = ({ commit }, payload) => {
  axios
    .get(`${repoDetailURL}${payload.userName}/${payload.repoName}/branches`)
    .then((response) => {
      commit("SET_REPO_BRANCHES", response.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log("repository branch request error", err.response);
      }
    });
};

export const getRepoCommits = ({ commit }, payload) => {
  axios
    .get(
      `${repoDetailURL}${payload.userName}/${payload.repoName}/commits?per_page=${limit}`
    )
    .then((response) => {
      commit("SET_REPO_COMMITS", response.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log("repository commit request error", err.response);
      }
    });
};

export const setUserName = async ({ commit }, userName) => {
  await commit("SET_USER_NAME", userName);
};

export const setIsError = ({ commit }, isError) => {
  commit("SET_IS_ERROR", isError);
};

export const clearUserInfo = ({ commit }) => {
  commit("SET_REPO_LIST", []);
};
