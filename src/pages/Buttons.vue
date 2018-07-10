<template>
<div>
  <h1 class="mb-3">Buttons</h1>
  <p>
    Properties:
    <code>text</code>,
    <code>vf-style</code>,
    <code>vf-size</code>,
    <code>vf-type</code>,
    <code>disabled</code>,
    <code>active</code>,
    <code>block</code>,
    <code>href</code>,
    <code>to</code>
  </p>
  <p>
    Events:
    <code>@click</code>,
    <code>@dbclick</code>,
    <code>@focus</code>,
    <code>@blur</code>
  </p>
  <doc-section title="Button styling">
    <p>
      Use <code>vf-style</code> and <code>outline</code> attributes to define button color style:
    </p>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary">Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary">Secondary</vf-btn>
        <vf-btn class="mx-2" vf-style="success">Success</vf-btn>
        <vf-btn class="mx-2" vf-style="info">Info</vf-btn>
        <vf-btn class="mx-2" vf-style="warning">Warning</vf-btn>
        <vf-btn class="mx-2" vf-style="danger">Danger</vf-btn>
        <vf-btn class="mx-2" vf-style="link">Link</vf-btn>
      </div>
<span slot="code">
&lt;vf-btn vf-style="primary"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary"&gt;Secondary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="success"&gt;Success&lt;/vf-btn&gt;
&lt;vf-btn vf-style="info"&gt;Info&lt;/vf-btn&gt;
&lt;vf-btn vf-style="warning"&gt;Warning&lt;/vf-btn&gt;
&lt;vf-btn vf-style="danger"&gt;Danger&lt;/vf-btn&gt;
&lt;vf-btn vf-style="link"&gt;Link&lt;/vf-btn&gt;</span>
    </code-block>
        <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" outline>Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" outline>Secondary</vf-btn>
        <vf-btn class="mx-2" vf-style="success" outline>Success</vf-btn>
        <vf-btn class="mx-2" vf-style="info" outline>Info</vf-btn>
        <vf-btn class="mx-2" vf-style="warning" outline>Warning</vf-btn>
        <vf-btn class="mx-2" vf-style="danger" outline>Danger</vf-btn>
      </div>
<span slot="code">
&lt;vf-btn vf-style="primary" outline&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" outline&gt;Secondary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="success" outline&gt;Success&lt;/vf-btn&gt;
&lt;vf-btn vf-style="info" outline&gt;Info&lt;/vf-btn&gt;
&lt;vf-btn vf-style="warning" outline&gt;Warning&lt;/vf-btn&gt;
&lt;vf-btn vf-style="danger" outline&gt;Danger&lt;/vf-btn&gt;</span>
    </code-block>
  </doc-section>
  <doc-section title="Button sizing">
    <p>Use <code>vf-size</code> (<b>sm</b> or <b>lg</b>) attribute to define button size:</p>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2"vf-style="primary" vf-size="sm">Primary</vf-btn>
        <vf-btn class="mx-2"vf-style="secondary" vf-size="sm">Primary</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" vf-size="sm"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" vf-size="sm"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" vf-size="lg">Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" vf-size="lg">Secondary</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" vf-size="lg"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" vf-size="lg"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <p>Use <code>block</code> attribute to get a block-sized button:</p>
    <code-block>
      <div slot="result">
        <vf-btn vf-style="primary" vf-size="lg" block>Block Level Button</vf-btn>
        <vf-btn vf-style="secondary" vf-size="lg" block>Block Level Button</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" vf-size="lg" block&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" vf-size="lg" block&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Button states">
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" active>Active Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" active>Active Secondary</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" active&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" active&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" disabled>Disabled Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" disabled>Disabled Secondary</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" disabled&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" disabled&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Button tags" id="buttonTags">
    <p>By default <code>vf-btn</code> will render <code>button</code> tag.</p>
    <p>Define a <code>href</code> attribute, to render <code>&lt;a&gt;</code> tag instead:</p>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" href="#buttonTags">Primary</vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" href="#buttonTags">Secondary</vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" href="#"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" href="#"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
    <p>Define a <code>:to</code> attribute, to get a <code>&lt;router-link&gt;</code> component:</p>
    <code-block>
      <div slot="result">
        <vf-btn class="mx-2" vf-style="primary" :to="{name: 'buttons.test1'}">
          Primary
        </vf-btn>
        <vf-btn class="mx-2" vf-style="secondary" :to="{name: 'buttons.test2'}">
          Secondary
        </vf-btn>
      </div>
<div slot="code">
&lt;vf-btn vf-style="primary" :to="{name: 'buttons.test1'}"&gt;Primary&lt;/vf-btn&gt;
&lt;vf-btn vf-style="secondary" :to="{name: 'buttons.test2'}"&gt;Secondary&lt;/vf-btn&gt;</div>
    </code-block>
  </doc-section>
</div>
</template>

<script>
export default {
  name: 'Buttons',
};
</script>
