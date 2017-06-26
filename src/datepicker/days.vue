<template>
  <div>
    <span class="cell day-header" v-for="d in weekdays">{{ d }}</span>
    <span class="cell day blank" v-for="d in blankDays"></span>
    <span class="cell day"
      v-for="day in days"
      :class="{selected: day.isSame(selectedDate, 'day')}"
      @click="$emit('select-day', day)"
    >{{ day.date() }}</span>
  </div>
</template>

<script>

import moment from 'moment';
moment.locale('en', {
  week: {
      dow: 1,
  }
});

export default {

  name: 'datepicker-days',

  props: {
    currDate: null,
    selectedDate: null,
    weekFirstDay: {
      type: String,
      default: 'Mon',
    },
  },

  data() {
    let weekdays;
    switch (this.weekFirstDay) {
      case ('Mon'):
        weekdays = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]
        break;
      case ('Sat'):
        weekdays = [ "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri" ]
        break;
      case ('Sun'):
        weekdays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        break;
    }
    return {
      weekdays,
    };
  },

  computed: {
    days() {
      const days = [];
      const dObj = moment(this.currDate).date(1);
      const daysInMonth = dObj.daysInMonth();
      for (let i = 0; i < daysInMonth; i++) {
        days.push(moment(dObj));
        dObj.add(1, 'day');
      }
      return days;
    },
    blankDays() {
      return moment(this.currDate).startOf('month').weekday();
    },
  },
  methods: {
    isSelectedDate(date) {
      if (!this.selectedDate) {
        return false;
      }
      return this.selectedDate.isSame(date, 'day');
    },
  },
};
</script>
