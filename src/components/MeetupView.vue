<template>
  <div>
    <MeetupCover :title="meetup.title" :image="meetup.image" />

    <UiContainer>
      <div class="meetup">
        <div class="meetup__content">
          <slot />
        </div>
        <div class="meetup__aside">
          <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
          <!-- TODO: Добавить проверку на аутентификацию и является ли пользователь организатором митапа -->
          <!-- TODO: Реализовать кнопки (некоторые должны быть ссылками)+ -->
          <div class="meetup__aside-buttons">
            <!-- TODO: Может добавить тут слот? -->
            <RouterLink :to="{ name: 'editMeetup', params: { meetupId: meetup.id } }" >
              <UiButton variant="primary" class="meetup__aside-button">Редактировать</UiButton>
            </RouterLink>
            <UiButton variant="danger" class="meetup__aside-button" @click="deleteMeetup">Удалить</UiButton>
            <UiButton variant="secondary" class="meetup__aside-button" @click="deleteParticipate">Отменить участие</UiButton>
            <UiButton variant="primary" class="meetup__aside-button" @click="participate"> Участвовать </UiButton>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script>
import MeetupCover from './MeetupCover.vue';
import MeetupInfo from './MeetupInfo.vue';
import UiContainer from './UiContainer.vue';
import UiButton from './UiButton.vue';
import {attendMeetup, deleteMeetup, leaveMeetup, putMeetup} from "@/api/meetupsApi";
import {inject} from "vue";
import {router} from "@/router";

export default {
  name: 'MeetupView',

  components: {
    UiButton,
    MeetupCover,
    MeetupInfo,
    UiContainer,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    // TODO: Добавить обработку кнопок, включая работу с API+
    /*
      TODO: Добавить тосты при успешных операциях
            - Митап удалён+
            - Сохранено+
            - Текст ошибки в случае ошибки на API+
     */
    // TODO: Будет плюсом блокировать кнопку на время загрузки


    const toaster = inject('toaster');

    const participate = async () => {
      await attendMeetup(props.meetup.id)
        .then(() => {
          toaster().success('Вы добавлены в участники митапа');
        })
        .catch((e) => {
          toaster().error(e.message);
        })
    }

    const deleteParticipate = async () => {
      await leaveMeetup(props.meetup.id)
      .then(() => {
          toaster().success('Вы удалены из участников митапа');
        })
          .catch((e) => {
            toaster().error(e.message);
          })
    }

    const deleteMeetup = async () => {
      console.log('delete')
        await deleteMeetup(props.meetup.id)
          .then(() => {
            toaster().success('Митап удален');
            router.push({ name: 'index' });
          })
          .catch((e) => {
            toaster().error(e.message);
          })
    }

    return {
      participate,
      deleteParticipate,
      deleteMeetup,
    }
  },
};
</script>

<style scoped>
.meetup {
  display: flex;
  flex-direction: column;
  margin: 48px 0 0;
}

.meetup__content {
}

.meetup__aside {
  margin: 40px 0;
}

.meetup__aside-buttons {
  padding: 0 0 0 34px;
  margin-top: 16px;
}

.meetup__aside-button {
  margin: 0 10px 10px 0;
}

@media all and (min-width: 992px) {
  .meetup {
    flex-direction: row;
  }

  .meetup__content {
    flex: 1 0 calc(100% - 350px);
  }

  .meetup__aside {
    flex: 1 0 350px;
    padding: 50px 0 0 44px;
    margin: 0;
  }
}
</style>
