<template>
  <div>
    <span class="cell year"
      v-for="year in years"
      :class="{selected: year.isSame(selectedDate, 'year')}"
      @click.stop="$emit('select-year', year)"
    >{{ year.year() }}</span>
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
    years() {
      let years = [];
      let dObj = moment(this.currDate);
      dObj.year(Math.floor(dObj.year() / 10) * 10);
      for (let i = 0; i < 10; i++) {
        years.push(moment(dObj));
        dObj.year(dObj.year() + 1);
      }
      return years;
    },
    decade() {
      let dObj = moment(this.currDate);
      dObj.year(Math.floor(dObj.year() / 10) * 10);
      return dObj.year() + '\'s';
    },
  },
};
</script>
