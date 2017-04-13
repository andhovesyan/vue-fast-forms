<template>
  <component :is="comp">
    <span class="input-group-addon" v-for="addon in $slots.before" slot="before">
      {{addon}}
    </span>
    <slot name="after" slot="after"></slot>
  </component>
</template>

<script>
import inputBasic from './inputs/input';
import checkbox from './inputs/checkbox';
import inputGroup from './inputs/input-group';

export default {

  components: {
    inputBasic,
    inputGroup,
    checkbox,
  },

  name: 'input',

  data() {
    return {

    };
  },

  computed: {
    comp() {
      let comp = 'inputBasic';
      if (this.$slots.before || this.$slots.after) {
        comp = 'inputGroup';
      }
      return comp;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
