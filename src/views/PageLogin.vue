<template>
  <LayoutAuth title="Вход">
    <UiForm @submit.prevent="handleSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" type="email" placeholder="demo@email" required />
      </UiFormGroup>
      <UiFormGroup label="Пароль">
        <UiInput v-model="password" name="password" type="password" placeholder="password" required />
      </UiFormGroup>


      <template #buttons>
        <UiButton variant="primary" type="submit" block>Войти</UiButton>
      </template>

      <template #append> Нет аккаунта? <UiLink :to="{ name: 'register' }" class="link">Зарегистрируйтесь</UiLink> </template>

    </UiForm>
  </LayoutAuth>
</template>

<script>
// TODO: Task 05-vue-router/01-AuthPages+
// TODO: Добавить именованные маршруты+

import {inject, ref} from 'vue';
import UiFormGroup from '../components/UiFormGroup.vue';
import UiLink from '../components/UiLink.vue';
import UiInput from '../components/UiInput.vue';
import UiButton from '../components/UiButton.vue';
import UiForm from '../components/UiForm.vue';
import LayoutAuth from "@/components/LayoutAuth.vue";
import {useAuthStore} from "@/stores/useAuthStore";
import {router} from "@/router";
import {loginUser} from "@/api/authApi";
import {setLocalSession} from "@/services/authService";

export default {
  name: 'PageLogin',

  components: {
    LayoutAuth,
    UiForm,
    UiButton,
    UiInput,
    UiLink,
    UiFormGroup,
  },



  setup() {
    // TODO: <title> "Вход | Meetups"+
    // TODO: Добавить LayoutAuth+

    /*
      TODO: Добавить обработчик сабмита
            - В случае успешной аутентификации:
              - Перейти на главную страницу или from (Task 05-vue-router/01-AuthPages)+
              - Вывести тост "Авторизация прошла успешно"+
            - В случае неуспешной аутентификации:
              - Вывести тост "Неверные учётные данные..."+
     */

    const email = ref('');
    const password = ref('');
    const toaster = inject('toaster');
    const authStore = useAuthStore();

    const handleSubmit = async () => {
      await loginUser(email.value, password.value)
        .then((res) => {
          if(res.success === true) {
              authStore.updateUser();
              setLocalSession('user', res.data.fullname)
              router.push('/');
              toaster().success('Авторизация прошла успешно');
          } else {
            return toaster().error('Неверные учётные данные...');
          }
        })
        .catch(err => toaster().error(err.message));
    }



    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style scoped></style>
