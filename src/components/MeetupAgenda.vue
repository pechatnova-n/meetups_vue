<template>
  <ul class="agenda" >
    <li v-for="item in agenda" :key="item.id" class="agenda__item" >
      <MeetupAgendaItem :agenda-item="item"  />
    </li>
  </ul>
</template>

<script>
// TODO: Task 02-components/05-MeetupAgenda +

import MeetupAgendaItem from "@/components/MeetupAgendaItem.vue";

export default {
  name: 'MeetupAgenda',

  components: {MeetupAgendaItem},

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* _agenda.css */
.agenda {
  margin: 0;
  padding: 0;
  list-style: none;
}

.agenda__item {
  border-top: 1px solid var(--grey-3);
}

.agenda__item:first-child {
  border-top: none;
}
</style>
