<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  height: inherit;
  background: #6e6e6e;
  display: block;
  padding-top: 10%;
}
</style>
