<template>
<component :is="parent" :class="{'input-group': isGroup, 'input-autocomplete': shouldAutocomplete}">
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
    :autocomplete="shouldAutocomplete"
    :required="required"
    :readonly="readonly"
    :disabled="disabled"
    @input="onInput"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @reset="onReset"
    ref="input"
  />
  <ul class="input-autosuggest" :style="suggestsStyle" v-if="autosuggest" v-show="showSuggests">
    <li v-for="suggest in suggests" @click="_onSuggestSelect(suggest)">
      {{suggest}}
    </li>
  </ul>
  <slot name="after"></slot>
</component>
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
      type: Boolean,
      default: true,
    },
    autosuggest: {
      type: Function,
    },
    onSuggestSelect: {
      type: Function,
    },
    formatter: {
      type: Function,
    },
    beforeInput: {
      type: Function,
    },
  },
  data() {
    return {
      isValid: true,
      touched: (this.value) ? !!this.value.length : false,
      realVal: this.value,
      suggestsStyle: {},
      showSuggests: true,
      suggests: [],
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
    this.suggestsStyle.height = this.$el.offsetHeight - 1;
  },
  computed: {
    isGroup() {
      return this.$slots.before || this.$slots.after;
    },
    parent() {
      return (this.isGroup) ? 'div' : 'span';
    },
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
    shouldAutocomplete() {
      if (typeof this.autosuggest !== 'undefined') {
        return 'off';
      }
      return this.autocomplete ? 'on' : 'off';
    },
  },
  methods: {
    setValue(value) {
      console.log("VFF SET VAL: ", value);
      this.realVal = value;
      this.$refs.input.value = value;
      console.log("VFF SET VAL 2: ", this.realVal);
      this.isValid = this.$refs.input.validity.valid;
    },
    onInput(event) {
      if (this.readonly) {
        return;
      }
      let value = event.target.value;
      if (this.formatter) {
        value = this.formatter(value);
        console.log("VFF: ", value);
      }
      if (this.autosuggest) {
        this.autosuggest(value).then((suggests) => {
          this.showSuggests = true;
          this.suggests = suggests;
        });
      }
      if (this.type === 'number') {
        value = Number(value);
      }
      this.setValue(value);

      this.touched = true;
      this.$emit('input', value, event);
    },
    onChange(event) {
      this.onInput(event);
      this.$emit('change', this.realVal, event);
    },
    _onSuggestSelect(value) {
      this.showSuggests = false;
      if (this.onSuggestSelect) {
        this.onSuggestSelect(value);
      } else {
        this.setValue(value);
        this.$emit('input', value);
      }
      // if (Array.isArray(this.realVal)) {
      //   this.realVal.push(value);
      // } else {
      // }
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
    value(value) {
      console.log("VFF WATCH: ", value);
      this.realVal = value;
      this.$emit('input', value);
    },
  },
};
</script>
<style lang="scss">
.input-autocomplete {
  position: relative;
}
.input-autosuggest {
  list-style: none;
  position: absolute;
  padding: 0;
  width: auto;
  z-index: 100;
  li {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-top: 0;
    line-height: 2.25rem;
    padding: 0 1rem;
    cursor: pointer;
    min-width: 10rem;
    width: auto;
    &:hover {
      background: #f5f5f5;
    }
  }
}
</style>
