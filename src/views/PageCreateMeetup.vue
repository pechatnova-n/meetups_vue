<template>
  <LayoutMeetupForm title="Создание митапа">
    <MeetupForm :meetup="meetup" submitText="Создать" @submit="sendNewMeetup"  @cancel="cancelForm" />
  </LayoutMeetupForm>
</template>

<script>
import { ref } from 'vue';
import MeetupForm from '../components/MeetupForm.vue';
import { createMeetup } from '@/services/meetupService.js';
import LayoutMeetupForm from "@/components/LayoutMeetupForm.vue";
import {postMeetup} from "@/api/meetupsApi";
import {router} from "@/router";


export default {
  name: 'PageCreateMeetup',

  components: {
    LayoutMeetupForm,
    MeetupForm,
  },

  setup() {
    // TODO: title "Создание митапа | Meetups"+
    // TODO: Добавить LayoutMeetupForm+
    const meetup = ref(createMeetup());



    const sendNewMeetup = async (meetup) => {
      await postMeetup(meetup)
        .then((res) => {
          router.push({ name: "meetup", params: { meetupId: res.data.id} });
        })
        .catch(e => console.log(e.message));

    }

    const cancelForm = () => {
      router.push({ name: 'index'});
    }

    // TODO: При сабмите формы создания митапа - добавить его через API и перейти на страницу созданного митапа+
    // TODO: При нажатии на "Отмена" вернуться на главную страницу+

    return {
      meetup,
      sendNewMeetup,
      cancelForm,
    };
  },
};
</script>

<style scoped></style>
