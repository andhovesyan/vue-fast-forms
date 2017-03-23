<template>
</template>

<script>
export default {

  name: 'basic',

  props: {
    id: String,
    name: {
      type: String,
      required: true,
    },
    value: {
      type: null,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      form: null,
      realVal: this.value,
    };
  },

  methods: {
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
    onInput(event) {
      this.$emit('input', event.target.value, event);
    },
    onChange(event) {
      this.$emit('change', event.target.value, event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onReset(event) {
      this.$emit('reset', event);
    },
  },
  beforeDestroy() {
    if (this.form) {
      this.form.$emit('input_removed', this);
    }
  },
};
</script>
