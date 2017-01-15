<template>
  <select class="custom-select" style="width: 100%;" @change="onChange" placeholder="Select">
    <option v-if="placeholder" selected disabled>{{placeholder}}</option>
    <option
      v-for="(option, ind) in compOptions"
      :value="option[optionValue]"
      :selected="realVal == option[optionValue]"
    >
      {{option[optionName]}}
    </option>
  </select>
</template>

<script>

import BasicInput from './_basic.vue';

export default {

  extends: BasicInput,

  props: {
    value: null,
    options: Array,
    optionValue: {
      type: String,
      default: 'value',
    },
    optionName: {
      type: String,
      default: 'name',
    },
    placeholder: {
      type: String,
    }
  },

  mounted() {
    this.setForm();

    if (this.form) {
      this.form.$emit('input_added', this);
    }
  },

  computed: {
    compOptions() {
      return this.options.map((option) => {
        if (typeof option !== 'object') {
          const value = option;
          option = {};
          option[this.optionValue] = value.toLowerCase().split(' ').join('_');
          option[this.optionName] = value;
        }
        return option;
      });
    }
  },

  methods: {
    setValue(value) {
      this.realVal = value;
    },
    onChange: function (e) {
      this.realVal = e.target.value;
      this.$emit('input', e.target.value, e);
      this.$emit('change', e.target.value, e);
    },
  },
};
</script>
