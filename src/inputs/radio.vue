<template>
<span>
  <label
    v-for="val in formattedValues"
    class="custom-control custom-radio"
    :class="{block: vertical}"
  >
    <input
      class="custom-control-input"
      type="radio"
      :name="name"
      :value="val.value"
      @change="onChange"
      :checked="val.value == realVal"
    >
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">
      {{val.name}}
    </span>
  </label>
</span>
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
    vertical: {
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
    onChange: (e) => {
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
