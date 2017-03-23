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

export default {

  name: 'datepicker-days',

  props: {
    currDate: null,
    selectedDate: null,
  },

  data() {
    return {
      weekdays: moment.weekdaysShort(true),
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
