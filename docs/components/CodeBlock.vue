<template>
  <div class="card mb-1 card-example">
    <div class="card-block">
      <slot name="result">Result</slot>
    </div>
    <div class="code-block">
      <pre :class="'language-' + lang">
        <code ref="code" :class="'language-' + lang">
            <slot name="code">Code</slot>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>

import Prism from 'prismjs';

export default {
  props: {
    lang: {
      type: String,
      default: 'markup',
    },
  },

  name: 'CodeBlock',

  mounted() {
    const lang = Prism.languages[this.lang];
    const html = Prism.highlight(this.$slots.code[0].elm.textContent, lang);
    this.$refs.code.innerHTML = html;
  },

  data() {
    return {

    };
  },
};
</script>
