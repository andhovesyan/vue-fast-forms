<template lang="pug">
  div.custom-control.custom-checkbox
    input(
      :id="uid",
      class="custom-control-input",
      type="checkbox",
      :name="name",
      :checked="isChecked",
      @change="onChange"
    )
    label.custom-control-label(:for="uid")
      slot
</template>

<script>

import BasicInput from './_basic';

export default {

  extends: BasicInput,

  props: {
    valueChecked: null,
    valueUnchecked: null,
    vfValue: null,
    checked: {
      type: Boolean,
    },
  },

  mounted() {
    this.setForm();

    if (this.form) {
      this.form.$emit('input_added', this);
    }
  },

  computed: {
    uid() {
      if (this.id) {
        return `${this.id}Input`;
      }
      return Math.random().toString(36).substring(7);
    },
    isChecked() {
      // if (typeof this.checked !== 'undefined') {
      //   return this.checked;
      // }
      if (Array.isArray(this.realVal)) {
        return this.realVal.indexOf(this.vfValue) !== -1;
      }
      if (this.valueChecked || this.valueUnchecked) {
        return this.realVal === this.valueChecked;
      }
      return this.realVal;
    },
  },

  methods: {
    setValue(value) {
      this.realVal = value;
    },
    onChange(event) {
      const checked = event.target.checked;
      let result = checked;
      if (Array.isArray(this.realVal)) {
        this.toggle();
        result = this.realVal;
      } else if (this.valueChecked || this.valueUnchecked) {
        result = (checked) ? this.valueChecked : this.valueUnchecked;
      }
      this.realVal = result;
      this.$emit('input', result);
      this.$emit('change', result);
    },
    toggle() {
      const index = this.realVal.indexOf(this.vfValue);
      if (index === -1) {
        this.realVal.push(this.vfValue);
      } else {
        this.realVal.splice(index, 1);
      }
    },
  },
  watch: {
    value(to) {
      this.realVal = to;
    },
  },
};
</script>
