<template>
  <form
    :method="method"
    :action="action"
    :target="target"
    @reset="onReset"
    @submit="onSubmit"
    role="form"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    method: {
      type: String,
      default: 'POST',
    },
    action: {
      type: String,
      default: '',
    },
    toBlank: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
  data() {
    return {
      inputs: {},
      data: this.value || {},
    };
  },
  created() {
    this.$on('input_added', (input) => {
      if (this.inputs[input.name]) {
        return;
      }
      const data = {};
      data[input.name] = input;
      this.inputs = Object.assign({}, this.inputs, data);
      input.setValue(this.data[input.name]);
      this.inputs[input.name].$on('input', (value) => {
        const inputData = {};
        inputData[input.name] = value;
        this.data = Object.assign({}, this.data, inputData);
      });
    });
    this.$on('changed', (input) => {
      if (!this.inputs[input.name]) {
        return;
      }
      const data = {};
      data[input.name] = input;
      this.inputs = Object.assign({}, this.inputs, data);
    });
    this.$on('input_removed', (input) => {
      if (!this.inputs[input.name]) {
        return;
      }
      delete this.data[input.name];
      delete this.inputs[input.name];
    });
  },
  computed: {
    target() {
      return (this.toBlank) ? '_black' : '_self';
    },
    errors() {
      const arInputs = [];
      for (const ind in this.inputs) {
        if (this.inputs.hasOwnProperty(ind)) {
          arInputs.push(this.inputs[ind]);
        }
      }
      return arInputs.filter((input) => input.state === 'danger');
    },
    isValid() {
      return !this.errors.length;
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('submit', this.data, e);
    },
    onReset(event) {
      for (const ind in this.inputs) {
        if (this.inputs.hasOwnProperty(ind)) {
          const input = this.inputs[ind];
          input.$emit('input', null, event);
        }
      }
      this.$emit('reset', event);
    },
  },
  watch: {
    data(data) {
      this.$emit('input', data);
    },
    value(value) {
      this.data = value;
    },
  },
};
</script>
