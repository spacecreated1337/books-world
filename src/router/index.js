import {
  createRouter,
  createWebHistory
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksWorldView from "../views/BooksWorldView.vue";

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/booksworld',
    name: 'booksworld',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BooksWorldView
  },
];

const router = createRouter({
  history: createWebHistory('/books-world/'),
  routes
});

export default router;