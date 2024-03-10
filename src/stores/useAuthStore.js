import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {getUser} from "@/api/authApi";


export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);


  const setUser = (value) => {
    user.value = value;
  };

  // TODO: Добавить метод актуализации данных пользователя с API+

  const updateUser = async () => {
    await getUser()
      .then((res) => {
          setUser(res.data);
      })
      .catch(e => {
        setUser(null);
        console.log(e.message);
      });
  }

  return {
    user,
    isAuthenticated,
    setUser,
    updateUser,
  };
});
