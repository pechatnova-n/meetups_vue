<template>
  <UiCalendarView v-slot="{ timestamp }">
    <UiCalendarEvent
      v-for="meetup in meetupsByDate[timestamp]"
      :key="meetup.id" tag="a"
      :href="`/meetups/${meetup.id}`">
      {{ meetup.title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from "@/components/UiCalendarEvent.vue";
import {computed} from "vue";

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const meetupsByDate = computed(() => {
      const result = {};
      for (const meetup of props.meetups) {
        if (!result[meetup.date]) {
          result[meetup.date] = [meetup];
        } else {
          result[meetup.date].push(meetup);
        }
      }
      return result;
    })

    return {
      meetupsByDate,
    }
  }
};
</script>

<style scoped>
.holiday {
  font-weight: bold;
  color: var(--red);
}
</style>

