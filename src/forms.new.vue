<template>
  <form :method="method" :action="action" :target="target" @reset="onReset" @submit.prevent="$emit('submit', data)" role="form">
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
    value: null,
  },
  data() {
    return {
      inputs: {},
      data: this.value,
    };
  },
  created() {
    this.$on('input_added', (input) => {
      // if (this.getInput(input.name)) {
      //   return;
      // }

      // const data = {};
      // data[input.name] = input;
      const data = this.parseInput(input);
      this.inputs = Object.assign({}, this.inputs, data);
      input.setValue(this.getData(input.name));

      input.$on('input', (value) => {
        const inputData = this.parseData(input, value);
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
      return arInputs.filter(input => input.state === 'danger');
    },
    isValid() {
      return !this.errors.length;
    },
  },
  methods: {
    onSubmit() {

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
    parseInput(input) {
      const names = input.name.split('.').reverse();
      let data = null;
      names.forEach((name) => {
        const temp = JSON.parse(JSON.stringify(data));
        data = {};
        data[name] = temp;
      });
      let res = data;
      names.forEach((n, ind) => {
        if ((ind + 1) === names.length) {
          data[n] = input;
        } else {
          res = res[n];
        }
      });
      return data;
    },
    parseData(input, value) {
      const names = input.name.split('.').reverse();
      let data = value;
      names.forEach((name) => {
        const temp = JSON.parse(JSON.stringify(data));
        data = {};
        data[name] = temp;
      });
      return data;
    },
    getInput(name) {
      const names = name.split('.');
      let res = this.inputs;
      names.forEach((n) => {
        console.log(n, res, this.inputs);
        res = res[n];
      });
      return res;
    },
    getData(name) {
      console.log(name);
      const names = name.split('.');
      let res = this.data;
      console.log(res);
      names.forEach((n) => {
        res = res[n];
      });
      return res;
    },
  },
  watch: {
    data(data) {
      this.$emit('input', data);
    },
  },
};
</script>
