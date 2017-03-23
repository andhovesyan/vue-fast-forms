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
        :value="currTime.format(this.format)"
        :placeholder="placeholder"
        :required="required"
        readonly
      >
      <slot name="after" v-if="!inline"></slot>
    </div>

    <div class="calendar" v-show="isOpen && view === 'main'" :class="className" :style="calendarStyle">
      <div class="row align-items-center text-center">
        <div class="col">
          <button class="btn-arrow" @click="hours++">
            <i class="fa fa-chevron-up"></i>
          </button>
        </div>
        <div class="col col-auto align-self-center">
          &nbsp;
        </div>
        <div class="col">
          <button class="btn-arrow" @click="minutes++">
            <i class="fa fa-chevron-up"></i>
          </button>
        </div>
        <div class="col col-auto">
          <div class="part" style="width: 2.5rem">
            &nbsp;&nbsp;
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <div class="cell" @click="view = 'hours'">
            {{currTime.format('hh')}}
          </div>
        </div>
        <div class="col col-auto">
          :
        </div>
        <div class="col">
          <div class="cell" @click="view = 'hours'">
            {{currTime.format('mm')}}
          </div>
        </div>
        <div class="col col-auto">
          <div class="part" style="width: 2.5rem">
            {{currTime.format('A')}}
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button class="btn-arrow" @click="hours--">
            <i class="fa fa-chevron-down"></i>
          </button>
        </div>
        <div class="col col-auto align-self-center">
          &nbsp;
        </div>
        <div class="col">
          <button class="btn-arrow" @click="minutes--">
            <i class="fa fa-chevron-down"></i>
          </button>
        </div>
        <div class="col col-auto">
          <div class="part" style="width: 2.5rem">
            &nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>

    <div class="calendar p-2" v-show="view === 'hours'">
      <div class="row no-gutters">
        <div class="col-3 text-center" v-for="n in 12">
          <button class="cell hour" @click="hours = Number(n); view = 'main'">
            {{(n < 10) ? '0' + n : n}}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment';

export default {
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
      default: 'hh:mm A',
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
      default: true,
    },
  },
  data() {
    return {
      selectedDate: moment(this.value, this.format),
      view: null,
      weekdays: moment.weekdaysShort(true),
      formattedValue: null,
      calendarHeight: 0,
      form: null,
      hours: 0,
      minutes: 0,
    };
  },
  computed: {
    currTime() {
      return moment(`${this.hours}:${this.minutes}`, 'H:m');
    },
    selectedTime() {
      return moment(`${this.hours}:${this.minutes}`, 'H:m').format(this.format);
    },
    className() {
      const classes = [`align-${this.align}`];
      if (this.inline) {
        classes.push('calendar-inline');
      }
      return classes;
    },
    calendarStyle() {
      if (this.view !== 'day') {
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
      return !!this.view;
    },
    viewComp() {
      const view = this.view || 'day';
      return `${view}sView`;
    },
    header() {
      let header;
      if (this.view === 'day') {
        header = this.currDate.format('MMM YYYY');
      } else if (this.view === 'month') {
        header = this.currDate.format('YYYY');
      } else if (this.view === 'year') {
        header = this.currDate.format('YYYY').replace(/.$/, "0's");
      }
      return header;
    },
    emitValue() {
      const value = this.selectedDate.format(this.format);
      return value;
    },
  },
  methods: {
    close() {
      this.view = null;
    },
    showCalendar() {
      if (this.inline || this.readonly) {
        return false;
      }
      return (this.isOpen) ? this.close() : (this.view = 'main');
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
    hours(to) {
      if (to === 24 && this.minutes !== 0) {
        this.hours = 0;
      }
      if (to === -1) {
        this.hours = 23;
      }
    },
    minutes(to) {
      if (this.hours === 24 && to === 1) {
        this.hours = 0;
      }
      if (to === 60) {
        this.hours++;
        this.minutes = 0;
      }
      if (to === -1) {
        this.hours--;
        this.minutes = 59;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$cell-width: 100% / 7;

.datepicker {
  position: relative;
}

.calendar {
  padding: 0 1rem;
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
    font-size: 1.25rem;
    padding: 0;
    width: 100%;
    margin: 0;
    height: 2.35rem;
    line-height: 2.3rem;
    text-align: center;

    &.hour {
      background: transparent;
      font-size: 1rem;
      height: 3rem;
      width: calc(100% - 1rem);
      margin: .5rem;
    }

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
.btn-arrow {
  background: transparent;
  border-radius: .15rem;
  border: none;
  color: #337AB7;
  height: 2.25rem;
  line-height: 2.25rem;
  margin: .5rem 0;
  text-align: center;
  width: 100%;
  &:hover {
    background: #f0f0f0;
  }
}
</style>
