import {useAuthStore} from "@/stores/useAuthStore";
import {computed} from "vue";


/** @implements {import('vue-router').NavigationGuard} */

export function authGuard(to) {
  // TODO: Task AuthGuard
  const authStore = useAuthStore();
  const isAuthenticated = computed(() => authStore.isAuthenticated);

    if (to.meta.requireGuest && isAuthenticated) {
      return {
        name: 'index',
      }
    } else if (to.meta.requireAuth && !isAuthenticated.value) {
      return {
        name: 'login',
        query: { from: to.fullPath },
      }
    }

  return true;
}
