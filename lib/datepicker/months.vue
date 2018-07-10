<template>
  <div>
    <span class="cell month"
      v-for="month in months"
      :class="{selected: month.isSame(selectedDate, 'month')}"
      @click.stop="$emit('select-month', month)"
    >{{ month.format('MMM') }}</span>
  </div>
</template>

<script>

import moment from 'moment';

export default {

  name: 'datepicker-months',

  props: {
    currDate: null,
    selectedDate: null,
  },

  computed: {
    months() {
      let months = [];
      let dObj = moment(this.currDate).month(0);
      for (let i = 0; i < 12; i++) {
        months.push(moment(dObj));
        dObj.add(1, 'month');
      }
      return months;
    },
  },
};
</script>
