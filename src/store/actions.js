import axios from "axios";
// const repoListURL = "https://api.github.com/users/Inza/repos";
const repoListURL = "https://api.github.com/users/";
const repoDetailURL = "https://api.github.com/repos/Inza";
const limit = 10;
// const userName="Inza";

export const getRepoList = ({ commit }, userName) => {
  axios.get(`${repoListURL}${userName}/repos`).then((response) => {
    commit("SET_REPO_LIST", response.data);
    console.log("list response", response.data);
  });
};

export const getRepoBranches = ({ commit }, repoName) => {
  axios.get(`${repoDetailURL}/${repoName}/branches`).then((response) => {
    commit("SET_REPO_BRANCHES", response.data);
    console.log("branches repsonse", response.data);
  });
};

export const getRepoCommits = ({ commit }, repoName) => {
  axios.get(`${repoDetailURL}/${repoName}/commits?per_page=${limit}`).then((response) => {
    commit("SET_REPO_COMMITS", response.data);
    console.log("commits repsonse", response.data);
  });
};

export const setUserName = ({commit}, userName) => {
  commit("SET_USER_NAME", userName)
}