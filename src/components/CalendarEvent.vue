<template>
  <div class="day-event" :style="randomBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pen-square edit-icon" @click="editEvent(day.id, event.details)"></i>
        <i class="fa fa-trash-alt delete-icon" @click="deleteEvent(day.id, event.details)"></i>
      </div>
    </div>
    <div v-else>
      <input type="text" :placeholder="event.details" v-model="newEventDetails" required
        style="text-align: center;"/>
      <div class="has-text-centered icons"
        @click="updateEvent(day.id, event.details, newEventDetails)">
        <i class="fa fa-check"></i>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store';

export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object,
      required: true,
    },
    day: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newEventDetails: '',
    };
  },
  computed: {
    randomBackgroundColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${color};`;
    },
  },
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, eventDetails, newEventDetails) {
      if (newEventDetails.trim() === '') {
        store.updateEvent(dayId, eventDetails, eventDetails);
      } else {
        store.updateEvent(dayId, eventDetails, newEventDetails);
      }
      this.newEventDetails = '';
    },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    },
  },
};
</script>
<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;
  /* background-color: rgb(153, 255, 153); */

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
