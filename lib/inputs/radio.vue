<template lang="pug">
span
  div.custom-control.custom-radio(
    v-for="(val, ind) in formattedValues",
    :class="{'custom-control-inline': inline}"
  )
    input.custom-control-input(
      :id="`${uid}_${ind}`",
      type="radio",
      :name="name",
      :value="val.value",
      @change="onChange",
      :checked="val.value == realVal"
    )
    label.custom-control-label(:for="`${uid}_${ind}`")
      | {{val.name}}
</template>

<script>

import { snakeCase } from 'lodash';

import BasicInput from './_basic';

export default {

  extends: BasicInput,

  props: {
    value: {
      type: [Boolean, Number, String, Array],
      default: null,
    },
    values: {
      type: Array,
      required: true,
    },
    inline: {
      type: Boolean,
      default: false,
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
    formattedValues() {
      return this.values.map((value) => {
        if (typeof value === 'object') {
          return value;
        }
        return {
          name: value,
          value: snakeCase(value),
        };
      });
    },
  },

  methods: {
    setValue(value) {
      this.realVal = value;
    },
    onChange(e) {
      this.realVal = e.target.value;
      this.$emit('input', e.target.value, e);
      this.$emit('change', e.target.value, e);
    },
  },
  watch: {
    value(to) {
      this.realVal = to;
    },
  },
};
</script>
