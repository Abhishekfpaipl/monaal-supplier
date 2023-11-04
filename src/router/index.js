import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "DashboardPage",
    component: ()=> import('@/views/DashboardPage.vue'),
  },
  {
    path: "/orders",
    name: "OrderListPage",
    component: ()=> import('@/views/OrderListPage.vue'),
  },
  {
    path: "/bills",
    name: "BillsListPage",
    component: ()=> import('@/views/BillsListPage.vue'),
  },
  {
    path: "/chat",
    name: "ChatPage",
    component: ()=> import('@/views/ChatPage.vue'),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ()=> import('@/views/ProfilePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
