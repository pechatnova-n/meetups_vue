<template>
  <LayoutAuth title="Регистрация">
      <UiForm @submit.prevent="handleSubmit">
        <UiFormGroup label="Email">
      <UiInput v-model="email" name="email" type="email" required />
    </UiFormGroup>
        <UiFormGroup label="Имя">
      <UiInput v-model="fullname" name="fullname" required />
    </UiFormGroup>
        <UiFormGroup label="Пароль">
      <UiInput v-model="password" name="password" type="password" required minlength="6" />
    </UiFormGroup>
        <UiFormGroup label="Повтор пароля">
      <UiInput v-model="password2" type="password" required minlength="6" />
    </UiFormGroup>
        <UiFormGroup>
      <UiCheckbox v-model="agree" name="agree" required>Я согласен с условиями</UiCheckbox>
    </UiFormGroup>

    <template #buttons>
      <UiButton variant="primary" type="submit">Зарегистрироваться</UiButton>
    </template>

    <template #append>
      Уже есть аккаунт?
      <UiLink :to="{ name: 'login' }">Войдите</UiLink>
    </template>
  </UiForm>
  </LayoutAuth>
</template>

<script>
// TODO: Task 05-vue-router/01-AuthPages+
// TODO: Добавить именованные маршруты+
import {inject, ref} from 'vue';
import UiFormGroup from '../components/UiFormGroup.vue';
import UiInput from '../components/UiInput.vue';
import UiCheckbox from '../components/UiCheckbox.vue';
import UiLink from '../components/UiLink.vue';
import UiButton from '../components/UiButton.vue';
import UiForm from '../components/UiForm.vue';
import LayoutAuth from "@/components/LayoutAuth.vue";
import {router} from "@/router";
import {registerUser} from "@/api/authApi";

export default {
  name: 'PageRegister',

  components: {
    LayoutAuth,
    UiForm,
    UiButton,
    UiLink,
    UiCheckbox,
    UiInput,
    UiFormGroup,
  },

  setup() {
    // TODO: <title> "Регистрация | Meetups"+
    // TODO: Добавить LayoutAuth+

    const email = ref('');
    const fullname = ref('');
    const password = ref('');
    const password2 = ref('');
    const agree = ref(false);
    const toaster = inject('toaster');

    const validate = () => {
      if (password.value !== password2.value) {
        return 'Пароли не совпадают';
      }
      if (!agree.value) {
        return 'Требуется согласится с условиями';
      }
    };

    const handleSubmit = async () => {
      const validationError = validate();
      if (validationError) {
        // TODO: Вывести тост с текстом ошибки+
        return toaster().error(validationError);
      }

      /*
        TODO: Добавить обработчик сабмита
              - В случае успешной регистрации:
                - Перейти на страницу входа (Task 05-vue-router/01-AuthPages)+
                - Вывести тост "Регистрация выполнена успешно"+
              - В случае неуспешной регистрации:
                - Вывести тост с текстом ошибки с API+
       */

    const user = {
      email: email.value,
      fullname: fullname.value,
      password: password.value,
    }

      await registerUser({...user})
        .then(() => {
            router.push('login');
            toaster().success('Регистрация выполнена успешно');
        })
        .catch((err) => {
            toaster().error(err.message);
        })

    };

    return {
      email,
      fullname,
      password,
      password2,
      agree,
      handleSubmit,
    };
  },
};
</script>

<style scoped></style>
