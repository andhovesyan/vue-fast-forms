<template>
  <div class="datepicker">
    <div class="input-group">
      <slot name="before" v-if="!inline"></slot>
      <input
        :id="id"
        :type="inline ? 'hidden' : 'text'"
        class="form-control datepicker-input"
        :class="{readonly: readonly}"
        :name="name"
        @focus="showCalendar"
        @keydown.tab="close"
        :value="formattedValue"
        :placeholder="placeholder"
        :required="required"
        readonly
      >
      <slot name="after" v-if="!inline"></slot>
    </div>

    <div class="calendar" v-show="isOpen || debug" :class="className" :style="calendarStyle">
      <header>
        <span class="prev" @click="toPrev">&lt;</span>
        <span class="up" @click="up">{{header}}</span>
        <span class="next" @click="toNext">&gt;</span>
      </header>
      <component :is="currViewComp"
        :curr-date="currDate"
        :selected-date="selectedDate"
        @select-day="selectDate"
        @select-month="selectMonth"
        @select-year="selectYear"
      />
    </div>

  </div>
</template>

<script>
import moment from 'moment';

import daysView from './days';
import monthsView from './months';
import yearsView from './years';

export default {
  components: {
    daysView,
    monthsView,
    yearsView,
  },
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      default: 'MM/DD/YYYY',
    },
    disabled: {
      type: Object,
    },
    placeholder: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    value: [String, Object, Date],
    readonly: {
      type: Boolean,
      default: false,
    },
    debug: {
      type: Boolean,
      default: false,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currDate: moment(),
      selectedDate: moment(this.value, this.format),
      currView: null,
      weekdays: moment.weekdaysShort(true),
      formattedValue: null,
      calendarHeight: 0,
      form: null,
    };
  },
  computed: {
    className() {
      const classes = [`align-${this.align}`];
      if (this.inline) {
        classes.push('calendar-inline');
      }
      return classes;
    },
    calendarStyle() {
      if (this.currView !== 'day') {
        return {};
      }
      const elSize = this.$el ? this.$el.getBoundingClientRect() : 0;
      const heightNeeded = elSize.top + elSize.height + this.calendarHeight;
      let styles = {};
      if (heightNeeded > window.innerHeight) {
        styles = {
          bottom: `${elSize.height} px`,
        };
      }
      return styles;
    },
    isOpen() {
      return !!this.currView;
    },
    currViewComp() {
      const view = this.currView || 'day';
      return `${view}sView`;
    },
    header() {
      let header;
      if (this.currView === 'day') {
        header = this.currDate.format('MMM YYYY');
      } else if (this.currView === 'month') {
        header = this.currDate.format('YYYY');
      } else if (this.currView === 'year') {
        header = this.currDate.format('YYYY').replace(/.$/, "0's");
      }
      return header;
    },
    emitValue() {
      if (this.returnObject) {
        return this.selectedDate;
      }
      const value = this.selectedDate.format(this.format);
      return value;
    },
  },
  methods: {
    close() {
      this.currView = null;
    },
    showCalendar() {
      if (this.inline || this.readonly) {
        return false;
      }
      return (this.isOpen) ? this.close() : this.showDayCalendar();
    },
    toPrev() {
      if (this.currView === 'day') {
        this.currDate = moment(this.currDate.subtract(1, 'month'));
      } else if (this.currView === 'month') {
        this.currDate = moment(this.currDate.subtract(1, 'year'));
      } else if (this.currView === 'year') {
        this.currDate = moment(this.currDate.subtract(10, 'year'));
      }
    },
    toNext() {
      if (this.currView === 'day') {
        this.currDate = moment(this.currDate.add(1, 'month'));
      } else if (this.currView === 'month') {
        this.currDate = moment(this.currDate.add(1, 'year'));
      } else if (this.currView === 'year') {
        this.currDate = moment(this.currDate.add(10, 'year'));
      }
    },
    up() {
      if (this.currView === 'day') {
        this.currView = 'month';
      } else if (this.currView === 'month') {
        this.currView = 'year';
      }
    },
    showDayCalendar() {
      this.currView = 'day';
      this.$emit('opened');
    },
    selectDate(day) {
      if (day.isDisabled) {
        return false;
      }
      this.selectedDate = moment(day);
      this.$emit('selected', this.emitValue);
      this.$emit('input', this.emitValue);
      return (this.inline) ? this.showDayCalendar() : this.close();
    },
    selectMonth(month) {
      if (month.isDisabled) {
        return false;
      }
      this.currDate = month;
      this.showDayCalendar();
      return true;
    },
    selectYear(year) {
      if (year.isDisabled) {
        return false;
      }
      this.currDate = year;
      this.currView = 'month';
      return true;
    },
    setValue(value) {
      if (!value) {
        return;
      }
      this.selectedDate = moment(value, this.format);
    },
    setForm() {
      let form = this;

      do {
        form = form.$parent;
      } while (form.$el.tagName !== 'FORM' && form.$el !== this.$root.$el);

      if (form.$el.tagName !== 'FORM') {
        form = null;
      }
      this.form = form;
    },
  },
  mounted() {
    this.setForm();
    if (this.form) {
      this.form.$emit('input_added', this);
    }

    if (this.value) {
      this.selectedDate = moment(this.value, this.format);
    }
    if (this.inline) {
      this.showDayCalendar();
    }
    this.$nextTick(() => {
      this.calendarHeight = this.$el.querySelector('.calendar').getBoundingClientRect().height;
    });
    document.addEventListener('click', ({ target }) => {
      if (!this.$el.contains(target) && target !== this.$el && !this.inline) {
        this.close();
      }
    });
  },
  watch: {
    selectedDate(date) {
      this.currDate = moment(date);
      this.formattedValue = date.format(this.format);
    },
    value(date) {
      this.selectedDate = moment(date, this.format);
    },
  },
};
</script>

