<template>
<div class="input-group">
  <slot name="before"></slot>
  <input
    :id="id"
    class="form-control"
    :class="inputClass"
    :type="type"
    :name="name"
    :value="realVal"
    :placeholder="placeholder"
    :pattern="pattern"
    :autofocus="autofocus"
    :required="required"
    :readonly="readonly"
    @input="onInput"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @reset="onReset"
    ref="input"
  />
  <slot name="after"></slot>
</div>
</template>

<script>

import BasicInput from './_basic';

export default {

  extends: BasicInput,

  props: {
    size: {
      type: String,
    },
    state: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    pattern: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Function,
      default: () => [],
    },
  },
  data() {
    return {
      isValid: true,
      touched: (this.value) ? !!this.value.length : false,
      realVal: this.value,
    };
  },
  mounted() {
    this.setForm();
    if (this.$refs.input) {
      this.isValid = this.$refs.input.validity.valid;
    }
    if (this.form) {
      this.form.$emit('input_added', this);
    }
  },
  computed: {
    currState() {
      if (!this.touched) {
        return this.state;
      }
      if (this.isValid) {
        return 'success';
      }
      return 'danger';
    },
    inputClass() {
      const classes = [];
      if (this.size) {
        classes.push(`form-control-${this.size}`);
      }
      if (this.currState) {
        classes.push(`form-control-${this.currState}`);
      }
      if (this.block) {
        classes.push('form-text');
      }
      return classes;
    },
  },
  methods: {
    setValue(value) {
      this.realVal = value;
      this.isValid = this.$refs.input.validity.valid;
    },
    onInput(event) {
      if (this.readonly) {
        return;
      }
      let value = event.target.value;
      if (this.type === 'number') {
        value = Number(value);
      }
      this.realVal = value;

      this.touched = true;
      this.isValid = this.$refs.input.validity.valid;
      this.$emit('input', value, event);
    },
    onFocus(event) {
      if (this.readonly) {
        event.target.select();
      }
      this.$emit('focus', event);
    },
    onKeyUp(event) {
      this.$emit('keyup', event);
    },
    onKeyDown(event) {
      this.$emit('keydown', event);
    },
    onReset(event) {
      this.$emit('reset', event);
    },
  },
  watch: {
    currState() {
      this.$parent.$emit('new_state', this.currState);
      if (this.form) {
        this.form.$emit('changed', this);
      }
    },
  },
};
</script>
