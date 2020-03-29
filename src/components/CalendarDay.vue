<template>
  <div class="day column" :class="{active: day.active}" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-white has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">
        <span>{{ day.id }}</span>
      </div>
      <CalendarEvent v-for="(event, index) in day.events" :key="index" :event="event" :day="day" />
    </div>
  </div>
</template>

<script>
import store from '../store';
import CalendarEvent from './CalendarEvent.vue';

export default {
  name: 'CalendarDay',
  components: {
    CalendarEvent,
  },
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      //
    };
  },
  methods: {
    setActiveDay(id) {
      store.setActiveDay(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  padding: 0 0 0 0;
}

.day {
  background-color: #4A4A4A;
  color: #FFF;
  border-left: 1px solid #8F8F8F;
  border-bottom: 1px solid #8F8F8F;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: darken(#4A4A4A,3%);
  }

  .day-banner {
    background-color: #333333;
    color: #FFF;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }

  .day-details {
    padding: 10px;

    .day-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.7em;
      height: 1.7em;
      border-radius: 50%;
    }
  }

  &:last-child {
    border-right: 1px solid #8F8F8F;
  }

  &.active {
    .day-number {
      background: #fff;
      color: blue;
    }
  }
}
</style>
