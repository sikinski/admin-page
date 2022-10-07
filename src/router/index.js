import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import StatView from "../views/StatView.vue";

import ProjectsITView from "../views/ProjectsITView.vue";
import ArbitrazView from "../views/ArbitrazView";
import TGChannelsView from "../views/TGChannelsView";
import WorkersView from "../views/WorkersView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    redirect: "/projects/IT",
    children: [
      {
        path: "IT",
        name: "IT",
        component: ProjectsITView,
      },
      {
        path: "arbitraz",
        name: "Arbitraz",
        component: ArbitrazView,
      },
      {
        path: "tg",
        name: "Telegram Channels",
        component: TGChannelsView,
      },
    ],
  },
  {
    path: "/stats",
    name: "Statistics",
    component: StatView,
  },
  {
    path: "/workers",
    name: "Workers",
    component: WorkersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
