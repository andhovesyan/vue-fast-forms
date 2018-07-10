<template>
  <section class="doc-setion mb-2">
    <h2 class="card-title mb-3 mt-5">
      {{title}}
    </h2>
    <hr>
    <slot></slot>
  </section>
</template>

<script>
export default {

  props: {
    title: String,
    default: '',
  },

  name: 'Section',

  data() {
    return {
    };
  },
};
</script>
