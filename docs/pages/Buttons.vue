<template>
<div>
  <h1 class="mb-3">Buttons</h1>
  <p>Properties: <code>text</code>, <code>vf-color</code>, <code>vf-size</code>, <code>vf-type</code>, <code>disabled</code>, <code>active</code>, <code>block</code>, <code>href</code>, <code>to</code></p>
  <p>Events: <code>@click</code>, <code>@dbclick</code>, <code>@focus</code>, <code>@blur</code></p>
  <doc-section title="Button styling">
    <p>Use <code>vf-color</code> and <code>outline</code> attributes to define button color style:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary">Primary</vf-btn>
        <vf-btn vf-color="secondary">Secondary</vf-btn>
        <vf-btn vf-color="success">Success</vf-btn>
        <vf-btn vf-color="info">Info</vf-btn>
        <vf-btn vf-color="warning">Warning</vf-btn>
        <vf-btn vf-color="danger">Danger</vf-btn>
        <vf-btn vf-color="link">Link</vf-btn>
      </div>
<span slot="code">&lt;vf-btn vf-color="primary"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary"&gt;Secondary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="success"&gt;Success&lt;/vf-btn&gt;
&lt;vf-btn vf-color="info"&gt;Info&lt;/vf-btn&gt;
&lt;vf-btn vf-color="warning"&gt;Warning&lt;/vf-btn&gt;
&lt;vf-btn vf-color="danger"&gt;Danger&lt;/vf-btn&gt;
&lt;vf-btn vf-color="link"&gt;Link&lt;/vf-btn&gt;</span>
    </code-block>
        <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" outline>Primary</vf-btn>
        <vf-btn vf-color="secondary" outline>Secondary</vf-btn>
        <vf-btn vf-color="success" outline>Success</vf-btn>
        <vf-btn vf-color="info" outline>Info</vf-btn>
        <vf-btn vf-color="warning" outline>Warning</vf-btn>
        <vf-btn vf-color="danger" outline>Danger</vf-btn>
      </div>
<span slot="code">&lt;vf-btn vf-color="primary" outline&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" outline&gt;Secondary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="success" outline&gt;Success&lt;/vf-btn&gt;
&lt;vf-btn vf-color="info" outline&gt;Info&lt;/vf-btn&gt;
&lt;vf-btn vf-color="warning" outline&gt;Warning&lt;/vf-btn&gt;
&lt;vf-btn vf-color="danger" outline&gt;Danger&lt;/vf-btn&gt;</span>
    </code-block>
  </doc-section>
  <doc-section title="Button sizing">
    <p>Use <code>vf-size</code> (<b>sm</b> or <b>lg</b>) attribute to define button size:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" vf-size="sm">Primary</vf-btn>
        <vf-btn vf-color="secondary" vf-size="sm">Primary</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" vf-size="sm"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" vf-size="sm"&gt;Secondary&lt;/vf-btn&gt;
</div>
    </code-block>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" vf-size="lg">Primary</vf-btn>
        <vf-btn vf-color="secondary" vf-size="lg">Primary</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" vf-size="lg"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" vf-size="lg"&gt;Secondary&lt;/vf-btn&gt;
</div>
    </code-block>
    <p>Use <code>block</code> attribute to get a block-sized button:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" vf-size="lg" block>Block Level Button</vf-btn>
        <vf-btn vf-color="secondary" vf-size="lg" block>Block Level Button</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" vf-size="lg" block&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" vf-size="lg" block&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Button states">
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" active>Active Primary</vf-btn>
        <vf-btn vf-color="secondary" active>Active Secondary</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" active&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" active&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" disabled>Disabled Primary</vf-btn>
        <vf-btn vf-color="secondary" disabled>Disabled Secondary</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" disabled&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" disabled&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Button tags" id="buttonTags">
    <p>By default <code>vf-btn</code> will render <code>button</code> tag.</p>
    <p>Define a <code>href</code> attribute, to render <code>&lt;a&gt;</code> tag instead:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" href="#buttonTags">Primary</vf-btn>
        <vf-btn vf-color="secondary" href="#buttonTags">Secondary</vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" href="#"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" href="#"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <p>Define a <code>:to</code> attribute, to get a <code>&lt;router-link&gt;</code> component:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-color="primary" :to="{name: 'buttons.test1'}">
          Primary
        </vf-btn>
        <vf-btn vf-color="secondary" :to="{name: 'buttons.test2'}">
          Secondary
        </vf-btn>
      </div>
<div slot="code">&lt;vf-btn vf-color="primary" :to="{name: 'buttons.test1'}"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-color="secondary" :to="{name: 'buttons.test2'}"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
</div>
</template>

<script>
export default {

  name: 'Buttons',

  data() {
    return {

    };
  },
};
</script>
