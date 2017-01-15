<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
export default {

  props: {
    size: {
      type: String,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
  },

  name: 'input-help',

  computed: {
    tag() {
      let tag = 'div';
      if (this.size === 'sm') {
        tag = 'small';
      }
      if (this.size === 'lg') {
        tag = 'large';
      }
      return tag;
    },
    className() {
      const classNames = [];
      if (this.static) {
        classNames.push('form-text');
        if (this.muted) {
          classNames.push('text-muted');
        }
      } else {
        classNames.push('form-control-feedback');
      }
    },
  },

  data () {
    return {

    };
  }
};
</script>
