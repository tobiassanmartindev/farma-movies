const routes = [
  {
    path: "/movies",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/movies",
        component: () => import("pages/MoviesPage.vue"),
      },
      {
        path: "/movies/:id",
        component: () => import("pages/MovieDetail.vue"),
      },
      {
        path: "/search",
        component: () => import("pages/Search.vue"),
      },
      {
        path: "/series",
        component: () => import("pages/SeriesPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/LoginPage.vue"),
  },
];

export default routes;
