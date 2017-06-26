<template>
<div>
  <h1 class="mb-5">Inputs</h1>
  <doc-section title="Form groups and basic inputs">
    <code-block>
      <div slot="result">
        <vf-group>
          <label for="textField">Text field:</label>
          {{text}}
          <vf-input
            id="textField"
            v-model="text"
            name="text_field"
            type="text"
            placeholder="text"
          />
          <small class="form-text text-muted">
            This field can contain any string value.
          </small>
        </vf-group>
        <vf-group>
          <label for="numberField">Number field:</label>
          <vf-input
            id="numberField"
            v-model="number"
            name="number_field"
            type="number"
            placeholder="number"
          />
          <small class="form-text text-muted">
            This field must contain only numeric value.
          </small>
        </vf-group>
      </div>
<div slot="code">&lt;vf-group&gt;
  &lt;label for="textField"&gt;Text field:&lt;/label&gt;
  &lt;vf-input
    id="textField"
    v-model="text"
    type="text"
    placeholder="text"
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;label for="numberField"&gt;Number field:&lt;/label&gt;
  &lt;vf-input
    id="numberField"
    v-model="number"
    type="number"
    placeholder="number"
  /&gt;
&lt;/vf-group&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Input groups">
    <code-block>
      <div slot="result">
        <vf-group>
          <label for="textField">Username:</label>
          <vf-input id="textField" v-model="text2" type="text" name="username" placeholder="username">
            <vf-addon slot="after">@</vf-addon>
            <vf-addon slot="after">example.com</vf-addon>
          </vf-input>
        </vf-group>
        <vf-group>
          <label for="numberField">Price:</label>
          <vf-input id="numberField" v-model="number2" type="number" name="price" placeholder="price">
            <vf-addon slot="before">$</vf-addon>
            <vf-addon slot="after">.00</vf-addon>
          </vf-input>
        </vf-group>
      </div>
<div slot="code">&lt;vf-group&gt;
  &lt;label for="textField"&gt;Username:&lt;/label&gt;
  &lt;vf-input id="textField" v-model="text2" type="text" placeholder="username"&gt;
    &lt;vf-addon slot="after"&gt;@&lt;/vf-addon&gt;
    &lt;vf-addon slot="after"&gt;example.com&lt;/vf-addon&gt;
  &lt;/vf-input&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;label for="numberField"&gt;Price:&lt;/label&gt;
  &lt;vf-input id="numberField" v-model="number2" type="number" placeholder="price"&gt;
    &lt;vf-addon slot="before"&gt;$&lt;/vf-addon&gt;
    &lt;vf-addon slot="after"&gt;.00&lt;/vf-addon&gt;
  &lt;/vf-input&gt;
&lt;/vf-group&gt;</div>
    </code-block>
  </doc-section>
</div>
</template>

<script>
export default {

  name: 'Inputs',

  data() {
    return {
      text: null,
      number: null,
      text2: null,
      number2: null,
    };
  },
};
</script>
