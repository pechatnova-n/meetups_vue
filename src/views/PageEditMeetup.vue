<template>
  <LayoutMeetupForm v-if="meetup" :title="meetup.title">
    <MeetupForm :meetup="meetup" submit-text="Сохранить" @cancel="cancelEditMeetup"  @submit="submitForm"/>
  </LayoutMeetupForm>
  <UiContainer v-else>
    <UiAlert>Загрузка...</UiAlert>
  </UiContainer>
</template>

<script>
import {onMounted, ref} from 'vue';
import MeetupForm from '../components/MeetupForm.vue';
import UiAlert from '../components/UiAlert.vue';
import UiContainer from '../components/UiContainer.vue';
import LayoutMeetupForm from "@/components/LayoutMeetupForm.vue";
import {getMeetup, putMeetup} from "@/api/meetupsApi";
import {router} from "@/router";

export default {
  name: 'PageEditMeetup',

  components: {
    LayoutMeetupForm,
    UiAlert,
    UiContainer,
    MeetupForm,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },


  setup(props) {
    // TODO: <title> "Редактирование митапа | Meetups"+
    // TODO: Добавить LayoutMeetupForm+


    const meetup = ref(null);

      getMeetup(props.meetupId)
        .then((res) => {
          meetup.value = {...res.data};
        })
        .catch(e => console.log(e.message))




    const cancelEditMeetup = () => {
      router.go(-1);
    }

    const submitForm = async (event) => {
      meetup.value = { ...event };

        await putMeetup(props.meetupId, meetup.value)
          .then((res) => {
            router.push({ path: `/meetups/${props.meetupId}` })
            //router.push({ name: 'meetups', params: { meetupId: props.meetupId } });
          })
          .catch(e => console.log(e.message))

    }


    // TODO: При сабмите формы редактирования митапа - обновить его через API и перейти на страницу изменённого митапа+
    // TODO: При нажатии на "Отмена" вернуться на страницу этого митапа+

    return {
      meetup,
      cancelEditMeetup,
      submitForm,
    };
  },
};
</script>

<style scoped></style>
