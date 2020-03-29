import days from './seed';

export default {
  state: {
    days,
  },
  getActiveDay() {
    return this.state.days.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.days.map((day) => {
      day.active = day.id === dayId;
      return day;
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({
      details: eventDetails,
      edit: false,
    });
  },
  resetEditOfAllEvents() {
    this.state.days.forEach((day) => {
      day.events.forEach((event) => {
        event.edit = false;
      });
    });
  },
  findEvent(dayId, eventDetails) {
    const day = this.state.days.find((d) => d.id === dayId);
    const event = day.events.find((e) => e.details === eventDetails);
    return event;
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const event = this.findEvent(dayId, eventDetails);
    if (event) {
      event.edit = true;
    }
  },
  updateEvent(dayId, eventDetails, newEventDetails) {
    const event = this.findEvent(dayId, eventDetails);
    if (event) {
      event.details = newEventDetails;
      event.edit = false;
    }
  },
  deleteEvent(dayId, eventDetails) {
    const day = this.state.days.find((d) => d.id === dayId);
    const eventIndex = day.events.findIndex((event) => event.details === eventDetails);
    day.events.splice(eventIndex, 1);
  },
};
