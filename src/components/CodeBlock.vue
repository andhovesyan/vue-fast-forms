<template>
  <div class="card mb-1 card-example">
    <div class="card-block">
      <slot name="result">Result</slot>
    </div>
    <div class="code-block">
    <pre :class="'language-' + lang"><code ref="code" :class="'language-' + lang"><slot name="code">Code</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'markup',
    },
  },

  name: 'CodeBlock',

  mounted() {
    const html = window.Prism.highlight(this.$slots.code[0].elm.textContent, Prism.languages[this.lang]);
    this.$refs.code.innerHTML = html;
  },

  data () {
    return {

    };
  }
};
</script>