<style lang="scss">
$cell-width: 100% / 7;

.datepicker {
  position: relative;
}

.calendar {
  padding: 0 .5rem .5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 20rem;
  border: 1px solid #ccc;
  &.calendar-inline {
    position: static;
  }
  &.align-right {
    right: 0;
    float: right;
  }
  &.align-left {
    left: 0;
    float: left;
  }

  header {
    display: block;
    line-height: 40px;

    span {
      display: inline-block;
      text-align: center;
      width: calc(71.42857142857143% + 1rem);
      float: left;
    }

    .prev,
    .next {
      width: 14.285714285714286%;
      float: left;
      text-indent: -10000px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border: 6px solid transparent;
      }
    }

    .prev {
      margin-left: -.5rem;
      &:after {
        border-right: 10px solid #000;
        margin-left: -5px;
      }
      &.disabled:after {
        border-right: 10px solid #ddd;
      }
    }

    .next {
      margin-right: -.5rem;
      &:after {
        border-left: 10px solid #000;
        margin-left: 5px;
      }
      &.disabled:after {
        border-left: 10px solid #ddd;
      }
    }

    .prev:not(.disabled),
    .next:not(.disabled),
    .up:not(.disabled) {
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }

  .disabled {
    color: #ddd;
    cursor: default;
  }

  .cell {
    float: left;
    display: inline-block;
    padding: 0 5px;
    width: calc(14.28% - .25rem);
    margin: .125rem;
    height: 2.35rem;
    line-height: 2.3rem;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;

    &:not(.blank):not(.disabled) {
      &.day,
      &.month,
      &.year {
        cursor: pointer;
      }
    }

    &.day-header {
      font-size: 75%;
      cursor: inherit;
      &:hover {
        background: inherit;
      }
    }
  }

  .month,
  .year {
    width: calc(33.333% - .25rem);
  }
}
</style>
