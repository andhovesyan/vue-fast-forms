<template>
  <fieldset class="form-group" :class="groupClass">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </fieldset>
</template>

<script>

export default {
  props: {
    label: String,
  },
  created() {
    this.$on('new_state', (state) => {
      this.state = state;
    });
  },
  data() {
    return {
      isValid: true,
      touched: (this.value) ? !!this.value.length : false,
      group: this,
      state: null,
    };
  },
  computed: {
    groupClass() {
      const classes = [];
      if (this.size) {
        classes.push('form-group-' + this.size);
      }
      if (this.state) {
        classes.push('has-' + this.state);
      }
      return classes;
    },
  },
  methods: {
  },
};
</script>
