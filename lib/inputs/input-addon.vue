<template lang="html">
<span class="input-group-text">
  <slot></slot>
</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'prepend',
    }
  },
};
</script>
