<template>
  <ul class="meetup-info">
    <li>
      <UiIcon class="meetup-info__icon" icon="user" />
      {{ organizer }}
    </li>
    <li>
      <UiIcon class="meetup-info__icon" icon="map" />
      {{ place }}
    </li>
    <li>
      <UiIcon class="meetup-info__icon" icon="cal-lg" />
      <time :datetime="formatDateAsIso(date)">{{ formatDate(date) }}</time>
    </li>
  </ul>
</template>

<script>
// TODO: Task 02-components/03-MeetupInfo +
// TODO: Add <UiIcon> +
// TODO: Add date utils +

import UiIcon from "@/components/UiIcon.vue";
import {formatAsIsoDate, formatAsLocalDate} from "@/utils/dateUtils";

export default {
  name: 'MeetupInfo',
  components: {UiIcon},

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    }
  },

  setup() {
    const formatDateAsIso = (date) => {
      return formatAsIsoDate(date);
    }

    const formatDate = (date) => {
      return formatAsLocalDate(date);
    }

    return {
      formatDateAsIso,
      formatDate,
    }
  }

};
</script>

<style scoped>
/* _meetup-info.css */

.meetup-info {
  margin: 0;
  padding: 0;
}

.meetup-info li {
  list-style-type: none;
  position: relative;
  padding-left: 36px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.meetup-info li:last-child {
  margin: 0;
}

.meetup-info__icon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
