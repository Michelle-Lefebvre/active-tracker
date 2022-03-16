import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Create from '../views/Create.vue';
import ViewWorkout from '../views/ViewWorkout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home' // displays in browser tab
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      title: 'Create'
    }
  },
  {
    path: '/view-workout/:workoutId',
    name: 'View-Workout',
    component: ViewWorkout,
    meta: {
      title: 'Workouts'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active Tracker`;
  next();
});

// Route guard for auth routes

export default router;
