import Vue from "vue";
import VueRouter from 'vue-router';
import RepoList from "../views/RepoList";
import RepoDetail from "../views/RepoDetail.vue";
import About from "../views/About.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Search from "../views/Search.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RepoList",
    component: RepoList,
    props: true
  },
  {
    path: "/detail",
    name: "detail",
    component: RepoDetail,
    props: true
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "*",
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
