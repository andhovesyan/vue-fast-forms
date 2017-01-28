<template>
  <component
    :is="tag"
    :type="type"
    :class="classes"
    :disabled="disabled || (!isFormValid && vfType == 'submit')"
    :href="href"
    :to="to"
    @click="onClick"
    @dbClick="onDbClick"
    @focus="onFocus"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {

  props: {
    form: null,
    text: {
      type: String,
    },

    vfColor: {
      type: String,
      default: 'primary',
    },
    vfSize: {
      type: String,
    },
    vfType: {
      type: String,
      default: 'button',
    },
    outline: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },

    href: {
      type: String,
    },
    to: null,
  },

  computed: {
    classes() {
      let classes = ['btn'];
      if (this.block) {
        classes.push('btn-block');
      }
      if (this.disabled) {
        classes.push('disabled');
      }
      if (this.active) {
        classes.push('active');
      }
      if (this.vfSize) {
        classes.push('btn-' + this.vfSize);
      }
      if (this.vfColor) {
        classes.push('btn-' + (this.outline ? 'outline-' : '') + this.vfColor);
      }
      if (this.text) {
        classes.push('text-' + this.text);
      }
      return classes;
    },
    isFormValid() {
      if (!this.form) {
        return true;
      }
      return this.form.isValid;
    },
    tag() {
      let tag = 'button';
      if (this.href) {
        tag = 'a';
      }
      if (this.to) {
        tag = 'router-link';
      }
      return tag;
    },
    type() {
      if (this.tag !== 'button') {
        return null;
      }
      return this.vfType;
    },
    vfHref() {
      if (this.tag === 'button') {
        return null;
      } else if (this.tag === 'a') {
        return this.href;
      }
      return "javascript:;";
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    onDbClick() {
      this.$emit('dbclick');
    },
    onFocus() {
      this.$emit('focus');
    },
  },
};
</script>
